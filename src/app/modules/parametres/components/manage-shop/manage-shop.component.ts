import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { CATEGORY, SHOP, SOCIAL, USER } from 'src/app/data/interfaces';
import { BoutiquesService } from 'src/app/modules/boutiques/services/boutiques.service';
import { SecurityService } from 'src/app/modules/security/services/security.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-manage-shop',
  templateUrl: './manage-shop.component.html',
  styleUrls: ['./manage-shop.component.scss']
})
export class ManageShopComponent implements OnInit {
  public urlRegex: RegExp = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/
  public shop:SHOP = {};
  public social!: SOCIAL;
  public category!: CATEGORY;
  public shopCatgories!: CATEGORY[];
  public isUpdating: boolean = false;
  public excludedNames: string[] = ['ma boutique'];
  public imageBaseUrl: string = `${environment.BACKEND_IMAGES_FOLDER}/shops/`
  
  public categoryControl = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(600)]);
  public descriptionControl = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(600)]);
  public corpNameControl = new FormControl('', [Validators.required, Validators.minLength(4)]);
  public shopEmailControl = new FormControl('', [Validators.required]);
  public phoneControl = new FormControl('', [Validators.required]);
  public addressControl = new FormControl('', [Validators.required]);
  public workingHoursControl = new FormControl('', [Validators.required]);
  public facebookControl = new FormControl('', [Validators.pattern(this.urlRegex)]);
  public instagramControl = new FormControl('', [Validators.pattern(this.urlRegex)]);
  public tiktokControl = new FormControl('', [Validators.pattern(this.urlRegex)]);
  public websiteControl = new FormControl('', [Validators.pattern(this.urlRegex)]);
  public corpNameUrl:string = '';
  public user !: USER;
  public userPosition = {
    long: '0',
    lat: '0'
  }
  public url: any;
  public isGettingPosition: boolean = false;
  constructor(
    private boutiquesServices: BoutiquesService,
    private toastService: ToastService,
    private securityService: SecurityService,
    private categoriesService: CategoriesService,
    private sanitizer: DomSanitizer
  ){}
  ngOnInit(): void {
    this.securityService.getAuthenticatedUser().then((res)=>{
      this.user = res;
      if(res.userRole==='ROLE_VENDEUR' && res.userEmail) {
        this.boutiquesServices.getShopBySeller(res.userEmail)
        .then((rs)=>{
          this.shop = rs;
          if(this.shop.shopLogoImage)
            this.displayLogo(`${this.imageBaseUrl}/${this.shop.shopLogoImage}`);
          document.title = `Ma boutique - ${this.shop.shopLibelle}`;
          // HYDRATE CHAMPS CATEGORY
          if (rs.Category && rs.Category.categoryLibelle) {
            this.category = rs.Category
            this.categoryControl.setValue(rs.Category.categoryLibelle);
          }
          // HYDRATE CHAMPS SOCIALS
          if(rs.Social) {
            this.social = rs.Social;
            if(this.social.facebookLink) this.facebookControl.setValue(this.social.facebookLink);
            if(this.social.instagramLink) this.instagramControl.setValue(this.social.instagramLink);
            if(this.social.tiktokLink) this.tiktokControl.setValue(this.social.tiktokLink);
            if(this.social.websiteLink) this.websiteControl.setValue(this.social.websiteLink);
            if(this.social.shopEmailAddress) this.shopEmailControl.setValue(this.social.shopEmailAddress); 
            if(this.social.shopPhoneNumber) this.phoneControl.setValue(this.social.shopPhoneNumber);
          };
          // HYDRATE CHAMPS BOUTIQUE
          if(this.shop.shopLibelle) this.corpNameControl.setValue(this.shop.shopLibelle);
          if(this.shop.shopAddress) this.addressControl.setValue(this.shop.shopAddress);
          if(this.shop.shopDescription) this.descriptionControl.setValue(this.shop.shopDescription);
          if(this.shop.shopWorkingHours) this.workingHoursControl.setValue(this.shop.shopWorkingHours);
          // HYDRATE LOCATION
          if(this.shop.shopLatitude && this.shop.shopLongitude) {
            this.userPosition.lat =  this.shop.shopLatitude
            this.userPosition.long =  this.shop.shopLongitude;
            this.url = this.getIframeUrl();
          }

        }).catch((err)=>{

        })
      }
    })
    this.categoriesService.getCategoriesShops().then((res)=>{
      this.shopCatgories = res
    }).catch((err)=>{
      this.toastService.show({body: 'Une erreur s\'est produite lors de la récupération des catégories ! Veuillez réessayer.'})
    })
    this.corpNameControl.valueChanges.subscribe((newValue) => {
      if(newValue){
        newValue = newValue.replaceAll(' ','-').normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        this.corpNameUrl = newValue
      }else{
        this.corpNameUrl = ''
      }
    });
  }
  saveShopChanges(){
    this.isUpdating = true;
    // UPDATE SHOP OBJECT
    if(this.corpNameControl.value) {
      if(this.excludedNames.includes(this.corpNameControl.value.toLowerCase())) {
        this.isUpdating = false;
        return this.toastService.show({body: 'Veuillez revoir le nom de votre boutique !'})
      }
      this.shop.shopLibelle = this.corpNameControl.value
      this.shop.shopSlug = this.corpNameControl.value.replaceAll(' ','-').normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }
    if(this.addressControl.value) this.shop.shopAddress = this.addressControl.value;
    if(this.descriptionControl.value) this.shop.shopDescription = this.descriptionControl.value;
    if(this.userPosition.lat !=='0' ) this.shop.shopLatitude = this.userPosition.lat.toString();
    if(this.userPosition.long !=='0' ) this.shop.shopLongitude = this.userPosition.long.toString();
    if(this.workingHoursControl.value) this.shop.shopWorkingHours = this.workingHoursControl.value;
    // UPDATE SOCIAL OBJECT
    if(this.facebookControl.value) this.social.facebookLink = this.facebookControl.value;
    if(this.instagramControl.value) this.social.instagramLink = this.instagramControl.value;
    if(this.tiktokControl.value) this.social.tiktokLink = this.tiktokControl.value;
    if(this.websiteControl.value) this.social.websiteLink = this.websiteControl.value;
    if(this.phoneControl.value) this.social.shopPhoneNumber = this.phoneControl.value;
    if(this.shopEmailControl.value) this.social.shopEmailAddress = this.shopEmailControl.value;
    // REQUEST
    this.boutiquesServices.updateShop(this.shop, this.social, this.categoryControl.value ? this.categoryControl.value : '')
    .then((res)=>{
      this.isUpdating = false;
      if(res) {
        this.toastService.show({body:'Vos modifications ont été enregistrés !', isSuccess:true})
      } else {
        this.toastService.show({body:'Une erreur s\'est produite. Réessayez plus tard !', isSuccess: false})
      }
    }).catch((err)=>{
      this.isUpdating = false;
      this.toastService.show({body:'Une erreur s\'est produite. Réessayez plus tard !', isSuccess: false,})
    })
  }
  removeLogo(){
    
  }
  getIframeUrl(): SafeUrl {
    const urlToSend = `//maps.google.com/maps?q=${this.userPosition.lat},${this.userPosition.long}&z=15&output=embed`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(urlToSend);
  }
  removeUserPosition(){
    this.shop.shopLatitude = '';
    this.shop.shopLongitude = '';
    this.userPosition = {
      lat: '0',
      long: '0',
    }
  }
  getUserPosition(){
    this.isGettingPosition = true;
    // Check if geolocation is supported by the browser
    if ("geolocation" in navigator) {
      // Prompt user for permission to access their location
      navigator.geolocation.getCurrentPosition(
        // Success callback function
        (position) => {
          // Get the user's latitude and longitude coordinates
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          this.userPosition.lat = lat.toString();
          this.userPosition.long = lng.toString();
          this.url = this.getIframeUrl();
          // Do something with the location data, e.g. display on a map
          this.toastService.clear();
          this.toastService.show({body:'Hooray 🎉 Votre position a été récupérée.', isSuccess:true})
          this.isGettingPosition = false;
        },
        // Error callback function
        (error) => {
          // Handle errors, e.g. user denied location sharing permissions
          this.toastService.show({body: 'Impossible de retrouver votre position ! Veuillez autoriser la demande.'})
          this.isGettingPosition = false;
        }
      );
    } else {
      this.toastService.show({body: 'Impossible de retrouver votre position ! Votre navigateur ne dispose pas de cette fonctionnalité.'})
      this.isGettingPosition = false;
    }
  }
  generatePositionUrl():string {
    return `https://maps.google.com/maps?q=' + ${this.userPosition.lat} + ',' + ${this.userPosition.long} + '&t=&z=15&ie=UTF8&iwloc=&output=embed`
  }
  displayAndUploadLogoFile(e: any) {
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        // if (display) display.src = event.target.result;
        this.displayLogo(event.target.result);
      };
      // UPLOAD SINGLE FILE
      this.uploadFile(e.target.files[0]);
    }
  }
  displayLogo(path:string){
    let display: any = document.querySelector(`#displayLogo`);
    if(display) display.src = path
  }
  uploadFile(file:any) {
      const API_ENDPOINT = `${environment.BACKEND_API_URL}/image/upload?shop=${this.shop.id}`;
      const request = new XMLHttpRequest();
      const formData = new FormData();
      request.open("POST", API_ENDPOINT, true);
      request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
          console.log(request.responseText);
        }
      };
      formData.append("folder", `shops`)
      formData.append("images", file);
      request.send(formData);
  }
}

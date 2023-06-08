import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { FilePond, FilePondOptions } from 'filepond';
import { ToastService } from 'src/app/core/services/toast.service';
import { CATEGORY, SHOP, SOCIAL, USER } from 'src/app/data/interfaces';
import { BoutiquesService } from 'src/app/modules/boutiques/services/boutiques.service';
import { SecurityService } from 'src/app/modules/security/services/security.service';

@Component({
  selector: 'app-manage-shop',
  templateUrl: './manage-shop.component.html',
  styleUrls: ['./manage-shop.component.scss']
})
export class ManageShopComponent implements OnInit {
  public urlRegex: string = '/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/'
  @ViewChild('myPond')
  public myPond!: FilePond;
  public pondFiles: FilePondOptions["files"] = [ ]
  public pondOptions: FilePondOptions = {
    allowMultiple: false,
    labelIdle: 'Cliquez ou déposez votre logo...',
    acceptedFileTypes: ['image/*'],
    imagePreviewMaxFileSize: '5MB',
    credits: false,
    imagePreviewHeight: 170,
    imageCropAspectRatio: '1:1',
    imageResizeTargetWidth: 200,
    imageResizeTargetHeight: 200,
    stylePanelLayout: 'compact circle',
    styleButtonRemoveItemPosition: 'center bottom',
    
  }
  public shop!:SHOP;
  public social!: SOCIAL;
  public shopCatgories!: CATEGORY[];
  public descriptionControl = new FormControl('', [Validators.required, Validators.minLength(4)]);
  public corpNameControl = new FormControl('', [Validators.required, Validators.minLength(4)]);
  public userEmailControl = new FormControl('', [Validators.required]);
  public workingHoursControl = new FormControl('', [Validators.required]);
  public facebookControl = new FormControl('', [Validators.pattern(this.urlRegex)]);
  public instagramControl = new FormControl('', [Validators.pattern(this.urlRegex)]);
  public tiktokControl = new FormControl('', [Validators.pattern(this.urlRegex)]);
  public websiteControl = new FormControl('', [Validators.pattern(this.urlRegex)]);
  public corpNameUrl:string = '';
  public user !: USER;
  public userPosition = {
    long: 0,
    lat: 0
  }
  public url: any;
  public isGettingPosition: boolean = false;
  constructor(
    private boutiquesServices: BoutiquesService,
    private toastService: ToastService,
    private securityService: SecurityService,
    private sanitizer: DomSanitizer
  ){}
  ngOnInit(): void {
    this.securityService.getAuthenticatedUser().then((res)=>{
      this.user = res;
      if(res.userRole==='ROLE_VENDEUR' && res.userEmail) {
        this.boutiquesServices.getShopBySeller(res.userEmail)
        .then((rs)=>{
          this.shop = rs;
          if(rs.Social) {
            this.social = rs.Social
            if(this.social.facebookLink) this.facebookControl.setValue(this.social.facebookLink)
            if(this.social.instagramLink) this.instagramControl.setValue(this.social.instagramLink)
            if(this.social.tiktokLink) this.tiktokControl.setValue(this.social.tiktokLink)
            if(this.social.websiteLink) this.websiteControl.setValue(this.social.websiteLink)
            
          };
          // HYDRATE CHAMPS
          if(this.shop.shopLibelle) this.corpNameControl.setValue(this.shop.shopLibelle)
          if(this.shop.shopDescription) this.descriptionControl.setValue(this.shop.shopDescription)
          if(this.shop.shopWorkingHours) this.workingHoursControl.setValue(this.shop.shopWorkingHours)
          // if(this.shop.website) this.workingHoursControl.setValue(this.shop.shopWorkingHours)
          if(this.user.userEmail) this.userEmailControl.setValue(this.user.userEmail); 
        }).catch((err)=>{
          console.log(err);
        })
      }
    })
    this.boutiquesServices.getCategoriesShops().then((res)=>{
      this.shopCatgories = res
    }).catch((err)=>{
      this.toastService.show({header:'Message d\'erreur', body: 'Une erreur s\'est produite lors de la récupération des catégories ! Veuillez réessayer.'})
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
  saveShopChanges(){}
  pondHandleInit() {
    console.log('FilePond has initialised', this.myPond);
  }
  getIframeUrl(): SafeUrl {
    const urlToSend = `//maps.google.com/maps?q=${this.userPosition.lat},${this.userPosition.long}&z=15&output=embed`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(urlToSend);
  }
  pondHandleAddFile(event: any) {
    console.log('A file was added', event);
  }

  pondHandleRemoveFile(event: any) {
    console.log('A file was removed', event);
  }

  pondHandleActivateFile(event: any) {
    console.log('A file was activated', event)
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
          this.userPosition.lat = lat;
          this.userPosition.long = lng;
          this.url = this.getIframeUrl();
          // Do something with the location data, e.g. display on a map
          console.log(`Latitude: ${lat}, longitude: ${lng}`);
          this.toastService.clear();
          this.toastService.show({header:'Message d\'alerte', body:'Hooray 🎉 Votre position a été récupérer.', isSuccess:true})
          this.isGettingPosition = false;
        },
        // Error callback function
        (error) => {
          // Handle errors, e.g. user denied location sharing permissions
          this.toastService.show({header: 'Message d\'erreur', body: 'Impossible de retrouver votre position ! Réessayez plus tard.'})
        }
      );
    } else {
      this.toastService.show({header: 'Message d\'erreur', body: 'Impossible de retrouver votre position ! Votre navigateur ne dispose pas de cette fonctionnalité.'})
    }
  }
  generatePositionUrl():string {
    return `https://maps.google.com/maps?q=' + ${this.userPosition.lat} + ',' + ${this.userPosition.long} + '&t=&z=15&ie=UTF8&iwloc=&output=embed`
  }
}

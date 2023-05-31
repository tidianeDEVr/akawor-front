import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { FilePond, FilePondOptions } from 'filepond';
import { ToastService } from 'src/app/core/services/toast.service';
import { CATEGORY } from 'src/app/data/interfaces';
import { BoutiquesService } from 'src/app/modules/boutiques/services/boutiques.service';

@Component({
  selector: 'app-manage-shop',
  templateUrl: './manage-shop.component.html',
  styleUrls: ['./manage-shop.component.scss']
})
export class ManageShopComponent implements OnInit {
  pondFiles: FilePondOptions["files"] = [ ]
  @ViewChild('myPond')
  public myPond!: FilePond;
  pondOptions: FilePondOptions = {
    allowMultiple: false,
    labelIdle: 'Cliquez ou déposez votre logo...',
    acceptedFileTypes: ['image/*'],
    imagePreviewMaxFileSize: '10MB',
    credits: false,
    imagePreviewHeight: 170,
    imageCropAspectRatio: '1:1',
    imageResizeTargetWidth: 200,
    imageResizeTargetHeight: 200,
    stylePanelLayout: 'compact circle',
    styleButtonRemoveItemPosition: 'center bottom',
    
  }
  public descriptionControl = new FormControl('', [Validators.required, Validators.minLength(4)]);
  public corpNameControl = new FormControl('', [Validators.required, Validators.minLength(4)]);
  public corpNameUrl:string = ''
  public shopCatgories: CATEGORY[] = []
  public defaultShopDescription: string = `Bienvenue dans notre boutique en ligne ! Depuis notre création en [date], nous sommes une entreprise spécialisée dans [secteurs d'activités]. Avec une large gamme de [type de produit] de haute qualité, nous nous engageons à vous offrir aux parents des produits tendances, confortables et durables. En tant qu'entreprise éthique, nous privilégions les partenariats avec des fournisseurs locaux et favorisons des pratiques de fabrication respectueuses de l'environnement. Explorez notre sélection soigneusement conçue pour vous.`
  public userPosition = {
    long: 0,
    lat: 0
  }
  public isGettingPosition: boolean = false;
  constructor(
    private boutiquesServices: BoutiquesService,
    private toastService: ToastService,
    private sanitizer:DomSanitizer){}
  ngOnInit(): void {
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
    this.descriptionControl.setValue(this.defaultShopDescription);
  }
  saveShopChanges(){}
  pondHandleInit() {
    console.log('FilePond has initialised', this.myPond);
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

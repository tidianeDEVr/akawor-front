import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FilePond, FilePondOptions } from 'filepond';
import { ProduitsService } from '../../services/produits.service';
import { CATEGORY, PRODUCT } from 'src/app/data/interfaces';
import { environment } from 'src/environments/environment.development';
import { ToastService } from 'src/app/core/services/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit, OnDestroy {
  public stepPercent: number = 25;
  public titleControl = new FormControl('', [Validators.required, Validators.minLength(8)])
  public priceControl = new FormControl('', [Validators.required, Validators.min(2)])
  public descriptionControl = new FormControl('', [Validators.required])
  public mainCategoryControl = new FormControl('', [Validators.required]);
  public subCategoryControl = new FormControl('');
  public subCategories:CATEGORY[] = []
  public mainProductsCategories: CATEGORY[] = []
  public productObject: PRODUCT = {
    productTitle: 'my title',
    productPrice: 120000,
    productDescription: 'my description',
    productIsOutOfStock: false
  };

  @ViewChild('myPond')
  public myPond!: FilePond;
  constructor(
    private produitService: ProduitsService,
    private toastService: ToastService,
    private router: Router
    ){
    this.produitService.getCategoriesProducts().then((cats)=>{
      this.mainProductsCategories = cats;
    })
    // hydrate sub categories
    this.mainCategoryControl.valueChanges.subscribe((value:any) => { 
      // alert(value.id)
      this.produitService.getSubCategoriesProducts(value.id).then((res)=>{
        this.subCategories = res
      })
     })
  } 
  ngOnDestroy(): void {
    // save draft
    // this.saveProduct();
  }

  ngOnInit() { 
    
  }
  updateProductObject(){
    if(this.stepPercent ===25 ){
      if(this.titleControl.valid && this.titleControl.value) this.productObject.productTitle = this.titleControl.value;
      if(this.priceControl.valid && this.priceControl.value) this.productObject.productTitle = this.priceControl.value;
      if(this.descriptionControl.value && this.descriptionControl.value) this.productObject.productDescription = this.descriptionControl.value;
    }
  } 
  stepUp(){
    this.updateProductObject();
    if (this.stepPercent < 100) {
      this.stepPercent+= 25 
      this.changeProgressbarWidth();
    }
  }
  stepDown(){
    if (this.stepPercent > 25) {
      this.stepPercent-= 25
      this.changeProgressbarWidth();
    }
  }
  changeProgressbarWidth(){
    let bar:HTMLElement | null = document.querySelector('.progress-bar');
    if (bar) bar.style.width = `${this.stepPercent}%`;
  }
  pondOptions: FilePondOptions = {
    allowMultiple: true,
    // labels
    labelInvalidField: 'Le champ contient des fichiers invalides',
    labelIdle: 'Cliquez ou déposez vos images...',
    labelFileWaitingForSize: 'En attente de la taille',
    labelFileSizeNotAvailable: 'Taille non disponible',
    labelFileLoading: 'Chargement',
    labelFileLoadError: 'Erreur lors du chargement', 
    labelFileProcessing: 'Téléchargement',
    labelFileProcessingComplete: 'Téléchargement complet',
    labelFileProcessingAborted: 'Téléchargement annulé',
    labelTapToRetry: 'Cliquer pour réessayer',
    labelTapToCancel: 'Cliquer pour annuler',
    labelTapToUndo: 'Cliquer pour annuler',
    labelButtonRemoveItem: 'Supprimer',
    acceptedFileTypes: ['image/*'],
    imagePreviewMaxFileSize: '10MB',
    allowReorder: true,
    maxFiles: 10,
    name: 'images',
    credits: false,
    server: {
      url: environment.BACKEND_BASE_URL,
      process: {
          url: '/image/upload',
          method: 'POST',
          withCredentials: true,
          headers: {},
          timeout: 7000,
      },
    }
  }

  pondFiles: FilePondOptions["files"] = [ ]

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

  uploadFiles(){
    console.log(this.myPond.getFiles());
  }

  saveProduct(){
    this.produitService.createProduct(this.productObject)
    .then(()=>{
      this.toastService.show({
        header: 'Message d\'alerte', body:"OK", isSuccess:true,
      })
      this.router.navigate(['/produits/mes-annonces']);
    })
    .catch((err)=>{
      this.toastService.show({
        header: 'Message d\'erreur', body:"Error"
      })
    })
  }
}

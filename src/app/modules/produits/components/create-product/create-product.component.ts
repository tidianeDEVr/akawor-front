import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FilePond, FilePondOptions } from 'filepond';
import { ProduitsService } from '../../services/produits.service';
import { CATEGORY, PRODUCT } from 'src/app/data/interfaces';
import { environment } from 'src/environments/environment.development';
import { ToastService } from 'src/app/core/services/toast.service';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/modules/security/services/security.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent {
  public attributsProduct: any[] = [
    {
      key: '',
      value: ''
    },
  ];
  public stepPercent: number = 25;
  public isFileInputVisible: boolean = false;
  public titleControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
  ]);
  public priceControl = new FormControl('', [
    Validators.required,
    Validators.min(2),
  ]);
  public descriptionControl = new FormControl('', [
    Validators.required,
    Validators.minLength(10),
  ]);
  public mainCategoryControl = new FormControl<CATEGORY | null>(null, [
    Validators.required,
  ]);
  public subCategoryControl = new FormControl<CATEGORY | null>(null);
  public subCategories: CATEGORY[] = [];
  public mainProductsCategories: CATEGORY[] = [];
  public productObject: PRODUCT = {
    productTitle: '',
    productPrice: 0,
    productDescription: '',
    productIsOutOfStock: false,
  };
  public productOwnerId!: string;

  @ViewChild('myPond')
  public myPond!: FilePond;

  public pondOptions: FilePondOptions = {
    allowMultiple: true,
    allowRevert: false,
    allowReorder: true,
    allowFileMetadata: true,
    fileMetadataObject: null,
    maxParallelUploads: 10,
    labelInvalidField: 'Le champ contient des fichiers invalides',
    labelIdle: 'Cliquez ou déposez vos images...',
    labelFileWaitingForSize: 'En attente de la taille',
    labelFileSizeNotAvailable: 'Taille non disponible',
    labelFileLoading: 'Chargement',
    labelFileLoadError: 'Erreur lors du chargement',
    labelFileProcessingError: 'Erreur lors du téléchargement',
    labelFileProcessing: 'Téléchargement',
    labelFileProcessingComplete: 'Téléchargement complet',
    labelFileProcessingAborted: 'Téléchargement annulé',
    labelTapToRetry: 'Cliquer pour réessayer',
    labelTapToCancel: 'Cliquer pour annuler',
    labelTapToUndo: 'Cliquer pour annuler',
    labelButtonRemoveItem: 'Supprimer',
    acceptedFileTypes: ['image/*'],
    imagePreviewMaxFileSize: '10MB',
    maxFiles: 10,
    name: 'images',
    credits: false,
    server: {
      url: environment.BACKEND_API_URL,
      process: {
        url: '/image/upload',
        method: 'POST',
        withCredentials: true,
        timeout: 7000,
      },
      headers: {
        product : this.productObject.id ? this.productObject.id : '0',
      },
    },
  };

  public pondFiles: FilePondOptions['files'] = [];

  constructor(
    private produitService: ProduitsService,
    private toastService: ToastService,
    private securityService: SecurityService,
    private router: Router
  ) {
    this.produitService.getCategoriesProducts().then((cats) => {
      this.mainProductsCategories = cats;
    });
    this.mainCategoryControl.valueChanges.subscribe((value: any) => {
      this.produitService.getSubCategoriesProducts(value.id).then((res) => {
        this.subCategories = res;
      });
    });
    this.securityService.getAuthenticatedUser().then((user) => {
      if (user.id) this.productOwnerId = user.id;
    });
  }

  stepUp() {
    if (this.stepPercent === 25) this.saveProduct();
    if (this.stepPercent < 100) {
      this.stepPercent += 25;
      this.changeProgressbarWidth();
    }
  }

  stepDown() {
    if (this.stepPercent > 25) {
      this.stepPercent -= 25;
      this.changeProgressbarWidth();
    }
  }

  changeProgressbarWidth() {
    let bar: HTMLElement | null = document.querySelector('.progress-bar');
    if (bar) bar.style.width = `${this.stepPercent}%`;
  }

  saveProduct() {
    if (this.titleControl.value)
      this.productObject.productTitle = this.titleControl.value;
    if (this.descriptionControl.value)
      this.productObject.productDescription = this.descriptionControl.value;
    if (this.priceControl.value)
      this.productObject.productPrice = parseInt(this.priceControl.value);
    if (this.mainCategoryControl.value)
      this.productObject.productCategory = this.mainCategoryControl.value;
    if (this.subCategoryControl.value)
      this.productObject.productCategory = this.subCategoryControl.value;
    if(this.attributsProduct.length>0){
      if(this.attributsProduct[0].key!=='' && this.attributsProduct[0].value!==''){
        this.productObject.productFeatures =  JSON.stringify(this.attributsProduct);
      }
    }

    this.produitService
      .createProduct(this.productObject, this.productOwnerId)
      .then((prod) => {
        this.toastService.show({
          header: "Message d'alerte",
          body: "L'annonce est enregistré dans vos brouillons.",
          isSuccess: true,
        });
        if (prod) {
          this.productObject = prod;
          this.pondOptions['server'] = {
            url: environment.BACKEND_API_URL,
            process: {
              url: '/image/upload',
              method: 'POST',
              withCredentials: true,
              timeout: 7000,
            },
            headers: {
              product : this.productObject.id ? this.productObject.id : '0',
            },
          }
          this.isFileInputVisible = true;
          console.log(this.pondOptions['server']);
        }
      })
      .catch((err) => {
        this.toastService.show({
          header: "Message d'erreur",
          body: 'Error',
        });
      });
  }
  addNewAttribut(){
    this.attributsProduct.push({key: '', value: ''})
  }
  removeAttribut(id:number){
    alert(id)
    // if(this.attributsProduct[id]) this.attributsProduct = this.attributsProduct.splice(id, 1);
  }
  fileReordered(){
    alert('reordered');
  }
}

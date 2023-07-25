import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ProduitsService } from '../../services/produits.service';
import { CATEGORY, PRODUCT } from 'src/app/data/interfaces';
import { ToastService } from 'src/app/core/services/toast.service';
import { SecurityService } from 'src/app/modules/security/services/security.service';
import { environment } from 'src/environments/environment.development';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/core/services/categories.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent implements OnInit {
  public isOnDraftMode: boolean = false;
  public selectedVisibility: number = 1;
  public urlToSendImages:string = `${environment.BACKEND_API_URL}/image/upload`
  public urlToGetImages:string = `${environment.BACKEND_IMAGES_FOLDER}`
  public attributsProduct: any[] = [{ key: '', value: '' }];
  public stepPercent: number = 25;
  public titleControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
  ]);
  public priceControl = new FormControl('', [
    Validators.required,
    Validators.min(2),
  ]);
  public weightControl = new FormControl('', [
    Validators.required,
    Validators.min(0.1),
  ]);
  public stockControl = new FormControl('', [
    Validators.required,
    Validators.min(1),
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
  public otherImages: string[] = ['', '', '', '', '', ''];
  public productOwnerId!: string;

  constructor(
    private produitService: ProduitsService,
    private toastService: ToastService,
    private securityService: SecurityService,
    private categoriesService: CategoriesService,
    private route: ActivatedRoute
  ) {
    this.categoriesService.getCategoriesProducts().then((cats) => {
      this.mainProductsCategories = cats;
    });
    this.mainCategoryControl.valueChanges.subscribe((value: any) => {
      this.categoriesService.getSubCategoriesProducts(value.id).then((res) => {
        if(res)
        this.subCategories = res;
      });
    });
    this.securityService.getAuthenticatedUser().then((user) => {
      if (user.id) this.productOwnerId = user.id;
    });
  }
  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        if(params['edit_product']) {
          this.produitService.getProductBySlug(params['edit_product'])
          .then((res:any)=>{
            if(!res.message) {
              this.productObject = res;
              this.isOnDraftMode = true;
              this.hydrateFields(res);
              document.title = 'Modification d\'une annonce | Akawor'
            }
          })
        }
      }
    );
  }
  setVisibility(numb: number){
    this.selectedVisibility = numb;
  }
  hydrateImages(name:string){
    var image: any = document.querySelector('#displayPrincipal');
    if(image)
    image.src = `${this.urlToGetImages}/${name}`
  }
  hydrateFields(object: any){
    if(object.productTitle) this.titleControl.setValue(object.productTitle);
    if(object.productMainImage) this.hydrateImages(object.productMainImage);
    if(object.productPrice) this.priceControl.setValue(object.productPrice)
    if(object.productDescription) this.descriptionControl.setValue(object.productDescription);
    if(object.productFeatures) this.attributsProduct = JSON.parse(object.productFeatures);
    if(object.CategoryId) {
      this.categoriesService.getCategoryById(object.CategoryId)
      .then((res:any)=>{
        if(res.categoryParentId!=null) {
          this.subCategoryControl.setValue(res);
          this.categoriesService.getCategoryById(res.categoryParentId)
          .then(parent=>{
            this.mainCategoryControl.setValue(parent)
          })
        } else {
          this.mainCategoryControl.setValue(res)
        }
      })
    }
  }
  stepUp() {
    if (this.stepPercent === 25 && !this.isOnDraftMode) {
      this.updateProductObject();
      this.saveProduct();
    }
    // if (this.stepPercent === 50) this.saveImages();
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
  displayAndUploadMainFile(e: any) {
    let display: any = document.querySelector(`#displayPrincipal`);
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        if (display) display.src = event.target.result;
      };
      // UPLOAD SINGLE FILE
      this.uploadFile(e.target.files[0], true);
    }
  }
  displayAndUploadFile(e: any, index: number) {
    let display: any = document.querySelector(`#displayOther${index}`);
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        if (display) display.src = event.target.result;
      };
      // UPLOAD SINGLE FILE
      this.uploadFile(e.target.files[0], false);
    }
  }
  uploadFile(file:any, isMainImage:boolean) {
      const API_ENDPOINT = `${environment.BACKEND_API_URL}/image/upload?product=${this.productObject.id}&mainImage=${isMainImage}`;
      const request = new XMLHttpRequest();
      const formData = new FormData();
      request.open("POST", API_ENDPOINT, true);
      request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
          console.log(request.responseText);
        }
      };
      formData.append("folder", `products`)
      formData.append("images", file);
      request.send(formData);
  }
  updateProductObject() {
    if (this.titleControl.value)
      this.productObject.productTitle = this.titleControl.value;
    if (this.weightControl.value)
      this.productObject.productWeight = parseInt(this.weightControl.value);
    if (this.stockControl.value)
      this.productObject.productStock = parseInt(this.stockControl.value);
    if (this.descriptionControl.value)
      this.productObject.productDescription = this.descriptionControl.value;
    if (this.priceControl.value)
      this.productObject.productPrice = parseInt(this.priceControl.value);
    if (this.mainCategoryControl.value)
      this.productObject.productCategory = this.mainCategoryControl.value;
    if (this.subCategoryControl.value)
      this.productObject.productCategory = this.subCategoryControl.value;
    if (this.attributsProduct.length > 0) {
      if (
        this.attributsProduct[0].key !== '' &&
        this.attributsProduct[0].value !== ''
      ) {
        this.productObject.productFeatures = JSON.stringify(
          this.attributsProduct
        );
      }
    }
  }
  saveProduct(){
    this.produitService
      .createProduct(this.productObject, this.productOwnerId)
      .then((prod) => {
        this.toastService.show({
          body: "L'annonce est enregistré dans vos brouillons.",
          isSuccess: true,
        });
        if (prod) this.productObject = prod;
      })
      .catch((err) => {
        this.toastService.show({
          body: 'Une erreur s\'est produite lors de la création du produit ! Veuillez réessayer plus tard.',
        });
      });
  }
  addNewAttribut() {
    this.attributsProduct.push({ key: '', value: '' });
  }
  removeAttribut(index: number) {
    this.attributsProduct.splice(index, 1);
  }
}

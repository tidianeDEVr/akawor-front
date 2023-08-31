import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { CATEGORY, IMAGE, PRODUCT, SHOP } from 'src/app/data/interfaces';
import { BoutiquesService } from 'src/app/modules/boutiques/services/boutiques.service';
import { ProduitsService } from 'src/app/modules/produits/services/produits.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-dashboard-new-announcement',
  templateUrl: './dashboard-new-announcement.component.html',
  styleUrls: ['./dashboard-new-announcement.component.scss'],
})
export class DashboardNewAnnouncementComponent implements OnInit {
  public defaultPlaceholderPath: string = "assets/images/products/product-placeholder.png";
  public urlToGetImages:string = `${environment.BACKEND_IMAGES_FOLDER}`
  public isOnDraftMode: boolean = false;
  public selectedVisibility: number = 1;
  public attributsProduct: any[] = [{ key: '', value: '' }];
  public mainProductsCategories!: CATEGORY[];
  public subCategories!: CATEGORY[];
  public shops!: SHOP[];
  public images!: IMAGE[];
  public productObject: PRODUCT = {
    productTitle: '',
    productPrice: 0,
    productDescription: '',
    productIsOutOfStock: false,
  };
  public otherImages: string[] = ['', '', '', '', '', ''];
  public titleControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
  ]);
  public weightControl = new FormControl('', [
    Validators.required,
    Validators.min(0.1),
  ]);
  public stockControl = new FormControl('', [
    Validators.required,
    Validators.min(1),
  ]);
  public priceControl = new FormControl('', [
    Validators.required,
    Validators.min(2),
  ]);
  public pricePromoControl = new FormControl('', [
    Validators.min(2),
  ]);
  public descriptionControl = new FormControl('', [
    Validators.required,
    Validators.minLength(10),
  ]);
  public shopControl = new FormControl<SHOP | null>(null, [
    Validators.required,
  ]);
  public mainCategoryControl = new FormControl<CATEGORY | null>(null, [
    Validators.required,
  ]);
  public subCategoryControl = new FormControl<CATEGORY | null>(null);

  constructor(
    private boutiqueService: BoutiquesService,
    private produitService: ProduitsService,
    private categoriesService: CategoriesService,
    private toastService: ToastService,
    private route: ActivatedRoute
  ) {
    this.boutiqueService.getActiveShop().then((shops) => {
      this.shops = shops;
    });
    this.categoriesService.getCategoriesProducts().then((cats) => {
      this.mainProductsCategories = cats;
    });
    this.mainCategoryControl.valueChanges.subscribe((value: any) => {
      this.categoriesService.getSubCategoriesProducts(value.id).then((res) => {
        if (res) this.subCategories = res;
      });
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
            } else {
              console.log(res);
            }
            if(this.productObject.id)
            this.produitService
            .getImagesByProducts(this.productObject.id)
            .then((res) => {
              this.images = res;
              this.hydrateImages();
            });
          })
        }
      }
    );
  }
  removeAttribut(index: number) {
    this.attributsProduct.splice(index, 1);
  }
  addNewAttribut() {
    if (this.attributsProduct.length > 4) return;
    this.attributsProduct.push({ key: '', value: '' });
  }
  displayDeleteBtn(isMain:boolean, index:number): boolean {
    if(isMain) {
      var main: any = document.querySelector(`#displayPrincipalDashboard`);
      return main.src.includes('product-placeholder.png');
    } else {
      var second: any = document.querySelector(`#displayOtherDashboard${index}`);
      return second.src.includes('product-placeholder.png');
    }
  }
  publishProduct() {
    if (!this.shopControl.value?.UserId)
      return this.toastService.show({
        body: 'Choisissez une boutique pour cette annonce',
      });
    this.updateProductObject();

    this.produitService
      .createProduct(this.productObject, this.shopControl.value?.UserId)
      .then((res:any) => {
        if(res.productSlug) {
          this.toastService.show({
            body: "L'annonce a été créer avec succés !",
            isSuccess: true,
          });
          this.productObject = res;
          this.isOnDraftMode = true;
        } 
        if(res.error && res.error.message && res.error.message === 'already exist') {
          this.toastService.show({
            body: "Un produit porte déja ce titre !",
          });
        }
      })
      .catch((err) => {
        console.log(err);
        this.toastService.show({
          body: "Une erreur s'est produite lors de la création du produit ! Veuillez réessayer plus tard.",
        });
      });
  }
  displayAndUploadMainFile(e: any) {
    let display: any = document.querySelector(`#displayPrincipalDashboard`);
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
    let display: any = document.querySelector(`#displayOtherDashboard${index}`);
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
  updateProductObject() {
    if (this.titleControl.value)
      this.productObject.productTitle = this.titleControl.value;
    if (this.weightControl.value)
      this.productObject.productWeight = parseInt(this.weightControl.value);
    if (this.stockControl.value)
      this.productObject.productStock = parseInt(this.stockControl.value);
    if (this.descriptionControl.value)
      if (this.descriptionControl.value)
        this.productObject.productDescription = this.descriptionControl.value;
    if (this.priceControl.value)
      this.productObject.productPrice = parseInt(this.priceControl.value);
    if (this.pricePromoControl.value)
      this.productObject.productPricePromo = parseInt(this.pricePromoControl.value);
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
    this.productObject.productState = 'ONLINE';
  }
  uploadFile(file: any, isMainImage: boolean) {
    const API_ENDPOINT = `${environment.BACKEND_API_URL}/image/upload?product=${this.productObject.id}&mainImage=${isMainImage}`;
    const request = new XMLHttpRequest();
    const formData = new FormData();
    request.open('POST', API_ENDPOINT, true);
    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 200) {
        const message = JSON.parse(request.responseText);
          if(message.message === 'uploaded successfully') this.toastService.show({body:'Image enregistrée !', isSuccess: true})
      }
    };
    formData.append('folder', `products`);
    formData.append('images', file);
    request.send(formData);
  }
  setVisibility(numb: number) {
    this.selectedVisibility = numb;
  }

  hydrateFields(object: any){
    if(object.productTitle) this.titleControl.setValue(object.productTitle);
    if(object.productStock) this.stockControl.setValue(object.productStock);
    if(object.productWeight) this.weightControl.setValue(object.productWeight);
    if(object.productPrice) this.priceControl.setValue(object.productPrice);
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

  hydrateImages(){
    var imagePrincipal: any = document.querySelector('#displayPrincipalDashboard');
    if(imagePrincipal && this.productObject.productMainImage)
    imagePrincipal.src = `${this.urlToGetImages}/products/${this.productObject.productMainImage}`
    if(this.images)
    for (const [index, image] of this.images.entries()){
      // alert(index)
      // console.log(image)
      if(index>0)
      var img: any = document.querySelector(`#displayOtherDashboard${index-1}`);
      if(img) img.src = `${this.urlToGetImages}/products/${image.imageTitle}`;
    }
  }
}

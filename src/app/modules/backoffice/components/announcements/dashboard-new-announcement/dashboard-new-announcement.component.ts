import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { CATEGORY, PRODUCT, SHOP } from 'src/app/data/interfaces';
import { BoutiquesService } from 'src/app/modules/boutiques/services/boutiques.service';
import { ProduitsService } from 'src/app/modules/produits/services/produits.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-dashboard-new-announcement',
  templateUrl: './dashboard-new-announcement.component.html',
  styleUrls: ['./dashboard-new-announcement.component.scss'],
})
export class DashboardNewAnnouncementComponent {
  public isOnDraftMode: boolean = false;
  public isAlreadyPublished: boolean = false;
  public selectedVisibility: number = 1;
  public attributsProduct: any[] = [{ key: '', value: '' }];
  public mainProductsCategories!: CATEGORY[];
  public subCategories!: CATEGORY[];
  public shops!: SHOP[];
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
    private toastService: ToastService
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
  hydrateFields(product: PRODUCT) {}
  removeAttribut(index: number) {
    this.attributsProduct.splice(index, 1);
  }
  addNewAttribut() {
    if (this.attributsProduct.length > 4) return;
    this.attributsProduct.push({ key: '', value: '' });
  }
  publishProduct() {
    if (!this.shopControl.value?.UserId)
      return this.toastService.show({
        body: 'Choisissez une boutique pour cette annonce',
      });
    this.updateProductObject();

    this.produitService
      .createProduct(this.productObject, this.shopControl.value?.UserId)
      .then((prod) => {
        this.toastService.show({
          body: "L'annonce a été créer avec succés !",
          isSuccess: true,
        });
        if (prod) this.productObject = prod;
        this.isAlreadyPublished = true;
      })
      .catch((err) => {
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
        console.log(request.responseText);
      }
    };
    formData.append('folder', `products`);
    formData.append('images', file);
    request.send(formData);
  }
  setVisibility(numb: number) {
    this.selectedVisibility = numb;
  }
}

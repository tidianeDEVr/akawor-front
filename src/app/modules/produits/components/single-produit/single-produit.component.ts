import { Component, OnInit } from '@angular/core';
import { IMAGE, PRODUCT, SHOP } from 'src/app/data/interfaces';
import { ProduitsService } from '../../services/produits.service';
import { Router } from '@angular/router';
import { BoutiquesService } from 'src/app/modules/boutiques/services/boutiques.service';
import { environment } from 'src/environments/environment.development';
import { FormControl } from '@angular/forms';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-single-produit',
  templateUrl: './single-produit.component.html',
  styleUrls: ['./single-produit.component.scss']
})
export class SingleProduitComponent implements OnInit {
  public productFeatures: any[] = [];
  public product!: PRODUCT;
  public shop!: SHOP;
  public sameCategoryProducts!: PRODUCT[];
  public sameCategoryProductsConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "arrows": false,
    "dots": true,
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 3000,
    "speed": 300,
  };
  public sameShopProductsConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 2,
    "arrows": false,
    "dots": false,
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 3000,
    "speed": 300,
  };
  public images!: IMAGE[];
  public imageBaseUrl: string = `${environment.BACKEND_IMAGES_FOLDER}/`
  public valueControl = new FormControl(1);
  constructor(
    private produitService: ProduitsService,
    private boutiqueService: BoutiquesService,
    private toastService: ToastService,
    private router: Router
    ){ }
  
  async ngOnInit() {
    const url = window.location.href;
    const slug =  url.split('/')[4];
    if(!slug) this.router.navigate(['/produits']);
    await this.produitService.getProductBySlug(slug)
    .then((res:any)=>{
      if(res.message == "product not found") this.router.navigate(['/produits']);
      this.product = res;
      if(this.product.productFeatures) this.productFeatures = JSON.parse(this.product.productFeatures)
      if(this.product.productTitle) document.title = `${this.product.productTitle} | Akawor`;
      if(this.product.id) {
        this.produitService.getImagesByProducts(this.product.id).then((res)=>{
          this.images = res;
        })
      }
    })
    .catch((err)=>{
      console.log(err);
      this.router.navigate(['/produits']);
    })
    if(this.product.shopId) {
      this.boutiqueService.getShopById(this.product.shopId)
      .then((res)=>{
        this.shop = res
      })
    }
  }
  changeImage(imageTitle:string|undefined){
    if(!imageTitle) return;
    var mainImage:HTMLImageElement | null = document.querySelector('.main-image')
    const path = `${this.imageBaseUrl+imageTitle}`
    if (mainImage) mainImage.setAttribute('src', path) 
  }
  shareLink(){
    if (!navigator.canShare) {
      alert(`Your browser doesn't support the Web Share API.`)
      return;
    }
  }
  addToCart() {
    if(this.valueControl.value)
    this.produitService.addToCart(this.product, this.valueControl.value).then((res)=>{
      if (res) this.toastService.show({header:'Message d\'alerte', body:`"${this.product.productTitle}" ajouter à votre panier.`, isSuccess:true})
      if (!res) this.toastService.show({header:'Message d\'erreur', body:`Une erreur s'est produite ! Veuillez réessayer.`})
    }).catch(()=>{
      this.toastService.show({header:'Message d\'erreur', body:`Une erreur s'est produite ! Veuillez réessayer.`})
    })
  }
  increment() {
    if (this.valueControl.value && this.valueControl.value + 1 < 11)
      this.valueControl.setValue(this.valueControl.value + 1);
  }
  decrement() {
    if (this.valueControl.value && this.valueControl.value - 1 > 0)
      this.valueControl.setValue(this.valueControl.value - 1);
  }
}

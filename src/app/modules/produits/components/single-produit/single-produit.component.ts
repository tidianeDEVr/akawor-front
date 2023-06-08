import { Component, OnInit } from '@angular/core';
import { IMAGE, PRODUCT, SHOP } from 'src/app/data/interfaces';
import { ProduitsService } from '../../services/produits.service';
import { Router } from '@angular/router';
import { BoutiquesService } from 'src/app/modules/boutiques/services/boutiques.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-single-produit',
  templateUrl: './single-produit.component.html',
  styleUrls: ['./single-produit.component.scss']
})
export class SingleProduitComponent implements OnInit {
  choosedImg:string = ''
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
  constructor(
    private produitService: ProduitsService,
    private boutiqueService: BoutiquesService,
    private router: Router
    ){
    this.choosedImg = this.choosedImg[Math.random() * (10 + 1) + 0]
  }
  
  async ngOnInit() {
    const url = window.location.href;
    const slug =  url.split('/')[4];
    if(!slug) this.router.navigate(['/produits']);
    await this.produitService.getProductBySlug(slug)
    .then((res:any)=>{
      if(res.message == "product not found") this.router.navigate(['/produits']);
      this.product = res;
      if(this.product.productTitle) document.title = `${this.product.productTitle} - Akawor`;
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
}

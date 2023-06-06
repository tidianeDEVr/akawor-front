import { Component, OnInit } from '@angular/core';
import { PRODUCT, SHOP } from 'src/app/data/interfaces';
import { ProduitsService } from '../../services/produits.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BoutiquesService } from 'src/app/modules/boutiques/services/boutiques.service';

@Component({
  selector: 'app-single-produit',
  templateUrl: './single-produit.component.html',
  styleUrls: ['./single-produit.component.scss']
})
export class SingleProduitComponent implements OnInit{
  choosedImg:string = ''
  public product!: PRODUCT;
  public shop!: SHOP;
  public sameCategoryProducts: PRODUCT[] =  [
    {
      productTitle: "Nom du produit 1",
      productPrice: 2000,
      productDescription: 'Description du produit',
      productIsOutOfStock: false,
    },
    {
      productTitle: "Nom du produit 2",
      productPrice: 2000,
      productDescription: 'Description du produit',
      productIsOutOfStock: false,
    },
    {
      productTitle: "Nom du produit 3",
      productPrice: 2000,
      productDescription: 'Description du produit',
      productIsOutOfStock: false,
    },
    {
      productTitle: "Nom du produit 4",
      productPrice: 2000,
      productDescription: 'Description du produit',
      productIsOutOfStock: false,
    }
  ]
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
  constructor(
    private produitService: ProduitsService,
    private boutiqueService: BoutiquesService,
    private router: Router
    ){
    this.choosedImg = this.choosedImg[Math.random() * (10 + 1) + 0]
    // window.addEventListener("load", function() {
    //   // SINGLE IMAGE CLICK
    //   var otherImages = document.querySelectorAll(".other-image");
    //   var mainImage:HTMLImageElement | null = document.querySelector('.main-image')
    //   otherImages.forEach(image => {
    //     let path = image.getAttribute('src')
    //     image.addEventListener('click', ()=>{
    //       if(mainImage && path) mainImage.setAttribute('src', path) 
    //     })
    //   });
    // });
  }
  async ngOnInit() {
    const url = window.location.href;
    const slug =  url.split('/')[4];
    if(!slug) this.router.navigate(['/produits']);
    await this.produitService.getProductBySlug(slug)
    .then((res:any)=>{
      if(res.message == "product not found") this.router.navigate(['/produits']);
      this.product = res;
      if(this.product.productTitle) document.title = this.product.productTitle;
    })
    .catch((err)=>{
      console.log(err);
      this.router.navigate(['/produits']);
    })
    if(this.product.shopId) {
      this.boutiqueService.getShopById(this.product.shopId)
      .then((res)=>{
        this.shop = res
        console.log(res);
      })
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PRODUCT, SHOP } from 'src/app/data/interfaces';
import { BoutiquesService } from '../../services/boutiques.service';
import { ProduitsService } from 'src/app/modules/produits/services/produits.service';

@Component({
  selector: 'app-single-boutique',
  templateUrl: './single-boutique.component.html',
  styleUrls: ['./single-boutique.component.scss']
})
export class SingleBoutiqueComponent implements OnInit {
  public products!: PRODUCT[];
  public shop!: SHOP;
  public loaderCards = [
    '', '', '', '', '', '', '', '','', '', '', '', '', '', '',
  ];
  public isProductsLoaded:boolean = false;

  constructor(
    private router: Router,
    private boutiqueService: BoutiquesService,
    private produitService: ProduitsService){
  }
  ngOnInit(): void {
    const url = window.location.href;
    const slug =  url.split('/')[4];
    if(!slug) this.router.navigate(['/boutiques']);
    this.boutiqueService.getShopBySlug(slug)
    .then((res:any)=>{
      if(res.message == "shop not found") this.router.navigate(['/boutiques']);
      this.shop = res
      if(this.shop.shopLibelle) document.title = this.shop.shopLibelle.toUpperCase();
      if(this.shop.id) {
        this.produitService.getProductsByShop(this.shop.id)
        .then((res)=>{
          this.products = res;
          this.isProductsLoaded = true
        })
      }
    }).catch((err)=>{
      this.router.navigate(['/boutiques']);
    })
  }
}

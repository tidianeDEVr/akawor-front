import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PRODUCT, SHOP, SOCIAL } from 'src/app/data/interfaces';
import { BoutiquesService } from '../../services/boutiques.service';
import { ProduitsService } from 'src/app/modules/produits/services/produits.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-single-boutique',
  templateUrl: './single-boutique.component.html',
  styleUrls: ['./single-boutique.component.scss'],
})
export class SingleBoutiqueComponent implements OnInit {
  public products!: PRODUCT[];
  public shop!: SHOP;
  public social!: SOCIAL;
  public latitude: string = '0';
  public longitude: string = '0';
  public loaderCards = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ];
  public url:any;
  public isProductsLoaded: boolean = false;
  public imageBaseUrl: string = `${environment.BACKEND_IMAGES_FOLDER}/`

  constructor(
    private router: Router,
    private boutiqueService: BoutiquesService,
    private produitService: ProduitsService,
    private sanitizer: DomSanitizer
  ) {}
  ngOnInit(): void {
    const path = window.location.href;
    const slug = path.split('/')[4];
    if (!slug) this.router.navigate(['/boutiques']);
    this.boutiqueService
      .getShopBySlug(slug)
      .then((res: any) => {
        if (res.message == 'shop not found')
          this.router.navigate(['/boutiques']);
        this.shop = res;
        this.social = res.Social;
        if(res.shopLatitude) this.latitude = res.shopLatitude;
        if(res.shopLongitude) this.longitude = res.shopLongitude;
        this.url = this.getIframeUrl();
        if (this.shop.shopLibelle)
          document.title = `${this.shop.shopLibelle} | Akawor`;
        if (this.shop.id) {
          this.produitService.getProductsByShop(this.shop.id).then((res) => {
            this.products = res;
            this.isProductsLoaded = true;
          });
        }
      })
      .catch((err) => {
        this.router.navigate(['/boutiques']);
      });
  }

  getIframeUrl(): SafeUrl {
    const urlToSend = `//maps.google.com/maps?q=${this.latitude},${this.longitude}&z=15&output=embed`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(urlToSend);
  }
}

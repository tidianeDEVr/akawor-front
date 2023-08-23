import {
  AfterContentInit,
  AfterViewChecked,
  Component,
  OnInit,
} from '@angular/core';
import { BannerService } from 'src/app/core/services/banner.service';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { CurrencyService } from 'src/app/core/services/currency.service';
import { BANNER, CATEGORY, USER } from 'src/app/data/interfaces';
import { ProduitsService } from 'src/app/modules/produits/services/produits.service';
import { SecurityService } from 'src/app/modules/security/services/security.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public imageBannerPath = `${environment.BACKEND_IMAGES_FOLDER}/banners/`;
  public isAuthenticated: boolean = true;
  public user: USER | undefined;
  public cartLength: string = '0';
  public wishlistLength: string = '0';
  public topBanners!: BANNER[];
  public selectedCurrency: string = '';
  public productCategories!: CATEGORY[];
  constructor(
    private securityService: SecurityService,
    private productService: ProduitsService,
    private bannerService: BannerService,
    private categoriesService: CategoriesService,
    private currencyService: CurrencyService
  ) {
    this.bannerService.getTopBanners().then((res) => {
      this.topBanners = res;
    });
    this.categoriesService.getCategoriesProducts().then((categories) => {
      this.productCategories = categories;
    });
    this.selectedCurrency = this.currencyService.getCurrency();
  }
  ngOnInit(): void {
    this.securityService.getAuthenticatedUser().then((res) => {
      if (res.userEmail) this.user = res;
      if (this.user && this.user.id)
        this.productService.getWishlist(this.user.id).then((wishlist) => {
          if (wishlist.Products)
            this.wishlistLength = wishlist.Products.length.toString();
        });
    });
    this.productService.getCart().then((res) => {
      this.cartLength = res.length.toString();
      this.productService.updateCartBtn();
    });
  }
  changeCurrency() {
    this.currencyService.changeCurrency(this.selectedCurrency);
  }
  logout() {
    this.user = undefined;
    this.securityService.logout();
  }
}

import { Component, OnInit } from '@angular/core';
import { BoutiquesService } from '../../services/boutiques.service';
import { CATEGORY, SHOP } from 'src/app/data/interfaces';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-boutiques',
  templateUrl: './all-boutiques.component.html',
  styleUrls: ['./all-boutiques.component.scss'],
})
export class AllBoutiquesComponent implements OnInit {
  public loaderShops = [
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
  public shops!: SHOP[];
  public shopCategories: any[] = [];
  public activeCategory!: CATEGORY;
  public isShopLoaded: boolean = false;
  constructor(
    private boutiquesService: BoutiquesService,
    private categoriesService: CategoriesService,
    private router: Router
  ) {}
  ngOnInit(): void {
    const path = window.location.href.split('/');
    const slug = path[4];
    if (slug) {
      this.boutiquesService.getShopsByCategoriesSlug(slug).then((res: any) => {
        if (res.message === 'category not found') this.router.navigate(['/boutiques']);
        this.populateShops(res);
      });
    } else {
      this.boutiquesService.getActiveShop().then((res: any) => {
        this.populateShops(res);
      });
    }
    this.categoriesService.getCategoriesShops().then((res) => {
      this.shopCategories = res;
    });
  }

  populateShops(shops: SHOP[]){
    this.shops = shops;
    this.isShopLoaded = true;
  }
  public changeCategory(category: CATEGORY) {
    this.isShopLoaded = false;
    if (category.categorySlug)
      this.boutiquesService
        .getShopsByCategoriesSlug(category.categorySlug)
        .then((res) => {
          this.activeCategory = category;
          this.shops = res;
          this.isShopLoaded = true;
        });
  }
}

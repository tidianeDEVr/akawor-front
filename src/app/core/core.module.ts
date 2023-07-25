import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullComponent } from '../layouts/full/full.component';
import { NavigationComponent } from '../layouts/navigation/navigation.component';
import { HeaderComponent } from '../layouts/header/header.component';
import { FooterComponent } from '../layouts/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { NgbCarouselModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ProductCardLoaderComponent } from '../modules/produits/components/product-cards/product-card-loader/product-card-loader.component'
import { ProductCardComponent } from '../modules/produits/components/product-cards/product-card/product-card.component';
import { ToastComponent } from './components/toast/toast.component';
import { MatExpansionModule } from '@angular/material/expansion'; 

import { ShopCardComponent } from '../modules/boutiques/components/shop-cards/shop-card/shop-card.component';
import { ShopCardLoaderComponent } from '../modules/boutiques/components/shop-cards/shop-card-loader/shop-card-loader.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { CartComponent } from './components/cart/cart.component';
import { ContactComponent } from './components/contact/contact.component';
import { ManageAsideComponent } from './components/manage-aside/manage-aside.component';
import { FaqComponent } from './components/faq/faq.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardLayoutComponent } from '../layouts/dashboard-layout/dashboard-layout.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MycurrencyPipe } from './pipes/mycurrency.pipe';

@NgModule({
  declarations: [
    MycurrencyPipe,
    FullComponent,
    NavigationComponent,
    DashboardLayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductCardLoaderComponent,
    ProductCardComponent,
    ShopCardComponent,
    ShopCardLoaderComponent,
    ToastComponent,
    WishlistComponent,
    CartComponent,
    ContactComponent,
    ManageAsideComponent,
    FaqComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    MatBadgeModule,
    MatCardModule,
    MatButtonModule,
    MatTooltipModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatIconModule,
    MatSliderModule,
    MatDialogModule,
    MatGridListModule,
    MatTableModule,
    MatSelectModule,
    MatPaginatorModule,
    MatCheckboxModule,
    RouterModule,
    NgbCarouselModule,
    SlickCarouselModule,
    NgxSkeletonLoaderModule,
    NgbToastModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatTooltipModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSliderModule,
    SlickCarouselModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatTableModule,
    MatSelectModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxSkeletonLoaderModule,
    NgbCarouselModule,
    ProductCardLoaderComponent,
    ToastComponent,
    ProductCardComponent,
    ShopCardComponent,
    ShopCardLoaderComponent,
    ManageAsideComponent,
    FaqComponent,
    MycurrencyPipe
  ], 
  providers: [
    MycurrencyPipe
  ]
})
export class CoreModule { }

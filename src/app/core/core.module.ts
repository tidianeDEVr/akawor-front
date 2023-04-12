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
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ProductCardLoaderComponent } from './components/product-card-loader/product-card-loader.component';
import { ShopCardLoaderComponent } from './components/shop-card-loader/shop-card-loader.component';

@NgModule({
  declarations: [
    FullComponent,
    NavigationComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductCardLoaderComponent,
    ShopCardLoaderComponent
  ],
  imports: [
    CommonModule,
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
    MatDialogModule,
    MatTableModule,
    MatSelectModule,
    MatPaginatorModule,
    MatCheckboxModule,
    RouterModule,
    NgbCarouselModule,
    SlickCarouselModule,
    NgxSkeletonLoaderModule
  ],
  exports: [
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
    MatDialogModule,
    MatTableModule,
    MatSelectModule,
    MatPaginatorModule,
    MatCheckboxModule,
    NgxSkeletonLoaderModule
  ]
})
export class CoreModule { }

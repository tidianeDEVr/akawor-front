import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProduitsRoutingModule } from './produits-routing.module';
import { SingleProduitComponent } from './components/single-produit/single-produit.component';
import { CoreModule } from '../../core/core.module';
import { AllProduitsComponent } from './components/all-produits/all-produits.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { MyProductsComponent } from './components/my-products/my-products.component';


@NgModule({
  declarations: [
    AllProduitsComponent,
    SingleProduitComponent,
    CreateProductComponent,
    MyProductsComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    ProduitsRoutingModule
  ]
})
export class ProduitsModule { }

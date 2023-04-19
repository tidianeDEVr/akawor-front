import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProduitsRoutingModule } from './produits-routing.module';
import { SingleProduitComponent } from './components/single-produit/single-produit.component';
import { CoreModule } from '../core/core.module';
import { AllProduitsComponent } from './components/all-produits/all-produits.component';


@NgModule({
  declarations: [
    AllProduitsComponent,
    SingleProduitComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    ProduitsRoutingModule
  ]
})
export class ProduitsModule { }

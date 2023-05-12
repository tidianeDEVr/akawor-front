import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoutiquesRoutingModule } from './boutiques-routing.module';
import { AllBoutiquesComponent } from './components/all-boutiques/all-boutiques.component';
import { SingleBoutiqueComponent } from './components/single-boutique/single-boutique.component';
import { CoreModule } from '../../core/core.module';
import { ManageShopComponent } from '../parametres/components/manage-shop/manage-shop.component';


@NgModule({
  declarations: [
    AllBoutiquesComponent,
    SingleBoutiqueComponent,
    ManageShopComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    BoutiquesRoutingModule
  ]
})
export class BoutiquesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveriesRoutingModule } from './deliveries-routing.module';
import { DeliveriesListAllComponent } from './components/deliveries-list-all/deliveries-list-all.component';
import { DeliveriesSingleComponent } from './components/deliveries-single/deliveries-single.component';


@NgModule({
  declarations: [
    DeliveriesListAllComponent,
    DeliveriesSingleComponent
  ],
  imports: [
    CommonModule,
    DeliveriesRoutingModule
  ]
})
export class DeliveriesModule { }

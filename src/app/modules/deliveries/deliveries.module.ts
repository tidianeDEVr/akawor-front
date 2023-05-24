import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveriesRoutingModule } from './deliveries-routing.module';
import { DeliveriesListAllComponent } from './components/deliveries-list-all/deliveries-list-all.component';
import { CoreModule } from 'src/app/core/core.module';
import { MyDeliveryAddressesComponent } from './components/my-delivery-addresses/my-delivery-addresses.component';


@NgModule({
  declarations: [
    DeliveriesListAllComponent,
    MyDeliveryAddressesComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    DeliveriesRoutingModule
  ]
})
export class DeliveriesModule { }

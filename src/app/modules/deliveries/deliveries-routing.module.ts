import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveriesListAllComponent } from './components/deliveries-list-all/deliveries-list-all.component';
import { MyDeliveryAddressesComponent } from './components/my-delivery-addresses/my-delivery-addresses.component';


const routes: Routes = [
  { path: '', component: DeliveriesListAllComponent },
  { path: 'mes-adresses', component: MyDeliveryAddressesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveriesRoutingModule { }

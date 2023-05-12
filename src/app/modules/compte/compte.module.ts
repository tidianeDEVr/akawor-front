import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompteRoutingModule } from './compte-routing.module';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { CoreModule } from 'src/app/core/core.module';
import { ManageProfileComponent } from './components/manage-profile/manage-profile.component';
import { ManagePasswordComponent } from './components/manage-password/manage-password.component';
import { ManageDeliveryAddressesComponent } from './components/manage-delivery-addresses/manage-delivery-addresses.component';


@NgModule({
  declarations: [
    MyAccountComponent,
    ManageProfileComponent,
    ManagePasswordComponent,
    ManageDeliveryAddressesComponent,
  ],
  imports: [
    CommonModule,
    CompteRoutingModule,
    CoreModule
  ]
})
export class CompteModule { }

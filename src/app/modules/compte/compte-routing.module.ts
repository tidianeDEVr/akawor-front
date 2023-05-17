import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { ManageProfileComponent } from './components/manage-profile/manage-profile.component';
import { ManageDeliveryAddressesComponent } from './components/manage-delivery-addresses/manage-delivery-addresses.component';
import { ManagePasswordComponent } from './components/manage-password/manage-password.component';

const routes: Routes = [
  { 
    path: '', 
    component: MyAccountComponent,
    title: 'Mon compte'
  },
  { 
    path: 'profile', 
    component: ManageProfileComponent,
    title: 'Mon profile' 
  },
  { 
    path: 'changer-mot-de-passe', 
    component: ManagePasswordComponent,
    title: 'Changer mon mot de passe'
  },
  { 
    path: 'adresses-de-livraison', 
    component: ManageDeliveryAddressesComponent,
    title: 'Mes adresses de livraison'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompteRoutingModule { }

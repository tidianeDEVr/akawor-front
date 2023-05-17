import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ManageShopComponent } from './components/manage-shop/manage-shop.component';


const routes: Routes = [
  { 
    path: 'compte-et-profile', 
    component: AccountSettingsComponent,
    title: 'Compte et profile'
  },
  { 
    path: 'notifications', 
    component: NotificationsComponent,
    title: 'Mes notifications'
  },
  { 
    path: 'ma-boutique', 
    component: ManageShopComponent, 
    title: 'Ma boutique - Nom de la boutique'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametresRoutingModule { }

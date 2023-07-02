import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ManageShopComponent } from './components/manage-shop/manage-shop.component';


const routes: Routes = [
  { 
    path: 'compte-et-profile', 
    component: AccountSettingsComponent,
    title: 'Compte et profile | Akawor'
  },
  { 
    path: 'notifications', 
    component: NotificationsComponent,
    title: 'Mes notifications | Akawor'
  },
  { 
    path: 'ma-boutique', 
    component: ManageShopComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametresRoutingModule { }

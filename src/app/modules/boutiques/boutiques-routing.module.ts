import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllBoutiquesComponent } from './components/all-boutiques/all-boutiques.component';
import { ManageShopComponent } from '../parametres/components/manage-shop/manage-shop.component';
import { isVendor } from 'src/app/core/guards/security.guard';

const routes: Routes = [
  { 
    path: '', 
    component: AllBoutiquesComponent 
  },
  {
    path: ':slug',
    component: AllBoutiquesComponent,
  },
  {
    path: 'ma-boutique',
    component: ManageShopComponent,
    canActivate: [isVendor],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoutiquesRoutingModule { }

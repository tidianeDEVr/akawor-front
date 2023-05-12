import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllBoutiquesComponent } from './components/all-boutiques/all-boutiques.component';
import { SingleBoutiqueComponent } from './components/single-boutique/single-boutique.component';
import { ManageShopComponent } from '../parametres/components/manage-shop/manage-shop.component';

const routes: Routes = [
  { 
    path: '', 
    component: AllBoutiquesComponent 
  },
  { 
    path: 'dynamic', 
    component: SingleBoutiqueComponent
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
export class BoutiquesRoutingModule { }

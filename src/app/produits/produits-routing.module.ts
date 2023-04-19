import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleProduitComponent } from './components/single-produit/single-produit.component';
import { AllProduitsComponent } from './components/all-produits/all-produits.component';

const routes: Routes = [
  { 
    path: '', 
    component: AllProduitsComponent 
  },
  { 
    path: 'dynamic', 
    component: SingleProduitComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitsRoutingModule { }

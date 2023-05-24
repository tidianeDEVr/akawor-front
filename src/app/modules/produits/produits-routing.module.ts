import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleProduitComponent } from './components/single-produit/single-produit.component';
import { AllProduitsComponent } from './components/all-produits/all-produits.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { MyProductsComponent } from './components/my-products/my-products.component';

const routes: Routes = [
  { 
    path: '', 
    component: AllProduitsComponent,
    title: 'Nos annonces - Akawor'
  },
  { 
    path: 'dynamic', 
    component: SingleProduitComponent, 
    title: 'Nom du produit',
  },
  { 
    path: 'nouvelle-annonce',
    component: CreateProductComponent, 
    title: 'Nouvelle annonce',
  },
  { 
    path: 'mes-annonces',
    component: MyProductsComponent,
    title: 'Gérer mes annonces',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitsRoutingModule { }
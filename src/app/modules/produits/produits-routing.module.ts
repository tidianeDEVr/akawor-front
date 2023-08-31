import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleProduitComponent } from './components/single-produit/single-produit.component';
import { AllProduitsComponent } from './components/all-produits/all-produits.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { MyProductsComponent } from './components/my-products/my-products.component';
import { isVendor } from 'src/app/core/guards/security.guard';

const routes: Routes = [
  { 
    path: '', 
    component: AllProduitsComponent,
    title: 'Nos annonces | Akawor'
  },
  { 
    path: 'nouvelle-annonce',
    component: CreateProductComponent, 
    title: 'Ajout d\'un nouveau produit | Akawor',
    canActivate: [isVendor],
  },
  { 
    path: 'mes-annonces',
    component: MyProductsComponent,
    title: 'Mes annonces | Akawor',
    canActivate: [isVendor],
  },
  {
    path: ':slug',
    component: AllProduitsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitsRoutingModule { }

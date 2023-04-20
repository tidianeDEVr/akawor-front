import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllBoutiquesComponent } from './components/all-boutiques/all-boutiques.component';
import { SingleBoutiqueComponent } from './components/single-boutique/single-boutique.component';

const routes: Routes = [
  { 
    path: '', 
    component: AllBoutiquesComponent 
  },
  { 
    path: 'single', 
    component: SingleBoutiqueComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoutiquesRoutingModule { }

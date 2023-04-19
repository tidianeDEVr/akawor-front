import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllBoutiquesComponent } from './components/all-boutiques/all-boutiques.component';

const routes: Routes = [{ path: '', component: AllBoutiquesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoutiquesRoutingModule { }

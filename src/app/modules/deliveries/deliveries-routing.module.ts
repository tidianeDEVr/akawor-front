import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveriesListAllComponent } from './components/deliveries-list-all/deliveries-list-all.component';
import { DeliveriesSingleComponent } from './components/deliveries-single/deliveries-single.component';


const routes: Routes = [
  { path: '', component: DeliveriesListAllComponent },
  { path: 'dynamic', component: DeliveriesSingleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveriesRoutingModule { }

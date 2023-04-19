import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoutiquesRoutingModule } from './boutiques-routing.module';
import { AllBoutiquesComponent } from './components/all-boutiques/all-boutiques.component';


@NgModule({
  declarations: [
    AllBoutiquesComponent
  ],
  imports: [
    CommonModule,
    BoutiquesRoutingModule
  ]
})
export class BoutiquesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandsRoutingModule } from './commands-routing.module';
import { CommandListAllComponent } from './components/command-list-all/command-list-all.component';
import { CommandSingleComponent } from './components/command-single/command-single.component';
import { CoreModule } from 'src/app/core/core.module';
import { CommandCheckoutComponent } from './components/command-checkout/command-checkout.component';


@NgModule({
  declarations: [
    CommandSingleComponent,
    CommandListAllComponent,
    CommandCheckoutComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    CommandsRoutingModule
  ]
})
export class CommandsModule { }

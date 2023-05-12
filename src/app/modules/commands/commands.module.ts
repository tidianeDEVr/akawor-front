import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandsRoutingModule } from './commands-routing.module';
import { CommandListAllComponent } from './components/command-list-all/command-list-all.component';
import { CommandSingleComponent } from './components/command-single/command-single.component';


@NgModule({
  declarations: [
    CommandSingleComponent,
    CommandListAllComponent,
  ],
  imports: [
    CommonModule,
    CommandsRoutingModule
  ]
})
export class CommandsModule { }

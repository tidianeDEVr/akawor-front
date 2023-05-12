import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandListAllComponent } from './components/command-list-all/command-list-all.component';
import { CommandSingleComponent } from './components/command-single/command-single.component';

const routes: Routes = [
  { path: '', component: CommandListAllComponent },
  { path: 'dynamic', component: CommandSingleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandsRoutingModule { }

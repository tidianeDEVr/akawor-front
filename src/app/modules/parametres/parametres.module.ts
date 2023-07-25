import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametresRoutingModule } from './parametres-routing.module';
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';
import { CoreModule } from 'src/app/core/core.module';



@NgModule({
  declarations: [
    AccountSettingsComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    ParametresRoutingModule
  ]
})
export class ParametresModule { }

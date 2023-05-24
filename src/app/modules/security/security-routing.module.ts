import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SecurityService } from './services/security.service';

const routes: Routes = [
  { path: 'connexion', component: LoginComponent },
  { path: 'inscription', component: RegisterComponent },
  // { path: 'mon-compte', component: AccountSettingsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  // providers: [SecurityService]
})
export class SecurityRoutingModule { }

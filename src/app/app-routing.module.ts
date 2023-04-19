import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { NavigationComponent } from './layouts/navigation/navigation.component';

const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    children: [
      {
         path: '',
         component: HomeComponent
      },
      { 
        path: 'boutiques', 
        loadChildren: () => import('./boutiques/boutiques.module').then(m => m.BoutiquesModule) 
      },
      { 
        path: 'produits', 
        loadChildren: () => import('./produits/produits.module').then(m => m.ProduitsModule) 
      },
   ],
  },
  { path: 'security', loadChildren: () => import('./security/security.module').then(m => m.SecurityModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

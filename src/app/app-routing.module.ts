import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { NavigationComponent } from './layouts/navigation/navigation.component';
import { WishlistComponent } from './core/components/wishlist/wishlist.component';
import { CartComponent } from './core/components/cart/cart.component';
import { ContactComponent } from './core/components/contact/contact.component';
import { FaqComponent } from './core/components/faq/faq.component';
import { IsConnectedGuard } from './modules/security/guards/is-connected.guard';

const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    children: [
      {
         path: '',
         component: HomeComponent,
         title: 'Le made in Africa livré chez vous - Akawor'
      },
      {
         path: 'ma-liste-de-souhaits',
         component: WishlistComponent,
         title: 'Ma liste de souhaits',
      },
      {
         path: 'mon-panier',
         component: CartComponent,
         title: 'Mon panier',
      },
      {
         path: 'contact',
         component: ContactComponent,
         title: 'Contactez Akawor',
      },
      {
         path: 'foire-aux-questions',
         component: FaqComponent,
         title: 'Foire aux questions',
      },
      { 
        path: 'boutiques', 
        loadChildren: () => import('./modules/boutiques/boutiques.module').then(m => m.BoutiquesModule) 
      },
      { 
        path: 'produits', 
        loadChildren: () => import('./modules/produits/produits.module').then(m => m.ProduitsModule) 
      },
      { 
        path: 'compte', 
        loadChildren: () => import('./modules/compte/compte.module').then(m => m.CompteModule),
        // canActivate: [IsConnectedGuard],
      },
      { 
        path: 'commandes', 
        loadChildren: () => import('./modules/commands/commands.module').then(m => m.CommandsModule) 
      },
      { 
        path: 'parametres', 
        loadChildren: () => import('./modules/parametres/parametres.module').then(m => m.ParametresModule),
        // canActivate: [IsConnectedGuard], 
      },
      { 
        path: 'blog', 
        loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule) 
      },
      { 
        path: 'livraisons', 
        loadChildren: () => import('./modules/deliveries/deliveries.module').then(m => m.DeliveriesModule),
        // canActivate: [IsConnectedGuard], 
      },
   ],
  },
  { 
    path: 'security', 
    loadChildren: () => import('./modules/security/security.module').then(m => m.SecurityModule) 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true,})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

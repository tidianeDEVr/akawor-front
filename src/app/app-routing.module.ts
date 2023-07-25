import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { NavigationComponent } from './layouts/navigation/navigation.component';
import { WishlistComponent } from './core/components/wishlist/wishlist.component';
import { CartComponent } from './core/components/cart/cart.component';
import { ContactComponent } from './core/components/contact/contact.component';
import { FaqComponent } from './core/components/faq/faq.component';
import { isLoggedIn, authorizeDashboard } from './core/guards/security.guard';
import { SingleProduitComponent } from './modules/produits/components/single-produit/single-produit.component';
import { SingleBoutiqueComponent } from './modules/boutiques/components/single-boutique/single-boutique.component';
import { CommandCheckoutComponent } from './modules/commands/components/command-checkout/command-checkout.component';

const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    children: [
      {
         path: '',
         component: HomeComponent,
         title: 'Le made in Africa livré chez vous | Akawor'
      },
      {
         path: 'ma-liste-de-souhaits',
         component: WishlistComponent,
         title: 'Ma liste de souhaits | Akawor',
      },
      {
         path: 'mon-panier',
         component: CartComponent,
         title: 'Mon panier | Akawor',
      },
      {
         path: 'contact',
         component: ContactComponent,
         title: 'Contacts | Akawor',
      },
      {
         path: 'foire-aux-questions',
         component: FaqComponent,
         title: 'Foire aux questions | Akawor',
      },
      { 
        path: 'boutiques', 
        loadChildren: () => import('./modules/boutiques/boutiques.module').then(m => m.BoutiquesModule) 
      },
      {
        path: 'boutique/:slug',
        component: SingleBoutiqueComponent,
      },
      { 
        path: 'produits', 
        loadChildren: () => import('./modules/produits/produits.module').then(m => m.ProduitsModule) 
      },
      {
        path: 'produit/:slug',
        component: SingleProduitComponent,
      },
      { 
        path: 'compte', 
        loadChildren: () => import('./modules/compte/compte.module').then(m => m.CompteModule),
        canActivate: [isLoggedIn],
      },
      { 
        path: 'commandes', 
        loadChildren: () => import('./modules/commands/commands.module').then(m => m.CommandsModule),
        canActivate: [isLoggedIn], 
      },
      {
        path: 'commandes/passer-ma-commande',
        component: CommandCheckoutComponent,
        title: 'Passer ma commande | Akawor',
      },
      { 
        path: 'parametres', 
        loadChildren: () => import('./modules/parametres/parametres.module').then(m => m.ParametresModule),
        canActivate: [isLoggedIn],
      },
      { 
        path: 'blog', 
        loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule) 
      },
      { 
        path: 'livraisons', 
        loadChildren: () => import('./modules/deliveries/deliveries.module').then(m => m.DeliveriesModule),
        canActivate: [isLoggedIn],
      },
   ],
  },
  { 
    path: 'security', 
    loadChildren: () => import('./modules/security/security.module').then(m => m.SecurityModule) 
  },
  { 
    path: 'dashboard',
    loadChildren: () => import('./modules/backoffice/backoffice.module').then(m => m.BackofficeModule),
    canActivate: [authorizeDashboard],
  },
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, {enableTracing: true,})],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

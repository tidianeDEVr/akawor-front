import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardCustomersComponent } from './components/dashboard-customers/dashboard-customers.component';
import { DashboardLayoutComponent } from 'src/app/layouts/dashboard-layout/dashboard-layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardAnnouncesComponent } from './components/dashboard-announces/dashboard-announces.component';
import { DashboardVendorsComponent } from './components/dashboard-vendors/dashboard-vendors.component';
import { DashboardCategoriesComponent } from './components/dashboard-categories/dashboard-categories.component';
import { DashboardShopsComponent } from './components/dashboard-shops/dashboard-shops.component';
import { DashboardCommandsComponent } from './components/dashboard-commands/dashboard-commands.component';
import { DashboardReviewsComponent } from './components/dashboard-reviews/dashboard-reviews.component';
import { DashboardMessagingComponent } from './components/dashboard-messaging/dashboard-messaging.component';


const routes: Routes = [
  { 
    path: '', 
    component: DashboardLayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
        title: 'Tableau de bord | Akawor',
      },
      {
        path: 'announces',
        component: DashboardAnnouncesComponent
      },
      {
        path: 'customers',
        component: DashboardCustomersComponent
      },
      {
        path: 'vendors',
        component: DashboardVendorsComponent
      },
      {
        path: 'categories',
        component: DashboardCategoriesComponent
      },
      {
        path: 'shops',
        component: DashboardShopsComponent
      },
      {
        path: 'commands',
        component: DashboardCommandsComponent
      },
      {
        path: 'reviews',
        component: DashboardReviewsComponent
      },
      {
        path: 'messaging',
        component: DashboardMessagingComponent
      },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }

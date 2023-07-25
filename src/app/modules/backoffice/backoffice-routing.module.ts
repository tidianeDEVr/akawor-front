import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardCustomersComponent } from './components/users/dashboard-customers/dashboard-customers.component';
import { DashboardLayoutComponent } from 'src/app/layouts/dashboard-layout/dashboard-layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardAnnouncesComponent } from './components/announcements/dashboard-announces/dashboard-announces.component';
import { DashboardCategoriesComponent } from './components/categories/dashboard-categories/dashboard-categories.component';
import { DashboardShopsComponent } from './components/shops/dashboard-shops/dashboard-shops.component';
import { DashboardCommandsComponent } from './components/commands/dashboard-commands/dashboard-commands.component';
import { DashboardReviewsComponent } from './components/reviews/dashboard-reviews/dashboard-reviews.component';
import { DashboardMessagingComponent } from './components/notifications/dashboard-messaging/dashboard-messaging.component';
import { DashboardNewAnnouncementComponent } from './components/announcements/dashboard-new-announcement/dashboard-new-announcement.component';
import { DashboardBannersComponent } from './components/banners/dashboard-banners/dashboard-banners.component';
import { DashboardStatsComponent } from './components/stats/dashboard-stats/dashboard-stats.component';
import { DashboardCreateVendorComponent } from './components/users/dashboard-create-vendor/dashboard-create-vendor.component';


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
        path: 'announcements',
        component: DashboardAnnouncesComponent
      },
      {
        path: 'announcements/create',
        component: DashboardNewAnnouncementComponent,
      },
      {
        path: 'customers',
        component: DashboardCustomersComponent
      },
      {
        path: 'customers/create-vendor',
        component: DashboardCreateVendorComponent
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
      {
        path: 'banners',
        component: DashboardBannersComponent
      },
      {
        path: 'statistics',
        component: DashboardStatsComponent
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }

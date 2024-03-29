import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackofficeRoutingModule } from './backoffice-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardCustomersComponent } from './components/users/dashboard-customers/dashboard-customers.component';
import { CoreModule } from 'src/app/core/core.module';
import { DashboardAnnouncesComponent } from './components/announcements/dashboard-announces/dashboard-announces.component';
import { DashboardCategoriesComponent } from './components/categories/dashboard-categories/dashboard-categories.component';
import { DashboardShopsComponent } from './components/shops/dashboard-shops/dashboard-shops.component';
import { DashboardCommandsComponent } from './components/commands/dashboard-commands/dashboard-commands.component';
import { DashboardReviewsComponent } from './components/reviews/dashboard-reviews/dashboard-reviews.component';
import { DashboardMessagingComponent } from './components/notifications/dashboard-messaging/dashboard-messaging.component';
import { DashboardNewAnnouncementComponent } from './components/announcements/dashboard-new-announcement/dashboard-new-announcement.component';
import { DashboardBannersComponent } from './components/banners/dashboard-banners/dashboard-banners.component';
import { DashboardStatsComponent } from './components/stats/dashboard-stats/dashboard-stats.component';
import { DashboardDetailsCategorieComponent } from './components/categories/dashboard-details-categorie/dashboard-details-categorie.component';
import { DashboardDetailsShopComponent } from './components/shops/dashboard-details-shop/dashboard-details-shop.component';
import { DashboardCreateVendorComponent } from './components/users/dashboard-create-vendor/dashboard-create-vendor.component';
import { DashboardDetailsCommandComponent } from './components/commands/dashboard-details-command/dashboard-details-command.component';
import { DashboardDetailsUserComponent } from './components/users/dashboard-details-user/dashboard-details-user.component';
import { DashboardDetailsAnnouncementComponent } from './components/announcements/dashboard-details-announcement/dashboard-details-announcement.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardAnnouncesComponent,
    DashboardNewAnnouncementComponent,
    DashboardDetailsAnnouncementComponent,
    DashboardCustomersComponent,
    DashboardDetailsUserComponent,
    DashboardCreateVendorComponent,
    DashboardCategoriesComponent,
    DashboardDetailsCategorieComponent,
    DashboardShopsComponent,
    DashboardDetailsShopComponent,
    DashboardCommandsComponent,
    DashboardDetailsCommandComponent,
    DashboardReviewsComponent,
    DashboardMessagingComponent,
    DashboardBannersComponent,
    DashboardStatsComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    BackofficeRoutingModule
  ]
})
export class BackofficeModule { }

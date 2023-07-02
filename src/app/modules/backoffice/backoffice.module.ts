import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackofficeRoutingModule } from './backoffice-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardCustomersComponent } from './components/dashboard-customers/dashboard-customers.component';
import { CoreModule } from 'src/app/core/core.module';
import { DashboardAnnouncesComponent } from './components/dashboard-announces/dashboard-announces.component';
import { DashboardVendorsComponent } from './components/dashboard-vendors/dashboard-vendors.component';
import { DashboardCategoriesComponent } from './components/dashboard-categories/dashboard-categories.component';
import { DashboardShopsComponent } from './components/dashboard-shops/dashboard-shops.component';
import { DashboardCommandsComponent } from './components/dashboard-commands/dashboard-commands.component';
import { DashboardReviewsComponent } from './components/dashboard-reviews/dashboard-reviews.component';



@NgModule({
  declarations: [
    DashboardComponent,
    DashboardAnnouncesComponent,
    DashboardVendorsComponent,
    DashboardCustomersComponent,
    DashboardCategoriesComponent,
    DashboardShopsComponent,
    DashboardCommandsComponent,
    DashboardReviewsComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    BackofficeRoutingModule
  ]
})
export class BackofficeModule { }

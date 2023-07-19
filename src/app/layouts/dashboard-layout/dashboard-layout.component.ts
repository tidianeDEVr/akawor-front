import { Component } from '@angular/core';
import { SecurityService } from 'src/app/modules/security/services/security.service';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent {
  constructor(private securityService: SecurityService) {}
  logout(){
    this.securityService.logout();
  }
}

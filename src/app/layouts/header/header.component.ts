import { Component, OnInit } from '@angular/core';
import { USER } from 'src/app/data/interfaces';
import { Emitters } from 'src/app/emitters/emitters';
import { SecurityService } from 'src/app/modules/security/services/security.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isAuthenticated: boolean = true;
  public user: USER = {};
  constructor(private securityService: SecurityService) {}
  ngOnInit(): void {
    this.securityService.getAuthenticatedUser().then((res) => {
      this.user = res;
    });
    // Emitters.authEmitter.subscribe((auth: boolean) => {
    //   this.isAuthenticated = auth;
    // });
  }
  logout() {
    this.user = {};
    this.securityService.logout();
  }
}

import { Component, Input } from '@angular/core';
import { ROLE } from 'src/app/data/interfaces';
import { SecurityService } from 'src/app/modules/security/services/security.service';

@Component({
  selector: 'app-manage-aside',
  templateUrl: './manage-aside.component.html',
  styleUrls: ['./manage-aside.component.scss']
})
export class ManageAsideComponent {
  @Input() activePath?: string;
  public role?: ROLE = {
    roleLibelle: "ROLE_VENDEUR",
  };

  constructor(private securityService: SecurityService){ }

  public logout(){
    this.securityService.logout()
  }
}

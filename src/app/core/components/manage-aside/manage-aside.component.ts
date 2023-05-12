import { Component, Input } from '@angular/core';
import { SecurityService } from 'src/app/modules/security/services/security.service';

@Component({
  selector: 'app-manage-aside',
  templateUrl: './manage-aside.component.html',
  styleUrls: ['./manage-aside.component.scss']
})
export class ManageAsideComponent {
  @Input() activePath?: string;

  constructor(private securityService: SecurityService){ }

  public logout(){
    this.securityService.logout()
  }
}

import { Component, Input } from '@angular/core';
import { USER } from 'src/app/data/interfaces';
import { SecurityService } from 'src/app/modules/security/services/security.service';

@Component({
  selector: 'app-manage-aside',
  templateUrl: './manage-aside.component.html',
  styleUrls: ['./manage-aside.component.scss']
})
export class ManageAsideComponent {
  @Input() activePath?: string;
  public role?: string;
  public user !: USER;

  constructor(private securityService: SecurityService){
    this.securityService.getAuthenticatedUser().then((res)=>{
      this.role = res.userRole;
      this.user = res;
      console.log(res);
    })
   }

  public logout(){
    this.securityService.logout()
  }
}

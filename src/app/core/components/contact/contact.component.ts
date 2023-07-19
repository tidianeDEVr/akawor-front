import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { USER } from 'src/app/data/interfaces';
import { SecurityService } from 'src/app/modules/security/services/security.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  public user !: USER;
  public fullNameControl = new FormControl('', [Validators.required]);
  public mailControl = new FormControl('', [Validators.required]);
  constructor(private securityService: SecurityService){
    this.securityService.getAuthenticatedUser()
    .then((res)=>{
      if(res.userEmail) this.mailControl.setValue(res.userEmail);
      if(res.userFirstName && res.userLastName) 
      this.fullNameControl.setValue(`${res.userFirstName}  ${res.userLastName}`)
    })
  }
  public sendMail(){
    alert('Sending e-mail');
  }
}

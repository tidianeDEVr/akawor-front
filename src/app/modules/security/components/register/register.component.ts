import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { USER } from 'src/app/data/interfaces';
import { SecurityService } from '../../services/security.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  firstnameControl = new FormControl('', [Validators.required, Validators.min(2)]);
  lastnameControl = new FormControl('', [Validators.required, Validators.min(2)]);
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  passwordControl = new FormControl('', [Validators.required]);
  confirmpasswordControl = new FormControl('', [Validators.required]);
  checkedRemember: boolean = false;
  hidePassword: boolean = true;

  constructor(private service:SecurityService){}

  public register(){
    if (
      this.firstnameControl.value &&
      this.lastnameControl.value &&
      this.emailControl.value &&
      this.passwordControl.value
      ){
      let newUser:USER = {
        userFirstName: this.firstnameControl.value,
        userLastName: this.lastnameControl.value,
        userEmail: this.emailControl.value,
        userPassword: this.passwordControl.value,
      }
      this.service.register(newUser)
    }
  }
}

import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  firstnameControl = new FormControl('', [Validators.required, Validators.email]);
  lastnameControl = new FormControl('', [Validators.required, Validators.email]);
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  passwordControl = new FormControl('', [Validators.required]);
  confirmpasswordControl = new FormControl('', [Validators.required]);
  checkedRemember: boolean = false;
  public register(){}
}

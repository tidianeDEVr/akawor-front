import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  passwordControl = new FormControl('', [Validators.required]);
  checkedRemember: boolean = false
  constructor(private router: Router){}
  login(){
    // if (this.emailControl.value && this.passwordControl.value) {
    //   this.authService.login(this.emailControl.value, this.passwordControl.value)
    // }
    this.router.navigate([''])
  }

  forgetPassword(){
    alert('forget password')
  }
}

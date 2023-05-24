import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SecurityService } from '../../services/security.service';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  emailOnUrl?: string;
  passwordControl = new FormControl('', [Validators.required]);
  checkedRemember: boolean = false;
  hidePassword: boolean = true;
  constructor(private securityService: SecurityService, private route: ActivatedRoute, private toastService: ToastService){
    // this.toastService.clear()
  }
  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.emailOnUrl = params['email'];
        if(this.emailOnUrl) this.emailControl.setValue(this.emailOnUrl);
      }
    );
  }
  login(){
    if (this.emailControl.value && this.passwordControl.value) {
      this.securityService.login(this.emailControl.value, this.passwordControl.value)
    }
  }

  logout(){
    this.securityService.logout()
  }

  forgetPassword(){
    alert('forget password')
  }
}

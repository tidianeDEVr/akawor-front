import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-manage-password',
  templateUrl: './manage-password.component.html',
  styleUrls: ['./manage-password.component.scss']
})
export class ManagePasswordComponent {
  oldpasswordControl = new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(20)]);
  newPasswordControl = new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(20)]);
  confirmNewPasswordControl = new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(20)]);
  hidePassword: boolean = true;

  constructor(private toastService: ToastService){}

  public changePassword(){
    if(this.newPasswordControl.value !== this.confirmNewPasswordControl.value) 
      return this.toastService.show({
        header: 'Message d\'erreur',
        body: 'Les mots de passe ne correspondent pas !'
      })
      this.toastService.show({
        header: 'Message d\'alerte',
        body: 'Le mot de passe a été changer !',
        isSuccess: true,
      })
  }
}

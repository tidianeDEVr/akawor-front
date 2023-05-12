import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(private router: Router) { }

  public login(){
    alert('logging in')
  }
  public logout(){
    alert('logging out')
    this.router.navigateByUrl('/')
  }
  public register(){
    alert('register')
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/core/services/toast.service';
import { USER } from 'src/app/data/interfaces';
import { Emitters } from 'src/app/emitters/emitters';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class SecurityService {
  constructor(
    private router: Router, 
    private http: HttpClient,
    private toastService: ToastService) { }

  public login(identifiant: string, password: string) {
    this.http
      .post(
        `${environment.BACKEND_BASE_URL}/security/login`,
        {
          userEmail: identifiant,
          userPassword: password,
        },
        { withCredentials: true }
      )
      .subscribe({
        next: (res: any) => {
          if (res.message === 'success') {
            this.toastService.show({header:'Message d\'alerte', body:'Connexion reussi ! Heureux de vous retrouver 😊', isSuccess:true})
            this.router.navigate(['/']);
          }
        },
        error: (err) => {
          this.toastService.show({header:'Message d\'erreur', body:'L\'identifiant ou le mot de passe est incorrect ! Veuillez réessayer.'})
        },
      });
  }
  public logout() {
    this.http.post(`${environment.BACKEND_BASE_URL}/security/logout`, {}, {withCredentials:true}).subscribe(
      {
        next:()=>{
          this.toastService.show({header:'Message d\'alerte', body: 'Votre compte a été déconnecté avec succès.', isSuccess:true})
        },
      }
    )
    this.router.navigateByUrl('/');
  }

  public register(user: USER): Promise<any>{
    return new Promise<any>((res)=>{
      this.http
        .post(`${environment.BACKEND_BASE_URL}/security/register`, user)
        .subscribe({
          next: (res: any) => {
            if (res.status === 'success') {
              this.toastService.show({header:'Message d\'alerte', body:'Inscription reussi ! Utilisez votre identifiant et mot de passe pour vous authentifier.', isSuccess:true})
              this.router.navigate(['/security/connexion'], {
                queryParams: { email: user.userEmail },
              });
            } else {
              alert('Try again');
            }
          },
          error: (err) => {
            console.log(err);
        },
      });
    })
  }

  public getAuthenticatedUser(): Promise<USER>{
    let authenticatedUser: USER = {}
    return new Promise<USER>(resolve => {
      this.http
        .get(`${environment.BACKEND_BASE_URL}/security/user`, {
          withCredentials: true,
        })
        .subscribe({
          next: (res) => {
            authenticatedUser = res
            resolve(authenticatedUser);
          },
          error: (err) => {
            resolve(authenticatedUser)
          },
        });
    })
  }
}

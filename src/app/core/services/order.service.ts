import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ORDER } from 'src/app/data/interfaces';
import { environment } from 'src/environments/environment.development';
import { ToastService } from './toast.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient, private toastService: ToastService, private router: Router) { }

  createOrder(order: ORDER, cart: any): Promise<ORDER>{
    return new Promise<ORDER>(resolve => {
      this.httpClient.post(`${environment.BACKEND_API_URL}/order/insert`, {order, cart})
      .subscribe({
        next: (res: any)=>{
          if(res.order.id) {
            this.toastService.show({body:'Commande effectuée avec succés ! Vous allez recevoir un email pour la confirmation.', isSuccess:true})
            this.router.navigate(['/']);
          } else {
            this.toastService.show({body: 'Une erreur s\'est produite ! Veuillez réessayer ultérieurement.'})
          }
          resolve(res)
        },
        error: (err)=>{
          resolve(err)
        }
      })
    })
  } 

  getOrdersByClients(email:string): Promise<ORDER[]> {
    return new Promise<ORDER[]>(resolve => {
      this.httpClient.get(`${environment.BACKEND_API_URL}/order/client/${email}`)
      .subscribe({
        next: (res: any)=>{
          resolve(res)
        },
        error: (err)=>{
          resolve(err)
        }
      })
    })
  }
}

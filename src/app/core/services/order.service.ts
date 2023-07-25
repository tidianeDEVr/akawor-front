import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ORDER } from 'src/app/data/interfaces';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) { }

  createOrder(order: ORDER): Promise<ORDER>{
    return new Promise<ORDER>(resolve => {
      this.httpClient.post(`${environment.BACKEND_API_URL}/order/insert`, {order})
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

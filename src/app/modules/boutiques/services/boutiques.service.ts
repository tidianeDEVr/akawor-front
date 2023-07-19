import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CATEGORY, SHOP, SOCIAL } from 'src/app/data/interfaces';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BoutiquesService {

  constructor(private httpClient: HttpClient) { }


  getShops():Promise<SHOP[]>{
    return new Promise<SHOP[]>(resolve => {
      this.httpClient.get(`${environment.BACKEND_API_URL}/shop/find-all`,)
      .subscribe({
        next:(shop:any)=>{
          resolve(shop)
        },
        error:(err)=>{
          resolve(err)
        }
      })
    })
  }

  getShopById(id:string):Promise<SHOP>{
    return new Promise<SHOP>(resolve => {
      this.httpClient.get(`${environment.BACKEND_API_URL}/shop/find-by-id?id=${id}`,)
      .subscribe({
        next:(shop:any)=>{
          resolve(shop)
        },
        error:(err)=>{
          resolve(err)
        }
      })
    })
  }
  getShopBySeller(email:string):Promise<SHOP>{
    return new Promise<SHOP>(resolve => {
      this.httpClient.post(`${environment.BACKEND_API_URL}/shop/find-by-seller`,{email})
      .subscribe({
        next:(shop:any)=>{
          resolve(shop);
        },
        error:(err)=>{
          resolve(err);
        }
      })
    })
  }
  getShopBySlug(slug:string):Promise<SHOP>{
    return new Promise<SHOP>(resolve=>{
      this.httpClient.get(`${environment.BACKEND_API_URL}/shop/find-by-slug/${slug}`)
      .subscribe({
        next: (shop:any)=>{
          resolve(shop);
        },
        error: (err)=>{
          resolve(err)
        },
      })
    })
  }
  getActiveShop():Promise<SHOP[]>{
    return new Promise<SHOP[]>(resolve=>{
      this.httpClient.get(`${environment.BACKEND_API_URL}/shop/find-actives`)
      .subscribe({
        next: (shops:any)=>{
          resolve(shops)
        },
        error: (err)=>{
          resolve(err)
        }
      })
    })
  }
  updateShop(shop: SHOP, social: SOCIAL, categoryLibelle: string):Promise<boolean>{
    return new Promise<boolean>(resolve=>{
      this.httpClient.put(`${environment.BACKEND_API_URL}/shop/update`, {shop, social, categoryLibelle})
      .subscribe({
        next: (res:any)=>{
          resolve(res)
        },
        error: (err)=>{
          resolve(false)
        }
      })
    })
  }
}

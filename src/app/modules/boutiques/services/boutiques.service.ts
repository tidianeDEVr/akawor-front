import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CATEGORY, SHOP } from 'src/app/data/interfaces';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BoutiquesService {

  constructor(private httpClient: HttpClient) { }

  getCategoriesShops():Promise<CATEGORY[]>{
    let categories:CATEGORY[] = [] 
    return new Promise<CATEGORY[]>(resolve =>{
      this.httpClient.get(`${environment.BACKEND_BASE_URL}/category/find-all/shop`)
      .subscribe({
        next: (res:any)=>{
          categories = res
          resolve(categories)
        },
        error: (err)=>{
          resolve(categories)
        }, 
      })
    })
  }
  getShopById(id:string):Promise<SHOP>{
    return new Promise<SHOP>(resolve => {
      this.httpClient.get(`${environment.BACKEND_BASE_URL}/shop/find-by-id?id=${id}`,)
      .subscribe({
        next:(shop:any)=>{
          resolve(shop)
        },
        error:(err)=>{
          console.log(err);
        }
      })
    })
  }
  getShopBySeller(email:string):Promise<SHOP>{
    return new Promise<SHOP>(resolve => {
      this.httpClient.post(`${environment.BACKEND_BASE_URL}/shop/find-by-seller`,{email})
      .subscribe({
        next:(shop:any)=>{
          resolve(shop)
        },
        error:(err)=>{
          console.log(err);
        }
      })
    })
  }
  getShopBySlug(slug:string):Promise<SHOP>{
    return new Promise<SHOP>(resolve=>{
      this.httpClient.get(`${environment.BACKEND_BASE_URL}/shop/find-by-slug/${slug}`)
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
      this.httpClient.get(`${environment.BACKEND_BASE_URL}/shop/find-actives`)
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
}

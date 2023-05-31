import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CATEGORY, PRODUCT } from 'src/app/data/interfaces';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  constructor(private httpClient: HttpClient) { }

  getCategoriesProducts():Promise<CATEGORY[]>{
    let categories:CATEGORY[] = [] 
    return new Promise<CATEGORY[]>(resolve =>{
      this.httpClient.get(`${environment.BACKEND_BASE_URL}/category/find-all/product`)
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
  getSubCategoriesProducts(parentId:number):Promise<CATEGORY[]>{
    let categories:CATEGORY[] = [] 
    return new Promise<CATEGORY[]>(resolve =>{
      this.httpClient.get(`${environment.BACKEND_BASE_URL}/category/find-subs/${parentId}`)
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
  createProduct(product: PRODUCT): Promise<Boolean>{
    return new Promise<Boolean>(resolve => {
      this.httpClient.post(`${environment.BACKEND_BASE_URL}/product/insert`, {product})
      .subscribe({
        next: (res:any)=>{
          resolve(true);
        },
        error:(err)=>{
          resolve(false);
        }
      })
    })
  }
}

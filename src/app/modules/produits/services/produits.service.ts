import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CATEGORY, IMAGE, PRODUCT } from 'src/app/data/interfaces';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  constructor(private httpClient: HttpClient) { }

  getProducts():Promise<PRODUCT[]>{
    return new Promise<PRODUCT[]>(resolve => {
      this.httpClient.get(`${environment.BACKEND_BASE_URL}/product/find-all`)
      .subscribe({
        next: (produits:any)=>{
          resolve(produits);
        },
        error: (err)=>{
          resolve(err)
        },
      })
    })
  }
  getProductBySlug(slug:string):Promise<PRODUCT>{
    return new Promise<PRODUCT>(resolve=>{
      this.httpClient.get(`${environment.BACKEND_BASE_URL}/product/find-by-slug/${slug}`)
      .subscribe({
        next: (produit:any)=>{
          resolve(produit);
        },
        error: (err)=>{
          resolve(err)
        },
      })
    })
  }
  getProductsByShop(id:string): Promise<PRODUCT[]>{
    return new Promise<PRODUCT[]>(resolve=>{
      this.httpClient.get(`${environment.BACKEND_BASE_URL}/product/find-by-shop/${id}`)
      .subscribe({
        next:(produits:any)=>{
          resolve(produits)
        },
        error: (err)=>{
          resolve(err)
        }
      })
    })
  }
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
          resolve(err)
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
  createProduct(product: PRODUCT, productOwnerId: string): Promise<PRODUCT>{
    return new Promise<PRODUCT>(resolve => {
      this.httpClient.post(`${environment.BACKEND_BASE_URL}/product/insert`, {product, productOwnerId})
      .subscribe({
        next: (res:any)=>{
          resolve(res);
        },
        error:(err)=>{
          resolve(err);
        }
      })
    })
  }
  getSellerProducts(sellerId: string): Promise<PRODUCT[]>{
    return new Promise<PRODUCT[]>(resolve => {
      this.httpClient.get(`${environment.BACKEND_BASE_URL}/product/seller/${sellerId}`)
      .subscribe({
        next: (res:any)=>{
          resolve(res);
        },
        error: (err)=>{
          resolve(err);
        }
      })
    })
  }
  getImagesByProducts(id:string):Promise<IMAGE[]>{
    return new Promise<IMAGE[]>(resolve=>{
      this.httpClient.get(`${environment.BACKEND_BASE_URL}/image/find-by-product/${id}`)
      .subscribe({
        next: (res:any)=>{
          resolve(res)
        },
        error: (err)=>{
          resolve(err)
        },
      })
    })
  }
}

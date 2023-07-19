import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CATEGORY } from 'src/app/data/interfaces';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private httpClient: HttpClient) { }

  getAllCategories():Promise<CATEGORY[]>{
    let categories:CATEGORY[] = [] 
    return new Promise<CATEGORY[]>(resolve =>{
      this.httpClient.get(`${environment.BACKEND_API_URL}/category/find-all`)
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

  createCategory(category: CATEGORY): Promise<CATEGORY>{
    return new Promise<CATEGORY>(resolve => {
      this.httpClient.post(`${environment.BACKEND_API_URL}/category/insert`, {category})
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
  
  getCategoriesShops():Promise<CATEGORY[]>{
    let categories:CATEGORY[] = [] 
    return new Promise<CATEGORY[]>(resolve =>{
      this.httpClient.get(`${environment.BACKEND_API_URL}/category/find-all/shop`)
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

  getCategoriesProducts(): Promise<CATEGORY[]> {
    let categories: CATEGORY[] = [];
    return new Promise<CATEGORY[]>((resolve) => {
      this.httpClient
        .get(`${environment.BACKEND_API_URL}/category/find-all/product`)
        .subscribe({
          next: (res: any) => {
            categories = res;
            resolve(categories);
          },
          error: (err) => {
            resolve(err);
          },
        });
    });
  }
  getSubCategoriesProducts(parentId: number): Promise<CATEGORY[]> {
    let categories: CATEGORY[] = [];
    return new Promise<CATEGORY[]>((resolve) => {
      this.httpClient
        .get(`${environment.BACKEND_API_URL}/category/find-subs/${parentId}`)
        .subscribe({
          next: (res: any) => {
            categories = res;
            resolve(categories);
          },
          error: (err) => {
            resolve(categories);
          },
        });
    });
  }
  getCategoryById(id: string): Promise<CATEGORY> {
    return new Promise<CATEGORY>((resolve) => {
      this.httpClient
        .get(`${environment.BACKEND_API_URL}/category/find-by-id/${id}`)
        .subscribe({
          next: (res: any) => {
            resolve(res);
          },
          error: (err) => {
            resolve(err);
          },
        });
    });
  }
}

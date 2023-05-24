import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CATEGORY } from 'src/app/data/interfaces';
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
          console.log(res);
          resolve(categories)
        },
        error: (err)=>{
          console.log(err);
          resolve(categories)
        }, 
      })
    })
  }
}

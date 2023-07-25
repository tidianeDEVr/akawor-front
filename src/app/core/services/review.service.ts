import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { REVIEW } from 'src/app/data/interfaces';
import { environment } from 'src/environments/environment.development';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private httpClient: HttpClient, 
    private toastService: ToastService) { }

  createReview(review: REVIEW): Promise<REVIEW>{
    return new Promise<REVIEW>(resolve => {
      this.httpClient.post(`${environment.BACKEND_API_URL}/review/insert`, {review})
      .subscribe({
        next: (res: any)=>{
          if(res.message === 'missing data !') this.toastService.show({body: 'Une erreur s\'est produit ! Veuillez réessayer.'});
          resolve(res)
        },
        error: (err)=>{
          resolve(err)
        }
      })
    })
  }

  getReviewsByProduct(productId: string):Promise<REVIEW[]>{
    let reviews:REVIEW[] = [] 
    return new Promise<REVIEW[]>(resolve =>{
      this.httpClient.get(`${environment.BACKEND_API_URL}/review/find-by-product/${productId}`)
      .subscribe({
        next: (res:any)=>{
          reviews = res
          resolve(reviews)
        },
        error: (err)=>{
          resolve(reviews)
        }, 
      })
    })
  }

  getReviewsDashboard():Promise<REVIEW[]>{
    let reviews:REVIEW[] = [] 
    return new Promise<REVIEW[]>(resolve =>{
      this.httpClient.get(`${environment.BACKEND_API_URL}/review/find-all`)
      .subscribe({
        next: (res:any)=>{
          reviews = res
          resolve(reviews)
        },
        error: (err)=>{
          resolve(reviews)
        }, 
      })
    })
  }


}

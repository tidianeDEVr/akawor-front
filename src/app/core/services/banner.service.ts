import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BANNER } from 'src/app/data/interfaces';
import { ToastService } from './toast.service';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(private httpClient: HttpClient, private toastService: ToastService) { }

  createBanner(banner: BANNER): Promise<BANNER>{
    return new Promise<BANNER>(resolve => {
      this.httpClient.post(`${environment.BACKEND_API_URL}/banner/insert`, {banner})
      .subscribe({
        next: (res: any)=>{
          if(res.message === 'Missing data !') this.toastService.show({body: 'Une erreur s\'est produit ! Veuillez réessayer.'});
          if(res.id) this.toastService.show({body: 'Bannière crée avec succés !',isSuccess:true})
          resolve(res)
        },
        error: (err)=>{
          resolve(err)
        }
      })
    })
  }

  getTopBanners(): Promise<BANNER[]>{
    return new Promise<BANNER[]>(resolve => {
      this.httpClient.get(`${environment.BACKEND_API_URL}/banner/headers`)
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

  getHeroBanners(): Promise<BANNER[]>{
    return new Promise<BANNER[]>(resolve => {
      this.httpClient.get(`${environment.BACKEND_API_URL}/banner/heroes`)
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

  getAsideBanners(): Promise<BANNER[]>{
    return new Promise<BANNER[]>(resolve => {
      this.httpClient.get(`${environment.BACKEND_API_URL}/banner/asides`)
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

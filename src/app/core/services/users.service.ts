import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { USER } from 'src/app/data/interfaces';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getUsersDashboard():Promise<USER[]>{
    let users:USER[] = [];
    return new Promise<USER[]>(resolve =>{
      this.httpClient.get(`${environment.BACKEND_API_URL}/user/find-all-dashboard`)
      .subscribe({
        next: (res:any)=>{
          users = res
          resolve(users)
        },
        error: (err)=>{
          resolve(users)
        }, 
      })
    })
  }

  getRecentsClients():Promise<USER[]>{
    let users:USER[] = [];
    return new Promise<USER[]>(resolve =>{
      this.httpClient.get(`${environment.BACKEND_API_URL}/user/find-recent-clients`)
      .subscribe({
        next: (res:any)=>{
          users = res
          resolve(users)
        },
        error: (err)=>{
          resolve(users)
        }, 
      })
    })
  }
}

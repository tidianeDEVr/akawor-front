import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { CurrencyService } from './currency.service';

declare const PayTech: any;

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  constructor(private currencyService: CurrencyService) { }

  public payWithPaytech(cart:any, amount: any, reference: any){
    const currency = this.currencyService.getCurrency();
    const payTech = new PayTech({cart, amount, currency, reference});
    payTech
      .withOption({
        requestTokenUrl: `${environment.BACKEND_API_URL}/payment/paytech`,
        method: 'POST',
        headers: {
          Accept: 'text/html',
        },
        prensentationMode: PayTech.OPEN_IN_POPUP,
        willGetToken: () => {
          // Your code here
        },
        didGetToken: (token: string, redirectUrl: string) => {
          // Your code here
        },
        didReceiveError: (error: any) => {
          // Your code here
        },
        didReceiveNonSuccessResponse: (jsonResponse: any) => {
          // Your code here
        },
      })
      .send();
  }
  payWithStripe(){
    alert('coming soon')
  }
}

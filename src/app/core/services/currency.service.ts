import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor() {
    this.initCurrency();
   }

  public selectedCurrency: string = environment.DEFAULT_CURRENCY;
  public validCurrencies: string[] = ['EUR', 'XOF'];
  public EUR_TO_XOF = environment.EUR_TO_XOF;

  initCurrency() {
    const actualCurrency = localStorage.getItem('akawor_currency');
    if (actualCurrency && this.validCurrencies.includes(actualCurrency))
      return (this.selectedCurrency = actualCurrency);
    return localStorage.setItem('akawor_currency', environment.DEFAULT_CURRENCY);
  }

  getCurrency(){
    return this.selectedCurrency;
  }

  changeCurrency(currency: string) {
    if(this.selectedCurrency == currency) return;
    if(this.validCurrencies.includes(currency)) {
      this.selectedCurrency = currency;
      localStorage.setItem('akawor_currency', currency);
      location.reload();
    }
  }

  getActualValue(value: any) {
    var transformValue = '';
    this.initCurrency()
    if (this.selectedCurrency == 'EUR')
      transformValue = new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR',
      }).format(value);
    if (this.selectedCurrency == 'XOF')
      transformValue = transformValue = new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'XOF',
      }).format(value * this.EUR_TO_XOF);
    return transformValue;
  }
}

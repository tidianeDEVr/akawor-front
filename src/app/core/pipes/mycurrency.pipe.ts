import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mycurrency'
})
export class MycurrencyPipe implements PipeTransform {
  public selectedCurrency: string = 'EUR';
  public validCurrencies: string[] = ['EUR', 'XOF'];
  transform(value: unknown, ...args: unknown[]): unknown {
    const actualCurrency = localStorage.getItem('akawor_currency');
    if (actualCurrency && this.validCurrencies.includes(actualCurrency)) {
      this.selectedCurrency = actualCurrency;
    } else {
      localStorage.setItem('akawor_currency', 'EUR');
    }
    return value + this.selectedCurrency;
  }
}

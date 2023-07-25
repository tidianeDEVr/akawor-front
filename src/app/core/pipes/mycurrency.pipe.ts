import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { CurrencyService } from '../services/currency.service';

@Pipe({
  name: 'my_currency',
})
export class MycurrencyPipe implements PipeTransform {
  constructor(private currencyService: CurrencyService){}
  transform(value: unknown, ...args: unknown[]): unknown {
    // this.getActualCurrency();
    return this.currencyService.getActualValue(value);
  }
}

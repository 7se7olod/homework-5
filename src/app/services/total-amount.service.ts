import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TotalAmountService {
  public totalAmount: number = 0;
  public count: number = 0;
  getPrice() {
    return this.totalAmount;
  }
  getCommonCount() {
    return this.count;
  }
}

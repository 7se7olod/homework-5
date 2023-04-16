import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductType} from "../../types/product.type";
import {TotalAmountService} from "../../services/total-amount.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  constructor(private cartService: TotalAmountService) {
  }
  @Input() product: ProductType = {
    image: '',
    title: '',
    count: 0,
    price: 0
  };
  @Input() productIndex: number = 1;
  @Output() addToCartEvent: EventEmitter<any> = new EventEmitter();

  public addProductToCard(): void {
    this.addToCartEvent.emit();
    this.cartService.count++;
    this.cartService.totalAmount += this.product.price;
  }
}

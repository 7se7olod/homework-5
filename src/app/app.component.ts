import {Component} from '@angular/core';
import {AdvantageType} from "./types/advantage.type";
import {ProductType} from "./types/product.type";
import {fadeOutAnimation} from "./components/animations/animation-present";
import {ProductsService} from "./services/products.service";
import {TotalAmountService} from "./services/total-amount.service";
import {AdvantagesService} from "./services/advantages.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeOutAnimation]
})
export class AppComponent {
  public productOrder: string = '';
  public products: ProductType[] = [];
  public advantages: AdvantageType[] = [];
  public showPresent: boolean = true;
  public phoneNumber: string = '375293689869';
  public instagramCompanyLink = 'https://instagram.com';
  public productsInCartCount: number = 0;

  constructor(private productsService: ProductsService,
              private cartService: TotalAmountService,
              private advantageService: AdvantagesService) {}

  ngOnInit() {
    this.products = this.productsService.getProducts();
    this.advantages = this.advantageService.getAdvantages()
  }

  public onOrder(product: string, element: HTMLElement): void {
    this.scrollToElement(element);
    this.productOrder = product.toUpperCase();
    alert(`${product} добавлен в корзину!`);
  }

  public scrollToElement(element: HTMLElement): void {
    element.scrollIntoView({behavior: "smooth", block: 'start'});
  }
}

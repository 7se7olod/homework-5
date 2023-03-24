import {Component} from '@angular/core';
import {AdvantageType} from "./types/advantage.type";
import {ProductType} from "./types/product.type";
import {fadeOutAnimation} from "./components/animations/animation-present";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeOutAnimation]
})
export class AppComponent {
  public productOrder: string = '';
  public advantages: AdvantageType[] = [
    {
      title: 'Лучшие продукты',
      description: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.'
    },
    {
      title: 'Много вкусов',
      description: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
    },
    {
      title: 'Бисквитное тесто',
      description: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'
    },
    {
      title: 'Честный продукт',
      description: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'
    },
  ];
  public products: ProductType[] = [
    {
      image: 'red-macaron.png',
      title: 'Макарун с малиной',
      count: 3,
      price: 650,
    },
    {
      image: 'yellow-macaron.png',
      title: 'Макарун с манго',
      count: 1,
      price: 310,
    },
    {
      image: 'crem-macaron.png',
      title: 'Пирог с ванилью',
      count: 1,
      price: 285,
    },
    {
      image: 'green-macaron.png',
      title: 'Пирог с фисташками',
      count: 1,
      price: 300,
    },
  ]
  public showPresent: boolean = true;
  public phoneNumber: string = '+375 (29) 368-98-69';
  public instagramCompanyLink = 'https://instagram.com';

  constructor() {
    // отображение и скрытие блока с подарком можно было сделать через *ngIf,
    // но в этом случае я не знаю как реализовать анимацию на удаление блока, поэтому решил сделать просто анимацию скрытия  =)
    const that: AppComponent = this;
    setInterval(function () {
      that.showPresent = !that.showPresent;
    }, 5000);
  }

  public onOrder(product: string, element: HTMLElement): void {
    this.scrollToElement(element);
    this.productOrder = product.toUpperCase();
  }

  public scrollToElement(element: HTMLElement): void {
    element.scrollIntoView({behavior: "smooth", block: 'start'});
  }
}

import { Injectable } from '@angular/core';
import {ProductType} from "../types/product.type";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor() { }
  public getProducts(): ProductType[] {
    return [
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
  }
}

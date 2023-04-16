import { Component } from '@angular/core';
import {TotalAmountService} from "../../services/total-amount.service";

@Component({
  selector: 'app-present',
  templateUrl: './present.component.html',
  styleUrls: ['./present.component.scss']
})
export class PresentComponent {
  constructor(public cartService: TotalAmountService) {}
}

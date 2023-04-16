import {Component, Input} from '@angular/core';
import {AdvantageType} from "../../types/advantage.type";

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss']
})
export class AdvantagesComponent {
  @Input() advantageIndex: number = 0;
  @Input() advantage: AdvantageType = { title: '', description: '' };
}

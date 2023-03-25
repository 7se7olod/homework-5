import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() phoneNumberHeader: string = '';
  public element: HTMLElement | null = null;
  public isOpenMenu = false;

  public onScrollAndCloseMenu(element: HTMLElement | null): void {
    this.isOpenMenu = false;
    if (element) {
      element.scrollIntoView({behavior:'smooth', block: 'start'});
    }
  }
}

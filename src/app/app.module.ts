import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ProductComponent } from './components/product/product.component';
import { PresentComponent } from './components/present/present.component';
import { AdvantagesComponent } from './components/advantages/advantages.component';
import {CurrencyPipePipe} from "./pipes/currency-pipe.pipe";
import {BackgroundButtonDirective} from './directives/background-button.directive';
import { ShortenDescriptionTextPipe } from './pipes/shorten-description-text.pipe';
import { PhoneBelFormatPipe } from './pipes/phone-bel-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ProductComponent,
    PresentComponent,
    AdvantagesComponent,
    CurrencyPipePipe,
    BackgroundButtonDirective,
    ShortenDescriptionTextPipe,
    PhoneBelFormatPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConfigComponent } from './config/config.component';
import { TimerComponent } from './timer/timer.component';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { FormsModule } from '@angular/forms';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    ConfigComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "pt-BR"},
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'USD'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

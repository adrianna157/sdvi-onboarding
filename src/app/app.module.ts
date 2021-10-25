import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Card } from './components/card/card.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';

@NgModule({
  declarations: [
    AppComponent,
    Card,
    CardDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ReaDataService } from './services/'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
      ReaDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

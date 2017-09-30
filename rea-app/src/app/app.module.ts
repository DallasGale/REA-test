import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { 
  ResultsComponent,
  SavedPropertiesComponent 
} from './components/';

import { ReaDataService,  } from './services/'


@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    SavedPropertiesComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    MaterialModule,
  ],
  providers: [
      ReaDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

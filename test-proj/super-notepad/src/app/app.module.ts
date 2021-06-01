import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListPickerComponent } from './components/list-picker/list-picker/list-picker.component';


@NgModule({
  declarations: [
    AppComponent,
    ListPickerComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ColorPresenterComponent } from './components/color-presenter/color-presenter.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorPresenterComponent,
    ColorPickerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

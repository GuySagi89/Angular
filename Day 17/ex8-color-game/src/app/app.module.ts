import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ColorPresenterComponent } from './components/color-presenter/color-presenter.component';
import { ColorInputComponent } from './components/color-input/color-input.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorPresenterComponent,
    ColorInputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

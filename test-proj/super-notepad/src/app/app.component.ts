import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //data
  title = 'super-notepad';
  colors: string[] = ['red', 'green', 'blue', 'black', 'navy', 'silver'];
  sizes: string[] = ['18px', '24px', '32px', '36px', '40px','80px'];
  fonts: string[] = [
    'Arial',
    'Verdana',
    'Roboto',
    'David',
    'Segoe UI',
    'Couries New',
    'Impact',
  ];

  selectedColor: string = this.colors[0];
  selectedSize: string = this.sizes[0];
  selectedFont: string = this.fonts[0];

  //methods
  selectColor(value: string) {
    this.selectedColor = value;
  }

  selectSize(value: string) {
    this.selectedSize = value;
  }

  selectFont(value: string) {
    this.selectedFont = value;
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { RGB } from 'src/app/model/types';
import { ColorManagerService } from 'src/app/services/color-manager.service';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css'],
})
export class ColorPickerComponent implements OnInit {
  constructor(private colorService: ColorManagerService) {}

  ngOnInit(): void {}

  onValueChangeR(r: string) {
    this.colorService.setR(this.normalizeColor(+r));
  }
  onValueChangeG(g: string) {
    this.colorService.setG(this.normalizeColor(+g));
  }
  onValueChangeB(b: string) {
    this.colorService.setB(this.normalizeColor(+b));
  }

  normalizeColor(color: number) {
    return Math.min(Math.max(0, color), 255);
  }
}

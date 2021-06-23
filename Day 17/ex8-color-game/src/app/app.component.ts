import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { ColorManagerService } from './services/color-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  generatedColor$ = new Observable<string>();
  userColor$ = new Observable<string>();
  gameStatus$!: Observable<boolean>;

  constructor(private colorService: ColorManagerService) {}

  ngOnInit(): void {
    this.colorService.generateColor();

    this.generatedColor$ = this.colorService
      .getRandColor()
      .pipe(map((v) => this.colorService.rgbToColorStr(v)));

    this.userColor$ = this.colorService
      .getUserColor()
      .pipe(map((v) => this.colorService.rgbToColorStr(v)));

    this.gameStatus$ = combineLatest([
      this.generatedColor$,
      this.userColor$,
    ]).pipe(map((n) => n[0] === n[1]));
  }

  randomizeColor() {
    this.colorService.generateColor();
  }
}

import { Component, OnInit } from '@angular/core';
import { GameService } from './services/game.service';
import { Rgb } from './models/types';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  myColor$!: Observable<string>;
  compColor$!: Observable<string>;

  success$!: Observable<boolean>;
  constructor(private game: GameService) {}

  ngOnInit(): void {
    let r$ = this.game.getRed();
    let g$ = this.game.getGreen();
    let b$ = this.game.getBlue();

        this.myColor$ = combineLatest([r$, g$, b$]).pipe(
            map(tpl => this.rgbToCss(tpl)));

        this.compColor$ = this.game.getComputerColor().pipe(
            map(rgb => this.rgbToCss(rgb)));

        this.success$ = combineLatest([this.myColor$, this.compColor$]).pipe(
          map((tpl) => tpl[0] === tpl[1])
        );
  }

  generateColor() {
    this.game.getComputerColor();
  }

   rgbToCss(rgb: Rgb) {
    return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
  }

  randomize() {
    this.game.randomizeColor();
  }
}

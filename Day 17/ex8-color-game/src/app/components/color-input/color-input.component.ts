import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-color-input',
  templateUrl: './color-input.component.html',
  styleUrls: ['./color-input.component.css'],
})
export class ColorInputComponent implements OnInit {
  constructor(private gameService: GameService) {}

  ngOnInit(): void {}

  private normlize(num: string): number {
    let val = Math.round(Number(num));
    return Math.min(Math.max(0, val), 255);
}

  setR(value: string) {
    this.gameService.setRed(this.normlize(value));
  }

  setG(value: string) {
    this.gameService.setGreen(this.normlize(value));
  }
  setB(value: string) {
    this.gameService.setBlue(this.normlize(value));
  }


}

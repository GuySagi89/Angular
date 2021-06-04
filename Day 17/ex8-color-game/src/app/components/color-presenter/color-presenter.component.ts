import { Input, OnChanges, SimpleChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-color-presenter',
  templateUrl: './color-presenter.component.html',
  styleUrls: ['./color-presenter.component.css'],
})
export class ColorPresenterComponent  {
  constructor(private gameService: GameService) {}

  @Input() color: string | null = '';

}

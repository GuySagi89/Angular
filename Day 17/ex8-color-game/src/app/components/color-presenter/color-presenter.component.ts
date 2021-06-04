import { Input, OnChanges, SimpleChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-color-presenter',
  templateUrl: './color-presenter.component.html',
  styleUrls: ['./color-presenter.component.css'],
})
export class ColorPresenterComponent implements OnChanges {
  constructor(private gameService: GameService) {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.color);
  }
  @Input() color: string | null = '';

  ngOnInit(): void {

  }



}

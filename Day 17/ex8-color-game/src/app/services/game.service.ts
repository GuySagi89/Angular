import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private value$ = new BehaviorSubject<[number, number, number]>([1, 2, 3]);
  constructor() {}

  getRed() {}
  getGreen() {}
  getBlue() {}

  setRed(value: number) {}
  setGreen(value: number) {}
  setBlue(value: number) {}

  getComputerColor(): Observable<[number, number, number]> {
    return this.value$.asObservable();
  }

  randomizeColor() {}
}

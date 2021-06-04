import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Rgb } from '../models/types';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private curColor$ = new BehaviorSubject<Rgb>([0,0,0]);

  private redValue$ = new BehaviorSubject<number>(0);
  private greenValue$ = new BehaviorSubject<number>(0);
  private blueValue$ = new BehaviorSubject<number>(0);

  constructor() {}

  getRed(): Observable<number> {
    return this.redValue$.asObservable();
  }

  getGreen(): Observable<number> {
    return this.greenValue$.asObservable();
  }

  getBlue(): Observable<number> {
    return this.blueValue$.asObservable();
  }

  setRed(value: number) {
    this.redValue$.next(value);
  }

  setGreen(value: number) {
    this.greenValue$.next(value);
  }

  setBlue(value: number) {
    this.blueValue$.next(value);
  }

  getComputerColor(): Observable<Rgb> {
    return this.curColor$.asObservable();
  }

  private rndByte(): number {
    return Math.floor(Math.random() * 256);
}

  randomizeColor() {
    let randomColor: Rgb = [this.rndByte(), this.rndByte(), this.rndByte()];
    this.curColor$.next(randomColor);
  }
}

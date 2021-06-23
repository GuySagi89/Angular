import { Injectable } from '@angular/core';
import { combineLatest, BehaviorSubject, Observable, Subject } from 'rxjs';
import { RGB } from '../model/types';

@Injectable({
  providedIn: 'root',
})
export class ColorManagerService {
  r$ = new BehaviorSubject<number>(0);
  g$ = new BehaviorSubject<number>(0);
  b$ = new BehaviorSubject<number>(0);

  randColor$ = new BehaviorSubject<RGB>([0, 0, 0]);
  userColor$ = new Observable<RGB>();

  constructor() {
    this.userColor$ = combineLatest([this.r$, this.g$, this.b$]);
  }

  setR(input: number) {
    this.r$.next(input);
  }
  setG(input: number) {
    this.g$.next(input);
  }

  setB(input: number) {
    this.b$.next(input);
  }

  generateColor() {
    let color: RGB = [this.randomizeColor(), this.randomizeColor(), this.randomizeColor()];
    this.randColor$.next(color);

    console.log('I generated ' + color);
  }

  getRandColor() {
    return this.randColor$.asObservable();
  }

  getUserColor() {
    return this.userColor$;
  }

  rgbToColorStr(color: RGB) {
    return `rgb(${color[0]},${color[1]},${color[2]})`;
  }

  randomizeColor() {
    return Math.round(Math.random() * 1000) % 256;
  }
}

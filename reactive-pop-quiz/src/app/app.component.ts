import { Component, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  interval,
  Observable,
  Subject,
} from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private counterSubject$ = new BehaviorSubject<number>(0);
  hasPrev$!: Observable<boolean>;
  hasNext$!: Observable<boolean>;
  counter$!: Observable<number>;
  input$ = new Subject<string>();
  reverser$!: Observable<string>;

  $x = new BehaviorSubject<number>(3);
  $y!:Observable<number>;
  $combine!: Observable<number>;

  ngOnInit(): void {
    this.counter$ = this.counterSubject$.asObservable();
    this.hasPrev$ = this.counter$.pipe(map((v) => v > 0));
    this.hasNext$ = this.counter$.pipe(map((v) => v < 10));

    this.$combine = combineLatest([this.$x, this.counter$]).pipe(
      map((n) => n[0] + n[1])
    );

    this.reverser$ = this.input$.pipe(map((v) => this.reverse(v)));


  }

  increase() {
    this.counterSubject$.next(this.counterSubject$.value + 1);
  }

  decrease() {
    this.counterSubject$.next(this.counterSubject$.value - 1);
  }

  getText(txt: string) {
    this.input$.next(txt);
  }

  reverse(str: string) {
    var splitString = str.split('');
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join('');
    return joinArray;
  }
}

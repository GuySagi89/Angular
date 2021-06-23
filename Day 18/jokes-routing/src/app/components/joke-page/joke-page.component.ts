import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, from } from 'rxjs';
import { Joke } from 'src/app/models/types';
import { JokesService } from 'src/app/services/jokes.service';
import { map, switchMap, combineLatest } from 'rxjs/operators';

@Component({
  selector: 'app-joke-page',
  templateUrl: './joke-page.component.html',
  styleUrls: ['./joke-page.component.css'],
})
export class JokePageComponent implements OnInit {
  index!: number;
  keyword!: string;
  jokes!: Joke[];

  index$!: Observable<[keyword: string, index: number]>;
  keyword$!: Observable<string>;
  joke$!: Observable<Joke>;
  hasNext$!: Observable<boolean>;
  hasPrev$!: Observable<boolean>;
  jokeCount$!: Observable<number>;

  constructor(
    private jokesService: JokesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    console.log('hello');
    this.index = +this.route.snapshot.params['index'];
    this.keyword = this.route.snapshot.params['keyword'];

    this.index$ = this.route.params.pipe(
      map((prms) => [prms['keyword'], Number(prms['index'])])
    );

    this.joke$ = this.index$.pipe(
      switchMap((prms) => from(this.jokesService.getJoke(prms[0], prms[1])))
    );

    this.jokeCount$ = this.index$.pipe(
      switchMap((prms) => this.jokesService.getJokesCount(prms[0]))
    );

    this.hasNext$ = combineLatest(from(this.jokeCount$),this.index$).pipe(map((res)=>()));
    this.hasPrev$ = this.index$.pipe(map((prms) => +prms[1] > 0));
  }

  onPrev() {
    this.index--;
    this.router.navigate(['joke', this.keyword, this.index]);
  }

  onNewSearch() {
    this.router.navigate(['/search']);
  }

  onNext() {
    this.index++;
    this.router.navigate(['joke', this.keyword, this.index]);
  }
}

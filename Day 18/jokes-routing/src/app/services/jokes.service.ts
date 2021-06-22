import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Joke } from '../models/types';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class JokesService {
  private serverURL: string;

  constructor(private httpClient: HttpClient) {
    this.serverURL = environment.serverURL;
  }

  getJoke(keyword: string, index: number): Promise<Joke> {
    const url = `${this.serverURL}/jokes?q=${keyword}&_start=${index}&_limit=1`;

    return this.httpClient
      .get<Joke[]>(url)
      .pipe(map((r) => r[0]))
      .toPromise();
  }

  getJokesCount(keyword: string): Promise<number> {
    const url = `${this.serverURL}/jokes?q=${keyword}`;

    return this.httpClient
      .get<Joke[]>(url)
      .pipe(map((r) => r.length))
      .toPromise();
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('search page created');
  }

  onSearch(keyword: string) {
    this.router.navigate(['joke', keyword, 0]);
  }
}

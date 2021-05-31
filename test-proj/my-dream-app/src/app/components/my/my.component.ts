import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css'],
})
export class MyComponent implements OnInit {
  searchTitle='Search';
  searchWord = '';
  isBusy=false;
  selectedItemMyComponent='';

  results:string[]=[];

  constructor() {}

  ngOnInit(): void {
  }

  search(){
    this.isBusy=true;
    this.results=this.doSearch();
    this.isBusy=false;
    this.selectedItemMyComponent=this.results[2];
  }


  private doSearch(){
    let arr=[];
    for (let i = 0; i < 10; i++) {
       arr.push(this.searchWord+' '+i);
    }
    return arr;
  }

  setSelectedFromAppResult(item:string){
    this.selectedItemMyComponent=item;
  }


}

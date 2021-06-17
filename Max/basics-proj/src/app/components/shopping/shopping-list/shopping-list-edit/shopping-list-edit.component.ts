import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {


  constructor() { }


  ngOnInit(): void {
  }

  onAdd(name:string,amount:string){

  }

}

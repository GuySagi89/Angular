import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-picker',
  templateUrl: './list-picker.component.html',
  styleUrls: ['./list-picker.component.css'],
})
export class ListPickerComponent implements OnInit {
  constructor() {}

  @Input() selectedItem = '';
  @Input() list: string[] = [];
  @Output() itemSelected = new EventEmitter<string>();

  ngOnInit(): void {}

  setSelectedItem(item: string) {
    this.itemSelected.emit(item);
  }
}

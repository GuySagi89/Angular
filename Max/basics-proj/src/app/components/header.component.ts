import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() sectionSelected = new EventEmitter<string>();

  onSelect(selectedSection: string) {
    this.sectionSelected.emit(selectedSection);
  }
}

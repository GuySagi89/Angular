import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RGB } from 'src/app/model/types';
import { ColorManagerService } from 'src/app/services/color-manager.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-color-presenter',
  templateUrl: './color-presenter.component.html',
  styleUrls: ['./color-presenter.component.css'],
})
export class ColorPresenterComponent {
  @Input() title: string = '';
  @Input() color:string | null='';
}

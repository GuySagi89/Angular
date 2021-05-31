import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  abc:string = '';
  title = 'my-dream-app';



  click(){
    this.abc='clicked';
  }
}

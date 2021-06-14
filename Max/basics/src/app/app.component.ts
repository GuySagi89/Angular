import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 isParagraphDisplayed=false;
  clickLog:string[] =[];

  onClick(){
    var d=new Date(Date.now());
    this.isParagraphDisplayed=!this.isParagraphDisplayed;
    this.clickLog.push(d.getTime().toString());
  }
}

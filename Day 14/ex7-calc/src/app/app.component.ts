import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

//data
export class AppComponent {
    n1: number = 0;
    n2: number = 0;
    addResult: number = 0;
    subResult: number = 0;
    multResult: number = 0;

    //methods
    setNumber1(n: string) {
        this.n1 = Number(n);
    }

    setNumber2(n: string) {
        this.n2 = Number(n);
    }

    setCalcResults() {
        this.addResult = this.add(this.n1, this.n2);
        this.subResult = this.sub(this.n1, this.n2);
        this.multResult = this.mult(this.n1, this.n2);
    }

    add(n1: number, n2: number) {
        return n1 + n2;
    }

    sub(n1: number, n2: number) {
        return n1 - n2;
    }

    mult(n1: number, n2: number) {
        return n1 * n2;
    }

}


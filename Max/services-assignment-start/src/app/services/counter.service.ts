import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CounterService {
  private passedToActive = 0;
  private passedToInactive = 0;

  passedToActiveUpdated = new EventEmitter<number>();
  passedToInactiveUpdated = new EventEmitter<number>();

  constructor() {}

  increasePassToActive() {
    this.passedToActive++;
    this.passedToActiveUpdated.emit(this.passedToActive);
    console.log("active:" + this.passedToActive);
  }

  increasePassToInactive() {
    this.passedToInactive++;
    this.passedToInactiveUpdated.emit(this.passedToInactive);

    console.log("inactive:" + this.passedToInactive);
  }
}

import { Injectable, OnInit } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable({
  providedIn: "root",
})
export class UserSwitchService {
  private activeUsers = [];
  private inactiveUsers = [];

  constructor(private counterService: CounterService) {
    this.activeUsers = ["Max", "Anna"];
    this.inactiveUsers = ["Chris", "Manu"];
  }

  getActiveUsers() {
    return this.activeUsers;
  }

  getInactiveUsers() {
    return this.inactiveUsers;
  }

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.increasePassToInactive();
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.increasePassToActive();
  }
}

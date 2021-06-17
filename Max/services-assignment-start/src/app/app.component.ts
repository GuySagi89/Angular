import { Component, OnInit } from "@angular/core";
import { CounterService } from "./services/counter.service";
import { UserSwitchService } from "./services/user-switch.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  activeUsers = [];
  inactiveUsers = [];

  activePassCounter = 0;
  inactivePassCounter = 0;

  constructor(
    private userSwitchService: UserSwitchService,
    private counterService: CounterService
  ) {}

  ngOnInit(): void {
    this.activeUsers = this.userSwitchService.getActiveUsers();
    this.inactiveUsers = this.userSwitchService.getInactiveUsers();

    this.counterService.passedToActiveUpdated.subscribe(
      (value: number) => (this.activePassCounter = value)
    );

    this.counterService.passedToInactiveUpdated.subscribe(
      (value: number) => (this.inactivePassCounter = value)
    );
  }
}

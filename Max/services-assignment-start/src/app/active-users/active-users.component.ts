import { Component, EventEmitter, Input, Output } from "@angular/core";
import { UserSwitchService } from "../services/user-switch.service";

@Component({
  selector: "app-active-users",
  templateUrl: "./active-users.component.html",
  styleUrls: ["./active-users.component.css"],
})
export class ActiveUsersComponent {
  constructor(private userSwitchService: UserSwitchService) {}

  @Input() users: string[];

  onSetToInactive(id: number) {
    this.userSwitchService.onSetToInactive(id);
  }
}

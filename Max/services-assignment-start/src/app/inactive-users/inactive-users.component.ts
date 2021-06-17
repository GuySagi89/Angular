import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserSwitchService } from '../services/user-switch.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {


  @Input() users: string[];

constructor(private userSwitchService:UserSwitchService){

}

  onSetToActive(id: number) {
    this.userSwitchService.onSetToActive(id);
  }
}

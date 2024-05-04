import {Component} from '@angular/core';
import { LoggedUserService } from "../services/logged-user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  constructor(public loggedUserService: LoggedUserService) {}
}

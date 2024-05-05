import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggedUserService {
  private sessionStorageKey = 'loggedUser';
  private loggedUser: BehaviorSubject<boolean>;
  private whatAClickSubject: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);

  constructor() {
    const storedLoggedUser = sessionStorage.getItem(this.sessionStorageKey);
    console.log(storedLoggedUser);
    if (storedLoggedUser !== null) {
      this.loggedUser = new BehaviorSubject<boolean>(JSON.parse(storedLoggedUser));
    } else {
      this.loggedUser = new BehaviorSubject<boolean>(false);
    }
    console.log(this.loggedUser);
  }

  get getLoggedUser() {
    return this.loggedUser;
  }
  getWhatAClick(): Observable<string | undefined> {
    return this.whatAClickSubject.asObservable();
  }

  setWhatAClick(value: string) {
    this.whatAClickSubject.next(value);
  }

  setLoggedUser(value: boolean) {
    this.loggedUser.next(value);
    sessionStorage.setItem(this.sessionStorageKey, JSON.stringify(value));
  }
}

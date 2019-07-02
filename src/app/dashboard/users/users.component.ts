import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import { Subscription } from 'rxjs';
import 'simplebar';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  public users = [];
  public activeUser: any;
  public activeLi;
  public userAPIError = false;
  public loading = false;
  private usersSubscription: Subscription;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.usersSubscription = this.userService.getUsers().subscribe( (users: any) => {
      this.loading = false;
        this.users = users.results;
      this.activeUser = this.users[0];
      this.activeLi = 0;
    }, error => {
      this.userAPIError = true;
      this.loading = false;
    });
  }

  selectUser(i) {
    this.activeUser = this.users[i];
    this.activeLi = i;
  }

  ngOnDestroy() {
    this.usersSubscription.unsubscribe();
  }
}

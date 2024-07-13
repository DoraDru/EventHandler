import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit, OnDestroy {
  collapsed = true;
  userSub!: Subscription;
  isAuthenticated = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userSub = this.userService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
    this.userService.autologin();
  }

  logout(){
    this.userService.logout();
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}

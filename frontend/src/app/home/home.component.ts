import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { Subscription } from 'rxjs';
import { AuthenticatedUser } from '../auth/authenticated-user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  userSub!: Subscription;
  currentUser: AuthenticatedUser | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userSub = this.userService.user.subscribe((user) => {
      this.currentUser = user;
    });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (!this.form.valid) {
      return;
    }

    const password = this.form.get('password')?.value;
    const name = this.form.get('name')?.value;

    this.userService.login(name, password).subscribe();
    this.form.reset();
    this.router.navigate(['/'])
  }

  onCancel() {
    this.form.reset();
    this.router.navigate(['/']);
  }
}

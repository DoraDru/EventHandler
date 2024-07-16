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
  errorMessage = '';

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onLogin() {
    if (!this.form.valid) {
      return;
    }

    const password = this.form.get('password')?.value;
    const name = this.form.get('name')?.value;

    this.userService.login(name, password).subscribe({
      next: () => {
        this.form.reset();
        this.errorMessage = '';
        this.router.navigate(['/']);
      },
      error: (error) => {
        this.errorMessage = error;
      },
    });
  }

  onCancel() {
    this.form.reset();
    this.router.navigate(['/']);
  }
}

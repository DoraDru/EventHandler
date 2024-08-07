import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordMatchValidator } from '../password-match.validator';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',
})
export class RegistrationComponent implements OnInit {
  form!: FormGroup;
  errorMessage = '';

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.form = new FormGroup(
      {
        name: new FormControl('', [Validators.required]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(12),
        ]),
        confirmPassword: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(12),
        ]),
      },
      { validators: passwordMatchValidator }
    );
  }

  onRegister() {
    this.userService
      .register(this.form.get('name')?.value, this.form.get('password')?.value)
      .subscribe({
        next: () => {
          this.router.navigate(['/signin'])
        },
        error: (error) => {
          console.log(error.error)
          this.errorMessage = error.error
        },
      });
  }

  onCancel() {
    this.form.reset();
    this.router.navigate(['/']);
  }
}

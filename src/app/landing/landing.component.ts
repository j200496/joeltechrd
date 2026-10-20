import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  readonly currentYear = new Date().getFullYear();
  submitted = false;

  readonly demoForm = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    campaign: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email]
    }),
    phone: new FormControl('', { nonNullable: true, validators: [Validators.required] })
  });

  onSubmit(): void {
    this.submitted = false;

    if (this.demoForm.invalid) {
      this.demoForm.markAllAsTouched();
      return;
    }

    this.submitted = true;
  }
}

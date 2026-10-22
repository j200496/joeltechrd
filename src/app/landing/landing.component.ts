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

MensajeWhatsapp():void{
    const name = this.demoForm.get('name')?.value;
    const campaign = this.demoForm.get('campaign')?.value;
    const email = this.demoForm.get('email')?.value;
    const phone = this.demoForm.get('phone')?.value;

    const message = `Hola, mi nombre es ${name}. Estoy interesado en la plataforma electoral, 
    mi candidato es ${campaign}. Mi correo electrónico es ${email} y mi número de teléfono es ${phone}.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/18493577214?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  }


  onSubmit(): void {
    this.submitted = false;
    if (this.demoForm.invalid) {
      this.demoForm.markAllAsTouched();
      return;
    }

    this.submitted = true;
    this.MensajeWhatsapp();
  }
}

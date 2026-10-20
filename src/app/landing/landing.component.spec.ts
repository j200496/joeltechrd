import { TestBed } from '@angular/core/testing';
import { LandingComponent } from './landing.component';

describe('LandingComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingComponent]
    }).compileComponents();
  });

  it('should create and render the landing page', () => {
    const fixture = TestBed.createComponent(LandingComponent);
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
    expect((fixture.nativeElement as HTMLElement).querySelector('#hero-title')?.textContent).toContain('Tu campaña');
    expect((fixture.nativeElement as HTMLElement).querySelector('#contacto form')).toBeTruthy();
  });

  it('should require valid contact details before confirming a demo request', () => {
    const fixture = TestBed.createComponent(LandingComponent);
    fixture.detectChanges();
    const component = fixture.componentInstance;

    component.onSubmit();
    expect(component.submitted).toBeFalse();
    expect(component.demoForm.touched).toBeTrue();

    component.demoForm.setValue({
      name: 'Ana Pérez',
      campaign: 'Campaña local',
      email: 'ana@example.com',
      phone: '+1 555 123 4567'
    });
    component.onSubmit();

    expect(component.submitted).toBeTrue();
  });
});

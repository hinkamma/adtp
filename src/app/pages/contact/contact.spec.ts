import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of, throwError } from 'rxjs';

import { Contact } from './contact';
import { EmailjsService } from '../../shared/emailjs.service';

describe('Contact', () => {
  let component: Contact;
  let fixture: ComponentFixture<Contact>;
  let sendRequest: ReturnType<typeof vi.fn>;

  beforeEach(async () => {
    sendRequest = vi.fn(() => of(undefined));
    await TestBed.configureTestingModule({
      imports: [Contact],
      providers: [
        provideRouter([]),
        { provide: EmailjsService, useValue: { sendRequest } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Contact);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should link the email card to the configured contact address', () => {
    const emailCard = fixture.nativeElement.querySelector('[aria-label^="Envoyer un e-mail à"]');

    expect(emailCard.getAttribute('href')).toBe(`mailto:${component.emailAddress}`);
  });

  it('should show success only after EmailJS confirms the email was sent', () => {
    const formData = {
      nom: 'Jean Dupont',
      telephone: '0160751664',
      email: 'jean@example.com',
      projet: 'Rénovation de toiture',
    };
    component.formData = formData;

    component.onSubmit();

    expect(sendRequest).toHaveBeenCalledWith({
      ...formData,
      type: 'contact',
    });

    expect(component.notice?.type).toBe('success');
    expect(component.formData.nom).toBe('');
  });

  it('should show an error when EmailJS cannot send the email', () => {
    sendRequest.mockReturnValue(throwError(() => new Error('EmailJS unavailable')));
    component.onSubmit();

    expect(component.notice?.type).toBe('error');

    expect(component.notice?.message).toBe('Votre demande n’a pas pu être envoyée. Veuillez réessayer ou nous contacter par téléphone.');
  });

  it('keeps entered data and asks the user to confirm the prepared email draft', () => {
    sendRequest.mockReturnValue(of('email-client-opened'));
    component.formData = {
      nom: 'Jean Dupont',
      telephone: '0160751664',
      email: 'jean@example.com',
      projet: 'Rénovation de toiture',
    };

    component.onSubmit();

    expect(component.notice?.type).toBe('info');
    expect(component.notice?.message).toContain('confirmez son envoi');
    expect(component.formData.nom).toBe('Jean Dupont');
  });
});

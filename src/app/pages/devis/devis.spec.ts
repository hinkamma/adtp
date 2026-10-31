import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';

import { Devis } from './devis';
import { EmailjsService } from '../../shared/emailjs.service';
import type { EmailRequestResult } from '../../shared/emailjs.service';

describe('Devis', () => {
  let component: Devis;
  let fixture: ComponentFixture<Devis>;
  let sendRequest: ReturnType<typeof vi.fn>;

  beforeEach(async () => {
    sendRequest = vi.fn<EmailjsService['sendRequest']>(() => of('emailjs-sent'));
    await TestBed.configureTestingModule({
      imports: [Devis],
      providers: [
        provideRouter([]),
        { provide: EmailjsService, useValue: { sendRequest } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Devis);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should populate the work selector from the prestation detail database', () => {
    const select = fixture.nativeElement.querySelector('#typeTravaux') as HTMLSelectElement;
    const options = Array.from(select.options).slice(1);

    expect(options).toHaveLength(component.prestations.length);
    expect(options.map(option => option.value)).toEqual(component.prestations.map(prestation => prestation.id));
  });

  it('should submit the selected prestation label through EmailJS', () => {
    component.formData = {
      nom: 'Jean Dupont',
      email: 'jean@example.com',
      telephone: '0160751664',
      codePostal: '91280',
      typeTravaux: component.prestations[0].id,
      message: 'Rénovation de toiture',
    };

    component.onSubmit();

    expect(sendRequest).toHaveBeenCalledWith(expect.objectContaining({
      typeTravaux: component.prestations[0].title,
      type: 'devis',
    }));

    expect(component.notice?.type).toBe('success');
    expect(component.submitting).toBe(false);
  });

  it('keeps quote details when the email client fallback is used', () => {
    sendRequest.mockReturnValue(of('email-client-opened'));
    component.formData = {
      nom: 'Jean Dupont',
      email: 'jean@example.com',
      telephone: '0160751664',
      codePostal: '91280',
      typeTravaux: component.prestations[0].id,
      message: 'Rénovation de toiture',
    };

    component.onSubmit();

    expect(component.notice?.type).toBe('info');
    expect(component.formData.nom).toBe('Jean Dupont');
    expect(component.notice?.message).toContain('confirmez son envoi');
  });

  it('updates the visible toast and releases the submit button after an async response', async () => {
    const response = new Subject<EmailRequestResult>();
    sendRequest.mockReturnValue(response as Observable<EmailRequestResult>);
    component.formData = {
      nom: 'Jean Dupont',
      email: 'jean@example.com',
      telephone: '0160751664',
      codePostal: '91280',
      typeTravaux: component.prestations[0].id,
      message: 'Rénovation de toiture',
    };

    component.onSubmit();
    expect(component.submitting).toBe(true);

    response.next('emailjs-sent');
    response.complete();
    await fixture.whenStable();

    expect(component.submitting).toBe(false);
    expect(component.notice?.type).toBe('success');
    expect(fixture.nativeElement.querySelector('.alert-success')?.textContent).toContain('bien été envoyée');
  });
});

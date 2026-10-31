import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';

import { Home } from './home';
import { EmailjsService } from '../../shared/emailjs.service';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;
  let sendRequest: ReturnType<typeof vi.fn>;

  beforeEach(async () => {
    sendRequest = vi.fn(() => of('emailjs-sent'));
    await TestBed.configureTestingModule({
      imports: [Home],
      providers: [
        provideRouter([]),
        { provide: EmailjsService, useValue: { sendRequest } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('keeps quote details when the email client fallback is used', () => {
    sendRequest.mockReturnValue(of('email-client-opened'));
    component.devisData = {
      typeTravaux: component.prestations[0].id,
      projet: 'Rénovation de toiture',
      codePostal: '91280',
      nom: 'Jean Dupont',
      telephone: '0160751664',
      email: 'jean@example.com',
    };

    component.onSubmitDevis();

    expect(component.devisNotice?.type).toBe('info');
    expect(component.devisData.nom).toBe('Jean Dupont');
    expect(component.devisNotice?.message).toContain('confirmez son envoi');
  });
});

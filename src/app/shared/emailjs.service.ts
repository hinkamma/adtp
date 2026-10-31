import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { defer, from, map, Observable, of, timeout } from 'rxjs';
import { EMAILJS_CONFIG } from './emailjs.config';
import { ADTB_EMAIL, EMAIL_REQUEST_TIMEOUT_MS } from './email';

export interface EmailRequest {
  type: 'contact' | 'devis';
  nom: string;
  email: string;
  telephone: string;
  projet: string;
  codePostal?: string;
  typeTravaux?: string;
}

export type EmailRequestResult = 'emailjs-sent' | 'email-client-opened';

@Injectable({ providedIn: 'root' })
export class EmailjsService {
  sendRequest(request: EmailRequest): Observable<EmailRequestResult> {
    const { serviceId, templateId, publicKey } = EMAILJS_CONFIG;
    if (!serviceId || !templateId || !publicKey) {
      return this.openEmailDraft(request);
    }

    return defer(() => from(emailjs.send(serviceId, templateId, {
        request_type: request.type === 'devis' ? 'Demande de devis' : 'Demande de contact',
        subject: request.type === 'devis' ? 'Nouvelle demande de devis ADTB' : 'Nouvelle demande de contact ADTB',
        to_email: ADTB_EMAIL,
        from_name: request.nom.trim(),
        reply_to: request.email.trim(),
        telephone: request.telephone.trim() || 'Non renseigné',
        code_postal: request.codePostal?.trim() || 'Non renseigné',
        type_travaux: request.typeTravaux?.trim() || 'Non renseigné',
        message: request.projet.trim(),
      }, { publicKey }))).pipe(
      timeout(EMAIL_REQUEST_TIMEOUT_MS),
      map(() => 'emailjs-sent' as const),
    );
  }

  private openEmailDraft(request: EmailRequest): Observable<EmailRequestResult> {
    if (typeof document === 'undefined') {
      return new Observable(subscriber => subscriber.error(new Error('EMAIL_CLIENT_UNAVAILABLE')));
    }

    return new Observable(subscriber => {
      const subject = request.type === 'devis'
        ? 'Nouvelle demande de devis ADTB'
        : 'Nouvelle demande de contact ADTB';
      const body = [
        `Type de demande : ${request.type === 'devis' ? 'Devis' : 'Contact'}`,
        `Nom : ${request.nom.trim()}`,
        `E-mail : ${request.email.trim()}`,
        `Téléphone : ${request.telephone.trim() || 'Non renseigné'}`,
        ...(request.codePostal ? [`Code postal : ${request.codePostal.trim()}`] : []),
        ...(request.typeTravaux ? [`Type de travaux : ${request.typeTravaux.trim()}`] : []),
        '',
        'Projet :',
        request.projet.trim(),
      ].join('\n');
      const link = document.createElement('a');
      link.href = `mailto:${ADTB_EMAIL}?${new URLSearchParams({ subject, body }).toString()}`;
      link.style.display = 'none';
      document.body.appendChild(link);

      try {
        link.click();
        subscriber.next('email-client-opened');
        subscriber.complete();
      } catch (error) {
        subscriber.error(error);
      } finally {
        link.remove();
      }
    });
  }
}

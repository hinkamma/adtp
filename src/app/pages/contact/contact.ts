import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { finalize } from 'rxjs';
import { ADTB_EMAIL } from '../../shared/email';
import { EmailjsService } from '../../shared/emailjs.service';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnDestroy {
  readonly emailAddress = ADTB_EMAIL;
  submitting = false;
  notice: { type: 'success' | 'error' | 'info'; message: string } | null = null;
  private noticeTimeout?: ReturnType<typeof setTimeout>;

  formData = {
    nom: '',
    telephone: '',
    email: '',
    projet: '',
  };

  constructor(
    private readonly emailjs: EmailjsService,
    private readonly changeDetector: ChangeDetectorRef,
  ) {}

  onSubmit(): void {
    if (this.submitting) {
      return;
    }

    this.submitting = true;
    this.notice = null;

    this.emailjs.sendRequest({
      ...this.formData,
      type: 'contact',
    }).pipe(finalize(() => {
      this.submitting = false;
      this.changeDetector.markForCheck();
    })).subscribe({
      next: result => {
        if (result === 'email-client-opened') {
          this.showNotice(
            'info',
            'Votre application de messagerie s’est ouverte avec votre demande. Vérifiez le message puis confirmez son envoi.',
          );
        } else {
          this.showNotice(
            'success',
            'Votre demande a bien été envoyée. Notre équipe vous répondra rapidement.',
          );
          this.formData = { nom: '', telephone: '', email: '', projet: '' };
        }
      },
      error: error => {
        this.showNotice(
          'error',
          error instanceof Error && error.name === 'TimeoutError'
              ? 'Le service met trop de temps à répondre. Votre demande n’a pas été confirmée : veuillez réessayer ou nous appeler au 01 60 75 16 64.'
              : 'Votre demande n’a pas pu être envoyée. Veuillez réessayer ou nous contacter par téléphone.',
        );
      },
    });
  }

  ngOnDestroy(): void {
    if (this.noticeTimeout) {
      clearTimeout(this.noticeTimeout);
    }
  }

  private showNotice(type: 'success' | 'error' | 'info', message: string): void {
    if (this.noticeTimeout) {
      clearTimeout(this.noticeTimeout);
    }

    this.notice = { type, message };
    if (type === 'info') {
      return;
    }

    this.noticeTimeout = setTimeout(() => {
      this.notice = null;
      this.noticeTimeout = undefined;
      this.changeDetector.markForCheck();
    }, 6000);
  }
}

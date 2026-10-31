import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { finalize } from 'rxjs';
import { EmailjsService } from '../../shared/emailjs.service';
import { PRESTATIONS_DATABASE } from '../prestation-detail-component/prestation-detail-component';

@Component({
  selector: 'app-devis',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './devis.html',
  styleUrl: './devis.css',
})
export class Devis {
  submitting = false;
  notice: { type: 'success' | 'error' | 'info'; message: string } | null = null;

  // Modèle de données du formulaire
  formData = {
    nom: '',
    email: '',
    telephone: '',
    codePostal: '',
    typeTravaux: '',
    message: ''
  };

  readonly prestations = Object.values(PRESTATIONS_DATABASE).map(prestation => ({
    id: prestation.id,
    title: prestation.heroTitle,
  }));

  constructor(
    private route: ActivatedRoute,
    private readonly emailjs: EmailjsService,
    private readonly changeDetector: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    // Récupère le paramètre "projet" ou "type" s'il est présent dans l'URL (ex: /devis?projet=refection-toiture)
    this.route.queryParams.subscribe(params => {
      if (params['projet']) {
        this.formData.message = `Bonjour, je souhaite obtenir un devis similaire au projet : ${params['projet']}.`;
      }
    });
  }

  onSubmit(): void {
    if (this.submitting) {
      return;
    }

    this.submitting = true;
    this.notice = null;
    const selectedPrestation = this.prestations.find(prestation => prestation.id === this.formData.typeTravaux);
    if (!selectedPrestation) {
      this.notice = {
        type: 'error',
        message: 'Veuillez sélectionner une prestation avant d’envoyer votre demande.',
      };
      this.submitting = false;
      return;
    }

    this.emailjs.sendRequest({
      type: 'devis',
      nom: this.formData.nom,
      email: this.formData.email,
      telephone: this.formData.telephone,
      codePostal: this.formData.codePostal,
      typeTravaux: selectedPrestation.title,
      projet: this.formData.message,
    }).pipe(finalize(() => {
      this.submitting = false;
      this.changeDetector.markForCheck();
    })).subscribe({
      next: result => {
        this.notice = result === 'email-client-opened'
          ? {
            type: 'info',
            message: 'Votre application de messagerie s’est ouverte avec votre demande. Vérifiez le message puis confirmez son envoi.',
          }
          : {
            type: 'success',
            message: 'Votre demande de devis a bien été envoyée.',
          };
      },
      error: error => {
        this.notice = {
          type: 'error',
          message: error instanceof Error && error.name === 'TimeoutError'
              ? 'Le service met trop de temps à répondre. Votre demande n’a pas été confirmée : veuillez réessayer ou nous appeler au 01 60 75 16 64.'
              : 'Votre demande n’a pas pu être envoyée. Veuillez réessayer ou nous contacter par téléphone.',
        };
      },
    });
  }
}

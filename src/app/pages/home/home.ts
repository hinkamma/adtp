import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { finalize } from 'rxjs';
import { EmailjsService } from '../../shared/emailjs.service';
import { PRESTATIONS_DATABASE } from '../prestation-detail-component/prestation-detail-component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  submittingDevis = false;
  devisNotice: { type: 'success' | 'error' | 'info'; message: string } | null = null;

  devisData = {
    typeTravaux: '',
    projet: '',
    codePostal: '',
    nom: '',
    telephone: '',
    email: '',
  };

  expertises = [
    {
      id: 'toiture',
      title: 'Toiture',
      description: 'Rénovation, réparation et recherche de fuites.',
      image: '/assets/imgs/58844a17038808e523cff276a8f54d9cf4eada09.jpg'
    },
    {
      id: 'expertise-isolation-hydrofuge',
      title: 'Nettoyage et traitement hydrofuge',
      description: 'Démoussage, nettoyage et protection durable de la toiture.',
      image: '/assets/imgs/1974e4172d18bb19c71e521508ddf7f807d571da.png'
    },
    {
      id: 'isolation-des-combles',
      title: 'Isolation thermique',
      description: "Isolation des combles, des rampants et des murs par l'extérieur.",
      image: '/assets/imgs/Isolation.png'
    },
    {
      id: 'expertise-trait-humidite',
      title: "Traitement de l'humidité",
      description: 'Traitement des remontées capillaires, cuvelage et assainissement.',
      image: '/assets/imgs/Traitement humidité.png'
    },
    {
      id: 'expertise-charpente',
      title: 'Charpente et bois',
      description: 'Traitement contre les insectes xylophages et rénovation.',
      image: '/assets/imgs/Figure (3).png'
    },
    {
      id: 'expertise-renov-interne',
      title: 'Rénovation intérieure',
      description: "Aménagement intérieur, menuiseries et confort de l'habitat.",
      image: '/assets/imgs/df20f2d73f832c5729eeaece9a1ff8eb59a0ed0a.jpg'
    }
  ];

  readonly prestations = Object.values(PRESTATIONS_DATABASE).map(prestation => ({
    id: prestation.id,
    title: prestation.heroTitle,
  }));

  constructor(
    private readonly emailjs: EmailjsService,
    private readonly changeDetector: ChangeDetectorRef,
  ) {}

  onSubmitDevis(): void {
    if (this.submittingDevis) {
      return;
    }

    this.submittingDevis = true;
    this.devisNotice = null;
    const selectedPrestation = this.prestations.find(prestation => prestation.id === this.devisData.typeTravaux);
    if (!selectedPrestation) {
      this.devisNotice = {
        type: 'error',
        message: 'Veuillez sélectionner une prestation avant d’envoyer votre demande.',
      };
      this.submittingDevis = false;
      return;
    }

    this.emailjs.sendRequest({
      type: 'devis',
      nom: this.devisData.nom,
      telephone: this.devisData.telephone,
      email: this.devisData.email,
      codePostal: this.devisData.codePostal,
      typeTravaux: selectedPrestation.title,
      projet: this.devisData.projet || `Demande de devis pour ${selectedPrestation.title}`,
    }).pipe(finalize(() => {
      this.submittingDevis = false;
      this.changeDetector.markForCheck();
    })).subscribe({
      next: result => {
        this.devisNotice = result === 'email-client-opened'
          ? {
            type: 'info',
            message: 'Votre application de messagerie s’est ouverte avec votre demande. Vérifiez le message puis confirmez son envoi.',
          }
          : {
            type: 'success',
            message: 'Votre demande de devis a bien été envoyée.',
          };
        if (result === 'emailjs-sent') {
          this.devisData = { typeTravaux: '', projet: '', codePostal: '', nom: '', telephone: '', email: '' };
        }
      },
      error: error => {
        this.devisNotice = {
          type: 'error',
          message: error instanceof Error && error.name === 'TimeoutError'
              ? 'Le service met trop de temps à répondre. Votre demande n’a pas été confirmée : veuillez réessayer ou nous appeler au 01 60 75 16 64.'
              : 'Votre demande n’a pas pu être envoyée. Veuillez réessayer ou nous contacter par téléphone.',
        };
      },
    });
  }
}

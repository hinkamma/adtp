import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-prestations',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './prestations.html',
  styleUrl: './prestations.css',
})
export class Prestations {
  // Liste des 8 prestations cliquables d'ADTB avec leur ID unique
  prestationsList = [
    {
      id: 'toiture',
      title: 'Rénovation Et Réfection De Toiture',
      description: 'Rénovation, réparation, recherche de fuites et réfection de couverture.',
      image: '/assets/imgs/58844a17038808e523cff276a8f54d9cf4eada09.jpg',
      badge: 'Extérieur',
      badgeClass: 'bg-teal text-white'
    },
    {
      id: 'expertise-isolation-hydrofuge',
      title: 'Nettoyage et traitement hydrofuge',
      description: 'Démoussage, nettoyage haute pression et traitement hydrofuge de toiture.',
      image: '/assets/imgs/1974e4172d18bb19c71e521508ddf7f807d571da.png',
      badge: 'Entretien',
      badgeClass: 'bg-teal text-white'
    },
    {
      id: 'isolation-des-combles',
      title: 'Isolation et Aménagement Des Combles',
      description: 'Isolation des combles perdus, rampants et isolation thermique par l’extérieur.',
      image: '/assets/imgs/Isolation.png',
      badge: 'Énergie RGE',
      badgeClass: 'bg-orange text-white'
    },
    {
      id: 'expertise-trait-humidite',
      title: 'Traitement de l’humidité',
      description: 'Traitement des remontées capillaires, assèchement des murs et cuvelage.',
      image: '/assets/imgs/Traitement humidité.png',
      badge: 'Assainissement',
      badgeClass: 'bg-teal text-white'
    },
    {
      id: 'expertise-charpente',
      title: 'Charpente et bois',
      description: 'Traitement contre les insectes xylophages, renforcement et protection du bois.',
      image: '/assets/imgs/Figure (3).png',
      badge: 'Structure',
      badgeClass: 'bg-teal text-white'
    },
    {
      id: 'expertise-renov-interne',
      title: 'Rénovation intérieure',
      description: 'Aménagement intérieur, cloisons, plâtrerie, peintures et agencement sur-mesure.',
      image: '/assets/imgs/df20f2d73f832c5729eeaece9a1ff8eb59a0ed0a.jpg',
      badge: 'Intérieur',
      badgeClass: 'bg-teal text-white'
    },
    {
      id: 'isolation-exterieure',
      title: 'Isolation Thermique Extérieure (ITE)',
      description: 'Ravalement isolant pour supprimer les ponts thermiques et embellir la façade.',
      image: '/assets/imgs/Réalisation ADTB 7.png',
      badge: 'Façade',
      badgeClass: 'bg-orange text-white'
    },
    {
      id: 'pompe-chaleur',
      title: 'Pompe à chaleur et ventilation',
      description: 'Installation de VMC/VMI pour réguler le taux d’hygrométrie et purifier l’air intérieur.',
      image: '/assets/imgs/climatiseur.png',
      badge: 'Confort',
      badgeClass: 'bg-teal text-white'
    }
  ];
}

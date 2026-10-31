import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PRESTATIONS_DATABASE } from '../prestation-detail-component/prestation-detail-component';

@Component({
  selector: 'app-plan',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './plan.html',
  styleUrl: './plan.css',
})
export class Plan {
  pages = [
    { title: 'Accueil', description: 'Découvrez ADTB et nos engagements.', link: '/' },
    { title: 'Nos prestations', description: 'Explorez tous nos domaines d’intervention.', link: '/Prestation' },
    { title: 'Nos réalisations', description: 'Parcourez les projets réalisés par nos équipes.', link: '/realisation' },
    { title: 'Comment ça marche ?', description: 'Les étapes de votre projet avec ADTB.', link: '/help' },
    { title: 'Nos services', description: 'Découvrez nos solutions et notre accompagnement.', link: '/services' },
    { title: 'Demander un devis', description: 'Présentez-nous votre projet de rénovation.', link: '/devis' },
    { title: 'Contact', description: 'Échangez avec notre équipe.', link: '/Contact' },
    { title: 'Mentions légales', description: 'Consultez les informations légales du site.', link: '/mentions-legales' },
    { title: 'Politique de confidentialité', description: 'Consultez les informations relatives à vos données.', link: '/politique-confidentialite' },
  ];

  expertises = Object.values(PRESTATIONS_DATABASE).map(prestation => ({
    id: prestation.id,
    title: prestation.heroTitle,
    description: prestation.title,
  }));
}

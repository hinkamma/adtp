import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-realisation',
  imports: [RouterLink, NgForOf],
  templateUrl: './realisation.html',
  styleUrl: './realisation.css',
})

export class Realisation {
  // Filtre actif pour les chantiers
  activeFilter = 'tous';

  // Liste des 12 chantiers/expertises présentés en grille
  chantiers = [
    { id: 1, title: 'Injection des murs', category: 'isolation' },
    { id: 2, title: 'Cuvelage des murs', category: 'humidite' },
    { id: 3, title: 'Hydrofuge toiture', category: 'toiture' },
    { id: 4, title: 'Inverseur de polarité', category: 'humidite' },
    { id: 5, title: 'Isolation des combles', category: 'isolation' },
    { id: 6, title: 'Toiture & sous-rampants', category: 'toiture' },
    { id: 7, title: 'Rénovation intérieure', category: 'renovation' },
    { id: 8, title: 'Isolation extérieure', category: 'isolation' },
    { id: 9, title: 'Mairie de Guignes', category: 'realisation' },
    { id: 10, title: 'Remontées capillaires', category: 'humidite' },
    { id: 11, title: 'Traitement de charpente', category: 'toiture' },
    { id: 12, title: 'Ventilation positive', category: 'ventilation' }
  ];

  // Liste des projets détaillés avec avant/après
  projets = [
    {
      title: 'Réfection complète de toiture',
      category: 'RÉNOVATION DE TOITURE EN SEINE-ET-MARNE',
      description: 'Remplacement de la couverture, traitement de la charpente et isolation thermique pour une toiture durable et performante.',
      duration: '3 semaines',
      warranty: '10 ans',
      location: 'Moissy-Cramayel',
      image: 'assets/imgs/02f8abd058938a072490e334a3f50308f06c88f5.jpg'
    },
    {
      title: 'Isolation des murs par l’extérieur (ITE)',
      category: 'ISOLATION THERMIQUE EN SEINE-ET-MARNE',
      description: 'Améliorez le confort thermique de votre maison et réduisez vos dépenses énergétiques grâce à une isolation extérieure performante.',
      duration: '2 semaines',
      warranty: '10 ans',
      location: 'Melun',
      imageBefore: 'assets/imgs/ite-avant.jpg',
      image: 'assets/imgs/0b0c2601c747f6fb85d4a78f9734c8c71393a5e9.jpg'
    },
    {
      title: 'Isolation des combles perdus',
      category: 'ISOLATION DES COMBLES EN SEINE-ET-MARNE',
      description: 'Améliorez votre confort thermique été comme hiver et réduisez vos dépenses énergétiques grâce à une isolation performante.',
      duration: '1 semaine',
      warranty: '10 ans',
      location: 'Fontainebleau',
      image: 'assets/imgs/2acd88543217d511f3cd0023043ce2b6eeb7c915.jpg'
    },
    {
      title: 'Travaux d’étanchéité de terrasse',
      category: 'ÉTANCHÉITÉ DE TERRASSE - SEINE-ET-MARNE',
      description: 'Protégez votre terrasse contre les infiltrations d’eau grâce à une étanchéité durable et performante.',
      duration: '4 jours',
      warranty: '10 ans',
      location: 'Lagny-sur-Marne',
      image: 'assets/imgs/57d75c1fb2fd6f77b3e59f60592537c56e669094.jpg'
    }
  ];

  setFilter(filter: string) {
    this.activeFilter = filter;
  }
}

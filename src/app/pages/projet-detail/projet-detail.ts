import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-projet-detail',
  imports: [RouterLink, NgForOf],
  templateUrl: './projet-detail.html',
  styleUrl: './projet-detail.css',
})
export class ProjetDetail {
  // Données du projet de rénovation détaillé
  projet = {
    title: 'Réfection complète de toiture',
    category: 'RÉNOVATION DE TOITURE EN SEINE-ET-MARNE',
    description: 'Remplacement de la couverture, traitement de la charpente et isolation thermique pour une toiture durable et performante.',
    fullDescription: 'Ce chantier complet de réfection de toiture a permis de redonner à la maison toute son étanchéité et ses performances thermiques d\'origine. Nos équipes ont procédé au détuilage complet, au nettoyage et au traitement fongicide de la charpente bois, à la pose d\'un écran sous-toiture hautement respirant, puis à la mise en place de nouvelles tuiles en terre cuite conformes aux exigences architecturales locales.',
    duration: '3 semaines',
    warranty: '10 ans',
    location: 'Moissy-Cramayel',
    surface: '140 m²',
    imageAvantApres: 'assets/imgs/Comparaison avant et après nettoyage d’une toiture.png',
    pointsCles: [
      'Dépose de l\'ancienne couverture usée et amiantée / poreuse',
      'Traitement curatif et préventif de la charpente contre les xylophages',
      'Pose d\'un isolant thermique haute performance sous rampants',
      'Installation de tuiles terre cuite grand moule'
    ]
  };
}

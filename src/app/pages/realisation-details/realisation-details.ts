import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-realisation-details',
  imports: [RouterLink, NgForOf],
  templateUrl: './realisation-details.html',
  styleUrl: './realisation-details.css',
})
export class RealisationDetails {
  // Base de données simulée de toutes les réalisations ADTB
  realisationsData: { [key: string]: any } = {
    '1': {
      id: '1',
      category: '01 TRAITEMENT DE L\'HUMIDITÉ DES MURS PORTEURS',
      title: 'Traitement des murs humides par injection',
      heroTitle: "Traitement de l'humidité des murs par injection",
      subtitle: 'ADTB : expertise en traitement de l\'humidité des murs par injection',
      description1: 'ADTB traite l\'humidité des murs par injection grâce à des techniques adaptées pour lutter contre les remontées capillaires et préserver les structures existantes.',
      description2: 'Cette intervention cible directement la source du problème pour garantir une assainissement durable de votre habitat.',
      stepsTitle: 'LES ÉTAPES CLÉS DU CHANTIER DU TRAITEMENT DES MURS',
      steps: [
        'Injection de résines hydrophobes ou de gels silicates pour bloquer les remontées capillaires.',
        'Intervention ciblée contre l\'humidité, sans dégrader la façade.',
        'Préservez durablement vos murs et améliorez la qualité de l\'air intérieur.'
      ],
      images: [
        'assets/imgs/injection-mur-1.jpg',
        'assets/imgs/injection-mur-2.jpg'
      ]
    },
    '2': {
      id: '2',
      category: '02 RÉFECTION DE TOITURE & CHARPENTE',
      title: 'Rénovation complète de toiture en tuiles',
      heroTitle: "Réfection complète de toiture et charpente",
      subtitle: 'ADTB : rénovation et isolation thermique de toiture',
      description1: 'Remplacement de la couverture usée, traitement fongicide de la charpente et pose d\'un isolant haute performance.',
      description2: 'Un chantier d\'envergure mené de main de maître par nos équipes certifiées pour assurer l\'étanchéité parfaite de la maison.',
      stepsTitle: 'LES ÉTAPES CLÉS DU CHANTIER DE TOITURE',
      steps: [
        'Dépose et évacuation de l\'ancienne couverture.',
        'Traitement préventif et curatif de la charpente bois.',
        'Pose d\'un écran sous-toiture et de nouvelles tuiles terre cuite.'
      ],
      images: [
        'assets/imgs/toiture-1.jpg',
        'assets/imgs/toiture-2.jpg'
      ]
    }
    // Tu peux facilement ajouter d'autres réalisations ici ('3', '4', etc.)
  };

  currentRealisation: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Récupère l'ID depuis l'URL (ex: /realisations/1)
    this.route.paramMap.subscribe(params => {
      const id = params.get('id') || '1';
      this.currentRealisation = this.realisationsData[id] || this.realisationsData['1'];
    });
  }
}

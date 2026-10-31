import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgForOf } from '@angular/common';

interface ProjetData {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  stepsTitle: string;
  steps: string[];
  images?: string[];
}

@Component({
  selector: 'app-projet-detail',
  imports: [RouterLink, NgForOf],
  templateUrl: './projet-detail.html',
  styleUrl: './projet-detail.css',
})
export class ProjetDetail {


  // Base de données complète des 12 chantiers ADTB
  projetsData: Record<string, ProjetData> = {
    '1': {
      id: '1',
      category: '01 TRAITEMENT DE L\'HUMIDITÉ DES MURS PORTEURS',
      title: 'Traitement des murs humides par injection',
      subtitle: 'ADTB : expertise en traitement de l\'humidité des murs par injection',
      description: 'ADTB traite l\'humidité des murs par injection grâce à des techniques adaptées pour lutter contre les remontées capillaires et préserver les structures existantes.',
      stepsTitle: 'LES ÉTAPES CLÉS DU CHANTIER DU TRAITEMENT DES MURS',
      steps: [
        'Injection de résines hydrophobes ou de gels silicates pour bloquer les remontées capillaires.',
        'Intervention ciblée contre l\'humidité, sans dégrader la façade.',
        'Préservez durablement vos murs et améliorez la qualité de l\'air intérieur.'
      ],
      images: ['assets/imgs/c6145683f454898d9c19dd2dd98c34cf981af459.jpg', 'assets/imgs/Réalisation ADTB 3.png']
    },
    '2': {
      id: '2',
      category: '02 RÉFECTION DE TOITURE & CHARPENTE',
      title: 'Rénovation complète de toiture et charpente',
      subtitle: 'ADTB : rénovation et isolation thermique de toiture',
      description: 'Remplacement de la couverture usée, traitement fongicide de la charpente et pose d\'un écran sous-toiture pour garantir une étanchéité parfaite.',
      stepsTitle: 'LES ÉTAPES CLÉS DU CHANTIER DE TOITURE',
      steps: [
        'Dépose et évacuation de l\'ancienne couverture usée.',
        'Traitement curatif et préventif de la charpente contre les xylophages.',
        'Pose d\'un isolant thermique haute performance sous rampants.'
      ],
      images: ['assets/imgs/42296ae413fc393cae1666b5eaa2145578660e26.png', 'assets/imgs/f6a859ebc769b7ae1bed09c29524fa77fc84846a.jpg']
    },
    '3': {
      id: '3',
      category: '03 ISOLATION THERMIQUE PAR L\'EXTÉRIEUR',
      title: 'Isolation thermique par l\'extérieur (ITE)',
      subtitle: 'ADTB : performance énergétique et ravalement',
      description: 'Améliorez l\'efficacité énergétique de votre habitat tout en modernisant l\'esthétique de vos façades grâce à notre solution d\'isolation extérieure.',
      stepsTitle: 'LES ÉTAPES CLÉS DU CHANTIER D\'ISOLATION',
      steps: [
        'Préparation et nettoyage minutieux des façades.',
        'Pose des panneaux isolants haute performance.',
        'Application de l\'enduit de finition de votre choix.'
      ],
      images: ['assets/imgs/ccac6fcda86ab2e31cf26278aeebf7b6308bdf2e.jpg', 'assets/imgs/8af9853689bc2f1da0e633bbc3315ef7085cfb22.jpg']
    },
    '4': {
      id: '4',
      category: '04 TRAITEMENT DE L\'HUMIDITÉ',
      title: 'Traitement des remontées capillaires et cuvelage',
      subtitle: 'ADTB : assainissement des caves et sous-sols',
      description: 'Intervention professionnelle pour imperméabiliser les murs enterrés et stopper définitivement les infiltrations d\'eau dans les sous-sols.',
      stepsTitle: 'LES ÉTAPES CLÉS DU CUVELAGE',
      steps: [
        'Piquage des anciens enduits dégradés.',
        'Application d\'un mortier étanche multicouche.',
        'Mise en place d\'un système de drainage si nécessaire.'
      ],
      images: ['assets/imgs/73d168b8c8ec7bd6e48a8ece62935d4b86ca42eb.jpg', 'assets/imgs/74a19f945310ad95dc822beec45bb0e947eb19a1.jpg']
    },
    '5': {
      id: '5',
      category: '05 AMÉNAGEMENT DE COMBLES',
      title: 'Isolation et aménagement de combles perdus',
      subtitle: 'ADTB : valorisez chaque mètre carré',
      description: 'Optimisez l\'espace de votre maison et réduisez vos factures de chauffage grâce à l\'isolation thermique performante de vos combles.',
      stepsTitle: 'LES ÉTAPES CLÉS DE L\'AMÉNAGEMENT',
      steps: [
        'Soufflage d\'isolant en laine minérale ou pose de rouleaux.',
        'Vérification de la ventilation de la toiture.',
        'Garantie d\'un confort thermique optimal été comme hiver.'
      ],
      images: ['assets/imgs/310b149f74e6f2d411d5e98eb58acde44308c4c9.jpg', 'assets/imgs/244e22bfc6a6bc1abb118a1d8eab48e1379f51ad.jpg']
    },
    '6': {
      id: '6',
      category: '06 ENTRETIEN DE TOITURE',
      title: 'Remplacement de la toiture de la Mairie de Guignes',
      subtitle: 'ADTB : protection durable contre les mousses',
      description: 'Élimination en profondeur des mousses, lichens et pollution, suivie de l\'application d\'un traitement hydrofuge imperméabilisant.',
      stepsTitle: 'LES ÉTAPES CLÉS DU DÉMOUSSAGE',
      steps: [
        'Nettoyage basse/moyenne pression de la couverture.',
        'Application d\'un produit fongicide et anti-mousse.',
        'Pulvérisation de l\'hydrofuge incolore de protection.'
      ],
      images: ['assets/imgs/eafa7aed1f049fc78340d52857847a9ffcbaab4d (2).jpg', 'assets/imgs/6d4c5c86f4198b757ad6159c4813a2331e613b64.jpg']
    },
    '7': {
      id: '7',
      category: '07 TRAITEMENT DES BOIS',
      title: 'Traitement des charpentes contre les xylophages',
      subtitle: 'ADTB : protection de la structure bois',
      description: 'Traitement curatif et préventif par injection et pulvérisation pour éradiquer les insectes à larves xylophages (capricornes, vrillettes).',
      stepsTitle: 'LES ÉTAPES CLÉS DU TRAITEMENT',
      steps: [
        'Brossage et bûchage des parties vermoulues.',
        'Perçage et mise en place d\'injecteurs.',
        'Injection sous pression du produit traitant et pulvérisation de surface.'
      ],
      images: ['assets/imgs/eafa7aed1f049fc78340d52857847a9ffcbaab4d (2).jpg', 'assets/imgs/6d4c5c86f4198b757ad6159c4813a2331e613b64.jpg']
    },
    '8': {
      id: '8',
      category: '08 RÉNOVATION INTÉRIEURE',
      title: 'Rénovation intérieure globale et cloisonnement',
      subtitle: 'ADTB : réagencement de votre habitat',
      description: 'Travaux complets d\'aménagement intérieur, pose de cloisons sèches, plâtrerie, faux plafonds et finitions sur-mesure.',
      stepsTitle: 'LES ÉTAPES CLÉS DU CHANTIER',
      steps: [
        'Mise en place des structures métalliques et isolants acoustiques.',
        'Pose des plaques de plâtre (BA13).',
        'Réalisation des joints et préparation aux peintures.'
      ],
      images: ['assets/imgs/interieur-1.jpg', 'assets/imgs/interieur-2.jpg']
    },
    '9': {
      id: '9',
      category: '09 VENTILATION DE L\'HABITAT',
      title: 'Installation de systèmes de ventilation (VMI / VMC)',
      subtitle: 'ADTB : purifiez l\'air de votre maison',
      description: 'Installation de systèmes de ventilation mécanique contrôlée ou insufflation pour réguler l\'humidité et garantir un air sain.',
      stepsTitle: 'LES ÉTAPES CLÉS DE L\'INSTALLATION',
      steps: [
        'Étude technique des flux d\'air dans le logement.',
        'Pose des gaines et des bouches d\'extraction/insufflation.',
        'Raccordement et paramétrage du caisson central.'
      ],
      images: ['assets/imgs/eafa7aed1f049fc78340d52857847a9ffcbaab4d (2).jpg', 'assets/imgs/6d4c5c86f4198b757ad6159c4813a2331e613b64.jpg']
    },
    '10': {
      id: '10',
      category: '10 MENUISERIES EXTÉRIEURES',
      title: 'Pose de fenêtres et baies vitrées isolantes',
      subtitle: 'ADTB : confort acoustique et thermique',
      description: 'Remplacement de vos anciennes menuiseries par des modèles en aluminium ou PVC double/triple vitrage haute performance.',
      stepsTitle: 'LES ÉTAPES CLÉS DE LA POSE',
      steps: [
        'Dépose propre des anciens cadres existants.',
        'Pose du nouveau dormant avec calfeutrement isolant.',
        'Réglage des ouvrants et finitions de propreté.'
      ],
      images: ['assets/imgs/eafa7aed1f049fc78340d52857847a9ffcbaab4d (2).jpg', 'assets/imgs/6d4c5c86f4198b757ad6159c4813a2331e613b64.jpg']
    },
    '11': {
      id: '11',
      category: '11 ISOLATION DES PLANCHERS',
      title: 'Isolation thermique des planchers bas et vides sanitaires',
      subtitle: 'ADTB : éliminez les sols froids',
      description: 'Isolation par projection ou pose de panneaux isolants en sous-face de dalle pour stopper les déperditions thermiques par le sol.',
      stepsTitle: 'LES ÉTAPES CLÉS DU CHANTIER',
      steps: [
        'Préparation et nettoyage des plafonds de vide sanitaire.',
        'Fixation mécanique des panneaux isolants adaptés.',
        'Contrôle de la continuité de l\'isolation.'
      ],
      images: ['assets/imgs/eafa7aed1f049fc78340d52857847a9ffcbaab4d (2).jpg', 'assets/imgs/6d4c5c86f4198b757ad6159c4813a2331e613b64.jpg']
    },
    '12': {
      id: '12',
      category: '12 RAVALEMENT DE FAÇADE',
      title: 'Ravalement de façade et rejointoiement',
      subtitle: 'ADTB : redonnez vie à vos murs extérieurs',
      description: 'Nettoyage, réparation des fissures, traitement des supports et application d\'enduits de protection et de finition pour vos façades.',
      stepsTitle: 'LES ÉTAPES CLÉS DU RAVALEMENT',
      steps: [
        'Nettoyage haute pression et traitement fongicide des murs.',
        'Reprise des fissures et rejointoiement de maçonnerie.',
        'Application de l\'enduit ou de la peinture de façade.'
      ],
      images: ['assets/imgs/eafa7aed1f049fc78340d52857847a9ffcbaab4d (2).jpg', 'assets/imgs/6d4c5c86f4198b757ad6159c4813a2331e613b64.jpg']
    }
  };


  currentProjet: ProjetData = this.projetsData['1'];

  get projectImages(): string[] {
    return (this.currentProjet.images ?? [])
      .filter(image => typeof image === 'string' && image.trim().length > 0)
      .slice(0, 3);
  }

  constructor(private route: ActivatedRoute) {}


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id') || '1';
      this.currentProjet = this.projetsData[id] || this.projetsData['1'];
    });
  }
}

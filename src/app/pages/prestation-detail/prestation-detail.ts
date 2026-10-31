import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgForOf } from '@angular/common';

interface PrestationDetailData {
  id: string;
  category: string;
  heroTitle: string;
  title: string;
  description1: string;
  description2: string;
  mainImage: string;
  ctaText: string;
  advantagesTitle: string;
  advantagesSubtitle: string;
  advantages: { title: string; desc: string }[];
  techniquesHeader: string;
  techniquesTitle: string;
  tech1Num: string;
  tech1Title: string;
  tech1Subtitle: string;
  tech1Desc1: string;
  tech1Desc2: string;
  tech1Image: string;
  tech1Tags: string[];
  tech2Num: string;
  tech2Title: string;
  tech2Subtitle: string;
  tech2Desc1: string;
  tech2Desc2: string;
  tech2Image: string;
  tech2Tags: string[];
  amenagementTitle: string;
  amenagementText1: string;
  amenagementText2: string;
  amenagementText3: string;
  amenagementImages: [string, string];
}

@Component({
  selector: 'app-prestation-detail',
  imports: [RouterLink, NgForOf],
  templateUrl: './prestation-detail.html',
  styleUrl: './prestation-detail.css',
})
export class PrestationDetail implements OnInit {
  prestationsData: Record<string, PrestationDetailData> = {
    'isolation-combles': {
      id: 'isolation-combles',
      category: 'UN CONFORT THERMIQUE DURABLE',
      heroTitle: 'Expert en isolation et aménagement des combles',
      title: 'Moins de déperditions de chaleur. Plus de confort au quotidien.',
      description1: 'Dans une maison mal isolée, jusqu’à 30 % des déperditions de chaleur peuvent provenir de la toiture. L’isolation des combles est donc essentielle pour améliorer le confort thermique de votre habitation et optimiser ses performances énergétiques.',
      description2: 'ADTB vous accompagne dans l’isolation de vos combles perdus ou aménageables, avec des solutions adaptées à votre maison pour limiter les pertes de chaleur, améliorer votre confort en toute saison et réduire vos dépenses énergétiques.',
      mainImage: '/assets/imgs/Isolation.png',
      ctaText: 'Étudions ensemble votre projet d’isolation des combles',

      advantagesTitle: 'LES AVANTAGES DE L\'ISOLATION DES COMBLES AU QUOTIDIEN',
      advantagesSubtitle: 'Un investissement pour votre maison. Un confort durable pour vous.',
      advantages: [
        { title: 'Conserver la chaleur en hiver.', desc: 'Une isolation des combles adaptée limite les déperditions de chaleur par la toiture et aide à maintenir une température intérieure agréable.' },
        { title: 'Améliorer le confort thermique.', desc: 'En hiver comme en été, profitez d’un meilleur confort thermique grâce à une isolation qui protège votre maison des variations de température extérieure.' },
        { title: 'Réduire les dépenses énergétiques.', desc: 'Moins de déperditions thermiques signifie moins de besoins en chauffage et la possibilité de réaliser des économies d’énergie au quotidien.' },
        { title: 'Valoriser votre habitation.', desc: 'Améliorez les performances énergétiques de votre maison grâce à l’isolation des combles et exploitez tout le potentiel de vos combles aménageables pour créer de nouveaux espaces de vie.' }
      ],

      techniquesHeader: 'ISOLATION DES COMBLES : UNE SOLUTION ADAPTÉE À CHAQUE TOITURE',
      techniquesTitle: 'Deux techniques d’isolation. La même exigence de qualité.',
      tech1Num: '01',
      tech1Title: 'ISOLATION DES COMBLES PERDUS',
      tech1Subtitle: 'L’isolation par soufflage',
      tech1Desc1: 'Vos combles ne sont pas aménagés ? L’isolation des combles perdus par soufflage consiste à répartir uniformément un isolant en vrac sur le plancher des combles afin de créer une couche isolante qui limite les déperditions de chaleur par la toiture.',
      tech1Desc2: 'Particulièrement adaptée aux espaces difficiles d’accès, cette technique contribue à améliorer les performances thermiques de votre maison, à renforcer votre confort intérieur et à réduire vos besoins en chauffage.',
      tech1Image: '/assets/imgs/Isolant soufflé sur le plancher de combles perdus (2).png',
      tech1Tags: ['Adaptée aux combles non habitables', 'Pensée pour vos futurs espaces de vie'],

      tech2Num: '02',
      tech2Title: 'ISOLATION DES COMBLES AMÉNAGEABLES',
      tech2Subtitle: 'L’isolation sous rampants',
      tech2Desc1: 'Vous souhaitez aménager l’espace sous votre toiture ? L’isolation des combles sous rampants permet d’améliorer les performances thermiques de votre habitation tout en préservant le volume nécessaire à votre projet d’aménagement.',
      tech2Desc2: 'Chambre, bureau ou pièce de vie : transformez vos combles aménageables en un espace fonctionnel, confortable et agréable à vivre, été comme hiver.',
      tech2Image: '/assets/imgs/Isolant soufflé sur le plancher de combles perdus.png',
      tech2Tags: ['Adaptée aux combles non habitables', 'Pensée pour vos futurs espaces de vie'],

      amenagementTitle: 'Aménagement et isolation des combles : gagnez en espace et en confort thermique',
      amenagementText1: 'Aménagez vos combles pour créer un nouvel espace de vie confortable tout en optimisant l’isolation thermique et les performances énergétiques de votre maison.',
      amenagementText2: 'Vous souhaitez agrandir votre maison sans construire d’extension ? L’aménagement des combles permet d’optimiser l’espace sous votre toiture et de créer de nouvelles pièces fonctionnelles : chambre supplémentaire, bureau, salle de jeux ou suite parentale, tout en valorisant votre habitation.',
      amenagementText3: 'Nos équipes analysent la configuration de votre toiture afin de vous proposer des solutions d’isolation des combles et des matériaux adaptés à votre habitation. Notre objectif : optimiser votre surface habitable, améliorer votre confort thermique été comme hiver et contribuer à réduire vos dépenses énergétiques.',
      amenagementImages: [
        '/assets/imgs/Réalisation ADTB 8.png',
        '/assets/imgs/Réalisation ADTB 7.png'
      ]
    }
  };

  currentPrestation = this.prestationsData['isolation-combles'];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const requestedId = params.get('id')?.trim().toLowerCase();
      const id = requestedId === 'isolation-des-combles'
        ? 'isolation-combles'
        : requestedId;

      this.currentPrestation =
        (id && this.prestationsData[id]) ||
        this.prestationsData['isolation-combles'];
    });
  }
}

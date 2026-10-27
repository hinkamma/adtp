import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

export interface PrestationData {
  id: string;
  heroTitle: string;
  heroImage: string;
  category: string;
  title: string;
  description1: string;
  description2: string;
  mainImage: string;
  advantagesTitle: string;
  advantagesSubtitle: string;
  advantages: { title: string; desc: string }[];
  techniquesHeader?: string;
  techniquesTitle?: string;
  techniques?: { 
    num: string; 
    title: string; 
    subtitle: string; 
    desc1: string; 
    desc2: string| null; 
    image: string; 
    tags: string[] 
  }[];
  amenagementTitle?: string;
  amenagementText1?: string;
  amenagementText2?: string;
  amenagementImages?: string[];
}

export const PRESTATIONS_DATABASE: { [key: string]: PrestationData } = {
  
  // 1. TOITURE
  'toiture': {
    id: 'toiture',
    heroTitle: 'Rénovation et Réfection de Toiture',
    heroImage: '/assets/imgs/58844a17038808e523cff276a8f54d9cf4eada09.jpg',
    category: '01 / EXTÉRIEUR',
    title: 'Rénovation Et Réfection De Toiture',
    description1: 'La toiture est la première barrière de votre maison contre les intempéries. ADTB réalise la réfection de couverture, la réparation des éléments endommagés et la recherche de fuites[cite: 2].',
    description2: 'Nos couvreurs qualifiés interviennent avec rigueur pour assurer une étanchéité parfaite et prolonger la durée de vie de votre toit.',
    mainImage: '/assets/imgs/58844a17038808e523cff276a8f54d9cf4eada09.jpg',
    advantagesTitle: 'LES AVANTAGES D’UNE TOITURE SAINE',
    advantagesSubtitle: 'Protection et pérennité de votre habitat.',
    advantages: [
      { title: 'Étanchéité garantie', desc: 'Suppression totale des infiltrations d’eau et d’humidité.' },
      { title: 'Résistance accrue', desc: 'Matériaux robustes face aux tempêtes et aux UV.' },
      { title: 'Esthétique valorisée', desc: 'Un aspect visuel remis à neuf pour l’ensemble de la maison.' },
      { title: 'Tranquillité d’esprit', desc: 'Intervention sécurisée et garantie décennale.' }
    ]
  },

  // 2. HYDROFUGE
  'expertise-isolation-hydrofuge': {
    id: 'expertise-isolation-hydrofuge',
    heroTitle: 'Nettoyage et traitement hydrofuge',
    heroImage: '/assets/imgs/1974e4172d18bb19c71e521508ddf7f807d571da.png',
    category: '02 / ENTRETIEN',
    title: 'Nettoyage et traitement hydrofuge de toiture',
    description1: 'Démoussage, nettoyage haute pression et traitement hydrofuge pour éliminer les mousses, lichens et salissures incrustées sur vos tuiles[cite: 2].',
    description2: 'Le traitement hydrofuge crée une barrière protectrice invisible qui empêche l’eau de pénétrer tout en laissant respirer les matériaux.',
    mainImage: '/assets/imgs/1974e4172d18bb19c71e521508ddf7f807d571da.png',
    advantagesTitle: 'LES AVANTAGES DU TRAITEMENT HYDROFUGE',
    advantagesSubtitle: 'Protégez vos tuiles durablement.',
    advantages: [
      { title: 'Action anti-mousse', desc: 'Empêche la prolifération des végétaux et des algues.' },
      { title: 'Imperméabilisation', desc: 'Protège les tuiles contre le gel et l’éclatement en hiver.' },
      { title: 'Éclat d’origine', desc: 'Redonne de la couleur et de la luminosité à votre toiture.' },
      { title: 'Économie globale', desc: 'Évite un remplacement prématuré de la couverture.' }
    ]
  },

  // 3. ISOLATION DES COMBLES (Textes originaux et complets conservés)
  'isolation-des-combles': {
    id: 'isolation-des-combles',
    heroTitle: 'Expert en isolation et aménagement des combles',
    heroImage: '/assets/imgs/Isolation.png',
    category: '03 / ÉNERGIE RGE',
    title: 'Moins de déperditions de chaleur. Plus de confort au quotidien.',
    description1: 'Dans une maison mal isolée, jusqu’à 30 % des déperditions de chaleur peuvent provenir de la toiture. L’isolation des combles est donc essentielle pour améliorer le confort thermique de votre habitation et optimiser ses performances énergétiques[cite: 1].',
    description2: 'ADTB vous accompagne dans l’isolation de vos combles perdus ou aménageables, avec des solutions adaptées à votre maison pour limiter les pertes de chaleur, améliorer votre confort en toute saison et réduire vos dépenses énergétiques[cite: 1].',
    mainImage: '/assets/imgs/Combles isolés par soufflage avec repère d’épaisseur de l’isolant.png',
    
    advantagesTitle: 'LES AVANTAGES DE L’ISOLATION DES COMBLES AU QUOTIDIEN',
    advantagesSubtitle: 'Un investissement pour votre maison. Un confort durable pour vous.',
    advantages: [
      { title: 'Conserver la chaleur en hiver', desc: 'Une isolation des combles adaptée limite les déperditions de chaleur par la toiture et aide à maintenir une température intérieure agréable.' },
      { title: 'Améliorer le confort thermique', desc: 'En hiver comme en été, profitez d’un meilleur confort thermique grâce à une isolation qui protège votre maison des variations de température extérieure.' },
      { title: 'Réduire les dépenses énergétiques', desc: 'Moins de déperditions thermiques signifie moins de besoins en chauffage et la possibilité de réaliser des économies d’énergie au quotidien.' },
      { title: 'Valoriser votre habitation', desc: 'Améliorez les performances énergétiques de votre maison grâce à l’isolation des combles et exploitez tout le potentiel de vos combles aménageables pour créer de nouveaux espaces de vie.' }
    ],

    techniquesHeader: 'ISOLATION DES COMBLES : UNE SOLUTION ADAPTÉE À CHAQUE TOITURE',
    techniquesTitle: 'Deux techniques d’isolation. La même exigence de qualité.',
    techniques: [
      {
        num: '01',
        title: 'ISOLATION DES COMBLES PERDUS',
        subtitle: 'L’isolation par soufflage',
        desc1: 'Vos combles ne sont pas aménagés ? L’isolation des combles perdus par soufflage consiste à répartir uniformément un isolant en vrac sur le plancher des combles afin de créer une couche isolante qui limite les déperditions de chaleur par la toiture.',
        desc2: 'Particulièrement adaptée aux espaces difficiles d’accès, cette technique contribue à améliorer les performances thermiques de votre maison, à renforcer votre confort intérieur et à réduire vos besoins en chauffage.',
        image: '/assets/imgs/Isolant soufflé sur le plancher de combles perdus (2).png',
        tags: ['Adaptée aux combles non habitables', 'Pensée pour vos futurs espaces de vie']
      },
      {
        num: '02',
        title: 'ISOLATION DES COMBLES AMÉNAGEABLES',
        subtitle: 'L’isolation sous rampants',
        desc1: 'Vous souhaitez aménager l’espace sous votre toiture ? L’isolation des combles sous rampants permet d’améliorer les performances thermiques de votre habitation tout en préservant le volume nécessaire à votre projet d’aménagement.',
        desc2: 'Chambre, bureau ou pièce de vie : transformez vos combles aménageables en un espace fonctionnel, confortable et agréable à vivre, été comme hiver.',
        image: '/assets/imgs/Isolant soufflé sur le plancher de combles perdus.png',
        tags: ['Adaptée aux combles non habitables', 'Pensée pour vos futurs espaces de vie']
      }
    ],

    amenagementTitle: 'Aménagement et isolation des combles : gagnez en espace et en confort thermique',
    amenagementText1: 'Aménagez vos combles pour créer un nouvel espace de vie confortable tout en optimisant l’isolation thermique et les performances énergétiques de votre maison.',
    amenagementText2: 'Vous souhaitez agrandir votre maison sans construire d’extension ? L’aménagement des combles permet d’optimiser l’espace sous votre toiture et de créer de nouvelles pièces fonctionnelles.',
    amenagementImages: [
      '/assets/imgs/Rectangle 3.png'
    ]
  },

  // 4. TRAITEMENT DE L'HUMIDITÉ
  'expertise-trait-humidite': {
    id: 'expertise-trait-humidite',
    heroTitle: 'Traitement de l’humidité',
    heroImage: '/assets/imgs/Traitement humidité.png',
    category: '04 / ASSAINISSEMENT',
    title: 'Traitement de l’humidité et des remontées capillaires',
    description1: 'Traitement des remontées capillaires, assainissement des murs par injection et cuvelage pour protéger durablement votre maçonnerie.',
    description2: 'Éliminez définitivement les moisissures, le salpêtre et les odeurs d’humidité pour un air intérieur sain.',
    mainImage: '/assets/imgs/Traitement humidité.png',
    advantagesTitle: 'LES AVANTAGES DE L’ASSAINISSEMENT',
    advantagesSubtitle: 'Retrouvez un intérieur sain et sec.',
    advantages: [
      { title: 'Action curative en profondeur', desc: 'Arrête la progression de l’humidité dans les murs.' },
      { title: 'Santé préservée', desc: 'Supprime les risques respiratoires liés aux moisissures.' },
      { title: 'Protection des peintures', desc: 'Évite le décollement des revêtements et du papier peint.' },
      { title: 'Pérennité du bâti', desc: 'Empêche la dégradation prématurée des matériaux.' }
    ]
  },

  'isolation-exterieure': {
    id: 'toiture',
    heroTitle: 'Isolation thermique par l’extérieur',
    heroImage: '/assets/imgs/Réalisation ADTB 7.png',
    category: 'UN CONFORT THERMIQUE DURABLE',
    title: 'Améliorez durablement le confort de votre maison grâce à une enveloppe thermique extérieure performante.',
    description1: 'L’isolation thermique par l’extérieur (ITE) améliore les performances énergétiques de votre maison, réduit les pertes de chaleur et valorise votre façade. Chaque projet est étudié selon les caractéristiques de votre support, votre environnement et vos besoins.',
    description2: 'Nos couvreurs qualifiés interviennent avec rigueur pour assurer une étanchéité parfaite et prolonger la durée de vie de votre toit.',
    mainImage: '/assets/imgs/58844a17038808e523cff276a8f54d9cf4eada09.jpg',
    advantagesTitle: 'LES AVANTAGES D’UNE TOITURE SAINE',
    advantagesSubtitle: 'Protection et pérennité de votre habitat.',
    advantages: [
      { title: 'Étanchéité garantie', desc: 'Suppression totale des infiltrations d’eau et d’humidité.' },
      { title: 'Résistance accrue', desc: 'Matériaux robustes face aux tempêtes et aux UV.' },
      { title: 'Esthétique valorisée', desc: 'Un aspect visuel remis à neuf pour l’ensemble de la maison.' },
      { title: 'Tranquillité d’esprit', desc: 'Intervention sécurisée et garantie décennale.' }
    ]
  },

  

  // 5. CHARPENTE ET BOIS
  'expertise-charpente': {
    id: 'expertise-charpente',
    heroTitle: 'Charpente et bois',
    heroImage: '/assets/imgs/Figure (3).png',
    category: '05 / STRUCTURE',
    title: 'Traitement de charpente et protection du bois',
    description1: 'Diagnostic parasitaire, traitement curatif et préventif contre les insectes xylophages (vrillettes, capricornes) et rénovation de charpente.',
    description2: 'Nous veillons à garantir la solidité structurelle de votre toiture et de vos boiseries.',
    mainImage: '/assets/imgs/Figure (3).png',
    advantagesTitle: 'LES AVANTAGES DU TRAITEMENT BOIS',
    advantagesSubtitle: 'Sécurisez la structure de votre maison.',
    advantages: [
      { title: 'Diagnostic précis', desc: 'Identification rigoureuse des parasites du bois.' },
      { title: 'Traitement en profondeur', desc: 'Injections et pulvérisations ciblées et durables.' },
      { title: 'Solidité retrouvée', desc: 'Renforcement des éléments de charpente affaiblis.' },
      { title: 'Garantie longue durée', desc: 'Protection active contre de nouvelles infestations.' }
    ]
  },

  // 6. RÉNOVATION INTÉRIEURE
  'Expertise-renov-interne': {
    id: 'Expertise-renov-interne',
    heroTitle: 'Rénovation intérieure',
    heroImage: '/assets/imgs/df20f2d73f832c5729eeaece9a1ff8eb59a0ed0a.jpg',
    category: '06 / INTÉRIEUR',
    title: 'Rénovation intérieure et aménagement de l’habitat',
    description1: 'Aménagement intérieur, cloisons, plâtrerie, peintures et agencement sur-mesure pour moderniser vos espaces.',
    description2: 'Donnez vie à vos projets de réagencement avec des finitions soignées adaptées à votre mode de vie.',
    mainImage: '/assets/imgs/df20f2d73f832c5729eeaece9a1ff8eb59a0ed0a.jpg',
    advantagesTitle: 'LES AVANTAGES DE LA RÉNOVATION INTÉRIEURE',
    advantagesSubtitle: 'Un chez-soi moderne, fonctionnel et à votre goût.',
    advantages: [
      { title: 'Espaces optimisés', desc: 'Réagencement intelligent des pièces et des volumes.' },
      { title: 'Finitions de qualité', desc: 'Peintures, sols et cloisons posés dans les règles de l’art.' },
      { title: 'Confort de vie', desc: 'Isolation phonique et agencement ergonomique.' },
      { title: 'Sur-mesure', desc: 'Des solutions personnalisées selon vos envies.' }
    ]
  }

  

};

@Component({
  selector: 'app-prestation-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './prestation-detail-component.html',
  styleUrls: ['./prestation-detail-component.css']
})
export class PrestationDetailComponent implements OnInit {
  currentPrestation!: PrestationData;
  private readonly platformId = inject(PLATFORM_ID);

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id') || 'isolation-exterieure';
      if (PRESTATIONS_DATABASE[id]) {
        this.currentPrestation = PRESTATIONS_DATABASE[id];
      } else {
        // Fallback par défaut vers l'isolation extérieure si l'ID n'est pas trouvé
        this.currentPrestation = PRESTATIONS_DATABASE['isolation-exterieure'];
      }
      if (isPlatformBrowser(this.platformId)) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  // MÉTHODE POUR GÉRER LE DÉFILEMENT FLUIDE VERS LES ANCRES
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
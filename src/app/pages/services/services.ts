import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-services',
  imports: [RouterLink, NgForOf],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  @ViewChild('serviceTrack', { static: false }) serviceTrack!: ElementRef;

  currentIndex = 0;

  services = [
    {
      id: 'expertise-isolation-hydrofuge',
      tag: 'NETTOYAGE ET TRAITEMENT HYDROFUGE',
      title: 'Une toiture propre et protégée durablement',
      description: 'Préservez votre couverture grâce au nettoyage et au traitement hydrofuge de toiture. ADTB élimine les mousses et les salissures, tout en renforçant la protection de vos tuiles contre l’humidité et les infiltrations d’eau.',
      points: [
        'Démoussage et nettoyage de toiture',
        'Traitement hydrofuge des tuiles',
        'Protection contre l’humidité et les infiltrations d’eau'
      ],
      image: '/assets/imgs/1974e4172d18bb19c71e521508ddf7f807d571da.png',
    },
    {
      id: 'isolation-des-combles',
      tag: 'ISOLATION THERMIQUE',
      title: 'Améliorez votre confort et réduisez les pertes de chaleur',
      description: 'Une bonne isolation thermique améliore le confort de votre logement en toute saison. ADTB vous accompagne dans vos travaux d’isolation des combles, des rampants de toiture et des murs extérieurs pour optimiser la performance énergétique de votre habitat.',
      points: [
        'Isolation des combles perdus et aménagés',
        'Isolation thermique des murs par l’extérieur',
        'Amélioration du confort thermique et de la performance énergétique'
      ],
      image: '/assets/imgs/Isolation.png',
    },
    {
      id: 'expertise-trait-humidite',
      tag: 'TRAITEMENT DE L’HUMIDITÉ',
      title: 'Assainissez vos murs et protégez votre habitat',
      description: 'Murs humides, moisissures ou remontées capillaires : ADTB identifie les causes de l’humidité et vous propose des solutions adaptées pour assainir durablement votre logement et protéger vos murs.',
      points: [
        'Traitement des remontées capillaires',
        'Assainissement des murs par injection',
        'Cuvelage et protection des murs contre l’humidité'
      ],
      image: '/assets/imgs/Traitement humidité.png',
    },
    {
      id: 'expertise-charpente',
      tag: 'CHARPENTE & BOIS',
      title: 'Traitement de charpente et protection du bois',
      description: 'Les vrillettes, Capricornes et autres insectes xylophages peuvent endommager vos bois de charpente et compromettre la solidité de votre habitation.',
      points: [
        'Diagnostic de charpente et détection des infestations',
        'Traitement du bois contre les vrillettes, capricornes et autres insectes xylophages',
        'Protection préventive et curative des bois de charpente'
      ],
      image: '/assets/imgs/Figure (3).png',
    },
    {
      id: 'expertise-renov-interne',
      tag: 'RÉNOVATION INTÉRIEURE ET AMÉNAGEMENT DE L’HABITAT',
      title: 'Transformez votre intérieur en un espace qui vous ressemble',
      description: 'Envie de moderniser votre maison ou de rénover votre appartement ? ADTB vous accompagne dans vos travaux de rénovation intérieure et d’aménagement, pour créer des espaces fonctionnels, confortables et adaptés à votre mode de vie.',
      points: [
        'Rénovation et aménagement intérieur de maisons et d’appartements',
        'Optimisation et modernisation des espaces de vie',
        'Travaux d’isolation intérieure et amélioration du confort thermique'
      ],
      image: '/assets/imgs/df20f2d73f832c5729eeaece9a1ff8eb59a0ed0a.jpg',
    }
  ];

  scrollService(direction: 'left' | 'right') {
    const track = this.serviceTrack.nativeElement;
    const totalCards = this.services.length;

    if (totalCards === 0) return;

    // Gestion du défilement infini de gauche à droite ou droite à gauche
    if (direction === 'right') {
      this.currentIndex = (this.currentIndex + 1) % totalCards;
    } else {
      this.currentIndex = (this.currentIndex - 1 + totalCards) % totalCards;
    }

    const slideWidth = track.clientWidth;
    track.scrollTo({
      left: this.currentIndex * slideWidth,
      behavior: 'smooth'
    });
  }
}

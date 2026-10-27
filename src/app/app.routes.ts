import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { ExpertiseToiture } from './pages/expertise-toiture/expertise-toiture';
import { ExpertiseIsolationHydrofuge } from './pages/expertise-isolation-hydrofuge/expertise-isolation-hydrofuge';
import { ExpertiseIsolationThermique } from './pages/expertise-isolation-thermique/expertise-isolation-thermique';
import { ExpertiseTraitHumidite } from './pages/expertise-trait-humidite/expertise-trait-humidite';
import { ExpertiseCharpente } from './pages/expertise-charpente/expertise-charpente';
import { ExpertiseRenovInterne } from './pages/expertise-renov-interne/expertise-renov-interne';
import { Realisation } from './pages/realisation/realisation';
import { ProjetDetail } from './pages/projet-detail/projet-detail';
import { Devis } from './pages/devis/devis';
import { Prestations } from './pages/prestations/prestations';
import { PrestationDetail } from './pages/prestation-detail/prestation-detail';
import { MentionLegale } from './pages/mention-legale/mention-legale';
import { Political } from './pages/political/political';
import { Services } from './pages/services/services';


export const routes: Routes = [
  { path: '', component: Home },
  { path: 'Contact', component: Contact },

  { path: 'expertise-toiture', component: ExpertiseToiture },
  { path: 'expertise-isolation-hydrofuge', component: ExpertiseIsolationHydrofuge },
  { path: 'expertiseIsolationThermique', component: ExpertiseIsolationThermique },
  { path: 'expertise-trait-humidite', component: ExpertiseTraitHumidite  },
  { path: 'expertise-charpente', component: ExpertiseCharpente   },
  { path: 'Expertise-renov-interne', component: ExpertiseRenovInterne  },

  { path: 'devis', component: Devis  },






  // realisation et detail des projets
  { path: 'realisation', component: Realisation},
  { path: 'realisation/:id', component: ProjetDetail },

  { path: 'Projet-detail/:id', component: ProjetDetail },
  { path: 'Projet-detail', component: ProjetDetail },

  { path: 'services', component: Services },

    //prestation et detail

    { path: 'Prestation', component: Prestations },
    { path: 'prestation-detail/:id', component: PrestationDetail },


    { path: 'mentions-legales', component: MentionLegale  },
    { path: 'politique-confidentialite', component: Political },

  { path: '**', redirectTo: '' }
];

import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';

import { Realisation } from './pages/realisation/realisation';
import { ProjetDetail } from './pages/projet-detail/projet-detail';
import { Devis } from './pages/devis/devis';
import { Prestations } from './pages/prestations/prestations';
import { PrestationDetail } from './pages/prestation-detail/prestation-detail';
import { MentionLegale } from './pages/mention-legale/mention-legale';
import { Political } from './pages/political/political';
import { Services } from './pages/services/services';
import { PrestationDetailComponent } from './pages/prestation-detail-component/prestation-detail-component';


export const routes: Routes = [
  { path: '', component: Home },
  { path: 'Contact', component: Contact },

  // { path: 'expertise-toiture', component: ExpertiseToiture },
  // { path: 'expertise-isolation-hydrofuge', component: ExpertiseIsolationHydrofuge },
  // { path: 'expertiseIsolationThermique', component: ExpertiseIsolationThermique },
  // { path: 'expertise-trait-humidite', component: ExpertiseTraitHumidite  },
  // { path: 'expertise-charpente', component: ExpertiseCharpente   },
  // { path: 'Expertise-renov-interne', component: ExpertiseRenovInterne  },

  { path: 'devis', component: Devis  },






  // realisation et detail des projets
  { path: 'realisation', component: Realisation},
  { path: 'realisation/:id', component: ProjetDetail },

  { path: 'Projet-detail', component: ProjetDetail },

  { path: 'services', component: Services },

    //prestation et detail

    { path: 'Prestation', component: Prestations },
    { path: 'prestation-detail/:id', component: PrestationDetailComponent },


    { path: 'mentions-legales', component: MentionLegale  },
    { path: 'politique-confidentialite', component: Political },

  { path: '**', redirectTo: '' }
];

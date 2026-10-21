;
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


export const routes: Routes = [
  { path: '', component: Home },
  { path: 'Contact', component: Contact },

  { path: 'expertise-toiture', component: ExpertiseToiture },
  { path: 'expertise-isolation-hydrofuge', component: ExpertiseIsolationHydrofuge },

  { path: 'expertiseIsolationThermique', component: ExpertiseIsolationThermique },
  { path: 'expertise-trait-humidite', component: ExpertiseTraitHumidite  },
  { path: 'expertise-charpente', component: ExpertiseCharpente   },
  { path: 'Expertise-renov-interne', component: ExpertiseRenovInterne  },


   { path: 'realisation', component: Realisation},
  { path: '**', redirectTo: '' }
];

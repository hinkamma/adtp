;
import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { ExpertiseToiture } from './pages/expertise-toiture/expertise-toiture';
import { ExpertiseIsolationHydrofuge } from './pages/expertise-isolation-hydrofuge/expertise-isolation-hydrofuge';
import { ExpertiseIsolationThermique } from './pages/expertise-isolation-thermique/expertise-isolation-thermique';
import { ExpertiseTraitHumidite } from './pages/expertise-trait-humidite/expertise-trait-humidite';


export const routes: Routes = [
  { path: '', component: Home },
  { path: 'Contact', component: Contact },  
  
  { path: 'expertise-toiture', component: ExpertiseToiture }, 
  { path: 'expertise-isolation-hydrofuge', component: ExpertiseIsolationHydrofuge }, 

  { path: 'expertiseIsolationThermique', component: ExpertiseIsolationThermique }, 
  { path: 'expertise-trait-humidite', component: ExpertiseTraitHumidite  },

  { path: '**', redirectTo: '' }
];
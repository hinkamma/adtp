import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-devis',
  imports: [FormsModule, RouterLink],
  templateUrl: './devis.html',
  styleUrl: './devis.css',
})
export class Devis {
  // Modèle de données du formulaire
  formData = {
    nom: '',
    email: '',
    telephone: '',
    codePostal: '',
    typeTravaux: 'Toiture',
    message: ''
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Récupère le paramètre "projet" ou "type" s'il est présent dans l'URL (ex: /devis?projet=refection-toiture)
    this.route.queryParams.subscribe(params => {
      if (params['projet']) {
        this.formData.message = `Bonjour, je souhaite obtenir un devis similaire au projet : ${params['projet']}.`;
      }
    });
  }

  onSubmit() {
    console.log('Formulaire soumis :', this.formData);
    alert('Votre demande de devis a bien été envoyée ! Un expert ADTB vous recontactera rapidement.');
  }
}

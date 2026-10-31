import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PRESTATIONS_DATABASE } from '../../pages/prestation-detail-component/prestation-detail-component';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  expertises = Object.values(PRESTATIONS_DATABASE);
}

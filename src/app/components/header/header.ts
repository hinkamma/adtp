import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {

  // Bascule l'affichage du menu mobile directement via une classe sur l'élément
  toggleMenu(): void {
    const mobileMenu = document.getElementById('mobileMenuDropdown');
    if (mobileMenu) {
      mobileMenu.classList.toggle('show-menu');
    }
  }

  // Ferme le menu lorsqu'on clique sur un lien
  closeMenu(): void {
    const mobileMenu = document.getElementById('mobileMenuDropdown');
    if (mobileMenu) {
      mobileMenu.classList.remove('show-menu');
    }
  }
}

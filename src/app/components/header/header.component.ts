import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';  // Import du module MatToolbar
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,  // Si c'est un composant standalone
  imports: [MatToolbarModule, RouterLink],  // Ajoute le module ici
  styleUrls: ['./header.component.scss'],
  templateUrl:'./header.component.html',
})
export class HeaderComponent {}

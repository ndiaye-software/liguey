import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';  // Importer le module mat-toolbar
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  standalone: true,  // Si c'est un composant standalone
  imports: [MatToolbarModule, MatIconModule],  // Assurez-vous que MatToolbarModule est importé
  styleUrls: ['./footer.component.scss'],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
}

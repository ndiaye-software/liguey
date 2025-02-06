import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';  // Importer le module mat-toolbar

@Component({
  selector: 'app-footer',
  standalone: true,  // Si c'est un composant standalone
  imports: [MatToolbarModule],  // Assurez-vous que MatToolbarModule est importé
  styleUrls: ['./footer.component.scss'],
  templateUrl: './footer.component.html',
})
export class FooterComponent {}

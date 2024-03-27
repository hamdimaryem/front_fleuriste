import { Component } from '@angular/core';
import { InterfaceComponent } from './interface.component'; // Importez votre service InterfaceComponent

@Component({
  selector: 'app-modifier2',
  templateUrl: './modifier2.component.html',
  styleUrls: ['./modifier2.component.css']
})
export class Modifier2Component {

  constructor(private interfaceService: InterfaceComponent) { } // Injectez votre service InterfaceComponent
  modifierFleuriste() {
    // Supposons que vous avez les détails du fleuriste à mettre à jour dans une variable appelée fleuristeToUpdate
    const fleuristeToUpdate = {
      // Propriétés du fleuriste à mettre à jour
      nom: 'Nouveau Nom',
      lieu: 'Nouveau Lieu',
      avis: 4.5,
      prixMoyen: 30,
      email: 'nouveau@email.com',
      numeroTelephone: '12345678',
      services: ['Décoration', 'Fleurs'],
      // Autres propriétés du fleuriste...
    };
  
    // Appelez votre service pour mettre à jour les informations du fleuriste
    this.interfaceService.updateFleuriste(fleuristeToUpdate).subscribe(
      (data) => {
        console.log('Informations du fleuriste mises à jour :', data);
        // Gérez la réponse de votre service, par exemple, affichez un message de réussite
      },
      (error) => {
        console.error('Erreur lors de la mise à jour des informations du fleuriste :', error);
        // Gérez les erreurs, par exemple, affichez un message d'erreur à l'utilisateur
      }
    );
  }
}
import { Component } from '@angular/core';
import { InterfaceComponent } from './interface.component'; 
import { HttpClient } from '@angular/common/http'; 
@Component({
  selector: 'app-modifier2',
  templateUrl: './modifier2.component.html',
  styleUrls: ['./modifier2.component.css']
})
export class Modifier2Component {

  constructor(private router: Router, private http: HttpClient) { } 

updateFleuriste(fleuristeData: any) {
  // Effectuez une requête POST pour mettre à jour les détails du fleuriste
  this.http.post<any>('/api/fleuriste/modifier2', fleuristeData).subscribe(
    (data) => {
      console.log('Détails du fleuriste mis à jour avec succès :', data);
      // Traitez la réponse de la requête, par exemple, affichez un message de succès
    },
    (error) => {
      console.error('Erreur lors de la mise à jour des détails du fleuriste :', error);
      // Gérez les erreurs, par exemple, affichez un message d'erreur à l'utilisateur
    }
  );
}
}

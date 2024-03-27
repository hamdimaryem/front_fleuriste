import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent {

  constructor(private router: Router, private http: HttpClient) { }

  navigateTo(route: string) {
    switch (route) {
      case 'supprimer':
        // Redirection vers l'interface de suppression
        this.router.navigate(['/supprimer']);
        break;
      case 'ajouter':
        // Redirection vers l'interface ajout fleuriste
        this.router.navigate(['/ajout']);
        break;
      case 'modifier':
        // Redirection vers l'interface modifier
        this.router.navigate(['/modify']);
        break;
      default:
        console.error(`Route "${route}" non reconnue.`);
        break;
    }
  }
  getFleuristeToModify() {
    // Effectuez une requête GET pour récupérer les détails du fleuriste à modifier
    this.http.get<any>('/api/fleuriste/modifier2').subscribe(
      (data) => {
        console.log('Détails du fleuriste récupérés avec succès :', data);
        // Traitez les données récupérées, par exemple, affectez-les à une variable pour les afficher dans l'interface
      },
      (error) => {
        console.error('Erreur lors de la récupération des détails du fleuriste à modifier :', error);
        // Gérez les erreurs, par exemple, affichez un message d'erreur à l'utilisateur
      }
    );
  }

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

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; 

interface Fleuriste {
  id: number;
  nom: string;
  lieu: string;
  avis: number;
  prixMoyen: number;
  email: string;
  numeroTelephone: string;
  services: string[];
  //image: File;
}

@Component({
  selector: 'app-fleuriste',
  templateUrl: './fleuriste.component.html',
  styleUrls: ['./fleuriste.component.css']
})
export class FleuristeComponent {
  fleuristes: Fleuriste[] = [];
  idmodify: number;
  

  constructor(private router: Router, private http: HttpClient) { }
  navigateTo(route: string){
    switch (route) {
      case 'modif2_fleuriste':
        // Redirection vers l'interface de formulaire a modifier
        this.router.navigate(['/modif2_fleuriste']);
        break;
        default:
        console.error(`Route "${route}" non reconnue.`);
        break;
    }
  }
 
  modifierFleuriste() {
    const index =-1;
    const index = this.fleuristes.findIndex(f => f.id === this.idmodify );
    if (index !== -1) {
      this.fleuristes.splice(index, 1);
      alert("on a trouvè le prestataire");
      this.idmodify = null;
      
    } else {
      alert("Fleuriste non trouvé. Vérifiez l'ID .");
    }
  }
  request() {
    console.log("Request button clicked");
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

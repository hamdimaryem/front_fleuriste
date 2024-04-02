import { Component } from '@angular/core';

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
  idSuppression: number;
  

constructor(private http: HttpClient) {}

 
supprimerFleuriste() {
  if (this.idSuppression ) {
    this.http.delete(`/api/fleuristes/${this.idSuppression}`).subscribe(
      () => {
        alert("Fleuriste supprimé avec succès.");
        this.idSuppression = null;
        
      },
      (error) => {
        console.error("Erreur lors de la suppression du fleuriste :", error);
        alert("Une erreur s'est produite lors de la suppression du fleuriste.");
      }
    );
  } else {
    alert("Veuillez spécifier l'ID et le nom du fleuriste à supprimer.");
  }
}


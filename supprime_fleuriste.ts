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
  image: File;
}

@Component({
  selector: 'app-fleuriste',
  templateUrl: './fleuriste.component.html',
  styleUrls: ['./fleuriste.component.css']
})
export class FleuristeComponent {
  fleuristes: Fleuriste[] = [];
  idSuppression: number;
  nomSuppression: string;

  constructor() { }

  supprimerFleuriste() {
    const index =-1;
    const index = this.fleuristes.findIndex(f => f.id === this.idSuppression && f.nom === this.nomSuppression);
    if (index !== -1) {
      this.fleuristes.splice(index, 1);
      alert("Fleuriste supprimé avec succès.");
      this.idSuppression = null;
      this.nomSuppression = '';
    } else {
      alert("Fleuriste non trouvé. Vérifiez l'ID et le nom.");
    }
  }
  request() {
    console.log("Request button clicked");
  }
}

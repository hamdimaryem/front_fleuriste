import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fleuriste',
  templateUrl: './fleuriste.component.html',
  styleUrls: ['./fleuriste.component.css']
})
export class FleuristeComponent {
  id: number;
  nom: string;
  lieu: string;
  avis: number;
  prixMoyen: number;
  email: string;
  numeroTelephone: string;
  services: string[];
  image: File;
  fleuristeAjoute: boolean = false;

  constructor(private router: Router) { }

  ajouterEtRediriger() {
    if (!this.nom || !this.lieu || !this.avis || !this.prixMoyen || !this.email || !this.numeroTelephone || !this.services || !this.image) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    if (this.avis < 0 || this.avis > 5) {
      alert("L'avis doit être compris entre 0 et 5.");
      return;
    }

    const nouveauFleuriste = {
      id: this.id,
      nom: this.nom,
      lieu: this.lieu,
      avis: this.avis,
      prixMoyen: this.prixMoyen,
      email: this.email,
      numeroTelephone: this.numeroTelephone,
      services: this.services,
      image: this.image
    };

    // Mettre à jour fleuristeAjoute
    this.fleuristeAjoute = true;

    // Redirection vers la page de confirmation avec les données du nouveau fleuriste
   // this.router.navigate(['/confirmation'], { state: { nouveauFleuriste } });

    // Réinitialiser fleuristeAjoute après 6 secondes
    setTimeout(() => {
      this.fleuristeAjoute = false;
    }, 60000);
  }

  resetForm() {
    this.id = null;
    this.nom = '';
    this.lieu = '';
    this.avis = null;
    this.prixMoyen = null;
    this.email = '';
    this.numeroTelephone = '';
    this.services = [];
    this.image = null;
  }

  onFileSelected(event) {
    this.image = event.target.files[0];
  }

  request() {
    console.log("Request button clicked");
  }
}


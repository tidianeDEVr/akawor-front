import { Component } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent {
  public checked = false;
  public countries: any[] = [
    {
      libelle: "Sénégal"
    },
    {
      libelle: "Mali"
    },
    {
      libelle: "Gambie"
    }
  ]

  public cities: any[] = [
    {
      libelle: "Dakar"
    },
    {
      libelle: "Thies"
    },
    {
      libelle: "Matam"
    }
  ]
  public isChecked: boolean = true;
  
  public linkAccountToFacebook(){
    alert('Bientot disponible')
  }
  public linkAccountToGoogle(){
    alert('Bientot disponible')
  }
}

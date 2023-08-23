import { Component } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent {
  public checkedEmailOffersPromos = true;
  public checkedEmailCommands = true;
  public checkedEmailDeliveries = true;
  public checkedSmsOffersPromos = true;
  public checkedSmsCommands = true;
  public checkedSmsDeliveries = true;
  public checkedWhatsappOffersPromos = true;
  public checkedWhatsappCommands = true;
  public checkedWhatsappDeliveries = true;
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

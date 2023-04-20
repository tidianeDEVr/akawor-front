import { Component } from '@angular/core';

@Component({
  selector: 'app-single-boutique',
  templateUrl: './single-boutique.component.html',
  styleUrls: ['./single-boutique.component.scss']
})
export class SingleBoutiqueComponent {
  public shopProducts = [
    '', '', '', '', '', '', '', '','', '', '', '', '', '', '',
  ];
  constructor(){
    window.addEventListener("load", function() {
      var cards = document.querySelectorAll('.product-card')
      cards.forEach(card => {
        var icon = card.querySelector('.zoom-icon');
        card.addEventListener('mouseover', ()=>{
          card.classList.add('hovered')
          if (icon) icon.classList.remove('d-none')
        })
        card.addEventListener('mouseout', ()=>{
          card.classList.remove('hovered')
          if (icon) icon.classList.add('d-none')
        })
      });
    });
  }
}

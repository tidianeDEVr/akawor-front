import { Component } from '@angular/core';

@Component({
  selector: 'app-all-produits',
  templateUrl: './all-produits.component.html',
  styleUrls: ['./all-produits.component.scss']
})
export class AllProduitsComponent {
  public loaderCards = ['', '', '', '', '', '', '', ''];
  public activeProducts = [
    '', '', '', '', '', '', '', '','', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '','', '', '', '', '', '', '', ''
  ];
  public priceRangeMin = 0;
  public priceRangeMax = 1000000;
  public isProductsLoaded: boolean = false;
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

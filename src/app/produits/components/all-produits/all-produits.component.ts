import { Component } from '@angular/core';
import { Options, LabelType } from "@angular-slider/ngx-slider";

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
  // public priceRangeMin = 0;
  // public priceRangeMax = 1000000;
  minValue: number = 100;
  maxValue: number = 400;
  options: Options = {
    floor: 0,
    ceil: 500,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "<b>Min price:</b> $" + value;
        case LabelType.High:
          return "<b>Max price:</b> $" + value;
        default:
          return "$" + value;
      }
    }
  }
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

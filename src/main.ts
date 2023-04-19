/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

export function handleProductsCardsListener(){
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
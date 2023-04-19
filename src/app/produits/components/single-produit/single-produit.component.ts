import { Component } from '@angular/core';
import { handleProductsCardsListener } from 'src/main';

@Component({
  selector: 'app-single-produit',
  templateUrl: './single-produit.component.html',
  styleUrls: ['./single-produit.component.scss']
})
export class SingleProduitComponent {
  choosedImg:string = ''
  public product: any = {
    libelle: "Sac à main Ely",
    price: "117.000 F CFA",
    img: "sac-ely-1.jpeg",
    description: "Product description, along with any other tab can be displayed as tabs, accordion or all-visible blocks in grid format or one under the other.  You can mix and match tabs and blocks in any order and any position. Each tab can also be set up as a link and point to other pages or open popup modules. Optional \"Show More\" collapsible block content is also available as an option for large and tall descriptions or custom content."
  }
  public shop: any = {
    libelle: "Baawaan",
    img: "../../../../assets/images/shops/baawaan.png"
  }
  public sameCategoryProducts =  [
    {
      libelle: "Nom du produit 1",
      price: "5.000 F CFA",
      img: "product1.jpg",
    },
    {
      libelle: "Nom du produit 2",
      price: "5.000 F CFA",
      img: "product2.jpg",
    },
    {
      libelle: "Nom du produit 3",
      price: "5.000 F CFA",
      img: "product3.jpg",
    },
    {
      libelle: "Nom du produit 4",
      price: "5.000 F CFA",
      img: "product4.jpg",
    }
  ]
  public sameCategoryProductsConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "arrows": false,
    "dots": true,
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 3000,
    "speed": 300,
  };
  public sameShopProductsConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 2,
    "arrows": false,
    "dots": false,
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 3000,
    "speed": 300,
  };
  constructor(){
    this.choosedImg = this.choosedImg[Math.random() * (10 + 1) + 0]
    window.addEventListener("load", function() {
      // SINGLE IMAGE CLICK
      var otherImages = document.querySelectorAll(".other-image");
      var mainImage:HTMLImageElement | null = document.querySelector('.main-image')
      otherImages.forEach(image => {
        let path = image.getAttribute('src')
        image.addEventListener('click', ()=>{
          if(mainImage && path) mainImage.setAttribute('src', path) 
        })
      });

      // PRODUCT CARDS HOVER
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

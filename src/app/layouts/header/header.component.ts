import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import Typed from 'typed.js';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private typedOptions = {
    strings: ['(+221) 78 123 45 67', 'contact@akawor.com'],
    typeSpeed: 100,
    loop: true,
  };
  constructor(){
    window.addEventListener('DOMContentLoaded', ()=>{
      new Typed('.typed-area', this.typedOptions);
    })
  }
}


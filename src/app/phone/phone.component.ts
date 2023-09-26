import { Component } from '@angular/core';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})


export class PhoneComponent {



  phoneList = [
    {
      modele: "iphone",
      prix: 150,
      src: "assets/1.png"
    },  
    {
      modele: "iphone",
      prix: 50,
      src: "assets/2.png"
    },  
    {
      modele: "iphone",
      prix: 250,
      src: "assets/3.png"
    },  
    {
      modele: "iphone",
      prix: 100,
      src: "assets/4.png"
    },  
    {
      modele: "iphone",
      prix: 180,
      src: "assets/5.png"
    },  
    {
      modele: "iphone",
      prix: 170,
      src: "assets/6.png"
    },  
  ]

  imgLink: string = '' ;
  phoneModel: string = '';

  /* phoneLoop() {
    this.phoneList.forEach(phone => {
      this.imgLink = phone.modele;
      this.phoneModel = phone.src;
      console.log(phone.src);
      
    });
    
  } */
}



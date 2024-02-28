import { Component, OnInit, ViewChild } from '@angular/core';
import { Message } from 'primeng/api';

// interface ContactForm {
//   nombre: "string", 
//   apellidos: "string",
//   correo: "string",
//   telefono: "string", 
//   mensaje: "string"
// }

@Component({
  selector: 'app-aprendiendo',
  templateUrl: './aprendiendo.component.html',
  styleUrls: ['./aprendiendo.component.scss']
})
export class AprendiendoComponent implements OnInit{
  
  title = "Modesto Martínez";
  name!: string
  cities = ['Barcelona', 'Madrid', 'Lima', 'Quito'];
  selection!: string;
  messages!: Message[] | any;
  modelContact =  {
    "nombre": "", 
    "apellidos":  "",
    "correo":"",
    "telefono":"", 
    "mensaje":""
  }

  constructor(){}

  ngOnInit(): void {
    this.messages = [{severity: 'info', summary: 'Success', detail: 'Message Content' }];
  }

  addNewCity(city: string): void {
    this.cities.push(city);
  }

  cityClicked(city: string): void {
   this.selection = city;
  }

  onClearContactFrom(): void {
    // this.modelContactn.nombre = "";
  }
  onClear(): void {
    this.selection = '';
    
  }

  onSubmitContact(valores: any): void {
    console.log('Form values', valores);
  }

}

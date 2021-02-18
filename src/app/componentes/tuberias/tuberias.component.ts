import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tuberias',
  templateUrl: './tuberias.component.html',
  styleUrls: ['./tuberias.component.css']
})
export class TuberiasComponent implements OnInit {
  usuario: string="david rebato diana"
  mes: string = "AGOSTO"
  texto: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti minus culpa iure consequuntur magni necessitatibus sed velit consequatur pariatur, quo quod voluptatem officia ad laborum ipsum animi explicabo, et maxime?"
  fecha: Date = new Date()
  dinero: number = 12.40
  numero_pi: number = Math.PI
  preposiciones: string[] = ['a','ante','bajo','cabe','con','contra','de', 'desde']
  usuarios = [
    {nombre: "David", apellido:"Rebato", edad:20},
    {nombre: "Sara", apellido:"Garcia", edad:58},
    {nombre: "Robeto", apellido:"Calonge", edad:4}
  ]
  dni: number =0
  constructor() { }

  ngOnInit(): void {
  }

}

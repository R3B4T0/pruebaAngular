import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Note } from 'src/app/clases/note';
import { NotasService } from 'src/app/servicios/notas.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  formNuevo: FormGroup = new FormGroup({
    titulo: new FormControl('',[Validators.required]),
    contenido: new FormControl('',[Validators.required]),

  })
  notas:Note[]=[]

  constructor(private servicios:NotasService) { }

  ngOnInit(): void {
    this.obtenerNotas()
    
  }
  obtenerNotas():void{
    this.servicios.leerNotas().subscribe(
      respuesta => {
        console.log(respuesta)
        this.notas = respuesta
      },
      error => console.log(error)
    )
  }
  
  crearNota(entrada:Note):void{
    this.servicios.insertarNota(entrada).subscribe(
      respuesta => {
        console.log(respuesta)
        this.obtenerNotas
      }
    )
  }

}

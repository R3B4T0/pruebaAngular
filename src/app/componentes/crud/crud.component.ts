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
  creada: boolean = false
  temporizador: any = null
  busqueda: string
  notaSeleccionada: Note = new Note
  formNuevo: FormGroup = new FormGroup({
    
    titulo: new FormControl('',[Validators.required]),
    contenido: new FormControl('',[Validators.required])
  })
  notas:Note[]=[]
  notaNueva: Note = new Note
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
        this.formNuevo.reset()
        this.creada = true
        setTimeout(() => this.creada=false, 3000)
        this.obtenerNotas()
      },
      error => {console.log(error)}
    )
  }

  eliminarNota(): void{
    this.servicios.borrarNota(this.notaSeleccionada.id).subscribe(
      respuesta => {console.log(respuesta)
      this.notaSeleccionada = new Note
      this.obtenerNotas()
      },
      error => {console.log(error)}
    )
  }

  editarNota(): void{
    this.servicios.editarNota(this.notaSeleccionada).subscribe(
      respuesta =>{
        console.log(respuesta)
        this.notaSeleccionada = new Note
        this.obtenerNotas()
      },
      error => {console.log(error)}
    )
  }

  buscarNotas(): void{
    this.servicios.buscarNotas(this.busqueda).subscribe(
      respuesta =>{
        console.log(respuesta)
        this.notas = respuesta
      },
      error => console.log(error)
    )
  }

  buscarConRetraso(): void{
    if(this.temporizador == null){
      this.temporizador = setTimeout(() => {this.buscarNotas(); this.temporizador=null}, 3000)
    }
  }
}

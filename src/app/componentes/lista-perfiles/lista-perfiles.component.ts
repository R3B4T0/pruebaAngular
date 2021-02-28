import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Mensaje } from 'src/app/clases/mensaje';
import { User } from 'src/app/clases/user';
import { MensajeService } from 'src/app/servicios/mensaje.service';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-lista-perfiles',
  templateUrl: './lista-perfiles.component.html',
  styleUrls: ['./lista-perfiles.component.css']
})
export class ListaPerfilesComponent implements OnInit {
  usuarios: [] = []
  usuarioSel: User
  mensajes: Mensaje[] = []
  mostrarMensajes: boolean=false;
  enviarMensajes: boolean = false
  mensajeSel: Mensaje
  respuestaCreada: boolean = false
  errorRespuesta: boolean = false
  mensaje: string
  formMensaje = this.fb.group({
    id_destinatario: [''],
    mensaje: ['', Validators.required]
  })
  constructor(private servicioUsuario:UserService, private fb:FormBuilder, private servicioMensaje:MensajeService) { }

  ngOnInit(): void {
    this.obtenerUsuarios()
  }

  obtenerUsuarios(): void {
    this.servicioUsuario.listarUsuarios().subscribe(
      respuesta => {
        console.log(respuesta)
        this.usuarios = respuesta
      },
      error => { console.log(error) }
    )
  }
  
  obtenerMensajes(): void {
    this.servicioMensaje.mostrarMensajes().subscribe(
      respuesta => {
        console.log(respuesta)
        this.mensajes = respuesta
      },
      error => console.log(error)
    )
  }
  
  escribirMensaje(): void {
    this.servicioMensaje.crearMensaje(this.formMensaje.value).subscribe(
      respuesta => {
        console.log(respuesta)
        this.enviarMensajes = false
        this.formMensaje.reset()
        this.respuestaCreada = true
        this.mensaje = "El mensaje ha sido enviado"
        setTimeout(() => {this.respuestaCreada = false}, 3000)
      },
      error => { 
        console.log(error) 
        this.errorRespuesta = true
        this.mensaje = error.error.error
        setTimeout(() => {this.errorRespuesta = false}, 3000)
      }
    )
  }

  borrarMensaje(): void {
    this.servicioMensaje.borrarMensaje(this.mensajeSel.id).subscribe(
      respuesta => {
        console.log(respuesta)
        this.respuestaCreada = true
        this.mensaje = "El mensaje ha sido borrado"
        setTimeout(() => {this.respuestaCreada = false}, 3000)
      },
      error => {
        console.log(error)
        this.errorRespuesta = true
        this.mensaje = error.error.error
        setTimeout(() => {this.errorRespuesta = false}, 3000)
      }
    )
  }
}

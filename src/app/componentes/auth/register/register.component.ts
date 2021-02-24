import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/servicios/user.service';
import { dniValido, telefonoValido } from 'src/app/validaciones/validaciones';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formRegister = this.fb.group({
    nombre:[''],
    apellidos:[''],
    password:['', [Validators.required, Validators.minLength(4)]],
    password2:['', [Validators.required]],
    email:['', [Validators.required, Validators.email]],
    telefono:[undefined, [telefonoValido()]],
    dni:['', [Validators.required, dniValido()]]
  })
  tiempo: number = 7
  creado: Boolean = false
  mensaje: string = ''
  constructor(private fb:FormBuilder, private servicioUsuario:UserService, private irHacia:Router) { }

  ngOnInit(): void {
  }
  submit(): void{
    if (this.formRegister.value.password = this.formRegister.value.password2) {
      this.servicioUsuario.registrar(this.formRegister.value).subscribe(
        respuesta => {
          console.log(respuesta)
          this.servicioUsuario.guardarToken(respuesta)
          this.creado = true
          this.contador()
          setTimeout(() => this.creado = false, 6000)
        },
        error => {
          console.log(error)
          this.mensaje = error.error.error
        }
      )
    } else {
      alert('Las contraseñas no coinciden')
    }
  }

  contador(): void{
    if(this.tiempo == 1){
      this.irHacia.navigate(['/perfil'])
    } else {
      this.tiempo = this.tiempo - 1
      setTimeout(() => this.contador(), 1000)
    }
  }
}

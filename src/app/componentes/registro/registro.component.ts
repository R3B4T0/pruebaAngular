import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { dniValido, telefonoValido } from 'src/app/validaciones/validaciones';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  formRegister: FormGroup = new FormGroup ({
    nombre: new FormControl('',[Validators.required,Validators.minLength(4)]),
    apellidos: new FormControl('',[Validators.required,Validators.minLength(4)]),
    password: new FormControl('',[Validators.required,Validators.minLength(8)]),
    password2: new FormControl('',[Validators.required,Validators.minLength(8)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    dni: new FormControl('',[Validators.required,dniValido()]),
    telefono: new FormControl(undefined,[Validators.required,telefonoValido()]),


  })
  formRegister2 = this.fb.group({
    nombre: ['',[Validators.required]],
    apellidos: ['',[Validators.required]],
    password: ['',[Validators.required]],
    password2: ['',[Validators.required]],
    email:['',[Validators.required]],
    dni: ['',[Validators.required]],
    telefono: [undefined,[Validators.required]]

  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  evaluaForm():void{
    console.log("Evaluando formulario")
    console.log(this.formRegister.getRawValue())
    if (this.formRegister.valid){
      console.log("El formulario es correcto")
    }else{
      console.log("Lo que no has introducido no vale na")
    }   
  }
  get dni1(){return this.formRegister.get("dni")}
  get nombre1(){return this.formRegister.get("nombre")}
  get apellidos1(){return this.formRegister.get("apellidos")}
  get password1(){return this.formRegister.get("password")}
  get email1(){return this.formRegister.get("email")}
  get telefono1(){return this.formRegister.get("telefono")}
  get password2(){return this.formRegister.get("password2")}

}

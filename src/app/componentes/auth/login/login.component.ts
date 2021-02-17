import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'protractor';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin = this.fb.group({
    email:['', [Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.minLength(4)]]
  })
  mensaje: any
  constructor(private fb:FormBuilder, private servicioUsuario:UserService, private irHacia:Router) { }

  ngOnInit(): void {
    if (this.servicioUsuario.isLogged()) {
      this.irHacia.navigate(['/perfil'])
    }
  }

  login(): void{
    this.servicioUsuario.acceso(this.formLogin.value).subscribe(
      respuesta => {
        console.log(respuesta)
        this.servicioUsuario.guardarToken(respuesta)
        this.irHacia.navigate(['/perfil'])
      },
      error => console.log(error)
    )
  }
}

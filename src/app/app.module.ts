import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { LOCALE_ID, NgModule } from '@angular/core';
import "@angular/common/locales/global/es";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { AboutComponent } from './componentes/about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { LoteriaComponent } from './componentes/loteria/loteria.component';
import { GenerarLoteriaComponent } from './componentes/generar-loteria/generar-loteria.component';
import { CalculadoraComponent } from './componentes/calculadora/calculadora.component';
import { MultiplicarComponent } from './componentes/multiplicar/multiplicar.component';
import { HolaComponent } from './componentes/hola/hola.component';
import { TuberiasComponent } from './componentes/tuberias/tuberias.component';
import { NumerosPipe } from './pipes/numeros.pipe';
import { DniPipe } from './pipes/dni.pipe';
import { EstructurasComponent } from './componentes/estructuras/estructuras.component';
import { FormularioClaseComponent } from './componentes/formulario-clase/formulario-clase.component';
import { CrudLocalComponent } from './componentes/crud-local/crud-local.component';
import { ArticulosComponent } from './componentes/articulos/articulos.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { CrudComponent } from './componentes/crud/crud.component';
import { LoginComponent } from './componentes/auth/login/login.component';
import { RegisterComponent } from './componentes/auth/register/register.component';
import { PerfilComponent } from './componentes/auth/perfil/perfil.component';
import { EnviarTokenInterceptor } from './auth/enviar-token.interceptor';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavegacionComponent,
    LoteriaComponent,
    GenerarLoteriaComponent,
    CalculadoraComponent,
    MultiplicarComponent,
    HolaComponent,
    TuberiasComponent,
    NumerosPipe,
    DniPipe,
    EstructurasComponent,
    FormularioClaseComponent,
    CrudLocalComponent,
    ArticulosComponent,
    RegistroComponent,
    CrudComponent,
    LoginComponent,
    RegisterComponent,
    PerfilComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue:"es"}, 
    {provide: HTTP_INTERCEPTORS, useClass:EnviarTokenInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './componentes/about/about.component';
import { ArticulosComponent } from './componentes/articulos/articulos.component';
import { CalculadoraComponent } from './componentes/calculadora/calculadora.component';
import { CrudLocalComponent } from './componentes/crud-local/crud-local.component';
import { CrudComponent } from './componentes/crud/crud.component';
import { EstructurasComponent } from './componentes/estructuras/estructuras.component';
import { FormularioClaseComponent } from './componentes/formulario-clase/formulario-clase.component';
import { HolaComponent } from './componentes/hola/hola.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoteriaComponent } from './componentes/loteria/loteria.component';
import { MultiplicarComponent } from './componentes/multiplicar/multiplicar.component';
import { RegisterComponent } from './componentes/auth/register/register.component';
import { TuberiasComponent } from './componentes/tuberias/tuberias.component';
import { LoginComponent } from './componentes/auth/login/login.component';
import { PerfilComponent } from './componentes/auth/perfil/perfil.component';
import { UserRouterGuard } from './auth/user-router.guard';
import { ListaPerfilesComponent } from './componentes/lista-perfiles/lista-perfiles.component';
import { GraficaComponent } from './componentes/grafica/grafica.component';
import { MapaComponent } from './componentes/mapa/mapa.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path:"about", component:AboutComponent},
  {path:"loteria",component:LoteriaComponent},
  {path:"calculadora",component:CalculadoraComponent},
  {path:"multiplicar/:factor",component:MultiplicarComponent},
  {path:"hola/:nombre/:apellidos",component:HolaComponent},   
  {path:"tuberias",component:TuberiasComponent},
  {path:"estructuras",component:EstructurasComponent},
  {path:"formulario",component:FormularioClaseComponent},
  {path:"crudlocal",component:CrudLocalComponent},
  {path:"articulos",component:ArticulosComponent},
  {path:"registro",component:RegisterComponent},
  {path:"crud",component:CrudComponent},
  {path:"login", component:LoginComponent},
  {path:"perfil", component:PerfilComponent, canActivate:[UserRouterGuard]},
  {path:"listaPerfiles", component:ListaPerfilesComponent},
  {path:"grafica", component:GraficaComponent},
  {path:"mapa", component:MapaComponent},
  {path:"",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

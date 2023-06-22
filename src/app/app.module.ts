import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { ListaPersonalComponent } from './lista-personal/lista-personal.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarPersonalComponent } from './registrar-personal/registrar-personal.component';
import { FormsModule } from '@angular/forms';
import { ActualizarPersonalComponent } from './actualizar-personal/actualizar-personal.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaPersonalComponent,
    RegistrarPersonalComponent,
    ActualizarPersonalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

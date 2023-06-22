import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPersonalComponent } from './lista-personal/lista-personal.component';
import { RegistrarPersonalComponent } from './registrar-personal/registrar-personal.component';

const routes: Routes = [
  {path : 'personal', component:ListaPersonalComponent},
  {path :'', redirectTo:'personal', pathMatch:'full'},
  {path : 'registrar-personal', component: RegistrarPersonalComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

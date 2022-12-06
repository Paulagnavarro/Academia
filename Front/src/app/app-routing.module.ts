import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlterarImcComponent } from './components/imc/alterar-imc/alterar-imc.component';
import { CadastrarImcComponent } from './components/imc/cadastrar-imc/cadastrar-imc.component';
import { ListarImcComponent } from './components/imc/listar-imc/listar-imc.component';
import { CadastrarUsuarioComponent } from './components/usuario/cadastrar-usuario/cadastrar-usuario.component';

const routes: Routes = [
  {
    path: "pages/usuario/cadastrar",
    component: CadastrarUsuarioComponent,
  },
  {
    path: "pages/imc/cadastrar",
    component: CadastrarImcComponent,
  },
  {
    path: "pages/imc/alterar/:id",
    component: AlterarImcComponent,
  },
  {
    path: "pages/imc/listar",
    component: ListarImcComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

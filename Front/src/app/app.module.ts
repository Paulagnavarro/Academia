import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarUsuarioComponent } from './components/usuario/cadastrar-usuario/cadastrar-usuario.component';
import { CadastrarImcComponent } from './components/imc/cadastrar-imc/cadastrar-imc.component';
import { AlterarImcComponent } from './components/imc/alterar-imc/alterar-imc.component';
import { ListarImcComponent } from './components/imc/listar-imc/listar-imc.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarUsuarioComponent,
    CadastrarImcComponent,
    AlterarImcComponent,
    ListarImcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';


import { AppComponent } from './app.component';
import { AlertasComponent } from './alertas/alertas.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CompraComponent } from './compra/compra.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { RodapeComponent } from './rodape/rodape.component';
import { SobreComponent } from './sobre/sobre.component';
import { ProdutoEditComponent } from './edit/produto-edit/produto-edit.component';
import { UsuarioEditComponent } from './edit/usuario-edit/usuario-edit.component';
import { ProdutoDeleteComponent } from './delete/produto-delete/produto-delete.component';
import { VoluntarioComponent } from './voluntario/voluntario.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    AlertasComponent,
    CarrinhoComponent,
    CompraComponent,
    CadastroComponent,
    ContatoComponent,
    HomeComponent,
    LoginComponent,
    MenuComponent,
    ProdutosComponent,
    RodapeComponent,
    SobreComponent,
    ProdutoEditComponent,
    UsuarioEditComponent,
    ProdutoDeleteComponent,
    VoluntarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    OrderModule
  ],
  providers: [{provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

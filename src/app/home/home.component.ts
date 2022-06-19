import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { CategoriasService } from '../service/categorias.service';
import { ProdutosService } from '../service/produtos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nome = environment.nome
  id = environment.id


  categoria: Categoria = new Categoria()
  listacategorias: Categoria[]

  produto: Produto = new Produto
  listaProdutos: Produto[]
  idProduto: number


  user: Usuario = new Usuario()
  idUser = environment.id
  constructor(

    public auth: AuthService,
    private router: Router,
    private categoriaService: CategoriasService,
    private produtoService: ProdutosService

  ) { }

  ngOnInit() {
    window.scroll(0, 0)


    console.log(environment.nome)
    console.log(this.nome)

  }

  sair() {
    environment.token = ''
     environment.nome = ''
     environment.voluntario = ''
     environment.id = 0
     this.router.navigate(['/home'])
 
   }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

 
  nome = environment.nome
  nomeUsuario: string
  id = environment.id


  constructor(

    public auth: AuthService,
    private router: Router

  ) { }

  ngOnInit() {

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
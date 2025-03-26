import { Component } from '@angular/core';
import { ContatoService } from './services/contato.service';
import { IContato } from './interfaces/contato.interfaces';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {


  contatos: IContato[] = [];

  constructor(private contatoService: ContatoService){
    this.getContatosCadastrados()
  }

  getContatosCadastrados(){
    this.contatoService.getContatos()
      .subscribe(contatos => this.contatos = contatos)
  }

}





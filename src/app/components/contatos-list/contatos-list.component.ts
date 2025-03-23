import { Component } from '@angular/core';
import { IContato } from '../../interfaces/contato.interfaces';
import { ContatoList } from '../../data/contatato-list';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-contatos-list',
  standalone: false,
  templateUrl: './contatos-list.component.html',
  styleUrl: './contatos-list.component.scss',
  providers:[DatePipe]
})

export class ContatosListComponent {
  contatoList:IContato[] = ContatoList;
  displayedColumns: string[] = ["nome","dataCadastro","status" ,"favorito"];
    
  onContatoSelected(contato: IContato){
      console.log(contato);
    }
}

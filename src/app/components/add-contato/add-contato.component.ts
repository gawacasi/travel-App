import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContatoService } from '../../services/contato.service';
import { IContato } from '../../interfaces/contato.interfaces';

@Component({
  selector: 'app-add-contato',
  templateUrl: './add-contato.component.html',
  styleUrls: ['./add-contato.component.scss'],
  standalone:false
})
export class AddContatoComponent {
  novoContato: IContato = {
    contato_id: 0,  
    contato_nome: '',  
    contato_email: '',
    contato_celular: '',
    contato_telefone: '',
    contato_sn_ativo: '',
    contato_sn_favorito: '',
    contato_dh_cad: ''
  };

  constructor(
    private contatoService: ContatoService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  saveContato() {
    if (this.novoContato.contato_nome && this.novoContato.contato_email) {
      this.contatoService.createContato(this.novoContato).subscribe({
        next: () => {
          alert('Contato adicionado com sucesso!');
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error('Erro ao salvar contato:', err);
          alert('Erro ao adicionar contato.');
        }
      });
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  }

  cancelar() {
    this.router.navigate(['/']);
  }
}
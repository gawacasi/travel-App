import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContatoService } from '../../services/contato.service';
import { IContato } from '../../interfaces/contato.interfaces';

@Component({
  selector: 'app-edit-contato',
  templateUrl: './edit-contato.component.html',
  styleUrls: ['./edit-contato.component.scss'],
  standalone: false
})

export class EditContatoComponent implements OnInit {
  contato!: IContato;
  contatoId!: string;
  originalContato!: IContato;

  constructor(
    private route: ActivatedRoute,
    private contatoService: ContatoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.contatoId = this.route.snapshot.paramMap.get('id') || '';
    if (this.contatoId) {
      this.loadContato();
    }
  }

  loadContato() {
    this.contatoService.getContatoById(this.contatoId).subscribe(
      (data) => {
        this.contato = data;
        this.originalContato = { ...data }
      },
      (error) => {
        console.error('Erro ao carregar contato:', error);
      }
    );
  }

  saveContato() {
    if (!this.contato || !this.contatoId) {
      console.error('Contato ou ID não definidos');
      alert('Contato ou ID não definidos');
      return;
    }

    console.log('Contato:', this.contato);
    console.log('Contato ID:', this.contatoId);

    const dadosAtualizados: Partial<IContato> = {};

    if (this.contato.contato_email !== this.originalContato.contato_email) {
      dadosAtualizados.contato_email = this.contato.contato_email;
    }
    if (this.contato.contato_celular !== this.originalContato.contato_celular) {
      dadosAtualizados.contato_celular = this.contato.contato_celular;
    }
    if (this.contato.contato_telefone !== this.originalContato.contato_telefone) {
      dadosAtualizados.contato_telefone = this.contato.contato_telefone;
    }
    if (this.contato.contato_sn_ativo !== this.originalContato.contato_sn_ativo) {
      dadosAtualizados.contato_sn_ativo = this.contato.contato_sn_ativo;
    }
    if (this.contato.contato_sn_favorito !== this.originalContato.contato_sn_favorito) {
      dadosAtualizados.contato_sn_favorito = this.contato.contato_sn_favorito;
    }

    console.log("Enviando para API:", JSON.stringify(dadosAtualizados, null, 2));

    this.contatoService.updateContato(this.contatoId, dadosAtualizados).subscribe({
      next: () => {
        alert("Contato atualizado com sucesso!");
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error("Erro ao atualizar contato:", err);
      }
    });
  }

  deletarContato(id: string) {
    if (confirm('Tem certeza que deseja excluir este contato?')) {
      this.contatoService.deleteContato(id).subscribe({
        next: (res) => {
          console.log('Resposta do backend:', res);
          alert('Contato excluído com sucesso.');
          this.router.navigate(['/']); 
        },
        error: (err) => {
          console.error('Erro ao excluir o contato:', err);
          alert('Erro ao excluir o contato.');
        }
      });
    }
  }

  createContato(id: string){
  }
}

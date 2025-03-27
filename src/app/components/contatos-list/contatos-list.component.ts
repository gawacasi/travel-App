import { Component, ViewChild } from '@angular/core';
import { IContato } from '../../interfaces/contato.interfaces';
import { ContatoList } from '../../data/contatato-list';
import { DatePipe } from '@angular/common';
import { ContatoService } from '../../services/contato.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Subscription, interval } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-contatos-list',
  standalone: false,
  templateUrl: './contatos-list.component.html',
  styleUrl: './contatos-list.component.scss',
  providers:[DatePipe]
})

export class ContatosListComponent {

    contatos: IContato[] = [];
    detalhesVisiveis = false;
    contatoSelecionado: any;
    contatoList:IContato[] = ContatoList;
    displayedColumns: string[] = ["nome","dataCadastro","status" ,"favorito","editar"];
    private contatosSubscription!: Subscription;
    dataSource = new MatTableDataSource<IContato>();

    @ViewChild(MatPaginator) paginator!: MatPaginator;

    ngOnInit(): void {
      this.getContatosCadastrados();
  
      this.contatosSubscription = interval(1000).subscribe(() => {
        this.getContatosCadastrados();
      });
    }

    ngAfterViewInit(): void {
      this.dataSource.paginator = this.paginator;
    }

    constructor(private contatoService: ContatoService,private sanitizer: DomSanitizer,private datePipe: DatePipe){
      this.getContatosCadastrados()
    }
  
    getContatosCadastrados() {
      this.contatoService.getContatos()
        .subscribe(contatos => {
          this.contatos = contatos;
          this.dataSource.data = this.contatos;
          if (this.paginator) {
            this.dataSource.paginator = this.paginator; 
          }
    
        });
    }

    formatarFavorito(favorito: string): SafeHtml {
      return this.sanitizer.bypassSecurityTrustHtml(favorito === 'S' ? `<i class="bi bi-star-fill" style="color:#ffca00" ></i>` : `<i class="bi bi-star"></i>`);
    }

    abrirDetalhes(contato: IContato) {
      this.contatoSelecionado = contato;
      this.detalhesVisiveis = true;
  }
    
    fecharModal() {
      this.detalhesVisiveis = false;
      this.contatoSelecionado = null;
    }

    formatarData(data: string): string {
      return this.datePipe.transform(data, 'dd MMMM yyyy, HH:mm') || '';  // Formato desejado: "26 março 2025, 00:49"
    }
    
    editarContato(contato: IContato) {
      console.log('Editar contato:', contato);
    }
}

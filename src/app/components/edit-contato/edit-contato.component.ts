import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IContato } from '../../interfaces/contato.interfaces'; 

@Component({
  selector: 'app-edit-contato',
  templateUrl: './edit-contato.component.html',
  standalone: false,
  styleUrls: ['./edit-contato.component.scss']
})
export class EditContatoComponent {

  contato: any = {};
  @Output() onSave: EventEmitter<IContato | null> = new EventEmitter();
  
  
  saveContato() {
    if (this.contato && this.contato.contato_nome && this.contato.contato_email) {
      this.onSave.emit(this.contato);
    } else {
      console.error('Os campos nome e email são obrigatórios');
    }
  }
  
  cancelarEdicao() {
    this.onSave.emit(this.contato || null);
  }
}

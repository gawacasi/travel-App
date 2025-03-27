import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatosListComponent } from './components/contatos-list/contatos-list.component';
import { EditContatoComponent } from './components/edit-contato/edit-contato.component';
import { AddContatoComponent } from './components/add-contato/add-contato.component';

const routes: Routes = [
  { path: '', component: ContatosListComponent },
  { path: 'editar-contato/:id', component: EditContatoComponent },
  { path: 'add-contato', component: AddContatoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

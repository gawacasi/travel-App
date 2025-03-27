import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { FormsModule } from "@angular/forms";
import { ContatosListComponent } from './contatos-list/contatos-list.component';
import { CommonModule } from "@angular/common";
import { EditContatoComponent } from './edit-contato/edit-contato.component';
import { RouterModule } from "@angular/router";
import { AddContatoComponent } from './add-contato/add-contato.component';


@NgModule({
    declarations:[
        ContatosListComponent,
        EditContatoComponent,
        AddContatoComponent,
  ],
    imports:[
        AngularMaterialModule,
        FormsModule,
        CommonModule,
        RouterModule
    ],
    exports:[
        FormsModule,
        ContatosListComponent,
        CommonModule,
        EditContatoComponent,
        RouterModule
    ]
    })
export class ComponentsModule {

}
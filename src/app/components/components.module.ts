import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { ContatoDetailsComponent } from './contato-details/contato-details.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from "@angular/forms";
import { ContatosListComponent } from './contatos-list/contatos-list.component';
@NgModule({
    declarations:[
        ContatoDetailsComponent,
        FilterComponent,
        ContatosListComponent,
  ],
    imports:[
        AngularMaterialModule,
        FormsModule
    ],
    exports:[
        ContatoDetailsComponent,
        FilterComponent,
        FormsModule,
        ContatosListComponent
    ]
    })
export class ComponentsModule {

}
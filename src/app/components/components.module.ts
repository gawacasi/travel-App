import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { ContatoDetailsComponent } from './contato-details/contato-details.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from "@angular/forms";
@NgModule({
    declarations:[
        ContatoDetailsComponent,
        FilterComponent,
  ],
    imports:[
        AngularMaterialModule,
        FormsModule
    ],
    exports:[
        ContatoDetailsComponent,
        FilterComponent,
        FormsModule
    ]
    })
export class ComponentsModule {

}
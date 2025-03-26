import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
@NgModule({
    imports:[
        MatPaginatorModule,
        MatListModule,
        MatButtonModule,
        MatDividerModule,
        MatInputModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatCheckboxModule,
        MatSelectModule,
        MatTableModule,
        MatCardModule
    ],
    exports:[
        MatPaginatorModule,
        MatListModule,
        MatButtonModule,
        MatDividerModule,
        MatInputModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatCheckboxModule,
        MatSelectModule,
        MatTableModule,
        MatCardModule
    ],
    providers:[provideNativeDateAdapter()]
})

export class AngularMaterialModule{

}
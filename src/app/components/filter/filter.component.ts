import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: false,
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  status = [
    {
      value: 'ATI',
      viewValue: 'ATIVO'
    },
    {
      value: 'INA',
      viewValue: 'INATIVO'
    }
  ]

  favorito = [
    {
      value: 'S',
      viewValue: 'Sim'
    },
    {
      value: 'N',
      viewValue: 'Nao'
    }
  ]

}

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddContatoComponent } from './add-contato.component';
import { ContatoService } from '../../services/contato.service';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AddContatoComponent', () => {
  let component: AddContatoComponent;
  let fixture: ComponentFixture<AddContatoComponent>;
  let contatoService: jasmine.SpyObj<ContatoService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const contatoServiceMock = jasmine.createSpyObj('ContatoService', ['createContato']);
    const routerMock = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AddContatoComponent],
      providers: [
        { provide: ContatoService, useValue: contatoServiceMock },
        { provide: Router, useValue: routerMock }
      ],
      schemas: [NO_ERRORS_SCHEMA] 
    }).compileComponents();

    fixture = TestBed.createComponent(AddContatoComponent);
    component = fixture.componentInstance;
    contatoService = TestBed.inject(ContatoService) as jasmine.SpyObj<ContatoService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;

    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve chamar createContato e navegar para a página inicial em caso de sucesso', () => {

    contatoService.createContato.and.returnValue(of({
      contato_id: 1,
      contato_nome: 'Nome Teste',
      contato_email: 'teste@example.com',
      contato_celular: '1234567890',
      contato_telefone: '0987654321',
      contato_sn_ativo: 'S',
      contato_sn_favorito: 'S',
      contato_dh_cad: '2025-03-27T00:00:00',
    }));

    component.novoContato = {
      contato_id: undefined, 
      contato_nome: 'John Doe',
      contato_email: 'john.doe@example.com',
      contato_celular: '123456789',
      contato_telefone: '987654321',
      contato_sn_ativo: 'S',
      contato_sn_favorito: 'S',
      contato_dh_cad: '2025-01-01'
    };

    component.saveContato();

    expect(contatoService.createContato).toHaveBeenCalledWith(component.novoContato);
    expect(router.navigate).toHaveBeenCalledWith(['/']);
  });

  it('deve mostrar um alerta de erro se createContato falhar', () => {
    contatoService.createContato.and.returnValue(throwError('Erro'));

    spyOn(window, 'alert'); 

    component.saveContato();

    expect(window.alert).toHaveBeenCalledWith('Erro ao adicionar contato.');
  });

  it('deve chamar cancelar e navegar para a página inicial', () => {
    component.cancelar();
    expect(router.navigate).toHaveBeenCalledWith(['/']);
  });
});

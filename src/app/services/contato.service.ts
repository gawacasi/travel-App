import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { IContato } from "../interfaces/contato.interfaces";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ContatoService {
  
  private url = environment.api + "/api/v1/contatos"; 

  constructor(private httpClient: HttpClient) {}

  getContatos(): Observable<IContato[]> {
    return this.httpClient.get<IContato[]>(this.url);
  }

  getContatoById(id: string): Observable<IContato> {
    return this.httpClient.get<IContato>(`${this.url}/${id}`);
  }

  updateContato(id: string, contatoAtualizado: Partial<IContato>): Observable<IContato> {
    console.log(contatoAtualizado,this.url,id)
    return this.httpClient.patch<IContato>(`${this.url}/${id}`, contatoAtualizado);
  }

  createContato(contato: IContato): Observable<IContato> {
    return this.httpClient.post<IContato>(this.url, contato);
  }

  deleteContato(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }
}

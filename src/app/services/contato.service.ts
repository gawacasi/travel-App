import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { IContato } from "../interfaces/contato.interfaces";

@Injectable({
    providedIn: 'root'
})

export class ContatoService {
    
    private url = environment.api;

    constructor(private httpClient: HttpClient){
    }

    getContatos(){
        return this.httpClient.get<IContato[]>(this.url + "/api/v1/contatos");
    }
}
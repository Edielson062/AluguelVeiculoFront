import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cliente} from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
url :string = "http://localhost:8080/cliente";
  constructor(private http:HttpClient) { }

  listarCliente():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.url);
  }

  listarClieteId(id:number):Observable<Cliente>{
    return this.http.get<Cliente>(this.url + id);
  }

  adicionarCliente(cliente:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.url, cliente);
  }

  editarCliente(cliente:Cliente):Observable<Cliente>{
    return this.http.put<Cliente>(this.url, cliente);
  }

  deletarCliente(id:number):Observable<void>{
    return this.http.delete<void>(this.url + id)
  }
}

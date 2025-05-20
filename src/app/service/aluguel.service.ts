import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Aluguel} from '../models/aluguel';

@Injectable({
  providedIn: 'root'
})
export class AluguelService {
url:string = "http://localhost:8080/aluguel";
  constructor(private http:HttpClient) { }

  listarAluguels():Observable<Aluguel[]>{
    return this.http.get<Aluguel[]>(this.url)
  }

  listarAluguelId(id:number):Observable<Aluguel>{
    return this.http.get<Aluguel>(this.url + id);
  }

  adicionarAluguel(aluguel:Aluguel):Observable<Aluguel>{
    return this.http.post<Aluguel>(this.url , aluguel);
  }

  editarAluguel(aluguel:Aluguel):Observable<Aluguel>{
    return this.http.put<Aluguel>(this.url, aluguel);
  }

  deletarAlugeul(id:number):Observable<void>{
    return this.http.delete<void>(this.url + id);
  }
}

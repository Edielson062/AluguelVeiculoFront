import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Veiculo} from '../models/veiculo';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {
url:string = "http://localhost:8080/veiculo";

  constructor(private http:HttpClient) {}

listarVeiculo():Observable<Veiculo[]>{
  return this.http.get<Veiculo[]>(this.url);
}

listarVeiculoId(id:number):Observable<Veiculo>{
    return this.http.get<Veiculo>(this.url + id);
}

adcionarVeiculo(veiculo:Veiculo):Observable<Veiculo>{
    return this.http.post<Veiculo>(this.url, veiculo);
}

editarVeiculo(veiculo:Veiculo):Observable<Veiculo>{
    return this.http.put<Veiculo>(this.url, veiculo);
}

deletarVeiculo(id:number):Observable<void>{
  return this.http.delete<void>(this.url + id);
}
}

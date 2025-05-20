import { Component } from '@angular/core';
import {Aluguel} from '../../../models/aluguel';
import {AluguelService} from '../../../service/aluguel.service';
import {NgIf} from '@angular/common';
import {Panel} from 'primeng/panel';
import {TableModule} from 'primeng/table';

@Component({
  selector: 'app-aluguel',
  standalone: true,
  imports: [
    NgIf,
    Panel,
    TableModule
  ],
  templateUrl: './aluguel.component.html',
  styleUrl: './aluguel.component.css'
})
export class AluguelComponent {
listaAlugueis:Aluguel [] = [];


  constructor(private service:AluguelService) {
    this.service.listarAluguels().subscribe(aluguels => this.listaAlugueis = aluguels)
  }

  removerCliente(id:number):void{
    this.service.deletarAlugeul(id).subscribe(() => {
      this.listaAlugueis = this.listaAlugueis.filter(aluguel => aluguel.id !== id)
    });
  }
}

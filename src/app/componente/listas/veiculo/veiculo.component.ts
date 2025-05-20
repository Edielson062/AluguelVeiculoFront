import { Component } from '@angular/core';
import {Veiculo} from '../../../models/veiculo';
import {VeiculoService} from '../../../service/veiculo.service';
import {Panel} from 'primeng/panel';
import {NgIf} from '@angular/common';
import {TableModule} from 'primeng/table';

@Component({
  selector: 'app-veiculo',
  standalone: true,
  imports: [
    Panel,
    NgIf,
    TableModule
  ],
  templateUrl: './veiculo.component.html',
  styleUrl: './veiculo.component.css'
})
export class VeiculoComponent {
listaVeiculos:Veiculo[] = [];


  constructor(private service:VeiculoService) {
    this.service.listarVeiculo().subscribe(veiculos => this.listaVeiculos = veiculos)
  }

removerVeiculo(id:number):void{
  this.service.deletarVeiculo(id).subscribe(() => {this.listaVeiculos = this.listaVeiculos.filter(veiculo => veiculo.id !== id)});
}
}

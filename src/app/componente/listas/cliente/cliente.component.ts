import { Component } from '@angular/core';
import {Cliente} from '../../../models/cliente';
import {ClienteService} from '../../../service/cliente.service';
import {NgIf} from '@angular/common';
import {Panel} from 'primeng/panel';
import {TableModule} from 'primeng/table';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [
    NgIf,
    Panel,
    TableModule
  ],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {
listarCliente:Cliente[] = [];


  constructor(private service:ClienteService) {
  this.service.listarCliente().subscribe(clientes => this.listarCliente = clientes);
  }

  removerCliente(id:number):void{
    this.service.deletarCliente(id).subscribe(() => {this.listarCliente = this.listarCliente.filter(cliente => cliente.id !== id)});
  }
}

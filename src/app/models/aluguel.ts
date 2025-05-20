import {Cliente} from './cliente';
import {Veiculo} from './veiculo';

export interface Aluguel {
  id:number;
  cliente:Cliente;
  veiculo:Veiculo;
  dataInicio:String;
  dataFim:String;
}

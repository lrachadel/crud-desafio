import { UnidadeMedida } from "./unidade-medida.enum";

export interface Item {
  id: number;
  
  nome: string;
  unidade: UnidadeMedida;
  quantidade: number;
  preco: number;
  perecivel: boolean;
  validade: Date;
  fabricacao: Date;
}
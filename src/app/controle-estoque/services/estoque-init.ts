import { UnidadeMedida } from "../models/unidade-medida.enum";

export class Init {
    load() {
      if(localStorage.getItem('items') === null || localStorage.getItem('items') == undefined) {
        let items = [
            {
                id: 1 ,
                nome: "Leite", 
                unidade: "Litro", 
                quantidade: 15, 
                preco: 4.00, 
                perecivel: false, 
                validade: null, 
                fabricacao: "18/06/2024"
            }
        ];
  
        localStorage.setItem('items', JSON.stringify(items));
        return 
      }
    }
  }
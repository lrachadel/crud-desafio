export class Init {
    load() {
      if(localStorage.getItem('itens') === null || localStorage.getItem('itens') == undefined) {
        let itens = [
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
  
        localStorage.setItem('itens', JSON.stringify(itens));
        return 
      }
    }
  }
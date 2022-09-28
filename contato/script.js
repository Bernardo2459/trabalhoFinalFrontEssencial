 class Clientes {
    constructor(){
        this.id = 1;
        this.arrayClientes = []
    }
    
    salvar() {
        let cliente = this.lerDados();
    
        if(this.validaCampos(cliente)){
            this.adicionar(cliente)
            alert('salvar')
        }
    
        console.log(this.arrayClientes);
    }

    adicionar(cliente){
        this.arrayClientes.push(cliente)
        this.id++;
    }

    lerDados(){
        let cliente = {}

        cliente.id = this.id;
        cliente.nome = document.getElementById('nome').value;
        cliente.email = document.getElementById('email').value;
        cliente.telefone = document.getElementById('telefone').value;

        return cliente;
    }

    validaCampos(cliente){
        let msg = '';

        if(cliente.nome == ''){
            msg += '-informe o nome completo \n';
        }

        if(cliente.email == ''){
            msg += '-informe o email\n';
        }

        if(cliente.telefone == ''){
            msg += '-informe o telefone \n';
        }

        if(msg != ''){
            alert(msg);
            return false;
        }

        return true;
    }
}

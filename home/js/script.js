async function produtos() {
    var respostaAPI = await fetch(`https://mocki.io/v1/f3db575d-0282-4b74-a286-d33545405316`)
  
    var produtos = await respostaAPI.json();
    console.log(produtos)
  
    produtos.map(item => {
        var card = `
        <div class="col-sm-4">
        <div class="card">
        <img id="foto" class="card-img-top" src=${item.imagem} alt="Produto" onclick="showModal(${item.id})">
          <div class="card-body">
            <h4>${item.Tenis}</h4>
            <p class="produto-descricao">${item.mini}</p>
            <p class="produto-preco"><span>R$ </span>${item.preco}</p>
            <p class="produto-info">
            <a data-toggle="modal" data-target="#myModal" onclick="showModal(${item.id})">Mais informações</a>
            </p>
          </div>
        </div>
      </div>
    `
  
    document.getElementById("produtos").insertAdjacentHTML('beforeend', card)
  
    //produtosModal(item.id)
    })
    
  
  }
  
  
  var modalWrap = null;
  
  async function  showModal (id) {
  
    if (modalWrap !== null){
        modalWrap.remove();
    }
  
    var respostaAPI = await fetch("https://mocki.io/v1/f3db575d-0282-4b74-a286-d33545405316");
    
    var produtos = await respostaAPI.json()
    
    produtos.map( item => { 
  
        if (item.id == id){
            
            modalWrap = document.createElement(`div`);
  
            modalWrap.innerHTML = 
            `             
            <div class="modal" class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Dados do Produto</h5>
                        <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 d-flex  align-items-center ">
                            <div class="container text-center bg-light">
                                <div class="row">
                                    <div class="col">
                                        <img src=${item.imagem} class="card-img-top" >    
                                    </div>
                                    <div class="col">
                                        <div class="mb-2 mt-3 d-flex  align-items-center">
                                            <h5 class="card-text">${item.Tenis}</h5>
                                        </div> 
  
                                        <div class="col mt-5 ">
                                            <h6 class="text-start">Descrição : </h6>
                                            <p class="text-start">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ea dicta nam, totam cumque sapiente alias repellat quia animi officiis iusto eligendi, accusantium consequatur. Quisquam, neque? Quas eaque ipsa reiciendis?
                                            </p>
                                        </div> 
  
                                        <div class="col mt-5 mb-5 d-flex  align-items-left">
                                            <h6 class="card-text">PREÇO : <strong>${item.preco}</strong></h6>
                                            
                                        </div>                                        
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
            
            `
            document.body.append(modalWrap);
        
            var modal = new bootstrap.Modal(modalWrap.querySelector('.modal'));
            modal.show();
        }
    })
  }
  
  
  
  
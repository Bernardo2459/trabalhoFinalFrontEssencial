async function produtos() {
    var respostaAPI = await fetch(`https://mocki.io/v1/f3db575d-0282-4b74-a286-d33545405316`)

    var produtos = await respostaAPI.json();
    console.log(produtos)

    produtos.map(item => {
        var card = `
        <div class="col-sm-4">
        <div class="card">
          <img class="card-img-top" src=${item.imagem} alt="Produto">
          <div class="card-body">
            <h4>${item.Tenis}</h4>
            <p class="produto-descricao">${item.mini}</p>
            <p class="produto-preco">${item.preco}</p>
            <p class="produto-info"><a data-toggle="modal" data-target="#myModal">Mais informações</a></p>
          </div>
        </div>
      </div>
    `

    document.getElementById("produtos").insertAdjacentHTML('beforeend', card)
    })

    /*produtos.map(item => {
        var card = `
      <div class="imagem-modal">
            <img src="${item.imagem} alt="Produto 1">
          </div>
          <h4>${item.nome}</h4>
          <p class="texto-modal">
          ${item.nome} 
          <p class="produto-preco">            <p class="produto-preco">${item.preco}</p>
          </p>
          </p><button id="btn-entrar" type="button" class="btn btn-primary">Ver produto</button>
    `

    document.getElementById("modal").insertAdjacentHTML('beforeend', card)
    })*/

}
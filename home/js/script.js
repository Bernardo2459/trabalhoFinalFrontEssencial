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
            <p class="produto-preco"><span>R$ </span>${item.preco}</p>
            <p class="produto-info">
            <a data-toggle="modal" data-target="#myModal" onclick="produtosModal(${item.id})">Mais informações</a>
            </p>
          </div>
        </div>
      </div>
    `

    document.getElementById("produtos").insertAdjacentHTML('beforeend', card)

    //produtosModal(item.id)
    })
    

}

async function produtosModal(produto) {
  var respostaAPI = await fetch(`https://mocki.io/v1/f3db575d-0282-4b74-a286-d33545405316`)

  var produtos = await respostaAPI.json();
  var produto = await produtos.filter(prod => prod.id == produto)

  console.log(produto)

  produto.map(item => {
      var card = `
      <div class="modal-body">
      <div class="imagem-modal">
        <img src=${item.imagem} alt="Produto 1">
      </div>
      <h4>${item.nome}</h4>
      <p class="texto-modal">${item.descricao}</p>
      <p class="produto-preco"><span>R$ </span>${item.preco}</p>
      <button id="btn-entrar" type="button" class="btn btn-primary">Ver produto</button>
      </div>
  `
  document.getElementById("modal").insertAdjacentHTML('beforeend', card)
  })

}
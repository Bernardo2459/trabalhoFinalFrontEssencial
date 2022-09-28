function buscarDadosNoGithub() {
   
    var usuario = ["Bernardo2459", "CSindorf", "DanielRizzoO", "diegoaristides", "Nanami78", "Vanessafl832"];

    usuario.map(usuarios => {
        buscar(usuarios)
    })

    
}

async function buscar(usuario) {
    var respostaAPI = await fetch(`https://api.github.com/users/${usuario}`)

    var data = await respostaAPI.json();
    console.log(data)

    var user = `
    <div class="col-md-6">
		<div class="single-equipe">
			<img src=${data.avatar_url} alt="Equipe">
				<div class="card-body">
					<h4>${data.name}</h4>
					<a href=${data.html_url} target="blank"><i class="fa fa-github"></i></a>	
				</div>
		</div>
	</div>
    `

    document.getElementById("equipe").insertAdjacentHTML('beforeend' ,user)

}
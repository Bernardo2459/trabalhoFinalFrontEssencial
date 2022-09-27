function autenticar(){
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    if(email == "admin@admin.com" && senha == "123456"){
        alert('Sucesso');
        location.href = "../empresa/index.html";
    }else{
        alert('Usuário ou senha incorretos');
    }
}
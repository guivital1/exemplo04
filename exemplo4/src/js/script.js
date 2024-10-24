function validar(){

    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    if(usuario == "Admin" && senha == "123456"){
        alert(`Seja bem vindo ${usuario}`)
        window.open('dashboard.html')
    }
    else{
        alert("usuario/senha inválidos")
    }

}




function inserir(){
    let numero = document.getElementById('posicao').value -1;
    let novo = document.getElementById('novo').value;
    document.getElementsByClassName('time')[numero].innerHTML = novo;
}
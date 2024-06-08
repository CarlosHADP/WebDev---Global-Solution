//REGISTRAR

const nomes = JSON.parse(localStorage.getItem('nomes')) || [];
const senhas = JSON.parse(localStorage.getItem('senhas')) || [];
const criarUser = document.querySelector("#criarUsername");
const criarSenha = document.querySelector("#criarPassword");
const criarConta = document.querySelector("#criarConta");


criarConta.addEventListener("click", function(){
    if (criarSenha.value === "" || criarUser.value === ""){
        return;
    }
    if(!nomes.includes(criarUser.value) && criarUser.value !== null){
        nomes.push(criarUser.value);
        localStorage.setItem('nomes', JSON.stringify(nomes));
        alert("Conta criada");
    }else{
        alert("Este user ja tem conta, Volte e faca login")
    }
    if(!senhas.includes(criarSenha.value) && criarSenha.value !== null){
        senhas.push(criarSenha.value);
        localStorage.setItem('senhas', JSON.stringify(senhas));
    }
    
    if(nomes.includes(criarUser) && senhas.includes(criar)){
        alert("Conta criada, pode voltar ao login!")
    }
    criarUser.value = "";
    criarSenha.value = "";
})

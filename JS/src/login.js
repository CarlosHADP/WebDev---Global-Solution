// LOGIN

const user = document.querySelector("#username");
const senha = document.querySelector("#password");
const entrar = document.querySelector("#entrar");

entrar.addEventListener("click", function(){
    if(!nomes.includes(user.value)){
        alert("Este user nao tem conta");
    }else if(nomes.includes(user.value) && !senhas.includes(senha.value)){
        alert("Senha icorreta")
    }
    if(nomes.includes(user.value) && senhas.includes(senha.value)){
        window.location.href = "/Landing page - GS/src/home/index.html"
    }
})
//REGISTRAR

// const nomes = JSON.parse(localStorage.getItem('nomes')) || [];
// const senhas = JSON.parse(localStorage.getItem('senhas')) || [];
// const criarUser = document.querySelector("#criarUsername");
// const criarSenha = document.querySelector("#criarPassword");
// const criarConta = document.querySelector("#criarConta");

// console.log(criarConta)

// criarConta.addEventListener("click", function(){

//     if(!nomes.includes(criarUser.value)){
//         nomes.push(criarUser.value);
//         localStorage.setItem('nomes', JSON.stringify(nomes));
//     }else{
//         alert("Este user ja tem conta, Volte e faca login")
//     }
//     if(!senhas.includes(criarSenha.value)){
//         senhas.push(criarSenha.value);
//         localStorage.setItem('senhas', JSON.stringify(senhas));
//     }
//     if(nomes.includes(criarUser) && senhas.includes(criar)){
//         alert("Conta criada, pode voltar ao login!")
//     }

// })

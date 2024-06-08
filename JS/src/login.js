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

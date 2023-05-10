"use strict";

//CRIANDO OBJETOS

const usuario1 = {
    nomeUsuario : "rita-lee",
    senhaUsuario : "00000"
}

const usuario2 = {
    nomeUsuario : "ptt01",
    senhaUsuario : "12345"
}

// console.log(usuario1.nomeUsuario);
// console.log(usuario2.nomeUsuario);
// usuario2.nomeUsuario = "Juquina";
// console.log(usuario2.nomeUsuario);

//LISTA DE USUARIOS
let listaDeUsuarios = [];
listaDeUsuarios.push(usuario1)
listaDeUsuarios.push(usuario2)
// console.log(listaDeUsuarios);

addEventListener("click", (evento)=>{
    //console.log(evento.target);

    let userInput = document.querySelector("#idUser");
    let passInput = document.querySelector("#idPass");


    if(evento.target.id == "btnSubmit"){
        
        try{
                listaDeUsuarios.forEach((usuario)=>{

                    if(userInput.value == usuario.nomeUsuario && passInput.value == usuario.senhaUsuario){
                        throw "USUÁRIO VALIDADO!";
                    }
                });

                throw "USUÁRIO OU SENHA INCORRETOS!";

    }catch(msg){
        if(msg == "USUÁRIO VALIDADO!"){
            console.log("USUÁRIO VALIDADO!")
        }else{
            console.log("USUÁRIO OU SENHA INCORRETOS!");
        }
    }

 }
});

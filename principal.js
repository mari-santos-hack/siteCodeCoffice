const botao = document.querySelector('.Cursos'); 
botao.addEventListener('click', function() {
window.location.href = "Cursos.html";
})


function paginaInicial(){
const telaInicial = document.querySelector('.Titulo');
telaInicial.addEventListener('click', function(){
window.location.href = "index.html";   
})    
}


const sobre = document.querySelector('.Sobre');
sobre.addEventListener('click', function() {
 window.location.href = "sobre.html";
    
})




/*toggle serve para alternar o elemento para dark theme --> document.body.classList.toggle('dark-theme')nomeClasse = document.body.className; 
if (nomeClasse == 'light-theme'){
    this.textContent = 'Dark'
} else{
this.textContent = "Light"
}
}); /*

/*const Loginn = document.querySelector('.login');
Loginn.addEventListener('click', function() {
 window.location.href = "login.html";
    
})

const cadastro = document.querySelector('.cadastro');
cadastro.addEventListener('click', function() {
window.location.href = "cadastro.html";
})*/
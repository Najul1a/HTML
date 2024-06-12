

trocaTema = () => {
 /*alert ("Mudei o tema e você não viu")*/
//   const html = document.documentElement

//   document.querySelector("body").style.background = "Pink" /*quando colocamos isso ele troca o fundo do site*/


document.documentElement.classList.toggle("light");

const isLight = document.documentElement.classList.contains("light");

const imagem = isLight ? "./img/imagem ana.jpeg" : "./img/azul.jpeg";

document.querySelector("#perfil img").setAttribute("src", imagem);
}

//Modificar as cores/imagem de fundo e botão
//Deixar com todos os links clicáveis
//fazer com que o "ALT" se modificar a cada tema 

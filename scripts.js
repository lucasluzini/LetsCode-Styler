console.log('Projeto em execução')

//Manipulação de DOM
const setTemaAtual = (texto) => `
   <h1>Tema Atual: ${texto}</h1>
`;
const h1TemaAtual = document.querySelector("#temaAtual");

const mudarTema = function (temaEscolhido){
   switch (temaEscolhido) {
      case 'modoDark':
        document.querySelector("body").classList.remove("bodyGray");
        document.querySelector("body").classList.remove("bodyDefault");
        document.querySelector("body").classList.add("bodyDark");
        h1TemaAtual.innerHTML = setTemaAtual('Dark');
        break;
      case 'modoCinza':
        document.querySelector("body").classList.remove("bodyDark");
        document.querySelector("body").classList.remove("bodyDefault");
        document.querySelector("body").classList.add("bodyGray");
        h1TemaAtual.innerHTML = setTemaAtual('Cinza');
        break;
      case 'modoPadrao':
        document.querySelector("body").classList.remove("bodyDark");
        document.querySelector("body").classList.remove("bodyGray");
        document.querySelector("body").classList.add("bodyDefault");
        h1TemaAtual.innerHTML = setTemaAtual('Padrão');
        break;
    }  
}

bDark.addEventListener('click', () => mudarTema("modoDark"))
bCinza.addEventListener('click', () => mudarTema("modoCinza"))
bPadrao.addEventListener('click', () => mudarTema("modoPadrao"))



//função para a descrição por áudio
let amigos = []; // Adiciona a declaração do array amigos

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female' , {rate: 1.0});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Amigo Secreto');
    exibirTextoNaTela('p', 'Digite o nome dos seus amigos');
}

exibirMensagemInicial();
function adicionarAmigo(){
    let input = document.querySelector('#amigo');
    let nome = input.value.trim();

    if (nome === ''){
        alert("Digite um nome válido.");
        return;
    }
    if (amigos.includes(nome)){
        alert("O nome informado ja foi adicionado.")
        input.value = '';
        return;
    }
    amigos.push(nome);
    atualizarLista();
    input.value = '';

}


function atualizarLista(){
    let listaNomes = document.querySelector('#listaAmigos');
    listaNomes.innerHTML = '';

   amigos.forEach((amigo) => {
    let li = document.createElement('li');
    li.textContent = amigo;
    listaNomes.appendChild(li);

  });
}
function sortearAmigo(){
    if (amigos.length < 2){
        alert("Adicione pelo menos 2 amigos para sortear.");
        return;
    }
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];
    let resultado = document.querySelector("#resultado");
    resultado.innerHTML = '';

    let li = document.createElement('li');
    li.textContent = `Amigo sorteado: ${amigoSorteado}`;
    resultado.appendChild(li);
}




function embaralhar(array){
    for (let i = array.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
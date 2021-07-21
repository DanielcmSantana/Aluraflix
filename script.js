function adicionarFilme() {
    var campoFilme = document.querySelector('#filme') ;
    var filmeFavorito = (campoFilme).value;
    listarFilmeNaTela(filmeFavorito)
}

function listarFilmeNaTela(filme) {
    var listaFilmes = document.querySelector('#listaFilmes');
    var elementoFilme = "<img src=" + filme + ">";
    listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}
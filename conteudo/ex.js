function adicionarFilme() {
    var FilmeFavorito = document.getElementById("filme").value;
    if (FilmeFavorito.endsWith(".jpg")) {
       listarFilmesNaTela(FilmeFavorito);
    } else {
        console.error("Essa é extensão não é aceita, extensão correta jpg!");
    }
    document.getElementById("filme").value = "";
   
}

function listarFilmesNaTela(filme) {
    console.log(filme);
    var elementoFilmeFavorito = "<img src=" + filme + ">";
    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML = 
    elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}
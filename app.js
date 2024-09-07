function pesquisar(){
    let section = document.getElementById("resultados-pesquisa");

for (let dado of dados){
    resultados += `
        <div class="item-resultado">
            <h2><a href=""></a> ${dado.mangaka}</a></h2>
            <p class="">${dado.descricao}</p>
            <img src="${dado.img}"></p>
        </div>
    `}
}
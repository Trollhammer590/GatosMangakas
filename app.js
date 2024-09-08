console.log (dados)

function pesquisar(){
    let section = document.getElementById("resultados-pesquisa");

    let backg = document.getElementById("backg");
    let resultados = "";
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
        campoPesquisa = campoPesquisa.toLowerCase();

    let mangaka= ""
    let descricao=""
    let tag=""

    if(campoPesquisa == "" || !resultados){
        section.innerHTML = `<li class="resultados-pesquisa-list"><h4>Nenhum gato encontrado :(</h4></li>`;
        if (backg != null){
            backg.remove();
        }
        return;
    }

for (let dado of dados){
            mangaka = dado.mangaka.toLocaleLowerCase();
            descricao = dado.descricao.toLocaleLowerCase();
            tag = dado.tag.toLocaleLowerCase()
    if(mangaka.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tag.includes(campoPesquisa)){
                        if (backg != null){
                            backg.remove();
                        }
    resultados += `
                <li class="resultados-pesquisa-list">
                    <h4> ${dado.mangaka} </h4>
                    <img class="imagem-pesquisa" src="${dado.img}" style="width: 400px; height: 400px; ">
                    <h4>${dado.descricao}</h4>
                </li>
    `}
}
    section.innerHTML = resultados;

}

function carregar(){
    let gatodiv = document.getElementById("gato-div");

    let resultadogato = "";
    for (let dado of dados){
        resultadogato += `
        <li class="lii">
        <h4> ${dado.mangaka} </h4>
        <img class="imagem-pesquisa" src="${dado.img}" style="width: 200px; height: 200px; ">
        </li> 
        `
        gatodiv.innerHTML = resultadogato;
    }

}
console.log (dados)

function pesquisar(){
    let section = document.getElementById("resultados-pesquisa");
    let backg = document.getElementById("backg");
    let resultados = "";  
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();  
    let encontrouResultado = false;  

   
    if (campoPesquisa === "") {
        if (backg != null) {
            backg.remove();  
        }
        section.innerHTML = `<li class="resultados-pesquisa-list"><h4>Nenhum gato encontrado :(</h4></li>`;
        return;  
    }

   
    for (let dado of dados) {
        let mangaka = dado.mangaka.toLowerCase();
        let descricao = dado.descricao.toLowerCase();
        let tag = dado.tag.toLowerCase();

       
        if (mangaka.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tag.includes(campoPesquisa)) {
            encontrouResultado = true; 
            if (backg != null) {
                backg.remove();  
            }

          
            resultados += `
                <li class="resultados-pesquisa-list">
                    <h4> ${dado.mangaka} </h4>
                    <img class="imagem-pesquisa" src="${dado.img}" style="width: 400px; height: 400px; ">
                    <h4>${dado.descricao}</h4>
                </li>
            `;
        }
    }

   
    if (!encontrouResultado) {
        resultados = `<li class="resultados-pesquisa-list"><h4>Nenhum gato encontrado :(</h4></li>`;
    }

   
    section.innerHTML = resultados;
    
    backg.remove();
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
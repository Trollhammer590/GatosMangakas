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

       
        if (mangaka.includes(campoPesquisa) || tag.includes(campoPesquisa)) {
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
    let gato = document.getElementById("gato");


    let resultadogato = "";
    for (let dado of dados){
        resultadogato += `
        <li class="container-gato">
        <h4> ${dado.mangaka} </h4>
        <img class="gato-bd" src="${dado.img}" style="width: 150px; height: 150px; ">
        </li> 
        `
        gato.innerHTML = resultadogato;
    }

}
function configuracao(){
    let rodape = document.getElementById("rodape");
    let container = document.getElementById("header");

    let cabecalho = "";
    let footer = "";

        footer = `                
                    <li class="elemento">
                        <section class="instagram">
                            <img class="img" src="https://cdn.icon-icons.com/icons2/2389/PNG/512/instagram_logo_icon_145167.png" width="15" height="15"><h5><a href="https://www.instagram.com/trollhammer590/" target="_blank">Instagram</a></h5> 
                        </section>
                                        <section class="after"></section>
                        <section class="whatsapp">
                            <img class="img" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" width="15" height="15"><h5><a href="https://github.com/Trollhammer590" target="_blank">Github</a></h5></a>
                        </section>
                    </li>
                        <h5>© 2024 Gatos Mangás. Todos os Direitos Reservados.</h5>`

        cabecalho = `
                <h4 onclick="window.location.href='index.html';"> Home </h4>
                <h4 onclick="window.location.href='gatos.html';"> Base de Gatos </h4>
                <h4 onclick="window.location.href='sobrenos.html';"> Sobre nós </h4>`

    container.innerHTML = cabecalho
    rodape.innerHTML = footer
}
function pesquisar(){
    //obtém a seção html onde os resultados serão exibidos.
    let section = document.getElementById("resultado-pesquisa");

    //obtem as informaçãos escrita no campo pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    //se campoPesquisa for uma string vazia
    if(!campoPesquisa) {
        section.innerHTML ="<p.Você precisa digitar o nome do personagem ou seu clã.</p>"
        section.innerHTML ="<p>nada foi encontrado</p>"
        return
    }
    
    //faz com que as letras fiquem minusculas
    campoPesquisa = campoPesquisa.toLowerCase()

    //a string inicializaa vazia para armazenar os resltados 
    let resultados = "";
    let titulo ="";
    let vila ="";

    //itera(ou obtém) cada dadoo da lista de dados
    for(let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        vila = dado.vila.toLowerCase()
        if(titulo.includes(campoPesquisa) || vila.includes(campoPesquisa)) {
            //cria um novo elemento html para cada resultado
            resultados +=`
            <div class="item-resultado">
                <div class="card mb-3" style="max-width: 540px">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${dado.img}" class="img-fluid rounded-start" alt="Naruto Uzumaki">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${dado.titulo}</h5>
                                <p class="card-text">${dado.texto}</p>
                                <p class="card-text"><small class="text-body-secondary">Vila: ${dado.vila}</small>
                                </p>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        }   
    }
    //verifica se o que foi pesquisa tem na base de dados
    if (!resultados) {
        resultados ="<p>Nada foi encontrado</p>"
    }

    //atribtui os resultados gerados na seção html
    section.innerHTML = resultados;
}

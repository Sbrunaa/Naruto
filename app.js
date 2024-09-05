function pesquisar(){
    //obtém a seção html onde os resultados serão exibidos.
    let section = document.getElementById("resultado-pesquisa");

    //a string inicializaa vazia para armazenar os resltados 
    let resultados = "";

    //itera(ou obtém) cada dadoo da lista de dados
    for(let dado of dados) {
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
    //atribtui os resultados gerados na seção html
    section.innerHTML = resultados;
}
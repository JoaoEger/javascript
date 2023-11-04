/**
 * verbos http
 * GET -> trazer dados (padrao)
 * POST -> enviar dados
 * PUT -> editar dados
 * DELETE -> deletar dados
 */

const selEstados = document.querySelector('#estado');

//adicionando o evento change ao select
selEstados.addEventListener("change", function(){
    //retorna o estado selecione - atributo value
    let selecionado = this.value
    
    //consultar a API
    let estrutura = '<option value="">Selecione</option>'

    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selecionado}/municipios`)
    .then(retorno => retorno.json())
    .then(function(cidades){
        //laço de repetiçao para preencher as cidades
        for(posicao in cidades){
            estrutura += `<option value="${cidades[posicao].cidades}">${cidades[posicao].nome}</option>`
        }

        //carregar dados no select
        document.querySelector("#cidade").innerHTML = estrutura
    })
})
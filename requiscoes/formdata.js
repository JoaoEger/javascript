const form = document.querySelector('form');

form.addEventListener('submit', function(){
    let dados = new FormData(form)

    //metodos da classe
    dados.append('nomeCampo', 'valorCampo')

    for(dado of dados.values()){
        console.log(dado)
    }
})
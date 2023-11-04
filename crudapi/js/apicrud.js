/* Criar um CRUD utilizando a api http://cafepradev.com.br:21020 na parte de animals
o CRUD deve
-> listar itens existentes
-> adicionar novos itens
-> editar itens
-> deletar itens */

$(function(){
    //usando api
    $.ajax({
        url :"http://cafepradev.com.br:21020/animals/list",
        contentType : JSON,
        success : function(lista){
            console.log(lista);
        }
    })
    
    let estrutura = ''
    //listando api
    fetch("http://cafepradev.com.br:21020/animals/list")
    
    .then(retorno => retorno.json())
    .then(function(animal){
        for(pos in animal){
            estrutura += 
            `<li> ID: ${animal[pos].id}  | 
            Nome: ${animal[pos].name}  | 
            Espécie : ${animal[pos].species}  | 
            Cor : ${animal[pos].color}  | 
            Tamanho : ${animal[pos].size} <a href="#" class="del">X </a><a href="#" class="update"> E</a></li>`
            
            console.log(estrutura);
        }
        document.querySelector(".list").innerHTML = estrutura
    })
    //inserindo na api
    $(document).on("submit", ".inserir", function(){
        let id = $("#identificator").val()
        let title = $("#name").val()
        let specie = $("#specie").val()
        let color = $("#color").val()
        let size = $("#size").val()

        $(".list").prepend(`
        <li> ID: ${id}  |
        Nome: ${title}  | 
        Espécie : ${specie}  | 
        Cor : ${color}  | 
        Tamanho : ${size}  |  <a href="#" class="del">X </a><a href="#" class="update"> E</a></li>`)
    })
    //deletando dados da api
    $(document).on('click', '.del', function(){
        $(this).parent().remove()
        return false
    })

})
//iniciando escopo do jquery
$(function() {
    //manipular um evento
    // on(evento, seletor, callback)
    $(document).on("click", ".meuLink", function(){
        $('.meuLink').removeClass('ativo')
        $(this).addClass("ativo")
        let caminho = $(this).attr('href')
        loadView(caminho)

        return false;
    })

    //controlar evento do form de lista de compra
    $(document).on("submit", "#cadastraItem", function(){
        let item = $(this).find('input').val()

        //adicionar um item na lista
        $('.listaMercado').append(`<li>${item} <a href="#" class="deletaItem">X</a></li>`)

        return false;
    })

    //remover um item da lista
    $(document).on('click', '.deletaItem', function(){
        $(this).parent().remove()

        return false;
    })

    //aumentar caixinha
    $(document).on('click', '.clicaBloco', function(){
        //mudar cor
        $('.bloco').css({
            'background-color' : 'black',
            'border-radius' : '5px'
        })

        $('.bloco').fadeIn(1000) //fadeOut, fadeOut(transiçao)| show, hide(seco)
        
        //aumentar caixa
        let largura = $('.bloco').width()
        $('.bloco').animate({
            width : largura += 100
        },1000)
        
        return false
    })

    //funcao de carregamentp das views
    let loadView = (page = 'home.html') => {
        $('.container').load(`view/${page}`, function(){
            $('.cpf').mask('000.000.000-00')
        })
    }
    
    //chamar loadview
    loadView()

    //consumir api com jquery
$.ajax({
    url : 'http://cafepradev.com.br:21020/messages/list',
    contentType : 'json',
    success : function(dados){
        console.log(dados);
    }
})


})
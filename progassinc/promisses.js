/**
 * promises sao promessas
 * é uma classe que permite a construção de funções de processamento assincrono
 * representa um valor que poderá estar disponível no futuro.
 */

//SINTAX

/* new Promise( (resolve, reject) => {

})

new Promise(function(resolve, reject){

}) */
/**
 * EXEMPLO 1
 * 
 */
/* const timeout = (duration) =>{
    return new Promise((resolvido, rejeitado) => {
        setTimeout(resolve, duration)
    })
}
//usando a função
timeout(3000).then(() => {
    console.log("passou 3 segundos");
}) */

/**
 * EXEMPLO 2 
 * EXECUTA UM CODIGO QUE RESULTA EM FALHA
 */
/* function getTodosOsUuarios(){
    return new Promise( (resolve, reject) => {
        reject(new Error("Não foi possivel lidar os usuarios"))
    })
}

getTodosOsUuarios().catch(erro => console.log(erro.message)); */

/**
 * EXEMPLO 3
 * usando uma promisse dentro de outra
 */
function getUsuarios(){
    return new Promise((resolve, reject) => {
        resolve([1,2,3])
    })
}
function getUsuariosById(id){
    return new Promise((resolve, reject) => {
        resolve({id, nome: 'Joao'})
    })
}
/* getUsuarios()
    .then(ids => getUsuariosById(ids[4]))
        .then(usuario => console.log(usuario)); */

/**
 * controlando o resolve e o reject
 */

const calculo = (valor1, valor2) => {
    return new Promise( (resolve, reject) => {
        let resultado = valor1 + valor2
        if(resultado == 4){
            resolve(resultado)
        }else{
            reject(new Error("o resultado é invalido"))
        }
    })
}
calculo(2,3)
    .then(ret => console.log(ret))
    .catch(erro => console.log(erro.message))
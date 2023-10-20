/* faça uma promisse que verifique se a idade informada corresponde ao ano de nascimento informado
ex 1985 - 38 anos */
let ano = 2007;
let idade = 17;
let corresponde = (2023 - ano)
let sera = (idade == corresponde)

const certo = (relacao) => {
    return new Promise( (resolve, reject) =>{
        if(sera){
            resolve(sera)
            console.log(ano,"-",idade)
        }else{
            reject(new Error("n corresponde"))
            console.log(corresponde)
            console.log("idade certa seria",idade);
        }
    })
}

certo()
    .then(cert => console.log("correto"))
        .catch(erro => console.log(erro.message))
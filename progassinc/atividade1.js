/* fazer o consumo da api https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json
use promise */

const exeapi = (api) => {
    return new Promise( (resolve, reject) =>{
        fetch(`https://mdn.github.io/learning-area/javascript/apis/fetching-data/${api}/products.json`)
        .then(apiR => apiR.json())
        .then(function(apiR){
            if(!apiR.erro){
                resolve(apiR)
            }else{
                reject(new Error("Endereço não encontrado"))
            }
        })
    } )
}
exeapi('can-store')
     .then(apiR => console.log(apiR))
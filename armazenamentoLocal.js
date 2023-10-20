/**
 * armazenamento de informações no navegador
 * 1. cookies -> armazena uma string de informações
 * 2. localStorage -> armazena obj e ñ expira
 * 3. sessionStorage
 */

//usando cookie
// document.cookie = "usarioLogado=true";
// let cookies = document.cookie.split(';')

// console.log(cookies);

//LOCAL STORAGE
/**
 * setItem -> seta um item, grava um item
 * getItem -> traz um item gravado
 */
/* localStorage.setItem("usuario", JSON.stringify({
    nome: "Diego",
    user: "Bracellos",
    ultimoAcesso : "2023-10-16"
}));
console.log(localStorage.getItem("usuario"));
 */
/**
 * TEM VALIDADE EM QUANTO ESTIVER ABERTO
 */
// sessionStorage.setItem()
// sessionStorage.getItem()
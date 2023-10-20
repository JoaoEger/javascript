/**
 * obj = {
 *  propriedade : valor
 * }
 */
let carro = {
    modelo : "Megane Grand Tour Privilege",
    ano : 2009,
    cor: "Beje",
    registro : {
        chassi : "JFSKHSDJKJHSDSGR34432R3234",
        placa : "MMM-2C20",
        renavam: "12345678908"
    }
}

let carros = [
    carro
];
 console.log(carros);
 carros.push({
    modelo : "Porshe Carrara",
    ano : 2022,
    cor: "Preto",
    registro : {
        chassi : "JFSKHSDJKJHSDSGR34432R3234",
        placa : "MMM-2C20",
        renavam: "12345678908"
    }
})
console.log(carros);
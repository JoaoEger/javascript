/*Crie um algorítimo para armazenar dados de locação de um veículo.
a) utilize objetos para criar os dados do veículo e os dados de locação
b) utilize funções para calcular o valor de locação baseado em diárias e km percorridas
c) utilize laços de repetição para cadastrar 3 veículos locados (é neste ponto que os cálculos serão realizados)
d) utilize laços de repetição para listar os dados já com os cálculos efetuados dos veículos*/


let prompt = require('prompt-sync')();

let precodia; let dias; let comb; let km;

let planodias; let planokm;

let modelo; let ano; let cor; let placa; let renavam; let chassi;

let veiculos = [];

let qtdCadastro = prompt("Determine a quantidade de veículos a serem cadastrados: ");

do{ 
    modelo = prompt("Modelo: ");
    ano = prompt("Ano: ");
    cor = prompt("Cor: ");
    placa = prompt("Placa: ");
    renavam = prompt("Renavam: ");
    chassi = prompt("Chassi: ")
    precodia = prompt("Preço da diária: R$ ");
    dias = prompt("Quantidade de dias: ");
    km = prompt("Quantidade de quilômetros a serem percorridos: ");
    comb = prompt("Preço do litro do combustível: R$ ");

    (()=>{
        planodias = precodia * dias;
        planodias = planodias.toFixed(2);
        return planodias;
    })();

    (()=>{
        planokm = ((precodia/2)*dias) + ((comb*0.1) * km); 
        planokm = planokm.toFixed(2);
        return planokm;
    })();

    veiculos.push({
        modelo: modelo,
        ano: ano,
        cor: cor,
        registro:{            
            placa:placa,
            renavam:renavam,
            chassi:chassi
        },
        locacao: {
            precodia: precodia,
            dias: dias,
            km:km,
            comb:comb,
            planodias: planodias,
            planokm: planokm
        }
    })

} while (veiculos.length < qtdCadastro);

for( v in veiculos){
    console.log(`
        § ---- * L * O * C * A * R * ---- §
        impressiona qualquer maria-gasolina
        § --  CADASTRO DE LOCAÇÃO VEICULAR -- §
        Modelo: ${veiculos[v].modelo}
        Ano: ${veiculos[v].ano}
        Cor: ${veiculos[v].cor}
        Placa: ${veiculos[v].registro.placa}
        Renavam: ${veiculos[v].registro.renavam}
        Chassi: ${veiculos[v].registro.chassi}
        Plano de Locação por Diárias - Valor: R$ ${veiculos[v].locacao.planodias}
        Plano de Locação por Quilometragem - Valor: R$ ${veiculos[v].locacao.planokm}
        § ----------------------------------------------------------------------- §
    `);
};
let dataFutura = new Date("August 01, 2024 12:00:00").getTime();

let = dias, horas, minutos, segundos;


setInterval( () => {
    let dataAtual = new Date().getTime();
    // estamos pegando a dataFuturo e subtraindo
    // com a dataAtual depois dividimos por 1000
    // milissegundos
    let segundosTotal = (dataFutura - dataAtual) / 1000;
    dias = parseInt(segundosTotal / 86400);//Obter o valor inteiro
    // EScluir os valores de dia
    segundosTotal = segundosTotal % 86400;

    horas = parseInt(segundosTotal / 3600);
    segundosTotal = segundosTotal % 3600;

    minutos = parseInt(segundosTotal / 60);
    segundos = parseInt(segundosTotal % 60);
    
    // Se dias for menor do q 10 acrecenta uma string "0" e concatena com dias
    document.getElementById("dias").innerHTML = dias < 10 ? "0" + dias : dias;
    document.getElementById("horas").innerHTML = horas < 10 ? "0" + horas : horas;
    document.getElementById("minutos").innerHTML = minutos < 10 ? "0" + minutos : minutos;
    document.getElementById("segundos").innerHTML = segundos < 10 ? "0" + segundos : segundos;
},1000);

// 1 minuto tem 60 segundos
// 1 hora tem 60 minutos 60m x 60s = 3600 segundos
// 1 dia 24 horas 24h x 3600s = 86400segundos 24h x 60m x 60s
// operador de porcentagem % conhecido como modulo ou resto
// da divisão %


// Months/Meses:
// January : Janeiro                           
// February : Fevereiro                  
// March : Março                        
// April : Abril                                  
// May : Maio                                
// June : Junho                                  
// July : Julho
// August : Agosto
// September : Setembro
// October : Outubro
// November : Novembro
// December : Dezembro

// Days of the week / Dias da semana:
// Monday : Segunda-Feira                            
// Tuesday : Terça-Feira
// Wednesday : Quarta-Feira
// Thursday : Quinta-Feira                     
// Friday : Sexta-Feira
// Saturday : Sábado
// Sunday : Domingo

// const data = new Date();
//Cada dia da semana esta armazenado na variavel
//diaDaSemana que é um array e para obter cada dia 
//da semana é só colocar a posição de cada array
// console.log(diaDaSemana[2]) vai aparecer terça
// por que a posição de terça é 2 dentro do array
// const diaDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
// console.log(diaDaSemana[data.getDay()]);

// const diaDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
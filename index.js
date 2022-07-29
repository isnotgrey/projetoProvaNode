//a prova foi feita usando express
//cada exercício ficou em uma rota

let express = require ('express');
let app = express();

app.get('/',function(req,res){
    res.send('ROTA GET');
});
//rota para o ex 1 
// 1 - [0.5] Faça uma função Nodejs que receba como parâmetro na URL o ano de nascimento, o ano atual e apresente o seu nome e idade.
app.get('/ex1',function(req,res){
    //x = req.query.nome;
    let param1 = req.query.nome;
    let param2 = parseInt(req.query.n1);
    let param3 = parseInt(req.query.n2);
    // parametro pra url
   // http://localhost:3000/ex1?nome=Jean&n1=1995&n2=2022
    let resultado = param3 - param2;
  
    res.send(`

   Seu nome: ${param1} <br>
   Sua idade: ${resultado} 
   
    
    `)
});

//rota para o ex 2
//2 - [0.5] Faça uma função Nodejs que receba como parâmetro na URL um número inteiro e apresente seu Fatorial.

app.get('/ex2',function(req,res){
    //parametro para a url
    //http://localhost:3000/ex2?n1=10
    let param1 = parseInt(req.query.n1);
   
  let html = '';     
 let resultado = 1;
for (let i = 1; i <=param1; i++) {
    html+= `!${i} = ${resultado = resultado * i} <br>`;
    
}
res.send(`

Fatorial de ${param1}: <br><br>
${html} <br>
 

 
 `)
      

});

//rota para o ex 3
/* 
3 - [1.0] As Organizações Tapioca resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa que calculará os reajustes. Faça um programa que receba como parâmetro na URL o salário de um colaborador e calcule reajuste segundo o seguinte critério, baseado no salário atual:
                - Salários até R$ 250,00 (incluindo): aumento de 20%
                - Salários entre R$ 250,00 e R$ 600,00: aumento de 15%
                - Salários entre R$ 600,00 e R$ 1500,00: aumento de 10%
                - Salários de R$ 1500,00 em diante: aumento de 5%
Após o aumento ser calculado, deverá ser mostardo: o salário antes do reajuste; o percentual de aumento aplicado; o valor do aumento; o novo salário, após o aumento.

*/
app.get('/ex3',function(req,res){
    //parametro da url
    // http://localhost:3000/ex3?n1=1500
    let resultado = 0;
    let resultadoFinal = 0;
    let porcentagem = "";
    let salario = parseFloat(req.query.n1);
        if (salario <= 250){
            resultado = 0.20 * salario;
            resultadoFinal = salario + resultado;
            porcentagem = "20%";
            res.send(`
            Salário antes do reajuste: ${salario} <br>
            Percentual do aumento: ${porcentagem} <br>
            Valor do aumento: ${resultado} <br>
            Novo sálario: ${resultadoFinal} <br>
             `)
        }else if(salario > 250 && salario <=600){
            resultado = 0.15 * salario;
            resultadoFinal = salario + resultado;
            porcentagem = "15%";
            res.send(`
            Salário antes do reajuste: ${salario} <br>
            Percentual do aumento: ${porcentagem} <br>
            Valor do aumento: ${resultado} <br>
            Novo sálario: ${resultadoFinal} <br>
             `)
        }else if (salario > 600 && salario <=1500){
            resultado = 0.10 * salario;
            resultadoFinal = salario + resultado;
            porcentagem = "10%";
            res.send(`
            Salário antes do reajuste: ${salario} <br>
            Percentual do aumento: ${porcentagem} <br>
            Valor do aumento: ${resultado} <br>
            Novo sálario: ${resultadoFinal} <br>
             `)
        }else{
            resultado = 0.05 * salario;
            resultadoFinal = salario + resultado;
            porcentagem = "5%";
            res.send(`
            Salário antes do reajuste: ${salario} <br>
            Percentual do aumento: ${porcentagem} <br>
            Valor do aumento: ${resultado} <br>
            Novo sálario: ${resultadoFinal} <br>
             `)
        }
        
});

//rota para o ex 4
//4 - [0.5] Faça uma função Nodejs que receba como parâmetro na URL um número inteiro n e mostre todos os impares, de 1 até n.
app.get('/ex4',function(req,res){
    //parametro da url
    //http://localhost:3000/ex4?n1=100
    let resultado = '';
    let param1 = parseInt(req.query.n1);
        for (let i = 0; i < param1; i++){
            if (i%2!=0){
                resultado += `<p>Número ${i} é ímpar! </p>`;
            }
      
        }

res.send(`
<h1>NÚMERO DIGITADO: ${param1} </h1>
 ${resultado} 
`) 

   
  

});

//rota para o ex 5
//5 - [0.5] Faça uma função Nodejs que receba como parâmetro na URL um número inteiro n e imprima:
app.get('/ex5',function(req,res){
    //parametro da ur
    //http://localhost:3000/ex5?n1=10
    let resultado = ''

    let param1 = parseInt(req.query.n1);
        for (let i = 1; i <= param1; i++){
            
            for (let j = 1; j <= i; j++){
                resultado += `${i} `;
            }
            resultado += `<br>`
        }
  
    res.send(`
        ${resultado} 
   
    `)
});
//rota para o ex 6
/*
6 - [1.5] Faça uma função Nodejs que receba como parâmetro na URL a hora(utilize um parânmetro para hora e outro para os minutos), calcule e mostre:
                  - A hora informada convertida em minutos;
                  - O total dos minutos, ou seja, os minutos digitados mais a conversão anterior;
                  - O total de minutos convertidos em segundos.
*/
app.get('/ex6',function(req,res){
    //parametro da url
    //http://localhost:3000/ex6?n1=1&n2=30
    let param1 = parseInt(req.query.n1);
    let param2 = parseInt(req.query.n2);
    let resultadoHora = 0;
    let resultadoMinutos = 0;
    let totalSegundos = 0;


    resultadoHora = 60 * param1;
    resultadoMinutos = resultadoHora + param2;
    totalSegundos = 60 * resultadoMinutos;
    res.send(`
     Hora informada: ${param1} <br>
     Minútos informados: ${param2} <br><br>
     Resultado em minútos: ${resultadoHora} <br>
     Resultado geral em minútos:  ${resultadoMinutos} <br>
     Resultado em segundos: ${totalSegundos}
   
    
    `)
});

//rota para o ex 7
/* 
7- [0.5] Faça uma função Nodejs que receba como parâmetro na URL um número inteiro n, calcule e mostre sua tabuada
*/
app.get('/ex7',function(req,res){
    //parametro da url
    //http://localhost:3000/ex7?n1=10
    let resultado = '';

    let param1 = parseInt(req.query.n1);
    for (let i = 0; i <= param1; i++){
        resultado += `${i} x ${param1} = ${resultadoDentro = i * param1} <br>`
    }

    res.send(`
     Resultado da tabuada do número ${param1}: <br><br> ${resultado} <br>

    `)
});

app.listen(3000,function(){
    console.log("projeto iniciado na porta 3000");
});
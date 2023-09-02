//declaração de constantes

const form = document.querySelector('form');
const imc = document.querySelector('button');

//anula submissão de dados do formulario

form.onsubmit = () => false;

imc.addEventListener('click', () => {
    //declaração de variaveis
    let peso = document.querySelector('#peso').value.replace(',','.');
    let altura = document.querySelector('#altura').value.replace(',','.');
    let result = document.querySelector('#result');
    let diag = document.querySelector('#diag');
    let imc = peso/Math.pow(altura, 2);

    //exibe o resiultado do imc na tela

    result.innerHTML = imc;
    diag.innerHTML = (
        imc < 18.5 
        ? 'Você está abaixo do peso.'//interrrogação funciona como ENTÃO
        : imc < 25       // : significa SE.
        ? 'Você está no seu peso ideal. '
        :imc < 30 
        ? 'Você está acima do peso.'
        : imc < 35 
        ? 'você está obeso.'
        :imc < 40 
        ? 'Você esta com obesidade severa.'
        :'você esta com obesidade mórbita. Procure um médico.'

     );
});
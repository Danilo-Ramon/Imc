//DOM - Elementos HTML

const nome = document.querySelector('#nome')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')
const botao = document.querySelector('#btn')
const imcFinal = document.querySelector('#imc')
const resultado = document.querySelector('#resultado')
const alvo = document.querySelector('.alvo')



botao.addEventListener('click',calculoImc)

function calculoImc(){

    event.preventDefault()

    let imc = peso.value/(altura.value**2)
    imcFinal.value = imc.toFixed(2)

    
    if(imc<18.5){
        resultado.innerHTML = "Sr(a) " + nome.value + " sua situação é de magreza"
        alvo.src = "images/magro.png"
    }

    else if(imc>=18.5 && imc<=24.9){
        resultado.innerHTML = "Sr(a) " + nome.value + " seu peso está normal"
        alvo.src = "images/musculo.png"
    }

    else if(imc>25 && imc<30){
        resultado.innerHTML = "Sr(a) " + nome.value + " você tem sobrepeso"
        alvo.src = "images/obesidade.png"
    }

    else{
        resultado.innerHTML = "Sr(a) " + nome.value + " você tem obesidade"
        alvo.src = "images/morbida.png"
    }

}









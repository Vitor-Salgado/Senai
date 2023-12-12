function calcular(operacao){
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    var resultadoElemento = document.getElementById('resultado');
    var opElemento = document.getElementById('op');
    if(isNaN(numero1) || isNaN(numero2)){
        resultadoElemento.textContent = 'Por favor , insira numero válidos.'
        return;
    }
    switch(operacao){
        case 'soma':
            resultadoElemento.textContent = 'Resultado: ' + (numero1 + numero2);
            opElemento.textContent = '+';
            break;
        case 'subtracao':
            resultadoElemento.textContent = 'Resultado: ' + (numero1 - numero2);
            opElemento.textContent = '-';
            break;
        case 'multiplicacao' :
            resultadoElemento.textContent = 'Resultado: ' + (numero1 * numero2);
            opElemento.textContent = 'x';
            break;
        case 'divisao' :
            if(numero2 == 0){ resultadoElemento.textContent = 'Numero nao pode ser dividido por zero'}
            else{resultadoElemento.textContent = 'Resultado:' + (numero1 / numero2);
            opElemento.textContent = '/';
            return;}
            break;     
    }
    return;
}

function ligarLuz(){
    document.getElementById('luz').src = 'src/imagens/luzAcesa.jpg';
}

function apagarLuz(){
    document.getElementById('luz').src ='src/imagens/luzApagada.jpg';
}
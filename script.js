const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
//const btn = document.querySelector('#btnCalcular');
const resultado = document.querySelector('#resultado');
const btn = document.querySelector('#btnCalcular');
const form = document.querySelector('#formulario');

/*btn.addEventListener('click', btnOnClick);

function btnOnClick(){
    let valor1 = parseInt(input1.value);
    let valor2 = parseInt(input2.value);
    let result = valor1 + valor2;
    resultado.append(result);

}*/

form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event){
    //evita que se recargue la pagina
    event.preventDefault();
    let valor1 = parseInt(input1.value);
    let valor2 = parseInt(input2.value);
    let result = valor1 + valor2;
    resultado.append(result);
}





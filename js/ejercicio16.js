const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : 'Error: División por cero';


const calculo =(operacion) =>{
    let valor1= document.getElementById("num1").value.trim();
    let valor2= document.getElementById("num2").value.trim();
    let campoRes=document.getElementById("Res");

    campoRes.value="";

    if(valor1==""  || valor2==""){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debes ingresar números válidos'
        });
        return;
    }
    let num1=parseFloat(valor1);
    let num2= parseFloat(valor2);
    if( isNaN (num1) || isNaN(num2)){
        Swal.fire({
            icon: 'error',
            title: 'Dato Invalido',
            text: 'Solo puedes ingresar números'
        });
        return;
    }
    let res;
    if(operacion == "suma"){
        res=sumar(num1,num2);
    }else if(operacion=="restar"){
        res=restar(num1,num2);
    }else if(operacion=="multiplicar"){
        res=multiplicar(num1,num2);
    }else if(operacion=="dividir"){
        res=dividir(num1,num2);
        if(num2==0){
            Swal.fire({
                icon: 'error',
                title: 'Operación no permitida',
                text: 'No es posible dividir entre cero.'
            });
        }
    }
    campoRes.value=res;
};

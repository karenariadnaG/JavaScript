
let usuario=prompt("ingrese su nombre")
let edad=prompt("ingrese su edad");

if(edad<=16){
    alert("debe ser mayor de 17 años");
}else if(!isNaN(edad)){
    alert("Bienvenido/a" + usuario);
}


let precio=parseInt(prompt("ingrese cantidad de productos a comprar (no más de 5)"));

if(precio<=0){
    alert("el numero ingresado debe ser mayor a 0");
}else if(!isNaN(precio)){
    let saldo= productos(precio);
    
    if(saldo == 0){
        alert("Felicitaciones! ya tiene su compra");
    }else{
        alert("Le resta un total a pagar de " + saldo);
    }
}else{
    alert("Debe colocar números");
}

function productos(cant){
    let total=0;
    for (let i = 0; i < cant; i++){

        let producto=parseFloat(prompt("ingrese el precio del producto" + (i+1)));
        total=total+producto;
    }

    let pago=parseFloat(prompt("Su total a pagar es de " +total+ " ¿Cuánto deseea abonar?"));
    return total-pago;
}

 
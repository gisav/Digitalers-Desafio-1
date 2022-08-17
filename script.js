// DATOS: Tania Avila - 827625

/*
Cree una función llamada  function gastoConIva() que acepte un número y devuelva ese número más el 21% que es el valor del IVA.
Luego crea una function map() que tome dos entradas o parámetros:
un array de como valores números. 
una función callback: esta función se aplica a cada elemento del array (dentro de la función map().
Haga que su function map() devuelva una nueva matriz llena de números que son el resultado de usar la función callback en cada elemento de la matriz de entrada.
*/


function gastoConIva (num) {
  precio = num*1.21
    return precio;
}



function map (array, callback) {
   
    let nuevoresult = array.map(callback);


    for ( var i = 0 ; i < array.length ; i++ ) {

      console.log (array);
      console.log ("El gasto con IVA del item " + ( i + 1 ) + " es: " + gastoConIva(array[i]));

    }

return nuevoresult;
}

console.log (map( [100,200,300,400], gastoConIva) );


/**
 * Desafíos*/
/*Crea una lista vacía llamada "listaGenerica".*/
let listaGenerica = [];
/*Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.*/
let lenguajesDeProgramacion =  ['JavaScript','C','C++','Kotlin','Python'];
/*Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.*/
console.log(lenguajesDeProgramacion);//Mostrar Lista Inicial
lenguajesDeProgramacion.push('Java');
lenguajesDeProgramacion.push('Ruby');
lenguajesDeProgramacion.push('GoLang');
console.log(lenguajesDeProgramacion);//Mostrar Lista Final
/*Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.*/
let i = 0;

function mostrarConsola(){
    while (i<=lenguajesDeProgramacion.length-1){
        console.log(lenguajesDeProgramacion[i]);
        i++;
    }
}
mostrarConsola();
/*Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.*/
function mostrarConsolaInverso(){
    let a = lenguajesDeProgramacion.length-1;
    while (a>=0){
        console.log(lenguajesDeProgramacion[a]);
        a--;
    }
}
mostrarConsolaInverso();
/*Crea una función que calcule el promedio de los elementos en una lista de números.*/
function calcularPromedio(elementos){
    let suma = 0;
    let i = 0;
    while(i<=elementos.length-1){
        suma = suma + elementos[i];
        i++;
    }
    let promedio = suma / elementos.length;
    console.log(promedio);
}
let x = [1,5,6,8,2];
calcularPromedio(x);
/*Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.*/
function hallarMayoryMenor(elementos){
    let maximo = elementos[0];
    let minimo = elementos[0];
    let i = 0;
    while(i<=elementos.length-1){
        if(maximo<elementos[i]){
            maximo = elementos[i];
        }
        if(minimo>elementos[i]){
            minimo = elementos[i];
        }
        i++;
    }
    console.log(`El elemento mayor es ${maximo}`);
    console.log(`El elemento mayor es ${minimo}`);
}
hallarMayoryMenor(x);
/*Crea una función que devuelva la suma de todos los elementos en una lista.*/
function sumarLista(numero){
    let c = 0;
    let suma2=0;
    while (c<=numero.length-1){
        suma2 = suma2 + numero[c];
        c++;
    }
    console.log(`La suma de los elmentos de la lista x es ${suma2}`);
    console.log(suma2);
}
sumarLista(x);
/*Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.*/
function buscarNumero(listado, numeroBuscado){
    let i = 0;
    while(i<=listado.length-1){
        if(listado[i]==numeroBuscado){
            return i;
        }
        i++;
    }
    return -1;
}
console.log(buscarNumero(x,2));
console.log(buscarNumero(x,3));
/*Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.*/
let lista1 = [2,4,6,7,8,10];
let lista2 = [1,3,5,8,12,2];

function sumaListas(listaA,listaB){
    let i = 0;
    if(listaA.length==listaB.length){
        let nuevaLista=[];
        while(i<=listaA.length-1){
            nuevaLista.push(listaA[i]+listaB[i]);
            i++;
        }
        return nuevaLista;
    } else {
        console.log('Las listas deben tener el mismo tamano');
    return null;
    }
}
console.log(sumaListas(lista1,lista2));
/*Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
 */
function alCuadrado(lista){
    let listaNueva=[];
    let i =0;
    while(i<lista.length-1){
        listaNueva.push(lista[i]*lista[i]);
        i++;
    }
    return listaNueva;
}
console.log(alCuadrado(lista1));
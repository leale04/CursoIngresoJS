function mostrar()
{
	let contador
    let acumulador
    let numeroingresado

    contador = 0
    acumulador = 0

     
    while(contador < 5)   
    {
	
	contador++;
    numeroingresado = prompt("Ingrese un numero")
	numeroingresado = parseInt(numeroingresado)
    
	 while(isNaN(numeroingresado))
    {
		numeroingresado = prompt("Numero invalido, intente de nuevo")
		numeroingresado = parseInt(numeroingresado)
	} 


	acumulador += numeroingresado
    }






   txtIdSuma.value = acumulador;
   txtIdPromedio.value = acumulador / 5;

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;
}//FIN DE LA FUNCIÓN
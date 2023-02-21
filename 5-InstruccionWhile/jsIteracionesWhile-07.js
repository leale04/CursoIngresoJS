/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numero
	contador=0;
	acumulador=0;
	


    
    respuesta = prompt("Desea introducir un numero?")



    while(respuesta == "si")
    {   
		numero = prompt("ingrese su numero")
		numero = parseInt(numero)
     
	 
     acumulador += numero
	 contador++ ;
     
	 respuesta = prompt("desea ingresar otro?")

    }


   



	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

    if(acumulador == 0)
    {
    txtIdPromedio.value = acumulador
	}


}//FIN DE LA FUNCIÓN
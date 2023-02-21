/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
    var maximo
	var minimo
	var contador;
	var respuesta;
	var numero
	contador=0;
	
	


    
    respuesta = confirm("Desea introducir un numero?")



    while(respuesta == true)
    {   
		numero = prompt("ingrese su numero")
		numero = parseInt(numero)
     
	 
	 contador++ ;
     
	 
	 if(contador == 1)
      {
         maximo = numero;
         minimo = numero;   
      }
     

      if(contador > 1 && numero > maximo)
     
	  {
        maximo = numero;
      }
     
      if (contador > 1 && numero < minimo)

      {
        minimo = numero;
      }

	 
	 respuesta = confirm("desea ingresar otro?")

    }

  
	txtIdMaximo.value = maximo
    txtIdMinimo.value = minimo


 




}
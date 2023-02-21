/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var numero
	var sumaNegativos = 0 ;
    var sumapositivos = 0
	var cantidadpositivos = 0 
	var cantidadnegativos = 0
	var cantidadceros = 0
	var cantidadpares = 0
    var promediopositivos
	var promedionegativos
	var diferenciadenumeros
	var ingreso = true
    var contador = 0
	
	
	ingreso == confirm("desea introducir un numero?")

	while(ingreso == true )
	{	
	    
		 numero = prompt("ingrese un numero por favor")
		 numero = parseInt(numero)            
			
			if(numero < 0)
			{
            sumaNegativos -= numero
			cantidadnegativos++
			}

            else
			 if(numero > 0)
			 {
			 sumapositivos += numero	
			 cantidadpositivos++
			 }
			
			 else 
              if(numero == 0)
			  {
			  cantidadceros++;
			  }
		     
		    if(numero % 2 == 0)
			{
            cantidadpares++;
			}	
	
		   contador++    
	   
		   ingreso = confirm("desea ingresar otro numero")
		
	}

	
	promediopositivos = sumapositivos/cantidadpositivos 
	promedionegativos = sumaNegativos/cantidadnegativos
	diferenciadenumeros = sumapositivos - sumaNegativos

	document.write
	(
	"la suma de negativos es :-"+ sumaNegativos + 
	" , suma positivos es: " + sumapositivos +
	" , la cantidad de positivos es: " + cantidadpositivos + 
	" , la cantidad de negativos es: " + cantidadnegativos +
	" , la cantidad de ceros es: " + cantidadceros +
	" , la cantidad de pares es: " + cantidadpares +
	" , el promedio de positivos es:  " + promediopositivos + 
	" , el pormedio de negativos es: " + promedionegativos +
	" , la diferencia entre negativos y positivos es: " + diferenciadenumeros
	);




}//FIN DE LA FUNCIÓNs
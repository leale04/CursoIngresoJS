/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var numero
	var contador;
	var sumaPositivos;
	var multiplicacionNegativos;
	var ingreso
	contador= 0;
	sumaPositivos= 0;
	multiplicacionNegativos= 1;
	ingreso = true
	
	
while(ingreso == true )
{
    
		do{
          numero = prompt("ingrese un numero por favor")
          numero = parseInt(numero)            
		}
        while(isNaN(numero)) 
       if(numero < 0)
	   {
        
		multiplicacionNegativos *= numero

	   }
       else
	   if(numero > 0)  
       {
       
        sumaPositivos += numero

	   } 

       contador++    
   
	   ingreso = confirm("desea ingresar otro numero")
    
}
    
txtIdSuma.value = sumaPositivos

txtIdProducto.value = multiplicacionNegativos
  


	

}//FIN DE LA FUNCIÓN
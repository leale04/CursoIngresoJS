function mostrar()
{
	
var destino
var estacion
var costefinal
var costefinaldescuento
var aumento
var descuento
var porcentajeAumento
var porcentajeDescuento

estacion = document.getElementById("txtIdEstacion").value
destino = document.getElementById("txtIdDestino").value


switch (destino){

 case "Mar del plata":
    
    if(estacion == "Invierno")
    {
	aumento = 0	
    descuento = 20
    }
     else
	   if(estacion == "Otoño")
       {
	   aumento = 10		   
	   descuento = 0
	   }
        else 
          if(estacion == "Primavera")		
          {
		  aumento = 10	
		  descuento = 0 
		  }
		   else
		   if(estacion == "Verano")
           {
		   aumento = 20
		   descuento = 0
		   }
    break;

 case "Bariloche":
    
    if(estacion == "Invierno")
    {
	aumento = 20	
    descuento = 0
    }
     else
	   if(estacion == "Otoño")
       {
	   aumento = 10		   
	   descuento = 0
	   }
        else 
          if(estacion == "Primavera")		
          {
		  aumento = 10	
		  descuento = 0 
		  }
		   else
		   if(estacion == "Verano")
           {
		   aumento = 0
		   descuento = 20
		   }
    break;

 case "Cordoba":
    
    if(estacion == "Invierno")
    {
	aumento = 0	
    descuento = 10
    }
     else
	   if(estacion == "Otoño")
       {
	   aumento = 10		   
	   descuento = 0
	   }
        else 
          if(estacion == "Primavera")		
          {
		  aumento = 10	
		  descuento = 0 
		  }
		   else
		   if(estacion == "Verano")
           {
		   aumento = 10
		   descuento = 0
		   }
    break;

 case "Cataratas":
    
    if(estacion == "Invierno")
    {
	aumento = 0	
    descuento = 10
    }
     else
	   if(estacion == "Otoño")
       {
	   aumento = 10		   
	   descuento = 0
	   }
        else 
          if(estacion == "Primavera")		
          {
		  aumento = 10	
		  descuento = 0 
		  }
		   else
		   if(estacion == "Verano")
           {
		   aumento = 10
		   descuento = 0
		   }
    break;
}

	
	
	
	

costefinal = parseInt(costefinal)
aumento = parseInt(aumento)
descuento = parseInt(descuento)



 porcentajeAumento = (15000 * aumento) /100
 porcentajeDescuento = (15000 * descuento) /100

 costefinal = 15000 + porcentajeAumento
 costefinaldescuento = 15000 - porcentajeDescuento

if(aumento > 0)
{
alert( "su precio seria " + costefinal + " pesos")
}
 else
 if(descuento > 0)
 {
 alert( "su precio seria " + costefinaldescuento + " pesos")
 }
}//FIN DE LA FUNCIÓN
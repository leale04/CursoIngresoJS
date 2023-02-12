function mostrar()
{
	var destino
	var estacion
	

	
	
	estacion = document.getElementById("txtIdEstacion").value
	destino = document.getElementById("txtIdDestino").value
	
	
	
	
	
	


	
	
	
	
	
	switch (destino){

		case "Mar del plata":
		   
		   if(estacion == "Invierno")
		   {
		   respuesta ="no"
		   }
			else
			  if(estacion == "Otoño")
			  {
			  respuesta ="si"
			  }
			   else 
				 if(estacion == "Primavera")		
				 {
				 respuesta ="si"
				 }
				  else
				  if(estacion == "Verano")
				  {
				  respuesta ="si"
				  }
		   break;
	   
		case "Bariloche":
		   
		   if(estacion == "Invierno")
		   {
		   respuesta = "si"		  
		   }
			else
			  if(estacion == "Otoño")
			  {
			  respuesta ="si"
			  }
			   else 
				 if(estacion == "Primavera")		
				 {
				 respuesta ="no"
				 }
				  else
				  if(estacion == "Verano")
				  {
				  respuesta ="no"
				  }
		   break;
	   
		case "Cordoba":
		   
		   if(estacion == "Invierno")
		   {
		   respuesta = "no"
		   }
			else
			  if(estacion == "Otoño")
			  {
			  respuesta ="si"
			  }
			   else 
				 if(estacion == "Primavera")		
				 {
				 respuesta ="si"
				 }
				  else
				  if(estacion == "Verano")
				  {
				  respuesta ="no"
				  }
		   break;
	   
		case "Cataratas":
		   
		   if(estacion == "Invierno")
		   {
		   respuesta ="no"
		   }
			else
			  if(estacion == "Otoño")
			  {
			  respuesta ="si"
			  }
			   else 
				 if(estacion == "Primavera")		
				 {
				 respuesta ="si"
				 }
				  else
				  if(estacion == "Verano")
				  {
				  respuesta ="si"
				  }
		   break;
	   }
	   
	alert(respuesta + " se viaja")	   
		   

}//FIN DE LA FUNCIÓN
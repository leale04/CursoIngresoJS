function mostrar()
{
	let mesDelAño
	let respuesta
	mesDelAño = document.getElementById("txtIdMes").value
	
	
	switch (mesDelAño){
	
	  case "Enero":
      respuesta= "que comiences bien el año"
	  break;
     
	  
	  case "Marzo":
      respuesta= "A clases"
	  break;
	  
	  
	  case "Julio":
      respuesta= "se vienen las vacaciones"
	  break;

	  
	  case "Diciembre":
      respuesta="felices fiestas"
	  break;
	  
	 
	 
	  default:
	  respuesta="es un mes cualquiera"
	}

alert(respuesta)
	
}	
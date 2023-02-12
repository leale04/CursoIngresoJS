function mostrar()
{
	let mesDelAño
	let respuesta
	mesDelAño = document.getElementById("txtIdMes").value
	
	
	switch (mesDelAño){
	
	  case "Enero":	  
	  case "Febrero": 
	  case "Marzo":   
	  case "Diciembre":
      respuesta = "Verano"
	  break;
	  
	  case "Abril":
	  case "Mayo":
	  case "Junio":
	  respuesta = "otoño"
	  break;
	 
	 
	  case "Julio":
	  case "Agosto":
	  respuesta = "invierno"
	  break;
      
      case "Septiembre":
	  case "Octubre":	  
      case "Noviembre":
	  respuesta = "primavera"
	  break;
	 




	  default:
	  respuesta="es un mes cualquiera"
	}

alert(respuesta)
	
	



}
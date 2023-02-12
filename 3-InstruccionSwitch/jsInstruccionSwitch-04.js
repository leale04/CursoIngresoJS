function mostrar()
{
	let mesDelAño
	let respuesta
	mesDelAño = document.getElementById("txtIdMes").value
	
	
	switch (mesDelAño){
	
	  case "Febrero":
      respuesta = "Este mes tiene 28 días."
	  break;
	  
	  case "Enero":
	  case "Marzo":
	  case "Mayo":
	  case "Julio":
	  case "Octubre":
	  case "Diciembre":
	  respuesta = "Este mes tiene 31 dias. "
      break;
	  
	  case "Abril":
	  case "Junio":
	  case "Agosto":
	  case "Septiembre":
	  case "Noviembre":
      respuesta = "este mes tiene 30 dias"	
	  break;
	
	  default:
	 respuesta= "este mensaje aparece solo si hay un problema con el codigo, por favor revisar"


	}

alert(respuesta)
	

	



}//FIN DE LA FUNCIÓN
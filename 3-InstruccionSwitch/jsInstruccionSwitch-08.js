function mostrar()
{

	var destino
	var respuesta
	
	destino = document.getElementById("txtIdDestino").value
	
	switch(destino){
	
	
	case "Bariloche":
	respuesta = "En bariloche hace frio"
	break;
	
	
	case "Cataratas":
	respuesta = "En cataratas hace calor"
	break;
	
	
	case"Mar del plata":
	respuesta = "En mar del plata hace calor"
	break;
	
	
	case"Ushuaia":
	respuesta = "En ushuaia hace frio"
	break;
	
	
	}
	
	alert(respuesta)
}//FIN DE LA FUNCIÓN
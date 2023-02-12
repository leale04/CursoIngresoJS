function mostrar()
{
	var hora;
	var respuesta;

    hora = document.getElementById("txtIdHora").value;

    switch (hora){

    case "7":
	case "8":
	case "9":
	case "10":
	case "11":
	
    respuesta = "Es de mañana"
    break;

	default:
    respuesta = "No es de mañana"
    
}
alert(respuesta);
}//FIN DE LA FUNCIÓN
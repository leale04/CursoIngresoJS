function mostrar()
{
	var respuesta
	var hora
	
	hora = document.getElementById("txtIdHora").value
	
	
	switch (hora){

	
	case "7":
	case "8":
	case "9":
	case "10":
	case "11":
	
    respuesta = "es de mañana"
    break;

	case "12":
	case "13":
	case "14":
	case "15":
	case "16":
	case "17":
	case "18":
	case "19":
	
	respuesta = "Es de tarde"
    break;

	case "20":
	case "21":
	case "22":
	case "23":
	case "24":
	case "1":
	case "2":
	case "3":
	case "4":
	case "5":
	case "6":

    respuesta = "es de noche"
    break;

	default:
	respuesta = "La hora no existe"	

}

alert(respuesta)


}//FIN DE LA FUNCIÓN
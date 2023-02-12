function mostrar()
{

var destino
var respuesta

destino = document.getElementById("txtIdDestino").value

switch(destino){


case "Bariloche":
respuesta = "Bariloche esta al oeste de Argentina"
break;


case "Cataratas":
respuesta = "Cataratas esta al norte de Argentina"
break;


case"Mar del plata":
respuesta = "Mar del plata esta al este de Argentina"
break;


case"Ushuaia":
respuesta = "Ushuaia esta al sur de Argentina"
break;


}

alert(respuesta)


}//FIN DE LA FUNCIÓN
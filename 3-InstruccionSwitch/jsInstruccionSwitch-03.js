function mostrar()
{
	
	
	let mesDelAño
	let respuesta
	mesDelAño = document.getElementById("txtIdMes").value
	
	
	switch (mesDelAño){
	
	  case "Febrero":
      respuesta= "Este mes es Febrero, este mes no tiene más de 29 días."
	  break;
	
	default:
	 respuesta= "Este mes no es Febrero, este mes tiene 30 o mas dias"
}


alert(respuesta)


}

function mostrar()
{
	let dato

	
	dato = prompt("Por favor ingrese un numero entre el 0 y el 9")
  



   while(dato > 9 || dato < 0)
   {
   dato = prompt ("este numero no se encuentra entre 0 y 9, intente de nuevo  por favor.")
   }


  txtIdNumero.value = dato






}






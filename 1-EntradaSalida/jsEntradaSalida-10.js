/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let NumeroUno;
    let porcentaje;
    let resultado;

     NumeroUno = document.getElementById("txtIdImporte").value;
  

     NumeroUno = parseInt(NumeroUno);
 

     porcentaje = NumeroUno * 25/100;

     resultado = NumeroUno - porcentaje;

     txtIdResultado.value = resultado

}

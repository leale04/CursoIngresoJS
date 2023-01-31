/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	let NumeroUno;
    let porcentaje;
    let resultado;

  NumeroUno = document.getElementById("txtIdSueldo").value;
  

 NumeroUno = parseInt(NumeroUno);
 

 porcentaje = NumeroUno * 10/100;

 resultado = NumeroUno + porcentaje;

 txtIdResultado.value = resultado

 

}

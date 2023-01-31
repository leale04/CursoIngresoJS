/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	
  let NumeroUno;
  let NumeroDos;
  let resultado;

  NumeroUno = document.getElementById("txtIdNumeroDividendo").value;
  NumeroDos = document.getElementById("txtIdNumeroDivisor").value;

 NumeroUno = parseInt(NumeroUno);
 NumeroDos = parseInt(NumeroDos);

  resultado = NumeroUno % NumeroDos;

  txtIdResultado.value = resultado


}

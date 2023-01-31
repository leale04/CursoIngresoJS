/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
   let NumeroUno;
   let NumeroDos;
   let resultado;

   NumeroUno = document.getElementById("txtIdNumeroUno").value
   NumeroDos = document.getElementById("txtIdNumeroDos").value

  NumeroUno = parseInt(NumeroUno)
  NumeroDos = parseInt(NumeroDos)

   resultado = NumeroUno + NumeroDos

   alert("El reultado es: " + resultado )
}


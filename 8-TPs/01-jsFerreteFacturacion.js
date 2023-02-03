/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 	
{
   let NumeroTres;
   let NumeroUno;
   let NumeroDos;
   let resultado;

   NumeroUno = document.getElementById("txtIdPrecioUno").value;
   NumeroDos = document.getElementById("txtIdPrecioDos").value;
   NumeroTres = document.getElementById("txtIdPrecioTres").value;

  NumeroUno = parseInt(NumeroUno);
  NumeroDos = parseInt(NumeroDos);
  NumeroTres = parseInt(NumeroTres);

   resultado = NumeroUno + NumeroDos + NumeroTres;

   alert("El reultado es: " + resultado );
}
function Promedio () 
{
	
   let NumeroTres;
   let NumeroUno;
   let NumeroDos;
   let resultado;
   let promedio;


   NumeroUno = document.getElementById("txtIdPrecioUno").value;
   NumeroDos = document.getElementById("txtIdPrecioDos").value;
   NumeroTres = document.getElementById("txtIdPrecioTres").value;

  NumeroUno = parseInt(NumeroUno);
  NumeroDos = parseInt(NumeroDos);
  NumeroTres = parseInt(NumeroTres);

   resultado = NumeroUno + NumeroDos + NumeroTres;
   promedio = resultado / 3 ;

   alert("El reultado es: " + promedio );




}
function PrecioFinal () 
{
   let NumeroTres;
   let NumeroUno;
   let NumeroDos;
   let resultado;
   let IVA;
   let valorIVA

   NumeroUno = document.getElementById("txtIdPrecioUno").value;
   NumeroDos = document.getElementById("txtIdPrecioDos").value;
   NumeroTres = document.getElementById("txtIdPrecioTres").value;

  NumeroUno = parseInt(NumeroUno);
  NumeroDos = parseInt(NumeroDos);
  NumeroTres = parseInt(NumeroTres);

   resultado = NumeroUno + NumeroDos + NumeroTres;
   valorIVA = resultado * 0.21
   IVA = resultado + valorIVA  ;

   alert("El reultado es: " + IVA );














}
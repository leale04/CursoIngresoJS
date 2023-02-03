/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
   let largo;
   let ancho;
   let suma;
   let area;
   let resultado;
   
   
   largo = document.getElementById("txtIdLargo").value;
   ancho = document.getElementById("txtIdAncho").value;   
   
   
    largo = parseInt(largo)
    ancho = parseInt(ancho)
    suma =  parseInt(suma)
    area =  parseInt(area)
   
   
   suma = largo + ancho;
   area = suma * 2;
   resultado = area * 3;
    
   alert("necesitas " + resultado + " de alambrada")


}
function Circulo () 
{
	let radio;
   let circunferencia;
   let resultado;
  
  
   radio = document.getElementById("txtIdRadio").value;
   

   radio = parseInt(radio);
   circunferencia = parseInt(circunferencia);
   
   
   circunferencia = 2 * Math.PI * radio;
   resultado = circunferencia * 3;
   
   
   
   alert("necesitas " + resultado + " de alambre") ;



}
function Materiales () 
{
	

   let largo;
   let ancho;
   let bolsacemento;
   let bolsadecal
   let area;
   let resultadocal
   let resultadocemento


   
    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;   
   
   
    largo = parseInt(largo)
    ancho = parseInt(ancho)
    bolsacemento = parseInt(bolsacemento)
    bolsadecal = parseInt(bolsadecal)

    bolsacemento = 2
    bolsadecal = 3
    
    area = largo * ancho
    
    resultadocemento = area * bolsacemento
    resultadocal= area * bolsadecal


    alert("necesitas " + resultadocemento + " bolsas de cemento y " + resultadocal + " bolsas de cal")
     
     



}
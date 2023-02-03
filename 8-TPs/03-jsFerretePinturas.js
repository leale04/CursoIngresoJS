/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let gradosF;
    let gradosC;
    

     gradosF = document.getElementById("txtIdTemperatura").value;
     

     gradosC = (gradosF - 32.00)/1.8000
    

     alert( gradosF + " grados Fahrenheit equivalen a " + gradosC + " grados Centigrados")






}

function CentigradosFahrenheit () 
{
	

    let gradosF;
    let gradosC;
    

     gradosC = document.getElementById("txtIdTemperatura").value;
    
    
     gradosF = (gradosC * 1.8000) +32.00
    

     alert( gradosC + " grados Centigrados equivalen a " + gradosF + " grados Fahernheit")






}

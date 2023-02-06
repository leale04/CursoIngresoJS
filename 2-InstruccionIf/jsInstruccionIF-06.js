function mostrar()
{
	let edad;




     edad = document.getElementById("txtIdEdad").value;


     if(edad <=12 )
    
	 {
       
         alert("usted es un niño")

	 }

    else

	 {
	 	
		 if(edad >=13 && edad <=17 )
		 {
         alert("usted es adolescente")
		 }
	     else 
		 {
			alert("usted es un adulto")
		 }
	
     }
	
	
	




}//FIN DE LA FUNCIÓN
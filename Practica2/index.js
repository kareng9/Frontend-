window.addEventListener('DOMContentLoaded', function(e){ //Cada vez que hago clic se almacena el valor del escuchador en una función independiente, y cada vez que suceda esto se almacena en otra fun independiente
    var boton = document.getElementById("btn");
    var contentcontainer = document.getElementsByClassName("content-container")[0]; //se repiten arreglos del mismo tipo
    //Cada panel tiene un arreglo de contenedores y el primero que se muestra tiene id = 0
    boton.addEventListener("click",(e) => {
        var inputValue = document.getElementById("text-field").value; //.value obtiene el valor de text-field
        if(isNaN(inputValue)){ //is not a number. Cuando es un string me vota la alerta con el inputValue impreso
            alert(inputValue);
        }else{
            for(let i=0; i<inputValue; i++){
               var contenedor = document.createElement('div');
               contenedor.className = "content-container";
               contenedor.innerHTML = contentcontainer.innerHTML;
               contenedor.innerHTML.inputValue = i; //i = muestra el valor del arreglo
               document.body.appendChild(contenedor);
               var boton1 = contenedor.getElementById("btn");
               boton1.addEventListener("click",(e) => {
                if(!isNaN(inputValue)){ //is not a number. Cuando es un string me vota la alerta con el inputValue impreso
                    alert(inputValue);
                } 
                })
            }

        }
        
    })
})

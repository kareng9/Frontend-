/*function cambiar(){
    document.getElementsByClassName("label").innerHTML = "Hola";
}
    document.getElementById("btn").onclick = function (){
        console.log("Hola");
    }*/


window.addEventListener('DOMContentLoaded', function(e){
    var boton = document.getElementById("btn");
    /*for(let index = 0; index < 10; index++){
        document.body.innerHTML = document.body.innerHTML + '<div class="content-container">' + content-container.innerHTML + '</div>';
    }*/
    boton.addEventListener("click",(e) => {
        var inputValue = document.getElementById("label").value;
        alert(inputValue);
    })
})

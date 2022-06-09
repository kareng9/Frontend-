const fs= require('fs');
/*fs.readdir('C:\\Users\\Karen\\Desktop\\ManejoNode\\', (err) => {
    if(!err){
        console.log("ESTOY AQUI")
    }
})*/

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const fecha = new Date();
const anio_actual = fecha.getFullYear();
console.log(anio_actual);
const path = ".\\pruebas\\"

for(let i=2017 ; i<anio_actual ; i++){
    //console.log('C:\\Users\\Karen\\Desktop\\ManejoNode\\'+anios[i])
    fs.mkdir(path+i,(err)=>{
        for(let j=0; j< meses.length ; j++){
            fs.mkdir(path+i+'\\'+meses[j],(err)=>{
                const dias = diasEnMes(j+1,i)
                for(let d=1; d<=dias ; d++){
                    fs.appendFile(path+i+'\\'+meses[j]+'\\'+d+'.txt',"Hola",(err)=>{
                        if(!err){
                            console.log("Se creo la carpeta")
                        }else{
                            console.log("No ingreso")
                        }
                    })
                }
            })
        }

    })
    //console.log(anios)
}

function diasEnMes(mes,anio){
    return new Date(anio,mes,0).getDate();
}
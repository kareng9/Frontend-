const fs= require('fs');
fs.mkdir('C:\\Users\\Karen\\Desktop\\ManejoNode\\', (err, files) => {
    if(!err){
        console.log("Se creo la carpeta")
    }
})

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const anio = anio_actual.getFullYear()

for(var i=0 ; i<anio.length ; i++){
    console.log('C:\\Users\\Karen\\Desktop\\ManejoNode\\'+anio[i])
    fs.mkdir('C:\\Users\\Karen\\Desktop\\ManejoNode\\'+anio[i],(err)=>{

    })
    for(var j=0; j<meses.length ; j++){
        fs.mkdir('C:\\Users\\Karen\\Desktop\\ManejoNode\\'+anio[i]+'\\'+meses[j],(err)=>{

        })
    }
}
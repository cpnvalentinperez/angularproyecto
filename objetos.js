var porfolio = {
    Nombre:"",
    Apellido:"",
    Acercade:"",
    Titulos:["",""],
}

function GetNombre(nombre){
    var nombre1 =  document.getElementById("Nombre");
    nombre1.textContent = nombre;
}
function GetApellido(apellido) {
    var a= document.getElementById("Apellido");
    a.textContent = apellido;
    return porfolio.Apellido = apellido;    
}
function GetAcercade(acercade){
    var a = document.getElementById("texto-acercade");
    a.textContent = acercade;
    return porfolio.Acercade = acercade;    
}
function GetTitulos(titulo1, titulo2){
    var a = document.getElementById("Titulos");
    a.textContent = titulo1, titulo2;
    return  porfolio.Titulos[0] = titulo1, porfolio.Titulos[1] = titulo2;
}

function showFile(input){
    let file = input.files[0];
    // alert(`Nombre archivo: ${file.name}`);
    // alert(`Ultima modificacion: ${file.lastModified}`);
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(progressEvent){
            var s = reader.result.toString();
            console.log(s);
            var arr = s.split('\n');
            GetAcercade(arr[0]);
            GetNombre(arr[1]);
            GetApellido(arr[2]);
            GetTitulos(arr[3],arr[4]);
    };
}
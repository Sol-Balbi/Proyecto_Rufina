// Galería de imágenes 

const fulImgBox = document.querySelector(".fulImgBox"),
fulImg = document.querySelector(".fulImg")

function openFullImg(reference){
    fulImgBox.style.display = "flex";
    fulImg.src = reference
}

function closeImg(){
    fulImgBox.style.display="none"
}


//Cargar JSON

function CargarLarios(){
    $.ajax({
        url: "../json/info.json",
        type:"GET",
        success: function(datos) {
            var cadena = "";
            for (i=0;i<datos.Larios.length;i++){
                cadena = cadena + "Tiendas: <b>" + 
                datos.Larios[i].tiendas + "</b><br>";
                cadena = cadena + "Provincia: <b>" +
                datos.Larios[i].provincia + "</b><br>";
                cadena = cadena + "Dirección: <b>" +
                datos.Larios[i].direccion + "</b><br>";
                cadena = cadena + "Descuentos: <b>" +
                datos.Larios[i].descuentos + "</b><br>";
            }
            $("#box").html(cadena);
        },
        error:function(xhr,status){
            alert("Disculpe, existió un problema");
        }
    });
}

//Cargar JSON

function CargarFuengirola(){
    $.ajax({
        url: "../json/info.json",
        type:"GET",
        success: function(datos) {
            var cadena = "";
            for (i=0;i<datos.Fuengirola.length;i++){
                cadena = cadena + "Tiendas: <b>" + 
                datos.Fuengirola[i].tiendas + "</b><br>";
                cadena = cadena + "Provincia: <b>" +
                datos.Fuengirola[i].provincia + "</b><br>";
                cadena = cadena + "Dirección: <b>" +
                datos.Fuengirola[i].direccion + "</b><br>";
                cadena = cadena + "Descuentos: <b>" +
                datos.Fuengirola[i].descuentos + "</b><br>";
            }
            $("#box1").html(cadena);
        },
        error:function(xhr,status){
            alert("Disculpe, existió un problema");
        }
    });
}

//Cargar JSON

function CargarBenalmadena(){
    $.ajax({
        url: "../json/info.json",
        type:"GET",
        success: function(datos) {
            var cadena = "";
            for (i=0;i<datos.Benalmadena.length;i++){
                cadena = cadena + "Tiendas: <b>" + 
                datos.Benalmadena[i].tiendas + "</b><br>";
                cadena = cadena + "Provincia: <b>" +
                datos.Benalmadena[i].provincia + "</b><br>";
                cadena = cadena + "Dirección: <b>" +
                datos.Benalmadena[i].direccion + "</b><br>";
                cadena = cadena + "Descuentos: <b>" +
                datos.Benalmadena[i].descuentos + "</b><br>";
            }
            $("#box2").html(cadena);
        },
        error:function(xhr,status){
            alert("Disculpe, existió un problema");
        }
    });
}
 
//Cargar JSON

function CargarMarbella(){
    $.ajax({
        url: "../json/info.json",
        type:"GET",
        success: function(datos) {
            var cadena = "";
            for (i=0;i<datos.Marbella.length;i++){
                cadena = cadena + "Tiendas: <b>" + 
                datos.Marbella[i].tiendas + "</b><br>";
                cadena = cadena + "Provincia: <b>" +
                datos.Marbella[i].provincia + "</b><br>";
                cadena = cadena + "Dirección: <b>" +
                datos.Marbella[i].direccion + "</b><br>";
                cadena = cadena + "Descuentos: <b>" +
                datos.Marbella[i].descuentos + "</b><br>";
            }
            $("#box3").html(cadena);
        },
        error:function(xhr,status){
            alert("Disculpe, existió un problema");
        }
    });
}

//entrada al formulario
const formulario = document.getElementById("formulario1");

//entrada a todos los inputs
const nombre = document.getElementById("nombre");
const direccion = document.getElementById("direccion");
const telefono = document.getElementById("telefono");
const correo = document.getElementById("correo");


let valida ={
    nombre: false,
    direccion: false,
    telefono: false,
    correo: false,
    
}

//validar el nombre
nombre.addEventListener("blur", ()=>{
    let name_re = /^[a-zA-Z ]{2,15}$/;
    
    if(nombre.value == "" || nombre.value == null){
        
        setErrorFor(nombre, "El campo nombre no puede estar en blanco")
        valida.nombre=false;
    }else{
        if(!name_re.exec(nombre.value)){
            valida.nombre= false;
            setErrorFor(nombre,"El nombre debe ser escrito solo con letras y tener entre 2 y 15 caracteres");
            
        }else{
            setSuccessFor(nombre)
            valida.nombre=true;
        }
    }

})


//validar el correo
correo.addEventListener("blur",()=>{
    let cor_re = /^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}$/;

    if(correo.value == "" || correo == null){
        valida.correo=false;
        setErrorFor(correo,"El campo correo no puede estar en blanco")

    }else{
        if(!cor_re.exec(correo.value)){
            valida.correo=false;
            setErrorFor(correo,"No ingresó un correo válido")
        }else{
            setSuccessFor(correo)
            valida.correo=true;
        }
    }
})



//validar el telefono
telefono.addEventListener("blur",()=>{
    let telefono_re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3}$/;

    if (telefono.value == "" || telefono.value == null) {
        
        setErrorFor(telefono,"No puede dejar este apartado en blanco.");
        valida.telefono = false;
    }else{
        if (!telefono_re.exec(telefono.value)){
        setErrorFor(telefono,"El número de telefono debe tener 9 números.");
        valida.telefono = false;
        }else{
            setSuccessFor(telefono)
            valida.telefono = true;
        }
    }

})



//validar la direccion
direccion.addEventListener("blur",()=>{
    let dire_re = /^[a-zA-Z0-9\s,.'-]{3,}$/;

    if(direccion.value == "" || direccion == null){
        valida.direccion=false;
        setErrorFor(direccion,"El campo dirección no puede estar en blanco")

    }else{
        if(!dire_re.exec(direccion.value)){
            valida.direccion=false;
            setErrorFor(direccion,"La direccion NO esta escrita correctamente")
            

        }else{
            setSuccessFor(direccion)
            valida.direccion=true;
        }
    }
    
})

//Mensaje de error
function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "form-control error";
    small.innerText = message;
    

}

//si todo esta correcto
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}


//Envio del formulario

formulario.addEventListener("submit",(e)=>{
    e.preventDefault();

    let errorV = false;

    for(const property in valida){
        if(valida[property] == false){
            errorV = true;
        }
    }

    if(!errorV){
        formulario.submit();
    }
})


//Presupuesto Joyas

let sumaTotal = 0;

const presuJoya = document.querySelector("#base");
const plazoMes = document.querySelector("#plazo");
const opciones = document.querySelectorAll("#extra>input");
const preTotal = document.querySelector("#total");

let suma = ()=>{

    sumaTotal = parseInt(presuJoya.value);

    switch (plazoMes.value){
        case "1":
            sumaTotal += 100;
            break;
        case "2":
            sumaTotal += 150;
            break;
        case "3":
            sumaTotal += 200;
            break;  
    }
    opciones.forEach(element => {
        if(element.checked){
            sumaTotal += parseInt(element.value);
        }
    });

    preTotal.value = sumaTotal;
  
}
opciones.forEach(element => {
    element.addEventListener("change",suma,false);
});
presuJoya.addEventListener("change",suma,false);
plazoMes.addEventListener("change",suma,false);


 
//Presupuesto Accesorios

let sumaTotalA = 0;

const presuAcce = document.querySelector("#baseA");
const plazoMesA = document.querySelector("#plazoA");
const opcionesA = document.querySelectorAll("#extrasA>input");
const preTotalA = document.querySelector("#totalA");

let sumas = ()=>{

    sumaTotalA = parseInt(presuAcce.value);

    switch (plazoMesA.value){
        case "1":
            sumaTotalA += 100;
            break;
        case "2":
            sumaTotalA += 150;
            break;
        case "3":
            sumaTotalA += 200;
            break;  
    }
    opcionesA.forEach(element => {
        if(element.checked){
            sumaTotalA += parseInt(element.value);
        }
    });

    preTotalA.value = sumaTotalA;
   
}

opcionesA.forEach(element => {
    element.addEventListener("change",sumas,false);
});
presuAcce.addEventListener("change",sumas,false);
plazoMesA.addEventListener("change",sumas,false);


    

 






const entradaT = document.querySelector(".entradaTexto");
const salidaT = document.querySelector(".salidaTexto");
const matrizCon = [["e","enter"], ["i", "imes"],["a","ai"],["o","ober"],["u","ufat"]];
const boton = document.querySelector("copiar");

function clipboard(){
    salidaT.select();
    navigator.clipboard.writeText(salidaT.value);
    salidaT.value = "";
    alert("se copio perfectamente");
}
function btnEncriptar(){
    const textEncriptado = encriptar(entradaT.value);
    salidaT.value = textEncriptado;
}
function btnDescriptar(){
    const textDescriptado = desencriptar(entradaT.value);
    salidaT.value = textDescriptado;
}

function encriptar(textAencriptar){    
    textAencriptar = textAencriptar.toLowerCase();
    for(let i=0;i<matrizCon.length;i++){
        if(textAencriptar.includes(matrizCon[i][0])){
            textAencriptar = textAencriptar.replaceAll(matrizCon[i][0],matrizCon[i][1]);            
        }
    }
    return textAencriptar;
}
function desencriptar(textDesencriptar){
    textDesencriptar = textDesencriptar.toLowerCase();
    for(let i=0;i<matrizCon.length;i++){
        if(textDesencriptar.includes(matrizCon[i][1])){
            textDesencriptar = textDesencriptar.replaceAll(matrizCon[i][1],matrizCon[i][0]);
        }
    }
    return textDesencriptar;
}

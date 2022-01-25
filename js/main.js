const d = document;

function fencrypt(encrypt){

    d.addEventListener("click", e=>{
        if(e.target.matches(encrypt)){
            let $text = d.getElementById("text").value;
           
            if (!validateText($text)) {
                return;
            }
            $textbox = d.getElementById("textbox");
            $textbox.value = encriptar($text);         
        }
    })
}

function fdecrypt(decrypt){
    
    d.addEventListener("click", e=>{
        if(e.target.matches(decrypt)){
            let $text = d.getElementById("text").value;
            if (!validateText($text)) {
                return;
            }
            $textbox = d.getElementById("textbox");
            $textbox.value = desencriptar($text);
        }
    })
}

function validateText(text) {
    if(text === ""){
        alert("No has introducido un texto")
        return false;
    }else{
        for (let index = 0; index < text.length; index++) {
            let codeAscii = text.charAt(index);
            if (codeAscii < 97 || codeAscii > 122){
                if(codeAscii === 32){
                    alert("No se aceptan caracteres en mayusclas ni acentos ni signos")
                    return false;
                }
               
            }
            
        }
    }
    return true;
}

const encriptar = (text) => {
    console.log(`Encriptar ${text}`);
    let charReplace = [/e/g, /i/g, /a/g, /o/g, /u/g];
    let replaces = ["enter", "imes", "ai", "ober", "ufat"];
    let encryptedText = "";
    for (let index = 0; index < charReplace.length; index++) {
       encryptedText = text.replace(charReplace[index], replaces[index]);
       text = encryptedText;
    }
    console.log(text);
    return text;
}

const desencriptar = (text) => {
    console.log(`Desencriptar ${text}`);
    let charReplace = [/enter/g, /imes/g, /ai/g, /ober/g, /ufat/g];
    let replaces = ["e", "i", "a", "o", "u"];
    let desencryptedText = "";
    for (let index = 0; index < charReplace.length; index++) {
        desencryptedText = text.replace(charReplace[index], replaces[index]);
        text = desencryptedText;
    }
    console.log(text);
    return text;
}


d.addEventListener("DOMContentLoaded", (e)=>{

    fencrypt("#encrypt");
    fdecrypt("#decrypt");
})
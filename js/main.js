const d = document;

function fencrypt(encrypt){

    d.addEventListener("click", e=>{
        if(e.target.matches(encrypt)){
            let $text = d.getElementById("text").value;
            if($text === ""){
                alert("No has introducido un texto para encriptar")
                return;
            }
            console.log("encriptar " + $text);
        }
    })
}

function fdecrypt(decrypt){
    
    d.addEventListener("click", e=>{
        if(e.target.matches(decrypt)){
            let $text = d.getElementById("text").value;
            if($text === ""){
                alert("No has introducido un texto para desencriptar")
                return;
            }
            console.log("desencriptar " + $text);
        }
    })
}

d.addEventListener("DOMContentLoaded", (e)=>{

    fencrypt("#encrypt");
    fdecrypt("#decrypt");
})
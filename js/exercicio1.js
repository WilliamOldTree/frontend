// let nota =10

// switch (nota){
//     case 10:
//     case 9:
//         console.log("Melhores alunos")
//         break;
//     case 8:
//     case 7:
// 	    console.log("muito bom")
// 	    break;
//     case 6:
//     case 5:
// 	    console.log("Ufa voce passou")
// 	    break;
//     case 4:
//     case 3:
// 	    console.log("Recuperação")
// 	    break;
//     case 2:
//     case 1:
//     case 0:
// 	    console.log("Reprovado")
// 	    break;
// 	default:
// 	    console.log("Nota invalida")
// }

// let valor = 10;
// switch (true) {
//     case (valor == 10 || valor == 9): console.log("Melhores alunos"); break;
//     case (valor ==  8 || valor == 7): console.log("Muito bom"); break;
//     case (valor ==  6 || valor == 5): console.log("Ufa voce passou"); break;
//     case (valor ==  4 || valor == 3): console.log("Recuperação"); break;
//     case (valor ==  2 || valor == 1 || valor == 0): console.log("Reprovado"); break;
//     default: console.log("Nota invalida");
// }
	    

function alerta(){
    alert("Ola")
    
}

function altFundo(){

    let $body = document.body;
    $body.style.backgroundColor = "red";
}

function alerta2(){
    alert("estou vendo a imagem")
}

document.getElementById("img").addEventListener("click",()=>{
    alert("estou vendo a imagem pelo JS")
} )

document.body.addEventListener("click", function(){
    this.style.backgroundColor="red"
})

document.getElementById("troca").addEventListener("click",(event)=>{
    event.preventDefault()
    alert("não pode ser enviado")
})

document.getElementById("img2").addEventListener("click",(event)=>{
    alert("X"+event.offsetX+" "+ "Y"+event.offsetY);
    
})


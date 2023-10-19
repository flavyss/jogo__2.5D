let person = document.querySelector(".personagem")
let body = document.querySelector("body")
let contx = 0
let conty = 0
body.addEventListener('keydown', function(event) {
    console.log(event.keyCode)
    if(event.keyCode == 39){
        contx += 5
        person.style.left = contx+"px" 
        if(contx >= 770){
            person.style.left = "770px"
            contx = 770    
        }
        person.classList.remove("parado", "cima", "baixo", "traz", "ataque")
        person.classList.add("frente")
    }
    else if(event.keyCode == 37){
        contx -= 5
        person.style.left = contx+"px"
        if(contx < 0){
            person.style.left = "0px"
            contx = 0    
        }
        person.classList.remove("parado", "frente", "cima", "baixo", "ataque")
        person.classList.add("traz")
    }
    if(event.keyCode == 38){
        conty -= 5
        person.style.top = conty+"px"  
        if(conty < 0){
            person.style.top = "0px"
            conty = 0    
        }
        person.classList.remove("parado", "traz", "baixo", "frente", "ataque")
        person.classList.add("cima")
    }
    if(event.keyCode == 40){
        conty += 5
        person.style.top = conty+"px"
        if(conty >= 370){
            person.style.top = "370px"
            conty = 370    
        }
        person.classList.remove("parado", "traz", "cima", "frente", "ataque")
        person.classList.add("baixo")
    }
    if(event.keyCode == 66){
        person.classList.remove("parado", "baixo", "traz", "cima", "frente", "ataque")
        person.classList.add("ataque")
    }
    if(contx == 390 && conty == 195 || contx == 390 && conty == 210 || contx == 420 && conty == 195 || contx == 420 && conty == 210){
        alert('você achou o tesouro')
    }

    console.log("eixo x" + contx, "eixo y"+conty)
});

body.addEventListener('keyup', function(event) {
            person.classList.add("parado")
            person.classList.remove("cima", "baixo", "frente", "traz", "ataque")
    });
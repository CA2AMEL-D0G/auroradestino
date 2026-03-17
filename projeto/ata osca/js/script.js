const mosca = document.querySelector("#mosca")
const tempo = document.querySelector("#tempo")
const acertos = document.querySelector("#acertos")
const gameOver = document.querySelector("#game-over")
const btnInicar = document.querySelector("#btn-inciar")
const telaIniciar = document.querySelector("aside")
const telaJogo = document.querySelector("main")
const root = document.documentElement

telaJogo.style.display = "none"

var qtdAcertos=0, velocidade = 1000
var minutos = 2 ,segundos = 0
var max=95,min=5
var ticks = velocidade
var disableclick = false

root.style.setProperty("--velocidade",velocidade*0.001+"s")

btnInicar.addEventListener("click",()=>{
telaIniciar.style.display =  "none"
telaJogo.style.display= "block"
loop()

})


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
mosca.addEventListener("click",moscaclicada)

async function moscaclicada(){
    if(disableclick){
        return
    }
qtdAcertos += 1

ticks = velocidade
acertos.innerHTML = qtdAcertos

velocidade-=50
root.style.setProperty("--velocidade","0s")
mosca.src= "dead.png"
disableclick = true

await delay(velocidade*0.3)
movefly()
await delay(1)
root.style.setProperty("--velocidade",velocidade*0.001+"s")
movefly()
mosca.src= "alive.png"
disableclick = false
await delay(velocidade)





}


//temporizador da mosca



function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}




function movefly() {

let vertical = Math.round(min+(Math.random()*(max-min)))
let horizontal = Math.round(min+(Math.random()*(max-min)))
/*console.log("vert "+vertical+" hor "+horizontal)*/

root.style.setProperty("--vertical",horizontal+"%")
root.style.setProperty("--horizontal",vertical+"%")





}
var timertimer = 1000

async function loop(){
while(true){


    if(ticks<0){
        movefly()
        ticks = velocidade
    }
    ticks -=1/60*1000
    

    timertimer -= 1/60*1000

    if (timertimer<0){

        segundos-=1

        if (segundos < 0){
            segundos = 59
            minutos -=1
        }
        timertimer = 1000

        let formatedseconds 

        if (segundos<10){
        formatedseconds = "0"+segundos

        }else{

formatedseconds = segundos
            
        }

        tempo.innerHTML = minutos+ ":"+formatedseconds

//AQUI

if( minutos == 0 && segundos == 0 ){
    mosca.style.pointerEvents = "none"
    return
}





//AQUI
    }


    await delay(1/60*1000)
}
}














console.log("ceil "+Math.ceil(Math.random()))
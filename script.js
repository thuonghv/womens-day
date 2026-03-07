let popped=0

let text="Hi Beybe..."
let sub="Anh có cái này dành cho em 💝"
let i=0

function typeWriter(){

if(i<text.length){

document.getElementById("typing").innerHTML+=text.charAt(i)

i++

setTimeout(typeWriter,120)

}

else{

setTimeout(()=>{
document.getElementById("subtext").innerText=sub
document.getElementById("startBtn").style.display="inline-block"
},700)

}

}

typeWriter()



function startSurprise(){

fadeMusic()

nextPage("page2")

}



function startMagic(){

rainHearts()

nextPage("page3")

}



function nextPage(id){

document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"))

document.getElementById(id).classList.add("active")

}



function popBalloon(balloon,img){

document.getElementById("popSound").play()

balloon.classList.add("pop")

setTimeout(()=>balloon.remove(),300)

let photo=document.createElement("img")
photo.src=img

document.getElementById("photoDisplay").appendChild(photo)

popped++

if(popped==4){

setTimeout(()=>{
document.getElementById("letter").style.display="block"
},1500)

setTimeout(()=>{

let q=document.getElementById("questionBox")

q.style.display="block"

q.scrollIntoView({behavior:"smooth"})

},4500)

}

}



function rainHearts(){

let container=document.getElementById("hearts")

setInterval(()=>{

let heart=document.createElement("div")

heart.className="heart"

heart.innerHTML="🩷"

heart.style.left=Math.random()*100+"%"

container.appendChild(heart)

setTimeout(()=>heart.remove(),4000)

},200)

}



function startSparkles(){

let container=document.getElementById("sparkles")

setInterval(()=>{

let spark=document.createElement("div")

spark.className="sparkle"

spark.innerHTML="✨"

spark.style.left=Math.random()*100+"%"

container.appendChild(spark)

setTimeout(()=>spark.remove(),5000)

},250)

}

startSparkles()



function fadeMusic(){

let music=document.getElementById("music")

music.volume=0

music.play()

let fade=setInterval(()=>{

if(music.volume<1){
music.volume+=0.05
}
else{
clearInterval(fade)
}

},200)

}



function showEnding(){

document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"))

document.getElementById("endingPage").classList.add("active")

startLoveRain()

}



function goBack(){

location.reload()

}



function startLoveRain(){

let container=document.getElementById("loveRain")

setInterval(()=>{

let love=document.createElement("div")

love.className="loveDrop"

love.innerHTML="I LOVE YOU 💖"

love.style.left=Math.random()*100+"%"

container.appendChild(love)

setTimeout(()=>love.remove(),6000)

},300)

}

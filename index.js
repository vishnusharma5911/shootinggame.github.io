// console.log('script running....');

const cursor = document.querySelector(".cursor");
window.addEventListener("mousemove", (e) => {
    cursor.style.top = e.pageY + "px";
    cursor.style.left = e.pageX + "px";
})


const bloodSpot = document.querySelector(".bloodSpot");
const container = document.querySelector(".container");
const btn = document.querySelector(".btn");


window.addEventListener("click", (e) => {
    bloodSpot.style.top = e.pageY + "px";  
    bloodSpot.style.left = e.pageX + "px"; 
    
    if(e.target == terrorist) score++;
    btn.innerText = "SCORE: " +  score;
}) 



const terrorist = document.createElement("img");
terrorist.setAttribute("class", "terrorist");
terrorist.setAttribute("src", "./terrorist.png") 

const contHeight = container.offsetHeight;
const contWidth = container.offsetWidth;

setInterval(() => {
    const randTop = Math.random() * (contHeight -100);
    const randLeft = Math.random() * (contWidth -100);

    terrorist.style.position = "absolute";
    terrorist.style.top = randTop + "px";
    terrorist.style.left = randLeft + "px";
},1500 );

let score = 0;
btn.addEventListener("click", ()=> {
    container.appendChild(terrorist);

    btn.innerText = "SCORE: " +  score;
    
})

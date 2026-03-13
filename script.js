// ================= WAIT FOR PAGE LOAD =================

document.addEventListener("DOMContentLoaded", function(){

/* ================= HAMBURGER MENU ================= */

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

if(hamburger && nav){
hamburger.addEventListener("click", () => {
nav.classList.toggle("nav-active");
});
}


/* ================= LOAN CALCULATOR ================= */

const loanAmount = document.getElementById("loanAmount");
const amountValue = document.getElementById("amountValue");
const repayment = document.getElementById("repayment");
const interest = document.getElementById("interest");
const total = document.getElementById("total");

function updateCalculator(){

if(!loanAmount) return;

let amount = parseFloat(loanAmount.value);

amountValue.innerText = amount.toLocaleString();

let interestRate = 0.35;

let interestValue = amount * interestRate;

let repaymentValue = amount + interestValue;

interest.innerText = interestValue.toFixed(2);

repayment.innerText = repaymentValue.toFixed(2);

total.innerText = repaymentValue.toFixed(2);

}

if(loanAmount){
loanAmount.addEventListener("input", updateCalculator);
updateCalculator();
}


/* ================= FLOATING CHART ANIMATION ================= */

if(document.querySelector(".chart1")){
gsap.to(".chart1", {
y:20,
repeat:-1,
yoyo:true,
duration:3,
ease:"sine.inOut"
});
}

if(document.querySelector(".chart2")){
gsap.to(".chart2", {
y:-15,
repeat:-1,
yoyo:true,
duration:4,
ease:"sine.inOut"
});
}


/* ================= PARTICLES BACKGROUND ================= */

if(document.getElementById("particles-js")){

particlesJS("particles-js", {

particles:{

number:{
value:50,
density:{enable:true,value_area:800}
},

color:{
value:["#2e6cff","#ff3e3e","#00ff66"]
},

shape:{type:"circle"},

opacity:{value:0.5},

size:{value:3},

line_linked:{
enable:true,
distance:120,
color:"#ffffff",
opacity:0.2,
width:1
},

move:{
enable:true,
speed:2,
direction:"none",
random:true,
straight:false,
bounce:false
}

}

});

}

});

window.addEventListener("scroll", function(){

const header = document.querySelector(".header");

if(window.scrollY > 80){
header.classList.add("shrink");
}else{
header.classList.remove("shrink");
}

});
function load(){
let level=document.getElementById("level");
for(let i=1;i<=18;i++){
level.innerHTML+=`<option>${i}</option>`;
}
}
load();

document.getElementById("level").onchange=function(){
let b=document.getElementById("basic");
b.innerHTML="";
payMatrix[this.value].forEach(v=>{
b.innerHTML+=`<option>${v}</option>`;
});
};

function calculate(){

let basic=parseInt(document.getElementById("basic").value);
let fit=parseFloat(document.getElementById("fitment").value);
let hra=parseFloat(document.getElementById("hra").value);

let result=calculateArrear({
basic,
fitment:fit,
hra,
startDate:new Date("2026-01-01"),
endDate:new Date("2027-07-01"),
da1:parseFloat(document.getElementById("da1").value),
da2:parseFloat(document.getElementById("da2").value)
});

document.getElementById("output").innerHTML=`
<h3>Total Arrear: ₹${result.total}</h3>
<pre>${result.log.map(r=>r.month+" : "+r.diff).join("\n")}</pre>
`;
}
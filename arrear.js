function getMonths(start, end){
let d=new Date(start), arr=[];
while(d<=end){
arr.push(new Date(d));
d.setMonth(d.getMonth()+1);
}
return arr;
}

function calculateArrear(data){

let months=getMonths(data.startDate,data.endDate);

let basic=data.basic;
let revised=Math.round(basic*data.fitment);

let lastInc=null;
let total=0;
let log=[];

months.forEach(m=>{

if((m.getMonth()==0||m.getMonth()==6) && (!lastInc || m>lastInc)){
basic=Math.round(basic*1.03);
lastInc=m;
}

let da=0;
if(m>=new Date("2026-07-01")) da=data.da2;
else if(m>=new Date("2026-01-01")) da=data.da1;

let old=basic*(1+da/100);
let neu=revised*(1+da/100)+revised*data.hra;

let diff=neu-old;
total+=diff;

log.push({
month:m.toISOString().slice(0,7),
diff:Math.round(diff),
total:Math.round(total)
});
});

return {total:Math.round(total),log};
}
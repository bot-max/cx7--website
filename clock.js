
/* first we selecte the html id */
let hour = document.getElementById('displayhour');
let minute = document.getElementById('displayminute');
let second = document.getElementById('displaysecond');

/* using setinterval take in second and second */
setInterval(()=>{
    let data = new Date();
    let gethour = data.getHours();
    let getminute = data.getMinutes();
    let getsecond = data.getSeconds();
    hour.innerHTML = did(gethour>=12 ? gethour-12:gethour);
    minute.innerHTML = did(getminute);
    second.innerHTML = did(getsecond);
})

/* dont dispaly the one digit number so the reason in create the function */
function did(sing){
    return sing<10 ?`0${sing}`:sing;
}


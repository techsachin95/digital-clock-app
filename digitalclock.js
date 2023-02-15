setInterval(digitalclock,1000);
function digitalclock(){
let hours=document.querySelector('.hours');
let minutes=document.querySelector('.minutes');
let seconds=document.querySelector('.second');
let session=document.querySelector('.session');
    let t=new Date();
    hours.innerHTML=t.getHours();
    minutes.innerHTML=t.getMinutes();
    seconds.innerHTML=t.getSeconds();
    if(hours>12){
    session.innerHTML="PM"
    }else{
        session.innerHTML="AM"
    }
    
}





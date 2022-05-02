function showTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    
    const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    var waar = days[dateTime.getDay()];

    var dinank = dateTime.getDate();

    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
    var mahina = months[dateTime.getMonth()];


    var saal = dateTime.getFullYear();
    var session = document.getElementById('session');

    if(hrs > 12){
        hrs = hrs - 12;
        session.innerHTML = 'PM';
    }else{
        session.innerHTML = 'AM';
    }

    hrs = (hrs < 10) ? "0" + hrs : hrs;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    document.getElementById('hrs').innerHTML = hrs;
    document.getElementById('min').innerHTML = min;
    document.getElementById('sec').innerHTML = sec;
    document.getElementById('war').innerHTML = waar;
    document.getElementById('dinank').innerHTML = dinank;
    document.getElementById('mahina').innerHTML =mahina;
    document.getElementById('saal').innerHTML = saal;
}

setInterval(showTime, 500);

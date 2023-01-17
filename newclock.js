function clock() {
    const twoDigit =function(num){
        let digit
            if( num < 10 ) {
                digit = "0" + num;
            } else { 
                digit = num; 
            }
            return digit;
    }
    const weeks = new Array("日","月","火","水","木","金","土");

    const now = new Date();

    const year = now.getFullYear();
    const month = twoDigit(now.getMonth() + 1);
    const day = twoDigit(now.getDate());
    const week = weeks[now.getDay()];
    const hour = twoDigit(now.getHours());
    const minute = twoDigit(now.getMinutes());
    const second = twoDigit(now.getSeconds());

    if(minute == 22 && second == 00){
        audio()
    }
    document.getElementById("clock_date").textContent = year + "/" + month + "/" + day + " (" + week + ")";
    document.getElementById("clock_time").textContent = `${hour}:${minute}:${second}`;

    // `${year}/${month}/${day}(${week})`
    // document.getElementById("clock_date").innerHTML = data1;

}
setInterval(clock, 1000);
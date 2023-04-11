
let startBtn = document.getElementById('startBtn');
let stopBtn = document.getElementById('stopBtn');
let resetBtn = document.getElementById('resetBtn');


let hoursCount = 00;
let secondsCount = 00;
let minutesCount = 00;
let counterCount = 00;


startBtn.addEventListener('click', function() {
    counting = true;
    counterFunction();
})

stopBtn.addEventListener('click', function() {
    counting = false;
})

resetBtn.addEventListener('click', function() {
    counting = false;

    secondsCount = 00;
    minutesCount = 00;
    counterCount = 00;
    hoursCount = 00;

  
})



function counterFunction() {
    if (counting) {
        counterCount++  
    }

    if(counterCount == 100) {
        secondsCount++
        counterCount = 0
    }

    if (secondsCount == 60) {
        minutesCount++
        secondsCount = 0
    }

    if (minutesCount == 60) {
        hoursCount++
        minutesCount = 0
    }


        let hr = hoursCount;
        let min = minutesCount;
        let sec = secondsCount;
        let count = counterCount;
  
        if (hoursCount < 10) {
            hr = "0" + hr;
        }
  
        if (minutesCount < 10) {
            min = "0" + min;
        }
  
        if (secondsCount < 10) {
            sec = "0" + sec;
        }
  
        if (counterCount < 10) {
            count = "0" + count;
        }
    
        
        document.getElementById('counter').innerHTML = count;
        document.getElementById('seconds').innerHTML = sec;
        document.getElementById('minutes').innerHTML = min;
        document.getElementById('hour').innerHTML = hr;
    
    setTimeout(counterFunction, 10)
}
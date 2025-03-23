const timerDisplay = document.getElementById('timer');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');

let intervalid;
let minutes = 0 ;
let seconds = 0 ; 
let isRunning = false;

function updateTimer(){
    minutesInput.disabled = true; 
    secondsInput.disabled = true;
    startBtn.disabled = true; 
    stopBtn.disabled = false;
    resetBtn.disabled = false;

    if (seconds === 0 && minutes === 0){
        clearInterval(intervalid);
        isRunning= false;
        minutesInput.disabled = false;
        secondsInput.disabled = false;
        startBtn.disabled =false;
        stopBtn.disabled = true; 
        resetBtn.disabled = true; 
    }
    else{
        if (seconds > 0 ){
            seconds--;
        }
        elseif(minutes > 0 );{
            minutes--;
            seconds = -59;
        }
        timerDisplay.textContent = `${padZero(minutes)}:${padZero(seconds)}`;
    }
}

function padZero(num){
    return(num < 10 ? '0': '')+ num;
}

startBtn.addEventListener('click',() => {
    if(!isRunning){
        minutes = parseInt(minutesInput.value);
        seconds = parseInt(secondsInput.value);
        intervalid=setInterval(updateTimer, 1000);
        isRunning = true;
    }
});

stopBtn.addEventListener('click',() =>{
    clearInterval(intervalid);
    isRunning = false;
    minutesInput.disabled = false;
    secondsInput.disabled = false;
    startBtn.disabled =false;
    stopBtn.disabled = true;
    resetBtn.disabled = true;
});

resetBtn.addEventListener('click',() =>{
    clearInterval(intervalid);
    isRunning = false;
    minutes = 0;
    seconds = 0 ;
    timerDisplay.textContent = '00:00';
    minutesInput.disabled =false ; 
    secondsInput.disabled = false;
    startBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = true;
});

// main display elements and buttons(including minutes and secs)
let studyTimer = document.getElementById('study-timer');
let addBtn = document.getElementById('add-btn');
let minusBtn = document.getElementById('minus-btn');
let playPauseContainer = document.getElementById('play-pause-container');
let playBtn = document.getElementById('play-btn');
let pauseBtn = document.getElementById('pause-btn');
let restartBtn = document.getElementById('restart-btn');
let timer;
let minutes = 20;
let seconds = 0;

// Break display and break btn elements(including break minutes and secs)
let breakTimer;
let setBreak = document.getElementById('set-break');
let breakAddBtn = document.getElementById('break-add-btn');
let breakMinusBtn = document.getElementById('break-minus-btn');
let breakMinutes = 10;
let breakSeconds = 0;

// updateTimerDisplay updates the display of the timer by converting the minutes and seconds variables to strings
function updateTimerDisplay() {
    studyTimer.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
updateTimerDisplay();

// updateBreak updates the display of the amount of break minutes
function updateBreakDisplay() {
    setBreak.innerText = `${breakMinutes.toString()}`;
}
updateBreakDisplay();

// enables add-btn to add minutes to timer 5min at a time (max60min)
addBtn.addEventListener('click', () => {
    if (minutes <= 55) {
        minutes += 5;
    }
    updateTimerDisplay();
});

// enables minus-btn to subtract 5min at a time (min5)
minusBtn.addEventListener('click', () => {
    if (minutes > 5) {
        minutes -= 5;
    }
    updateTimerDisplay();
});

// toggles play and pause btns
playBtn.addEventListener('click', () => {
    playBtn.classList.add('hide');
    pauseBtn.classList.remove('hide');
    
    startTimer();
});

pauseBtn.addEventListener('click', () => {
    playBtn.classList.remove('hide');
    pauseBtn.classList.add('hide');
    
    pauseTimer();
});

// restarts timer, break timer, & removes the pause button
restartBtn.addEventListener('click', () => {
    minutes = 20;
    seconds = 0;
    breakMinutes = 10;
    playBtn.classList.remove('hide');
    pauseBtn.classList.add('hide');

    pauseTimer();
    updateTimerDisplay();
    updateBreakDisplay();
});

// enables break-add-btn to add minutes to break timer 5min at a time (max30 min break)
breakAddBtn.addEventListener('click', () => {
    if (breakMinutes <= 25) {
        breakMinutes += 5;
    }
    updateBreakDisplay();
});

// enables break-minus-btn to subtract 5min at a time (min5 min break)
breakMinusBtn.addEventListener('click', () => {
    if (breakMinutes > 5) {
        breakMinutes -= 5;
    }
    updateBreakDisplay();
});

function startTimer() {
    timer = setInterval(() => {
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(timer);
                startBreakTimer();
            } else {
                seconds = 59;
                minutes--;
            }
        } else {
            seconds--;
        }
        updateTimerDisplay();
    }, 1000);
}

function pauseTimer() {
    clearInterval(timer);
    clearInterval(breakTimer);
    updateTimerDisplay();
}

function startBreakTimer() {
    breakTimer = setInterval(() => {
        if (breakSeconds === 0) {
            if (breakMinutes === 0) {
                clearInterval(breakTimer);
                alert("Break time over!");
                resetTimer();
            } else {
                breakSeconds = 59;
                breakMinutes--;
            }
        } else {
            breakSeconds--;
        }
        updateTimerDisplay();
    }, 1000);
}
const year = document.getElementById('year')
const countDown = document.getElementById('countdown')
const days = document.getElementById('days')
const hrs = document.getElementById('hours')
const mins = document.getElementById('minutes')
const secs = document.getElementById('seconds')
const loading = document.getElementById('loading')

let currentYear = new Date().getFullYear()
year.innerHTML = currentYear + 1

let nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`)

function startCountDown(){
    let date = new Date()
    let diff = nextYear - date

    let d = Math.floor(diff/1000/60/60/24)
    let h = Math.floor(diff/1000/60/60) % 24
    let m = Math.floor(diff/1000/60) % 60
    let s = Math.floor(diff/1000) % 60

    days.innerHTML = d
    hrs.innerHTML = h < 10 ? `0${h}` : h
    mins.innerHTML = m < 10 ? `0${m}`: m
    secs.innerHTML = s < 10 ? `0${s}` : s

    setTimeout(() => {
        loading.remove()
        countDown.style.display = 'flex'
    },1000)

}

// setInterval(() => {
//     startCountDown() //ye difference hai
// }, 1000);
setInterval(startCountDown, 1000)
const btn = document.querySelector('.container__btn')

const socket = io()
let clicks = 0
let lastClick = 0

function UpdateClick(cc) {
    clicks = cc
    document.querySelector('.container__counter__number').textContent = clicks
}

function AddClick() {
    UpdateClick(clicks + 1)
    socket.emit('click')
}

socket.on('connection', UpdateClick)
socket.on('click', UpdateClick)
// let interval, t
// function intervalClick() {
//     audio.play()
//     var d = new Date()
//     t = d.getTime()
//     interval = t - lastClick
//     console.log(t + " | " + interval + " | " + audio.playbackRate)
    
//     if(interval <= 150) {
//         audio.playbackRate = 2.0;
//     } 
//     else if (interval >= 250 && interval <= 500) {
//         audio.playbackRate = 1.0;
//     }
//     else if (interval >= 500 && interval <= 700) {
//         audio.playbackRate = 0.5;
//     }
//     else if(interval >= 700) {
//             audio.pause()
//     }

//     lastClick = t
// }

btn.addEventListener('click', () => {
    audio.play()
    // intervalClick()
    AddClick()
})
btn.addEventListener('mouseup', (e) => {
    btn.style.backgroundImage = `url('img/hesus.png')`
})
btn.addEventListener('mousedown', (e) => {
    btn.style.backgroundImage = `url('img/hesus_tap.png')`
})
btn.addEventListener('mouseleave', () => {
    audio.pause()
    btn.style.backgroundImage = `url('img/hesus.png')`
})

const btn = document.querySelector('.container__btn')

const socket = io()
let clicks = 0

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

btn.addEventListener('click', () => {
    AddClick()
})
btn.addEventListener('mouseup', (e) => {
    btn.style.backgroundImage = `url('img/hesus.png')`
})
btn.addEventListener('mousedown', (e) => {
    audio.play()
    btn.style.backgroundImage = `url('img/hesus_tap.png')`
})
btn.addEventListener('mouseleave', () => {
    audio.pause()
    btn.style.backgroundImage = `url('img/hesus.png')`
})

const btn = document.querySelector('.container__btn')

const socket = io('http://178.154.234.248:3000');
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

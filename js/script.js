const btn = document.querySelector('.container__btn')
const tips = document.querySelector(".container__point-up")


const socket = io()
let clicks = 0
let lastClick = 0
let clientsCount = 1;

tips.addEventListener('animationend', function() {
    document.querySelector(".container__point-up__add-point").remove()
})


function UpdateClick(cc) {
    clicks = cc
    document.querySelector('.container__counter__number').textContent = clicks
}

function UpdateUsers(count) {
    clientsCount = count
    document.querySelector('.container__users-online').textContent = `Онлайн: ${clientsCount}`
}

function AddClick() {
    UpdateClick(clicks + 1)
    socket.emit('click')
}

function debounce(f, ms) {

    let isCooldown;
    
    return function() {
        clearTimeout(isCooldown)
        isCooldown = setTimeout(() => {
            f()
        }, ms);
    };
  
}

const pauseClick = debounce(() => {
    audio.pause()
    audio.playbackRate = 1.0
}, 1000)

socket.on('connection', UpdateClick)
socket.on('click', UpdateClick)
socket.on('updateUserCount', UpdateUsers)

function intervalClick() {
    audio.play()
    var d = new Date()
    let t = d.getTime()
    let interval = t - lastClick
    pauseClick()
    if(document.documentElement.clientWidth > 768) {
        if(interval <= 150) {
            audio.playbackRate = 2.0;
        } 
        else if (interval >= 150 && interval <= 500) {
            audio.playbackRate = 1.0;
        }
    }
    lastClick = t
}
function pointup() {
    const tip = document.createElement("h1")
    tip.innerHTML = "+1";
    tip.classList.add("container__point-up__add-point");
    tips.appendChild(tip)
}

function resetAnim(el) {
    el.style.animation = 'none'
    el.offsetHeight
    el.style.animation = null
}

btn.addEventListener('click', () => {
    pointup()
    onplayssound()
    intervalClick()
    AddClick()
    resetAnim(btn)
})

btn.addEventListener('mouseleave', () => {
    audio.pause()
})

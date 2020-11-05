const cursor = document.querySelector('#cursor')
const hand_img = document.querySelector('#hand-img')
var containerWidth = window.innerWidth,
    containerHeight = window.innerHeight
document.addEventListener('mouseup', () => {
    hand_img.src = 'img/hand.png'
})

document.addEventListener('mousedown', () => {
    hand_img.src = 'img/hand_tap.png'
})

document.addEventListener('mousemove', (e) => {
    cursor.style.transform = 'translateY('+(e.clientY-120)+'px)';
    cursor.style.transform += 'translateX('+(e.clientX-100)+'px)';
})

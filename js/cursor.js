const cursor = document.querySelector('#cursor')
const hand_img = document.querySelector('#hand-img')

document.addEventListener('mouseup', () => {
    hand_img.src = 'img/hand.png'
})

document.addEventListener('mousedown', () => {
    hand_img.src = 'img/hand_tap.png'
})

document.addEventListener('mousemove', (e) => {
    let x = e.clientX - 50
    let y = e.clientY - 40
    cursor.style.left = `${x}px`
    cursor.style.top = `${y}px`
})
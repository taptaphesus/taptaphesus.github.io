const cursor = document.querySelector('#cursor')
const hand_img = document.querySelector('#hand-img')

document.addEventListener('mouseup', () => {
    hand_img.src = 'img/hand.png'
})

document.addEventListener('mousedown', () => {
    hand_img.src = 'img/hand_tap.png'
})

function move( obj, event ) {
    obj.style = '';
    obj.style.top = event.clientY + 'px';
    obj.style.left = event.clientX + 'px';
}
document.addEventListener('mousemove', (e) => {
    move( cursor, e );
})

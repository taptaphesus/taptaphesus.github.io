const audio = document.querySelector('#audio')
audio.volume = 0.2
audio.loop = true



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const audio2 = new Audio()
function onplayssound() {
    let rand = getRandomInt(1, 7)
    let snd
    switch (rand) {
        case 1:
            snd = 'source/narot.mp3'
            break;
        case 2:
            snd = 'source/penis.mp3'
            break;
        case 3:
            snd = 'source/ugu.mp3'
            break;
        case 4:
            snd = 'source/mm.mp3'
            break;
        case 5:
            snd = 'source/anuda.mp3'
            break;
        case 6:
            snd = 'source/puk.mp3'
            break;
        case 6:
            snd = 'source/ariruu.mp3'
            break;
        default:
            break;
    }
    
    audio2.volume = 0.4
    if (audio2.currentTime == 0) {
        audio2.src = snd
        audio2.play()
        audio2.onended=function(){audio2.currentTime = 0}
    }
        
}
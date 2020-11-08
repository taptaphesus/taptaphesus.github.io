let lastnumtxt = document.querySelector('.container__counter__number').textContent
let giftContainer = document.querySelector('.gift-container')
let numtextgift = document.querySelector('.gift-container__content__text')
const giftAudio = new Audio()
giftAudio.src = 'source/gift.mp3'

function gift() {
    console.log(lastnumtxt)
    let numtxt = document.querySelector('.container__counter__number').textContent
    if( lastnumtxt && lastnumtxt[0] < numtxt[0]) {
        console.log('gift' + numtxt)
        
        giftContainer.style = 'display: block'
        numtextgift.textContent = `Мы достигли ${numtxt}`
        giftContainer.classList.add("show")
        giftAudio.play()
        setTimeout(() => {
            giftContainer.classList.remove("show")
            giftContainer.classList.add("hide")
            
            setTimeout(() => {
                giftContainer.classList.remove("hide")
                giftContainer.style = 'display: none'
            }, 1000);
        }, 4000);
    }

    
    lastnumtxt = numtxt
}

setInterval(() => {
    
    gift()
}, 1000);
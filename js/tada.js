let lastnumtxt = document.querySelector('.container__counter__number').textContent
let giftContainer = document.querySelector('.gift-container')
let numtextgift = document.querySelector('.gift-container__content__text')

function gift() {
    let numtxt = document.querySelector('.container__counter__number').textContent
    const giftAudio = new Audio()
    giftAudio.src = 'source/gift.mp3'
    if( lastnumtxt && lastnumtxt[0] < numtxt[0]) {
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
        }, 3000);
    }

    
    lastnumtxt = numtxt
}
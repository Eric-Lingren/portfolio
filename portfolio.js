// Modal logic for Blackjack
const modal = document.getElementById('simpleModal');
const modalBtnBlackjack = document.getElementById('projectThumbnailBlackjack');
const closeBtn = document.getElementsByClassName('closeBtn')[0];

modalBtnBlackjack.addEventListener("click", openBlackjackModal)
closeBtn.addEventListener('click', closeBlackjackModal)
window.addEventListener('click', clickOutside)

function openBlackjackModal(){
    modal.style.display = 'block'
}
function closeBlackjackModal(){
    modal.style.display = 'none'
}
function clickOutside(e){
    if(e.target === modal){
        modal.style.display = 'none'
    }
}

// Modal logic for Colossal
const colossalModal = document.getElementById('colossalModal');
const modalBtnColossal = document.getElementById('projectThumbnailColossal');
const closeBtnColossal = document.getElementsByClassName('closeBtn')[1];

modalBtnColossal.addEventListener("click", openColossalModal);
closeBtnColossal.addEventListener('click', closeColossalModal)
window.addEventListener('click', clickOutsideColossal)

function openColossalModal(){
    colossalModal.style.display = 'block'
}
function closeColossalModal(){
    colossalModal.style.display = 'none'
}
function clickOutsideColossal(e){
    if(e.target === colossalModal){
        colossalModal.style.display = 'none'
    }
}

// Modal logic for Zen
const zenModal = document.getElementById('zenModal');
const modalBtnZen = document.getElementById('projectThumbnailZengarden');
const closeBtnZen = document.getElementsByClassName('closeBtn')[2];

modalBtnZen.addEventListener("click", openZenModal);
closeBtnZen.addEventListener('click', closeZenModal)
window.addEventListener('click', clickOutsideZen)

function openZenModal(){
    zenModal.style.display = 'block'
}
function closeZenModal(){
    zenModal.style.display = 'none'
}
function clickOutsideZen(e){
    if(e.target === zenModal){
        zenModal.style.display = 'none'
    }
}
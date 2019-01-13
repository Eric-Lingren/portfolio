// Modal logic for CryptoMinerz
const cryptominerzModal = document.getElementById('cryptominerzModal');
const modalBtnCryptominerz = document.getElementById('projectThumbnailCryptominerz');
const closeBtnCryptominerz = document.getElementsByClassName('closeBtn')[0];

modalBtnCryptominerz.addEventListener("click", openCryptominerzModal)
closeBtnCryptominerz.addEventListener('click', closeCryptominerzModal)
window.addEventListener('click', clickOutsideCryptominerz)

function openCryptominerzModal(){
    cryptominerzModal.style.display = 'block'
}
function closeCryptominerzModal(){
    cryptominerzModal.style.display = 'none'
}
function clickOutsideCryptominerz(e){
    if(e.target === cryptominerzModal){
        cryptominerzModal.style.display = 'none'
    }
}

// Modal logic for SmartGarden
const smartgardenModal = document.getElementById('smartgardenModal');
const modalBtnSmartgarden = document.getElementById('projectThumbnailSmartgarden');
const closeBtnSmartgarden = document.getElementsByClassName('closeBtn')[0];

modalBtnSmartgarden.addEventListener("click", openSmartgardenModal)
closeBtnSmartgarden.addEventListener('click', closeSmartgardenModal)
window.addEventListener('click', clickOutsideSmartgarden)

function openSmartgardenModal(){
    smartgardenModal.style.display = 'block'
}
function closeSmartgardenModal(){
    smartgardenModal.style.display = 'none'
}
function clickOutsideSmartgarden(e){
    if(e.target === smartgardenModal){
        smartgardenModal.style.display = 'none'
    }
}

// Modal logic for Blackjack
const modal = document.getElementById('simpleModal');
const modalBtnBlackjack = document.getElementById('projectThumbnailBlackjack');
const closeBtn = document.getElementsByClassName('closeBtn')[1];

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
const closeBtnColossal = document.getElementsByClassName('closeBtn')[2];

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
const closeBtnZen = document.getElementsByClassName('closeBtn')[3];

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

// Modal logic for Axios
const axiosModal = document.getElementById('axiosModal');
const modalBtnAxios = document.getElementById('projectThumbnailAxios');
const closeBtnAxios = document.getElementsByClassName('closeBtn')[4];

modalBtnAxios.addEventListener("click", openAxiosModal);
closeBtnAxios.addEventListener('click', closeAxiosModal)
window.addEventListener('click', clickOutsideAxios)

function openAxiosModal(){
    axiosModal.style.display = 'block'
}
function closeAxiosModal(){
    axiosModal.style.display = 'none'
}
function clickOutsideAxios(e){
    if(e.target === axiosModal){
        axiosModal.style.display = 'none'
    }
}

// Modal logic for Business Time
const businessModal = document.getElementById('businessModal');
const modalBtnBusiness = document.getElementById('projectThumbnailBusiness');
const closeBtnBusiness = document.getElementsByClassName('closeBtn')[5];

modalBtnBusiness.addEventListener("click", openBusinessModal);
closeBtnBusiness.addEventListener('click', closeBusinessModal)
window.addEventListener('click', clickOutsideBusiness)

function openBusinessModal(){
    businessModal.style.display = 'block'
}
function closeBusinessModal(){
    businessModal.style.display = 'none'
}
function clickOutsideBusiness(e){
    if(e.target === businessModal){
        businessModal.style.display = 'none'
    }
}
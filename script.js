


var langButton = document.querySelector('.nav-bar .container .nav-items .item.lang');
var lan1 = document.querySelector('.lan1');
var lan2 = document.querySelector('.lan2');
var count = 0;

langButton.addEventListener('click', ()=>{
    lan1.classList.toggle('active');
    lan2.classList.toggle('active');
    if(++count%2) {
        langButton.classList.remove('en');
        langButton.classList.add('cn');
    } else {
        langButton.classList.remove('cn');
        langButton.classList.add('en');
    }
})
let right = document.getElementById('right')
let left = document.getElementById('left')
let slider = document.getElementsByClassName('slider')[0]
let commentRight = document.getElementById('commentRight')
let commentLeft = document.getElementById('commentLeft')
let pairs = document.getElementsByClassName('pair')
let callMe = document.getElementById('call')
let modal = document.getElementsByClassName('modal')[0]
console.log(callMe);
let distance = 0
left.onclick = function (event) {
    event.preventDefault();
    distance = distance - 100
    if (distance == -100) {
        distance = (slider.children.length - 1) * 100
    }
    slider.style.transform = 'translateX(-' + distance + '%)'

}
right.onclick = function (event) {
    event.preventDefault();
    distance = distance + 100
    if (distance == slider.children.length * 100) {
        distance = 0
    }
    slider.style.transform = 'translateX(-' + distance + '%)'
}
commentRight.onclick = function (event) {
    event.preventDefault();
    let activePair = document.getElementsByClassName('active')[0]
    let nextPair = activePair.nextElementSibling
    console.log(nextPair);
    if (nextPair.classList.contains("sliderButtons")) {
        nextPair = pairs[0]
    }
    activePair.style.opacity = 0
    setTimeout(() => {
        activePair.classList.remove('active')
        nextPair.classList.add('active')
        setTimeout(() => {
            
            nextPair.style.opacity = 1
        }, 100);
    }, 600);
}
commentLeft.onclick = function (event) {
    event.preventDefault();
    let activePair = document.getElementsByClassName('active')[0]
    let nextPair = activePair.previousElementSibling;
    console.log(nextPair);
    if (activePair == pairs[0]) {
        nextPair = pairs[pairs.length - 1]
    }
    activePair.style.opacity = 0
    setTimeout(() => {
        activePair.classList.remove('active')
        nextPair.classList.add('active')
        nextPair.style.opacity = 1
    }, 300);
}
callMe.onclick = function (event) {
    event.preventDefault();
    modal.style.opacity=1
    modal.style.pointerEvents='auto'
}
modal.onclick=function (event){
    modal.style.opacity=0
    modal.style.pointerEvents='none'
}
modal.children[0].onclick=function (event){
    event.stopPropagation()
}
let right = document.getElementById('right')
let left = document.getElementById('left')
let slider = document.getElementsByClassName('slider')[0]
let distance=0
left.onclick = function (event) {
    event.preventDefault();
    distance=distance - 100
    if(distance==-100){
        distance=(slider.children.length-1)*100
    }
    slider.style.transform='translateX(-'+distance+'%)'
    
}
right.onclick = function (event) {
    event.preventDefault();
    distance=distance + 100
    if(distance==slider.children.length*100){
        distance=0
    }
    slider.style.transform='translateX(-'+distance+'%)'
}
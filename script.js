let btn = document.querySelector('button');
let bulb = document.querySelector('#bulb');

btn.addEventListener('click', function(){
    var c1 = Math.floor(Math.random()*256)
    var c2 = Math.floor(Math.random()*256)
    var c3 = Math.floor(Math.random()*256)

    bulb.style.backgroundColor = `rgb(${c1},${c2},${c3})`
})
var img = document.querySelectorAll('img')
var add_count = 0
var remove_count = 0
var perv_ctrl = document.querySelector('.carousel-control-prev')

var addTimer, removeTimer

function addClass() {
    add_count++
    if (add_count == img.length) { add_count = 0 }
    console.log('add' + add_count);
    img[add_count].classList.add('active')

    addTimer = setTimeout(addClass, 5000)
}

function removeClass() {
    console.log('remove' + remove_count);
    img[remove_count].classList.remove('active')
    remove_count++
    if (remove_count == img.length) { remove_count = 0 }
    removeTimer = setTimeout(removeClass, 5000)
}

setTimeout(addClass, 5000)
setTimeout(removeClass, 7000)

$('.carousel').carousel({
    pause: false
})
console.log(perv_ctrl);


perv_ctrl.onclick = function () {
    add_count = add_count - 1
    if (add_count < 0) { add_count = img.length - 1 }
    
    console.log(add_count);

}
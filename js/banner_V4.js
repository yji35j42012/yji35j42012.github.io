var img_slider = document.querySelectorAll(".Banner .carousel .carousel-item img")
var prev = document.querySelector('.carousel .prev')
var next = document.querySelector('.carousel .next')
var indicators = document.querySelectorAll('.carousel .carousel-indicators li')

var addtimer = setTimeout(img_addClass, 5000)
var count = 0
var removetimer = setTimeout(img_removeClass, 6000)

function img_addClass() {
    count++
    if (count == img_slider.length) { count = 0 }
    img_slider[count].classList.add('active')
    addtimer = setTimeout(img_addClass, 5000)
}

function img_removeClass() {
    if ((count - 1) == '-1') {
        img_slider[img_slider.length - 1].classList.remove('active')
    } else {
        img_slider[count - 1].classList.remove('active')
    }

    removetimer = setTimeout(img_removeClass, 5000)
}


prev.onclick = function prev() {
    clearTimeout(addtimer)
    clearTimeout(removetimer)
    count = count - 1
    if (count == "-1") { count = img_slider.length - 1 }
    img_slider[count].classList.add('active')
    addtimer = setTimeout(img_addClass, 5000)
    removetimer = setTimeout(img_removeClass, 1000)

}
next.onclick = function prev() {
    clearTimeout(addtimer)
    clearTimeout(removetimer)
    img_addClass()
    removetimer = setTimeout(img_removeClass, 1000)
}

for (let index = 0; index < indicators.length; index++) {
    const element = indicators[index];
    indicators[index].onclick = function () {
        clearTimeout(addtimer)
        clearTimeout(removetimer)
        count = index
        img_slider[count].classList.add('active')
        addtimer = setTimeout(img_addClass, 5000)
        removetimer = setTimeout(img_removeClass, 1000)
    }
}
// 滑鼠在BANNER上面不要暫停輪播
$('.carousel').carousel({
    pause: false
})
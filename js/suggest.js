var gender_content;
var gender_count;
var gender;
var submit = document.querySelector('.mask .suggest_msg_block .submit')
var cancle = document.querySelector('.mask .suggest_msg_block .cancle')
var close_btn = document.querySelector('.close_btn')
var thanks_block = document.querySelector('.mask .thanks_block')
var msg_block = document.querySelector('.mask .suggest_msg_block')

var timer;


let suggest_inf = [
    {
        suggest_id: 1,
        suggest_name: '小明',
        suggest_gender: './images/suggest_boy-1.png',
        suggest_content: '好吃，皮鬆香甜，內餡特別，這次吃泡菜跟紅豆，好吃～^_^'
    },
    {
        suggest_id: 2,
        suggest_name: '小美',
        suggest_gender: './images/suggest_gril-1.png',
        suggest_content: '很好吃~ 料多而且很大一顆，好吃～^_^'
    },
    {
        suggest_id: 3,
        suggest_name: '小華',
        suggest_gender: './images/suggest_boy-2.png',
        suggest_content: '內餡誠意十足，鯛魚雪燒在炎炎夏日來 一份特別好!'
    },
]

submit.onclick = function () {

    const name = document.querySelector('.mask .suggest_msg_block #name')
    if (gender_content == 'boy') {
        gender_count = random_pic(3)
        switch (gender_count) {
            case 1:
                gender = './images/suggest_boy-1.png'
                break
            case 2:
                gender = './images/suggest_boy-2.png'
                break
            case 3:
                gender = './images/suggest_boy-3.png'
                break
        }
    } else if (gender_content == 'gril') {
        gender_count = random_pic(2)
        switch (gender_count) {
            case 1:
                gender = './images/suggest_gril-1.png'
                break
            case 2:
                gender = './images/suggest_gril-2.png'
                break
        }
    }
    const content = document.querySelector('.mask .suggest_msg_block #content')
    var suggest_item_group = document.querySelector('.suggest .container .item_group')

    suggest_inf.unshift({
        suggest_id: suggest_inf.length + 1,
        suggest_name: name.value,
        suggest_gender: gender,
        suggest_content: content.value
    });

    first_inset()

    thanks_block.classList.add('active')
    msg_block.style.display = 'none'
    timer = setTimeout(function () {
        clossAll()
    }, 3000)
}
function random_pic(num) {
    return gender_count = Math.floor(Math.random() * num) + 1;
}
var genderHendler = document.querySelectorAll('.mask .suggest_msg_block #gender')

for (let i = 0; i < genderHendler.length; i++) {
    const element = genderHendler[i];
    element.onclick = function () {
        gender_content = element.value;

    }
}
var msg_click = document.querySelector('.msg')
var mask = document.querySelector('.mask')


msg_click.onclick = function () {
    console.log('aaa');

    mask.style.display = 'flex'
    msg_block.style.display = 'flex'
}
cancle.onclick = function () {
    clossAll()
    clearAll()
}
close_btn.onclick = function () {
    clearTimeout(timer)
    clossAll()
}

function clossAll() {
    mask.style.display = 'none'
    msg_block.style.display = 'none'
    thanks_block.classList.remove('active')
}

function first_inset() {
    var suggest_item_group = document.querySelector('.suggest .item_group')
    suggest_item_group.innerHTML = ''
    for (let i = 0; i < suggest_inf.length; i++) {
        const element = suggest_inf[i];
        suggest_item_group.innerHTML += `
        <div class="item">
            <div class="pic">
                <img src="${element.suggest_gender}" alt="">
            </div>
            <div class="txt"><div class="suggest_name">                                
                <span>${element.suggest_name}</span>
            </div>
            <div class="suggest_content">
            <span>
                ${element.suggest_content}
            </span>
        </div>
    </div>
        `
    }
}

var products_btn_show = document.querySelector('#products #show')
var products_btn_hidden = document.querySelector('#products #hidden')
var products_block = document.querySelector('#products .products_block')
console.log('aaaa', products_btn_show);
products_btn_show.onclick = function () {
    products_block.classList.add('active')
}
products_btn_hidden.onclick = function () {
    products_block.classList.remove('active')
    window.scrollTo(0,products.offsetTop)
    
}
first_inset()

const slider = document.querySelector('.suggest .item_group');
let isDown = false;
let startX;
let scrollLeft;
slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('touchstart', (e) => {
    console.log('touchstart');

    isDown = true;
    slider.classList.add('active');
    var touch = e.touches[0];
    startX = touch.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});


slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('touchend', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;  // stop the fn from running
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk;
});

slider.addEventListener('touchmove', (e) => {
    var touch = e.touches[0];

    if (!isDown) return;  // stop the fn from running
    e.preventDefault();
    const x = touch.pageX - slider.offsetLeft;

    const walk = (x - startX) * 3;
    console.log(startX);
    slider.scrollLeft = scrollLeft - walk;
});

function clearAll() {
    const name = document.querySelector('.msg_btn .suggest_msg_block #name')
    const content = document.querySelector('.msg_btn .suggest_msg_block #content')
    name.value = ''
    content.value = ''
}
var menu_ctrl = document.querySelector('.menu_ctrl')
var medium = document.querySelector('.NavBar ul')
var a_ctrl = document.querySelectorAll('.NavBar ul li a')
var bottom_line = document.querySelector('.NavBar .bottom_line')
var icon2 = document.querySelector('#nav-icon2')
var products_block = document.querySelector('#products .products_block')

function navHendler(e) {
    var window_width = window.innerWidth

    icon2.classList.toggle('open')
    // console.log(window_width);

    if (window_width <= 768 && !medium.classList.contains('active')) {
        console.log('aaa');
        medium.classList.add('active')
        mask.style.display = 'block'
        msg_block.style.display = 'none'
        products_block.style.display = 'none'

    } else {

        medium.classList.remove('active')
        mask.style.display = 'none'
    }
}


a_ctrl.forEach(function (button) {
    button.addEventListener('click', navHendler)
})

menu_ctrl.addEventListener('click', navHendler)


mask.onclick = function () {
    if (medium.classList.contains('active')) {
        mask.style.display = 'none'
        medium.classList.remove('active')
        icon2.classList.remove('open')
    }
}
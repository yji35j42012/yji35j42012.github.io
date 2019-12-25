var products_items = document.querySelectorAll('.products .item_group .item .pic')
var products_items_txts = document.querySelectorAll('.products .item_group .item .txt')
var bottom_line = document.querySelector('.NavBar .bottom_line')
var about = document.querySelector('#about')
var products = document.querySelector('#products')
var Banner = document.querySelector('#Banner')
var suggest = document.querySelector('#suggest')
var contact = document.querySelector('#contact')
var lis = document.querySelectorAll('.NavBar li')
console.log(lis);
 function change_line(whoid){
    // console.log(this.offsetLeft);
 
    bottom_line.style.width = lis[0].offsetWidth + 'px'
    var a_address = this.offsetLeft
    bottom_line.style.left = a_address  +    "px"
    switch (whoid){
        case 'about_li':
            var a_address = lis[0].offsetLeft
            bottom_line.style.left = a_address  + "px"
            // console.log(this.offsetLeft);
        break
        case 'products_li':
            var a_address = lis[1].offsetLeft
            bottom_line.style.left = a_address  +  "px"
            // console.log('products_li');
            // console.log(this.offsetLeft);
        break
        case 'banner_li':
            console.log('banner_li');
            var a_address = lis[2].offsetLeft
            bottom_line.style.left = a_address + "px"
            // console.log(this.offsetLeft);
        break
        case 'suggest_li':
            console.log('suggest_li');
            var a_address = lis[3].offsetLeft
            bottom_line.style.left = a_address  +  "px"
            // console.log(this.offsetLeft);
        break
        case 'contact_li':
            console.log('contact_li');
            var a_address = lis[4].offsetLeft
            bottom_line.style.left = a_address  +  "px"
            // console.log(this.offsetLeft);
        break
    }
    
 }
lis.forEach(function(li){
    li.addEventListener('click' , change_line)
})

window.addEventListener('scroll', scrollHendler)

function scrollHendler() {
    // windowTop 目前視窗最上面的位置
    let windowTop = window.scrollY
    // windowBottom 視窗最底部的位置
    let windowBottom = windowTop + window.innerHeight

    let NavBar_fixed = document.querySelector('.NavBar')

    let Banner = document.querySelector('.Banner')

    if (Banner.offsetHeight < windowTop) {
        NavBar_fixed.classList.add('p_fixed')
        document.body.style.paddingTop = '100px'
    } else {
        NavBar_fixed.classList.remove('p_fixed')
        document.body.style.paddingTop = '0'
    }

    if(windowTop +100> Banner.offsetTop  && windowTop +100 < about.offsetTop){
        change_line('banner_li')
    }else if(windowTop +100 > about.offsetTop && windowTop +100 < products.offsetTop){
        change_line('about_li')
    }else if(windowTop +100> products.offsetTop  && windowTop +100 < suggest.offsetTop){
        change_line('products_li')
    }else  if(windowTop +100> suggest.offsetTop  && windowTop +100 < contact.offsetTop){
        change_line('suggest_li')
    }else if(windowTop +100> contact.offsetTop ){
        change_line('contact_li')
    }


    products_items.forEach(products_item => {
        // 圖片中間位置
        const img = products_item.offsetTop + (products_item.offsetHeight / 2)
        const img_Bottom = products_item.offsetTop + products_item.offsetHeight

        //  視窗底部
        const windowBottom = window.scrollY + window.innerHeight
        if (img < windowBottom && window.scrollY < img) {
            products_item.classList.add('active')
        } else {
            products_item.classList.remove('active')
        }
    })


    products_items_txts.forEach(products_items_txt => {
        // 圖片中間位置
        const img = products_items_txt.offsetTop + (products_items_txt.offsetHeight / 2)

        //  視窗底部
        const windowBottom = window.scrollY + window.innerHeight

        if (img < windowBottom && window.scrollY < img) {
            products_items_txt.classList.add('active')
        } else {
            products_items_txt.classList.remove('active')
        }
    })
}

change_line('banner_li')



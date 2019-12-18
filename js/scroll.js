var products_items = document.querySelectorAll('.products .item_group .item .pic')
        var products_items_txts = document.querySelectorAll('.products .item_group .item .txt')

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
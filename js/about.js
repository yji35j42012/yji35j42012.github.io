var about_ctrl = document.querySelectorAll('.about_ctrl div')
        var story_div = document.querySelector('.about .about_ctrl #story')
        var attentively_div = document.querySelector('.about .about_ctrl #attentively')
        var item_active = document.querySelectorAll('.item_group .item')
        var story_item = document.querySelector('.item_group #story_item')
        var attentively_item = document.querySelector('.item_group #attentively_item')

        function aboutclickHendler() {
            switch (this.id) {
                case 'attentively':
                    console.log(this.id);
                    remove_item_active()
                    story_div.classList.remove('active')
                    
                    attentively_div.classList.add('active')
                    attentively_item.classList.add('active')
                    break;
                case 'story':
                    console.log(this.id);
                    remove_item_active()
                    attentively_div.classList.remove('active')
                    story_div.classList.add('active')
                    story_item.classList.add('active')
                    break;
            }

        }
        about_ctrl.forEach(function (button) {
            button.addEventListener('click', aboutclickHendler)
        })

        function remove_item_active() {
            for (let i = 0; i < item_active.length; i++) {
                const element = item_active[i];
                element.classList.remove('active')
            }
        }
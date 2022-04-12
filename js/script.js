'use strict';

(function () {
    initSlider();
    initTabs();
    initModal();

    function initSlider() {
        if(!document.querySelector('.splide'))
            return;

        let splide = new Splide('.splide', {
            paginationKeyboard: true
        });

        splide.on('pagination:mounted', function (data) {
            // You can add your class to the UL element
            data.list.classList.add('slider__pagination');

            // `items` contains all dot items
            data.items.forEach(function (item) {
                item.button.classList.add('slider__pagination-button');
            });
        });

        splide.mount();
    }


    function initTabs() {
        if(!document.querySelector('.tab'))
            return;

        const tabOverflow = document.querySelector('.tab__overflow');
        const buttons = document.querySelector('.tab__buttons');
        const tabs = document.querySelector('.tab__list');
        //Первичная выставление на начальный слайд на всякий случай
        moveTab(findActiveIndex());

        buttons.addEventListener('click', (evt) => {
            if (!evt.target.classList.contains('tab__button'))
                return;

            const arr = Array.from(buttons.children);
            arr.forEach(li => li.children[0].classList.remove('tab__button--active'));
            evt.target.classList.add('tab__button--active');

            const activeIndex = findActiveIndex();

            moveTab(activeIndex);
        });

        function moveTab(activeIndex) {
            tabOverflow.style.height = tabs.children[activeIndex].offsetHeight + 'px';

            const offset = getOffset(activeIndex);

            tabs.style.marginTop = offset + 'px';


            function getOffset(activeIndex) {
                let sum = 0;

                for (let i = tabs.children.length - 1; i > activeIndex; i--) {
                    sum += tabs.children[i].offsetHeight;
                }

                return -sum;
            }
        }

        function findActiveIndex() {
            return Array.from(buttons.children).findIndex(li => li.children[0].classList.contains('tab__button--active'));
        }


    }




    function initModal() {
        const modal = document.querySelector('.modal');

        if(!modal)
            return

        const close = modal.querySelector('.modal__close');
        const btn = document.querySelector('.shipping__button');

        btn.addEventListener('click', () => {
            modal.classList.add('modal--open');
        });

        close.addEventListener('click', () => {
            modal.classList.remove('modal--open');
        });
    }
})();








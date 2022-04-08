'use strict';

(function () {
    initSlider();
    initTabs();


    function initSlider() {
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


})();


//TODO: Tab Navigation by arrows? May be










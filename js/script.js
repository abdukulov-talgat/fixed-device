(function () {
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
})();


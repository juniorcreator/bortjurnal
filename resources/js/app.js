window.$ = window.jQuery = require('jquery');
// import "babel-polyfill";
import '../js/vendors/scroll';


class App {
  constructor() {
  }
  scroll() {
    let mid = $('.block_details');
    let filters = $('.block_filter');
    let set = {
      scrollInertia:200,
      moveDragger:true,
      };
    mid.mCustomScrollbar(set);
    filters.mCustomScrollbar(set);
  };
  select() {
    let selects = $('.custom-select');
    let label = $('.custom-select__form label');
    selects.on('click', function (e) {
      $(this).toggleClass('active');
    });

    label.on('click', function (e) {
      let text = $(this).text();
      $(this).parents('.custom-select').find('.custom-select__text').text(text);
    });

    $(document).on('mouseup', (e) =>{
      let p = $(".custom-select");
      if (!p.is(e.target) && p.has(e.target).length === 0) {
        selects.removeClass('active');
      }
    });
  };
  init () {
    this.select();
    this.scroll();
  }
}
let app = new  App();
app.init();

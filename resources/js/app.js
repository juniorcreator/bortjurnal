window.$ = window.jQuery = require('jquery');
// import "babel-polyfill";
import '../js/vendors/scroll';


class App {
  constructor() {
  }
  scroll() {
    let mid = $('.block_details');
    let filters = $('.block_filter');
    let right_side = $('.right-side');
    let set = {
      scrollInertia:200,
      moveDragger:true,
      autoHideScrollbar: true,
    };

    if($(window).width() > 1199) {
      mid.mCustomScrollbar(set);
      filters.mCustomScrollbar(set);
    }
    if($(window).width() < 1199) {
      $('.home-page').mCustomScrollbar(set);
      console.log('less');
    }
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
  nav_search() {
    let a = $('.nav-search input');
    a.on('input', function (e) {
      let val = $(this).val().length;

      if(val > 0) {
        $('.nav-search').addClass('on');
      }else {
        $('.nav-search').removeClass('on');
      }
    })
  };
  init () {
    this.select();
    this.scroll();
    this.nav_search();
  }
}
let app = new  App();
app.init();
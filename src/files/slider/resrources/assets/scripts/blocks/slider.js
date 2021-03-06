import 'slick-carousel';
$(document).ready(function() {
  'use strict';
  var window_width = $(window).width();
  const sliders = document.querySelectorAll('.slider');
  Array.from(sliders).forEach(function(slider) {
    var id = $(slider).attr('id');
    $('#' + id + ' .slides').slick({
      dots: true,
      arrows: true,
      infinite: true,
      autoplay: true,
      speed: 1500,
      slidesToShow: 1,
      adaptiveHeight: true
    });
    var get_box_class = $('#' + id + ' .image-slide')
      .attr('class')
      .split(' ');
    var height_class = get_box_class[1].split('-');
    if (window_width >= 1200) {
      $('#' + id + ' .image-slide').css('height', height_class[0]);
    } else if (window_width > 992) {
      if (window_width < 1200) {
        $('#' + id + ' .image-slide').css('height', height_class[1]);
      }
    } else if (window_width > 768) {
      if (window_width < 992) {
        $('#' + id + ' .image-slide').css('height', height_class[2]);
      }
    } else if (window_width > 480) {
      if (window_width < 768) {
        $('#' + id + ' .image-slide').css('height', height_class[3]);
      }
    } else if (window_width < 480) {
      $('#' + id + ' .image-slide').css('height', height_class[4]);
    }
  });
  const block_sliders = document.querySelectorAll('.postslider');
  Array.from(block_sliders).forEach(function(block_slider) {
    var id = $(block_slider).attr('id');
    var get_item = $(block_slider)
      .find('#post_item')
      .attr('class')
      .split(' ');
    var post_item = get_item[1].split('-');
    $('#' + id + ' .post-slider-items').slick({
      dots: true,
      arrows: true,
      infinite: false,
      autoplay: true,
      speed: 1500,
      slidesToShow: parseInt(post_item[2]),
      slidesToScroll: parseInt(post_item[2]),
      adaptiveHeight: true
    });
  });
});

// Initialize dynamic block preview (editor).
if (window.acf) {
  window.acf.addAction('render_block_preview/type=slider', initializeBlock);
}

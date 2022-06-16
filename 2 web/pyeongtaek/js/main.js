$(function(){
    $("#slide .lazy").slick({
    lazyLoad: 'ondemand', // ondemand progressive anticipated
    autoplay:true,
    infinite: true
  });

  $("#sec2 .lazy").slick({
    lazyLoad: 'ondemand', // ondemand progressive anticipated
    autoplay:true,
    infinite: true,
    arrows:false,
    dots: true
  });

$(".center").slick({
      
    autoplay:true,
    dots: false,
    arrows:false,
    infinite: true,
    centerMode: true,
    slidesToShow: 5,
    slidesToScroll: 1
  });
})
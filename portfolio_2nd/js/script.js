$(function(){

  // カルーセル
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinity: true,
    autoplaySpeed: 2000,
    speed: 2000,
    arrows: false,
    fade: true,
  });

  // リンクホバー(about)
  $('.about-btn').on('mouseover',function(){
    $(this).animate({
      opacity: 0.5,
    }, 300);
  });
  $('.about-btn').on('mouseout',function(){
    $(this).animate({
      opacity: 1.0,
    }, 300);
  });

  // リンクホバー(works)
  $('.works-btn').on('mouseover',function(){
    $(this).animate({
      opacity: 0.5,
    }, 300);
  });
  $('.works-btn').on('mouseout',function(){
    $(this).animate({
      opacity: 1.0,
    }, 300);
  });

  // TOPに戻るボタン
  $(window).on('scroll',function(){
    if($(this).scrollTop() > 100){
      $('#back-btn').fadeIn(300);
    } else {
      $('#back-btn').fadeOut(300);
    }
  });

  // ページ内リンクのスクロールをなめらかにする
  $('a[href^="#"]').click(function(e){
    e.preventDefault();  // デフォルトのジャンプを止める
    var href = $(this).attr('href');
    var target = href ==='#' ? $('html') : $(href);
    var position = target.offset().top;

    $('html,body').animate({scrollTop: position},500,'swing');
  });

  // スクロールフェードインさせる
  $(window).on('scroll',function(){
    $('section').each(function(){
      var elemPos = $(this).offset().top;  // 要素の位置
      var scroll = $(window).scrollTop();  // スクロール量
      var windowHeight =  $(window).height();

      if (scroll + windowHeight > elemPos + 100){
        $(this).addClass('show');
      }
    });
  });
  
});
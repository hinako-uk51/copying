$(function(){

  // カルーセル
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
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

  // リンクホバー(img)
  $('.works-list img').on('mouseover',function(){
    $(this).animate({
      opacity: 0.5,
     },300);
   });
  $('.works-list img').on('mouseout',function(){
    $(this).animate({
      opacity: 1.0,
     },300);
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
    const href = $(this).attr('href');
    const target = href ==='#' ? $('html') : $(href);
    const position = target.offset().top;

    $('html,body').animate({scrollTop: position},500,'swing');
  });

  // スクロールフェードインさせる
  $(window).on('scroll',function(){
    $('section').each(function(){
      const elemPos = $(this).offset().top;  // 要素の位置
      const scroll = $(window).scrollTop();  // スクロール量
      const windowHeight =  $(window).height();

      if (scroll + windowHeight > elemPos + 100){
        $(this).addClass('show');
      }
    });
  });

  // モーダル
  $('.works-list img').click(function(){
    const imgSrc = $(this).attr('src');
    $('.modal-img').attr('src',imgSrc);
    $('.modal').fadeIn();
  });

  $('.close-btn').click(function(){
    $('.modal').fadeOut();
  });
  
});
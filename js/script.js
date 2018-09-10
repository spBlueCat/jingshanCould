//slider-header
$(function () {
  $(".slider-header").hover(
    function () {
      $(".slider-header").addClass("header-bg");
    },
    function () {
      $(".slider-header").removeClass("header-bg");
      $(".ks-nav-tips").removeClass("animate-c").hide();
      $(".header-con").css({height:0});
      $(".mark").hide();
    })


  let isON;
  let timer;
  $(".nav .left-list .item").mouseenter(
    function () {
      let that = $(this);
      let tips = $(".ks-nav-tips").filter(function () {
        if($(this).attr("data-father-id") === that.attr("data-id")) return true;
      });
      let tipsHeight;
      switch (tips.attr("data-father-id")){
        case "6":
          tipsHeight = "465px";
          break;
        case "7":
          tipsHeight = "215px";
          break;
        case "9":
          tipsHeight = "87px";
          break;
        default:
          tipsHeight = "0";
      }
      $(".ks-nav-tips").removeClass("animate-c").hide();
      tips.addClass("animate-c").show();
      $(".header-con").css({height:tipsHeight});
      $(".mark").css({width:that.outerWidth(),left:that.position().left}).show();
      $(".header-con").hover(function () {
        isON = true;
      },function () {
        isON = false;
      })
    })


  $(".nav .left-list .item").mouseleave(function () {
    timer = setTimeout(()=>{
      if(!isON){
        $(".ks-nav-tips").removeClass("animate-c").hide();
        $(".header-con").css({height:0});
        $(".mark").hide();
      }
    },1)
  })
})



//slider
$(function () {
  let index = 0;
  let timer;
  let item = $(".slider-list .s-item");
  let circle = $(".s-btn-list .item");
  circle.click(function () {
    let that = $(this);
    $(".right-image").removeClass("right-image");
    item.eq(that.index()).css({zIndex:1}).addClass("show").animate({opacity:1},300).siblings().css({zIndex:0,opacity:0}).removeClass("show").end()
      .find(".text-sec").addClass("right-image").end().find(".s-bg-second").addClass("right-image").end().find(".s-bg-three").addClass("right-image");
    that.addClass("cur").siblings().removeClass("cur");
  });
  function auto(){
      clearInterval(timer);
      timer = setInterval(()=>{
            index++;
            if(index>=item.length){
                index = 0
            }
          $(".right-image").removeClass("right-image");
          item.eq(index).css({zIndex:1}).addClass("show").animate({opacity:1},300).siblings().css({zIndex:0,opacity:0}).removeClass("show").end()
              .find(".text-sec").addClass("right-image").end().find(".s-bg-second").addClass("right-image").end().find(".s-bg-three").addClass("right-image");
          circle.eq(index).addClass("cur").siblings().removeClass("cur");
      },3000);
  }
    $(function () {
        auto();
    }());
})



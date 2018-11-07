$(function(){
  //微信二维码弹出
  $(".wx").mouseover(function(){
    console.log(1)
    $(".wx_ewm").show();
  })
  $(".wx").mouseout(function(){
    $(".wx_ewm").hide();
  })
//底部电话号码弹出
tel()
function tel(){
  $(".address>a:nth-child(1)").focus(function(){
    $(".left").show();
  })
  $(".address>a:nth-child(1)").blur(function(){
    $(".left").hide();
  })
  $(".address>a:nth-child(2)").focus(function(){
    $(".right").show();
  })
  $(".address>a:nth-child(2)").blur(function(){
    $(".right").hide();
  })
}
//轮播图函数
  swiper()
  function swiper(){
    //首页轮播图
    var myBanner = new Swiper ('.banner_swiper', {
     direction: "horizontal",
    autoplay: {
      delay: 1000,
      stopOnLastSlide: false,
      disableOnInteraction: false,
    },
     // 如果需要前进后退按钮
     navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },
     on: {
       slideChangeTransitionStart: function(){
         console.log(this.activeIndex)
         $(".banner_pagination>div").eq(this.activeIndex).addClass("on").siblings().removeClass("on");
      },
    },
   })
   $(".banner_pagination>div").click(function(){
     myBanner.slideTo($(this).index());
   })

//服务领域
   var serviceAreawiper = new Swiper ('.service_area_swiper', {
    direction: "horizontal",
      // spaceBetween : 20,
    breakpoints: {
      1920: {
        slidesPerView: 4,
      },
      1199: {
        slidesPerView: 3,
        },
      992: {
        slidesPerView: 2,
      },
        768: {
       slidesPerView: 1,
     },
   }
  })
//网站建设与案例
  var siteAndCaseSwiper = new Swiper ('.site_and_case_swiper', {
  direction: 'horizontal',
  on: {
    slideChangeTransitionStart: function(){
      $(".site_and_case_nav>div").eq(this.activeIndex).addClass("on").siblings().removeClass("on");
   },
 },
  })
  $(".site_and_case_nav>div").click(function(){
    siteAndCaseSwiper.slideTo($(this).index());
  })

  //服务优势
    var advantageSwiper = new Swiper ('.advantage_swiper', {
    direction: 'horizontal',
    spaceBetween : 25,
    breakpoints: {
      1920: {
        slidesPerView: 5,
      },
      1199: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 2,
      },
        768: {
       slidesPerView: 1,
     },
   }
    })

    //service_Marketing
    var serviceSwiper = new Swiper ('.service_slide', {
    direction: 'horizontal',
    autoHeight: true,
    pagination: {
     el: '.swiper-pagination',
     type: 'progressbar',

   },
    autoHeight: true,
    on:{
      slideChangeTransitionStart: function(){
        $(".service_tab>a").eq(this.activeIndex).addClass("on").siblings().removeClass("on");
    }
      }
    })
    $(".service_tab>a").click(function(){
      serviceSwiper.slideTo($(this).index());
    })

    //选择快易通
    var selectSwiper = new Swiper ('.select_swiper', {
    direction: 'horizontal',
    spaceBetween : 25,
    breakpoints: {
      1920: {
        slidesPerView: 5,
      },
      1199: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 2,
      },
        768: {
       slidesPerView: 1,
     },
   }
    })

    //易站通案例
    var serviceCaseSwiper = new Swiper ('.service_case_swiper', {
    direction: 'horizontal',
    spaceBetween : 14,
    breakpoints: {
      1920: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 2,
      },
        768: {
       slidesPerView: 1,
     },
   }
    })
    //网站建设
    var serviceSiteWebsiteSwiper = new Swiper ('.service_site_website_swiper', {
    direction: 'horizontal',
    spaceBetween : 25,
    breakpoints: {
      1920: {
        slidesPerView: 4,
      },
      1199: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 2,
      },
        768: {
       slidesPerView: 1,
     },
   }
    })

    //最新案例
    var serviceSiteCaseSwiper = new Swiper ('.service_site_case_swiper', {
    direction: 'horizontal',
    spaceBetween : 15,
    breakpoints: {
      1920: {
        slidesPerView: 4,
      },
      1199: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 2,
      },
        768: {
       slidesPerView: 1,
     },
   }
    })

    //
    // /*新闻首页图片轮播效果*/

    var rowHot = new Swiper ('.row_hot', {
    direction: 'horizontal',
    //增加小圆点
    pagination: {
      el: '.swiper-pagination',
      clickable :true,
    },
    autoplay: true,
    })

    //小程序
      var serviceAdvantageSwiper = new Swiper ('.service_advantage_swiper', {
      direction: 'horizontal',
      spaceBetween : 25,
      breakpoints: {
        1920: {
          slidesPerView: 4,
        },
        1199: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 2,
        },
          768: {
         slidesPerView: 1,
       },
     }
      })



          //网络优化 选择理由
            var reason = new Swiper ('.reason', {
            direction: 'horizontal',
            spaceBetween : 25,
            breakpoints: {
              1920: {
                slidesPerView: 5,
              },
              1199: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 2,
              },
                768: {
               slidesPerView: 1,
             },
           }
            })

 }


 /*
 * @Author: name
 * @Date:   2018-09-03 15:36:50
 * @Last Modified by:   name
 * @Last Modified time: 2018-09-07 16:05:13
 */

 var swiperRight =  new Swiper(".small",{
     navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },
     slidesPerView: "auto",

     outline: "none",
     on:{
       click:function(){
         swiperLeft.slideTo(this.clickedIndex);
       }
     }

 })
 var swiperLeft =  new Swiper(".big",{
     slidesPerView: 'auto',
 })
  // swiperRight.controller.control = swiperLeft;
  //    swiperLeft.controller.control = swiperRight;
 // 机器人页面导航，点谁，谁就变红
 // $(".title .nav_bar").click(function(){
 //     $(this).addClass('on').siblings().removeClass("on");
 //     // alert("sss")
 // });
 var problemSwiper = new Swiper(".problem_lists",{
     slidesPerView:4,
     spaceBetween: 0,
     breakpoints: {
     //当宽度小于等于320
     768: {
       slidesPerView: 1,
       spaceBetween: 0
     },
    //当宽度小于等于480
     992: {
       slidesPerView: 2,
       spaceBetween: 10
     },
     //当宽度小于等于640
     1920: {
       slidesPerView: 4,
       spaceBetween: 10
     }
   },
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
 })


})

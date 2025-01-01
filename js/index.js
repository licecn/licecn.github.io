/**
 * NFNF: neither fish nor fowl
 * hexo-theme-nfnf v1.0.0
 * site:lice.cc
 * auth:李策;
 * data：2020年2月6日 17点22分
 * update：
 */
window.onload = function () {
  var $navbutton = document.getElementById("navbutton"),
    $navbar = document.getElementById("navbar");


  // 手机菜单导航
  $navbutton.onclick = function () {
    var navOpen = $navbar.getAttribute("class");
    if (navOpen.indexOf("in") != '-1') {
      $navbar.setAttribute("class", "navbar-collapse collapse");
    } else {
      $navbar.setAttribute("class", "navbar-collapse collapse in");
    }
  }
}
// 目录 变色
$(document).ready(function () {
  //首先将#btn隐藏
  $(".go-top").hide();
  //当滚动条的位置处于距顶部50像素以下时，跳转链接出现，否则消失
  $(function () {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 50) {
        $(".go-top").fadeIn(200);
      } else {
        $(".go-top").fadeOut(200);
      }
    });
    //当点击跳转链接后，回到页面顶部位置
    $(".go-top").click(function () {
      $('body,html').animate({
        scrollTop: 0
      },
        500);
      return false;
    });
  });
  $(window).scroll(function () {
    var items = $("#post-body").find(".headerlink");
    var menu = $("#site-post-toc");
    var top = $(document).scrollTop();
    var currentId = ""; //滚动条现在所在位置的item id
    items.each(function () {
      var m = $(this);
      //注意：m.offset().top代表每一个item的顶部位置
      if (top > m.offset().top - 200) {
        currentId = encodeURI(m.attr("href"));
      } else {
        return false;
      }
    });

    var currentLink = menu.find(".current");
    if (currentId && currentLink.attr("href") != currentId) {
      currentLink.removeClass("current");
      menu.find("[href='" + currentId + "']").addClass("current");
    }
    // for (let heading of items) {
    //   const headin = $(heading);
    //   if (headin.offset().top - top > 200) {
    //     break;
    //   }
    //   currentId = headin.attr("href");
    // }
    // var toclink = menu.find("a[href='" + currentId + "']");
    // if (!toclink.hasClass('current')) {
    //   $('.current').removeClass('current');
    //   toclink.addClass('current');
    // }
  });
});

// 滚动 定位

$(function () {
  var wdd = $(".site-overview").width();
  $(window).scroll(function () {
    //获取垂直滚动的距离
    var scrollTop = $(document).scrollTop();
    // console.log(scrollTop);
    if (scrollTop >= 305.6) {
      $("#site-post-toc").css({ "top": "40px", "position": "fixed", "width": wdd });
    } else {
      $("#site-post-toc").css({ "top": "inherit", "position": "relative", "width": "" });
    }
  });
});
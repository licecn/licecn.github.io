/**
 * NFNF: neither fish nor fowl
 * hexo-theme-nfnf v1.0.0
 * site:lice.cc
 * auth:李策;
 * data：2020年2月6日 17点22分
 * update：
 */
 window.onload=function(){
 	var $navbutton=document.getElementById("navbutton"),
 		$navbar=document.getElementById("navbar");


	// 手机菜单导航
	$navbutton.onclick=function(){
		var navOpen=$navbar.getAttribute("class");
		if(navOpen.indexOf("in")!='-1'){
			$navbar.setAttribute("class","navbar-collapse collapse");
		}else{
			$navbar.setAttribute("class","navbar-collapse collapse in");
		}
	}
}
// 目录 变色
$(document).ready(function () {
            $(window).scroll(function () {
                var items = $("#post-body").find("h3");
                var menu = $("#site-post-toc");
                var top = $(document).scrollTop();
                var currentId = ""; //滚动条现在所在位置的item id
                items.each(function () {
                    var m = $(this);
                    //注意：m.offset().top代表每一个item的顶部位置
                    if (top > m.offset().top - 200) {
                        currentId = "#" + m.attr("id");
                    } else {
                        return false;
                    }
                });

                var currentLink = menu.find(".current");
                if (currentId && currentLink.attr("href") != currentId) {
                    currentLink.removeClass("current");
                    menu.find( "[href='"+currentId+"']" ).addClass("current");
                }
            });
        });
// 滚动 定位

$(function() {
	var wdd=$(".site-overview").width();
  $(window).scroll(function() {
  //获取垂直滚动的距离
    var scrollTop = $(document).scrollTop();
    // console.log(scrollTop);
    if (scrollTop >= 305.6) {
      $("#site-post-toc").css({"top":"40px","position":"fixed","width":wdd});
    }else {
    $("#site-post-toc").css({"top":"inherit","position":"relative","width":""});
      } 
    });
  });
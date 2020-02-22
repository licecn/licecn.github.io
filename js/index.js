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

"use strict";$(function(){$("#shopCartFull .icon").css("background","none"),$(".icon1").on("click",function(){if($(this).hasClass("quanicon")){$(".quanicon").css({background:"url(http://10.31.164.47/my360/src/img/gou.png) no-repeat","background-size":"contain"}),$(".iconno").css({background:"url(http://10.31.164.47/my360/src/img/gou.png) no-repeat","background-size":"contain"}),$(this).toggleClass("quanicon"),$(".iconno").removeClass("quanicon"),$(".icon2").addClass("quxg"),$(".icon2").removeClass("ylj");var n=$(this).parent().parent().siblings(".cll").children(),o=new Array;$.each(n,function(n,c){var i=parseInt($(c).children(".cl5").children(".jiaqilai").html());o.push(i)});var i=0;$.each(o,function(n,c){i+=o[n]}),i=parseInt(i),$(".yuanpr").text(function(n,c){return c=i,c=parseInt(c)}),$(".bst").text(function(n,c){return c=i,c=parseInt(c)})}else $(".icon1").css("background","none"),$(".iconno").css("background","none"),$(this).toggleClass("quanicon"),$(".iconno").removeClass("quanicon"),$(".icon2").removeClass("quxg"),$(".icon2").addClass("ylj"),$(".yuanpr").text(0),$(".bst").text(0)}),$(".icony").on("click",function(){if($(this).children(".iconno").hasClass("quxg")){$(".icon1").addClass("quanicon"),$(this).children(".iconno").css("background","none"),$(this).children(".iconno").removeClass("quxg"),$(".icon1").css("background","none"),$(this).children(".iconno").addClass("ylj");var i=$(this).parent().children(".cl5").children(".jiaqilai").html();i=parseInt(i),$(".yuanpr").text(function(n,c){return c-=i,c=parseInt(c)}),$(".bst").text(function(n,c){return c-=i,c=parseInt(c)})}else{$(this).children(".iconno").css({background:"url(http://10.31.164.47/my360/src/img/gou.png) no-repeat","background-size":"contain"}),$(this).children(".iconno").addClass("quxg"),$(this).children(".iconno").removeClass("ylj");var o=$(this).parent().children(".cl5").children(".jiaqilai").html();o=parseInt(o),$(".yuanpr").text(function(n,c){return c=c-1+1+o,c=parseInt(c)}),$(".bst").text(function(n,c){return c=c-1+1+o,c=parseInt(c)})}var n=$(this).parent().parent().children().children(".cl1").children(".icon3");$.each(n,function(n,c){console.log(c[1])})})});
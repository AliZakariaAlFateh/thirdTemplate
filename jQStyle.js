/* globla $,jQuery,alert,console*/
$(document).ready(function(){
    "use strict";
    // .SpanLetters

    var myphoto=$("#myimg"),
     submt=$("#submit"),
     alphpa=$("alpha"),
     number=$("numbers"),
     word=$("word"),
     audio=$("audio"),
     error=$("error");
     var Header=$(".HeaderAnimation"),Control=$(".ControlAnimation")
    //  var offsetWindow=window.offsetWindow.top
    var offsetWindow=$(window).height()
    console.log(offsetWindow)
    var OfsetTopForElement=$(".BtnDiv").pageX
    // console.log(OfsetTopForElement)
/*     $(window).on("mousemove",function(e){
        console.log(e.pageX)
    }) */
/*      $(window).on("load",function(){
        $(".HeaderAnimation").slideDown(2000)
        $(".ControlAnimation").slideDown(2000)
     })

     $(".BtnDiv").on("click",".btn ",function(){
        // console.log("Submit Button")
        // $(".DivAudio").slideDown(2000)
        $(".Audio").slideDown(3000)
     })
    $(".SpanLetters").on("click", function () {
        // $(this).addClass("active").siblings().removeClass("active")
        // $("span").focus().css('background-color','#f00')
        var spanlength=$("span").length;
        // $("span").eq(0).css('background-color','#f00')
        // console.log(spanlength)
        // console.log($(this).text()) 
        // var jej=$(this).text();
        // console.log("jej")
    }) */

    // $('.PopOver').popover('update')
    $("body").on("mouseover",".PopOver",function(){
        $(this).popover('update')
    })
    
})
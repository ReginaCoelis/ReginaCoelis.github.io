$(function(){

    "use strict";
    let timerId=null;

    $('#start').click(showCircle);

    function showCircle(){

        let width=$('#width').val();

        let num=$('#number').val();

        $('.circle').show().css({"height":width,"width":width,"top":"200px","left":"50%"});

        let count=parseInt($('#number').val());

        for(let i=0;i<count;i++){
            var $newCircle = $('<div />').appendTo('body');
            $newCircle.addClass("circle");
            let col="rgb("+Math.floor(Math.random() * 255)+","+Math.floor(Math.random() * 255)+","+Math.floor(Math.random() * 255) +")";
            $newCircle.css("background-color",col);
            $newCircle.click(hide);
            $newCircle.mouseenter(changeOpacity);
            $newCircle.mouseleave(resetOpacity);
        }

        timerId=setInterval(grow,$('#rate').val());
    }
    function grow(evt){
        let growAmt=parseInt($('#growAmt').val());
        let circle=$('.circle');
        let newDiameter=parseInt(circle.height())+growAmt+"px";
        let newLeft=parseInt(circle.css("left"))-growAmt/2+"px";
        let newTop=parseInt(circle.css("top"))-growAmt/2+"px";


        $(circle).css("width",newDiameter);
        $(circle).css("height",newDiameter);
  

    }

  
    $('.circle').click(hide);


    function hide(evt){
    
        $(this).css("visibility","hidden");
    }

    let timerForOpacity;
    function changeOpacity(evt) {

        timerForOpacity=setInterval((evt)=>{
            let currentOpacity=parseFloat($(this).css("opacity"));

      
        let next=currentOpacity-0.1;
             $(this).css("opacity",next);


    }
    ,200);

    }

    function resetOpacity(evt){
        let t1=timerForOpacity;

        clearInterval(t1);
        $(this).css("opacity","1");

    }

});
var countDownDate = new Date("july 25, 2023 15:37:25").getTime();

var x = setInterval(function() {
    
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
   /*  document.getElementById("demo").innerHTML = '<span id="day" >'+ days + '</span>' + '<span id="hours" >'+ hours + '</span>' 
    + '<span id="minutes" >'+ minutes + '</span>' + '<span id="seconds" >'+ seconds + '</span>'; */
    
   var z = document.getElementsByClassName("demos");
    for(var i =0; i < z.length; i++){
        z[i].innerHTML =
        '<span id="day" >' +
        days +
        '</span>' +
        '<span id="hours" >' +
        hours + 
        '</span>' + 
        '<span id="minutes" >'+ 
        minutes + 
        '</span>' + 
        '<span id="seconds" >'+ 
        seconds + 
        '</span>';
    }


    if (distance < 0){
        clearInterval(x);
       // document.getElementById("demo").innerHTML= "";
        var y = document.getElementsByClassName("demos");
        for(var i = 0;i < z.length; i++){
            y[i].innerHTML="";
        }
        //document.getElementById("before-expire").setAttribute("id","offer-expired-text");
        var g = document.getElementsByClassName("before-expired");
        for(var i = 0;i < z.length; i++){
            g[i].classList.add("offer-expired-text");
        }

        //document.getElementById("offer-expired-text-inner").innerHTML= "پیشنهاد ویژه این محصول به پایان رسیده";
        var d =document.getElementsByClassName("offer-expired-text-inner");
        for(var i = 0; i < z.length; i++){
            d[i].innerHTML="پیشنهاد ویژه این محصول به پایان رسیده!";
        }
        //document.getElementById("offer-blur").style.filter = "blur(2px)";
        var t = document.getElementsByClassName("offer-blur");
        for (var i = 0; i < z.length; i++){
            t[i].style.filter= "blur(2px)";
        }
    }

}, 1000);

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        center:true,
        rtl:true,
        /* items:4, */
        loop:true,
        margin:0,
        nav:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
        1000:{
            items:3,
            nav:true,
            center:false
        },
        1200:{
            items:4,
            nav:true
        }
    }
    })
    owl.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY>0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
        }
        e.preventDefault();
    });
  });

$('#NFC').popover('enable')

  
$('#NFC').popover({
    trigger: 'focus'
})


/* zoomy */
var urls = [
    'assests/img/s21fe-1.jpg',
    'assests/img/s21fe-2.jpg',
    'assests/img/s21fe-3.jpg',
    'assests/img/s21fe-4.jpg'
];
var options = {
/*         thumbLeft:true,
    thumbRight:true,
    thumbHide:true, */
    width:300,
    height:500,
};
$('#el').zoomy(urls,options);
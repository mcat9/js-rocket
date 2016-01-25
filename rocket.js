var timer = null;
var countdownNumber = 10;

var changeState = function  (state) {
document.body.className = 'body-state'+ state;
  clearInterval(timer);
  countdownNumber = 10;
  document.getElementById('countdown').
  innerHTML = countdownNumber;
  // countdown
if (state == 2) {
  timer = setInterval (function () {
    countdownNumber = countdownNumber -1;
    document.getElementById('countdown').innerHTML = countdownNumber;
    
    if (countdownNumber <=0) {
      changeState(3);
    };
  }, 500);
} else if ( state == 3){
  var success = setTimeout(function ()
{
  var randomNumber = Math.random(Math.random()*10);
  if (randomNumber > 5) {
    // success!
    changeState(4);
  } else {
    //oh noes!
    changeState(5);
  }
}, 2000);
}
  document.getElementById('countdown').innerHTML = 9;
}

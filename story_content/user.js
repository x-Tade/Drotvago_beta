window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

// Próbáld meg a 'event' helyett 'window.event'-et használni
var buttonValue = window.event?.target?.getAttribute("data-acc-text") || 
                  window.event?.currentTarget?.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}

}

window.Script2 = function()
{
  
var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text") || touchend.target.getAttribute("data-acc-text") || touchend.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script3 = function()
{
  var element = document.documentElement;
if (element.requestFullscreen) {
    element.requestFullscreen();
} else if (element.mozRequestFullScreen) { // Firefox
    element.mozRequestFullScreen();
} else if (element.webkitRequestFullscreen) { // Chrome, Safari
    element.webkitRequestFullscreen();
} else if (element.msRequestFullscreen) { // Internet Explorer / Edge
    element.msRequestFullscreen();
}

}

window.Script4 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script5 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script6 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script7 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script8 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script9 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script10 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script11 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script12 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script13 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script14 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;

    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // Firefox
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // IE / Edge
        element.msRequestFullscreen();
    } else if (element.webkitEnterFullscreen) { // iPhone Safari (csak videóknál működik)
        var video = document.querySelector("video");
        if (video) {
            video.webkitEnterFullscreen();
        } else {
            alert("Ez a böngésző nem támogatja a teljes képernyős módot.");
        }
    }
}

}

window.Script15 = function()
{
  function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE / Edge
        document.msExitFullscreen();
    }
}

}

window.Script16 = function()
{
  var player = GetPlayer();
var text = player.GetVar("belepes");
player.SetVar("belepes", text.slice(0, -1));
}

window.Script17 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("belepes"); 
player.SetVar("belepes", currentText + "1");
}

window.Script18 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("belepes"); 
player.SetVar("belepes", currentText + "2");
}

window.Script19 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("belepes"); 
player.SetVar("belepes", currentText + "3");
}

window.Script20 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("belepes"); 
player.SetVar("belepes", currentText + "4");
}

window.Script21 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("belepes"); 
player.SetVar("belepes", currentText + "5");
}

window.Script22 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("belepes"); 
player.SetVar("belepes", currentText + "6");
}

window.Script23 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("belepes"); 
player.SetVar("belepes", currentText + "7");
}

window.Script24 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("belepes"); 
player.SetVar("belepes", currentText + "8");
}

window.Script25 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("belepes"); 
player.SetVar("belepes", currentText + "9");
}

window.Script26 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("belepes"); 
player.SetVar("belepes", currentText + "0");
}

window.Script27 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;

    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // Firefox
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // IE / Edge
        element.msRequestFullscreen();
    } else if (element.webkitEnterFullscreen) { // iPhone Safari (csak videóknál működik)
        var video = document.querySelector("video");
        if (video) {
            video.webkitEnterFullscreen();
        } else {
            alert("Ez a böngésző nem támogatja a teljes képernyős módot.");
        }
    }
}

}

window.Script28 = function()
{
  function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE / Edge
        document.msExitFullscreen();
    }
}

}

window.Script29 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script30 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script31 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script32 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script33 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script34 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script35 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script36 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script37 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script38 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script39 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;

    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // Firefox
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // IE / Edge
        element.msRequestFullscreen();
    } else if (element.webkitEnterFullscreen) { // iPhone Safari (csak videóknál működik)
        var video = document.querySelector("video");
        if (video) {
            video.webkitEnterFullscreen();
        } else {
            alert("Ez a böngésző nem támogatja a teljes képernyős módot.");
        }
    }
}

}

window.Script40 = function()
{
  function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE / Edge
        document.msExitFullscreen();
    }
}

}

window.Script41 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script42 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script43 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script44 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script45 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script46 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script47 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script48 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script49 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script50 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script51 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;

    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // Firefox
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // IE / Edge
        element.msRequestFullscreen();
    } else if (element.webkitEnterFullscreen) { // iPhone Safari (csak videóknál működik)
        var video = document.querySelector("video");
        if (video) {
            video.webkitEnterFullscreen();
        } else {
            alert("Ez a böngésző nem támogatja a teljes képernyős módot.");
        }
    }
}

}

window.Script52 = function()
{
  function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE / Edge
        document.msExitFullscreen();
    }
}

}

window.Script53 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script54 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script55 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script56 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script57 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script58 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script59 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script60 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script61 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script62 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script63 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;

    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // Firefox
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // IE / Edge
        element.msRequestFullscreen();
    } else if (element.webkitEnterFullscreen) { // iPhone Safari (csak videóknál működik)
        var video = document.querySelector("video");
        if (video) {
            video.webkitEnterFullscreen();
        } else {
            alert("Ez a böngésző nem támogatja a teljes képernyős módot.");
        }
    }
}

}

window.Script64 = function()
{
  function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE / Edge
        document.msExitFullscreen();
    }
}

}

window.Script65 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "1");
}

window.Script66 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "2");
}

window.Script67 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "3");
}

window.Script68 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "4");
}

window.Script69 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "5");
}

window.Script70 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "6");
}

window.Script71 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "7");
}

window.Script72 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "8");
}

window.Script73 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "9");
}

window.Script74 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "0");
}

window.Script75 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script76 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script77 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script78 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script79 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script80 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script81 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script82 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script83 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script84 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script85 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script86 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script87 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script88 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script89 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script90 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script91 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script92 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script93 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script94 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script95 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script96 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script97 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script98 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script99 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script100 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script101 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script102 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + " ");

}

window.Script103 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script104 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script105 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script106 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script107 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script108 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script109 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script110 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script111 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "1");
}

window.Script112 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "2");
}

window.Script113 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "3");
}

window.Script114 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "4");
}

window.Script115 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "5");
}

window.Script116 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "6");
}

window.Script117 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "7");
}

window.Script118 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "8");
}

window.Script119 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "9");
}

window.Script120 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "0");
}

window.Script121 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script122 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script123 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script124 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script125 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script126 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script127 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script128 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script129 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script130 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script131 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script132 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script133 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script134 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script135 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script136 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script137 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script138 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script139 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script140 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script141 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script142 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script143 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script144 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script145 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script146 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script147 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script148 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script149 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script150 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script151 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script152 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script153 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script154 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script155 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script156 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script157 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script158 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script159 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script160 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script161 = function()
{
  var player = GetPlayer();
var text = player.GetVar("hazszam");
player.SetVar("hazszam", text.slice(0, -1));
}

window.Script162 = function()
{
  var player = GetPlayer();
var text = player.GetVar("letesitmeny");
player.SetVar("letesitmeny", text.slice(0, -1));
}

window.Script163 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script164 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script165 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script166 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script167 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script168 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script169 = function()
{
  var player = GetPlayer();
var text = player.GetVar("vezeteknev");
player.SetVar("vezeteknev", text.slice(0, -1));
}

window.Script170 = function()
{
  var player = GetPlayer();
var text = player.GetVar("keresztnev");
player.SetVar("keresztnev", text.slice(0, -1));
}

window.Script171 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script172 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script173 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script174 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script175 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script176 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script177 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script178 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script179 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script180 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script181 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script182 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script183 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script184 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script185 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script186 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script187 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script188 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script189 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script190 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script191 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script192 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script193 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script194 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script195 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script196 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script197 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script198 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script199 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script200 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script201 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script202 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script203 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script204 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script205 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script206 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script207 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script208 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script209 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script210 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script211 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script212 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script213 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script214 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script215 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script216 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script217 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script218 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script219 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script220 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script221 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script222 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script223 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script224 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script225 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script226 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script227 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script228 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script229 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script230 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script231 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script232 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script233 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script234 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script235 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script236 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script237 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script238 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script239 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script240 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script241 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script242 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script243 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script244 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script245 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;

    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // Firefox
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // IE / Edge
        element.msRequestFullscreen();
    } else if (element.webkitEnterFullscreen) { // iPhone Safari (csak videóknál működik)
        var video = document.querySelector("video");
        if (video) {
            video.webkitEnterFullscreen();
        } else {
            alert("Ez a böngésző nem támogatja a teljes képernyős módot.");
        }
    }
}

}

window.Script246 = function()
{
  function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE / Edge
        document.msExitFullscreen();
    }
}

}

window.Script247 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script248 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script249 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script250 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script251 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script252 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script253 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script254 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script255 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script256 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script257 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;

    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // Firefox
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // IE / Edge
        element.msRequestFullscreen();
    } else if (element.webkitEnterFullscreen) { // iPhone Safari (csak videóknál működik)
        var video = document.querySelector("video");
        if (video) {
            video.webkitEnterFullscreen();
        } else {
            alert("Ez a böngésző nem támogatja a teljes képernyős módot.");
        }
    }
}

}

window.Script258 = function()
{
  function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE / Edge
        document.msExitFullscreen();
    }
}

}

window.Script259 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script260 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script261 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script262 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script263 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script264 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script265 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script266 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script267 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script268 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script269 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;

    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // Firefox
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // IE / Edge
        element.msRequestFullscreen();
    } else if (element.webkitEnterFullscreen) { // iPhone Safari (csak videóknál működik)
        var video = document.querySelector("video");
        if (video) {
            video.webkitEnterFullscreen();
        } else {
            alert("Ez a böngésző nem támogatja a teljes képernyős módot.");
        }
    }
}

}

window.Script270 = function()
{
  function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE / Edge
        document.msExitFullscreen();
    }
}

}

window.Script271 = function()
{
  var player = GetPlayer();
var text = player.GetVar("szinvalto");
player.SetVar("szinvalto", text.slice(0, -1));
}

window.Script272 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szinvalto"); 
player.SetVar("szinvalto", currentText + "🟡");
}

window.Script273 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szinvalto"); 
player.SetVar("szinvalto", currentText + "🔴");
}

window.Script274 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szinvalto"); 
player.SetVar("szinvalto", currentText + "⚪");
}

window.Script275 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script276 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script277 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script278 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script279 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script280 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script281 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script282 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script283 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script284 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script285 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;

    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // Firefox
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // IE / Edge
        element.msRequestFullscreen();
    } else if (element.webkitEnterFullscreen) { // iPhone Safari (csak videóknál működik)
        var video = document.querySelector("video");
        if (video) {
            video.webkitEnterFullscreen();
        } else {
            alert("Ez a böngésző nem támogatja a teljes képernyős módot.");
        }
    }
}

}

window.Script286 = function()
{
  function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE / Edge
        document.msExitFullscreen();
    }
}

}

window.Script287 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("runa1");

var runak = ["ᛗ", "ᛖ", "ᛈ", "ᚻ", "ᚩ", "ᛞ", "ᚳ", "ᛋ", "ᛇ", "ᚹ", "ᛠ", "ᚾ", "ᚼ", "ᚱ", "ᚲ", "ᛄ"];
var index = runak.indexOf(betu);
index = (index + 1) % runak.length;

player.SetVar("runa1", runak[index]);

}

window.Script288 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("runa1");

var runak = ["ᛗ", "ᛖ", "ᛈ", "ᚻ", "ᚩ", "ᛞ", "ᚳ", "ᛋ", "ᛇ", "ᚹ", "ᛠ", "ᚾ", "ᚼ", "ᚱ", "ᚲ", "ᛄ"];
var index = runak.indexOf(betu);
index = (index - 1 + runak.length) % runak.length;

player.SetVar("runa1", runak[index]);

}

window.Script289 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("runa2");

var runak = ["ᛗ", "ᛖ", "ᛈ", "ᚻ", "ᚩ", "ᛞ", "ᚳ", "ᛋ", "ᛇ", "ᚹ", "ᛠ", "ᚾ", "ᚼ", "ᚱ", "ᚲ", "ᛄ"];
var index = runak.indexOf(betu);
index = (index + 1) % runak.length;

player.SetVar("runa2", runak[index]);

}

window.Script290 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("runa3");

var runak = ["ᛗ", "ᛖ", "ᛈ", "ᚻ", "ᚩ", "ᛞ", "ᚳ", "ᛋ", "ᛇ", "ᚹ", "ᛠ", "ᚾ", "ᚼ", "ᚱ", "ᚲ", "ᛄ"];
var index = runak.indexOf(betu);
index = (index + 1) % runak.length;

player.SetVar("runa3", runak[index]);

}

window.Script291 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("runa4");

var runak = ["ᛗ", "ᛖ", "ᛈ", "ᚻ", "ᚩ", "ᛞ", "ᚳ", "ᛋ", "ᛇ", "ᚹ", "ᛠ", "ᚾ", "ᚼ", "ᚱ", "ᚲ", "ᛄ"];
var index = runak.indexOf(betu);
index = (index + 1) % runak.length;

player.SetVar("runa4", runak[index]);

}

window.Script292 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("runa2");

var runak = ["ᛗ", "ᛖ", "ᛈ", "ᚻ", "ᚩ", "ᛞ", "ᚳ", "ᛋ", "ᛇ", "ᚹ", "ᛠ", "ᚾ", "ᚼ", "ᚱ", "ᚲ", "ᛄ"];
var index = runak.indexOf(betu);
index = (index - 1 + runak.length) % runak.length;

player.SetVar("runa2", runak[index]);

}

window.Script293 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("runa3");

var runak = ["ᛗ", "ᛖ", "ᛈ", "ᚻ", "ᚩ", "ᛞ", "ᚳ", "ᛋ", "ᛇ", "ᚹ", "ᛠ", "ᚾ", "ᚼ", "ᚱ", "ᚲ", "ᛄ"];
var index = runak.indexOf(betu);
index = (index - 1 + runak.length) % runak.length;

player.SetVar("runa3", runak[index]);

}

window.Script294 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("runa4");

var runak = ["ᛗ", "ᛖ", "ᛈ", "ᚻ", "ᚩ", "ᛞ", "ᚳ", "ᛋ", "ᛇ", "ᚹ", "ᛠ", "ᚾ", "ᚼ", "ᚱ", "ᚲ", "ᛄ"];
var index = runak.indexOf(betu);
index = (index - 1 + runak.length) % runak.length;

player.SetVar("runa4", runak[index]);

}

window.Script295 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("betu1");

var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
var index = abc.indexOf(betu);
index = (index + 1) % abc.length;

player.SetVar("betu1", abc[index]);
}

window.Script296 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("betu1");

var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
var index = abc.indexOf(betu);
index = (index - 1 + abc.length) % abc.length;

player.SetVar("betu1", abc[index]);

}

window.Script297 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("betu2");

var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
var index = abc.indexOf(betu);
index = (index + 1) % abc.length;

player.SetVar("betu2", abc[index]);
}

window.Script298 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("betu3");

var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
var index = abc.indexOf(betu);
index = (index + 1) % abc.length;

player.SetVar("betu3", abc[index]);
}

window.Script299 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("betu4");

var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
var index = abc.indexOf(betu);
index = (index + 1) % abc.length;

player.SetVar("betu4", abc[index]);
}

window.Script300 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("betu2");

var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
var index = abc.indexOf(betu);
index = (index - 1 + abc.length) % abc.length;

player.SetVar("betu2", abc[index]);

}

window.Script301 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("betu3");

var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
var index = abc.indexOf(betu);
index = (index - 1 + abc.length) % abc.length;

player.SetVar("betu3", abc[index]);

}

window.Script302 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("betu4");

var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
var index = abc.indexOf(betu);
index = (index - 1 + abc.length) % abc.length;

player.SetVar("betu4", abc[index]);

}

window.Script303 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script304 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script305 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script306 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script307 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script308 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script309 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script310 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script311 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script312 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script313 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;

    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // Firefox
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // IE / Edge
        element.msRequestFullscreen();
    } else if (element.webkitEnterFullscreen) { // iPhone Safari (csak videóknál működik)
        var video = document.querySelector("video");
        if (video) {
            video.webkitEnterFullscreen();
        } else {
            alert("Ez a böngésző nem támogatja a teljes képernyős módot.");
        }
    }
}

}

window.Script314 = function()
{
  function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE / Edge
        document.msExitFullscreen();
    }
}

}

window.Script315 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script316 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script317 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script318 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script319 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script320 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script321 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script322 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script323 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script324 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script325 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;

    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // Firefox
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // IE / Edge
        element.msRequestFullscreen();
    } else if (element.webkitEnterFullscreen) { // iPhone Safari (csak videóknál működik)
        var video = document.querySelector("video");
        if (video) {
            video.webkitEnterFullscreen();
        } else {
            alert("Ez a böngésző nem támogatja a teljes képernyős módot.");
        }
    }
}

}

window.Script326 = function()
{
  function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE / Edge
        document.msExitFullscreen();
    }
}

}

window.Script327 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "1");
}

window.Script328 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "2");
}

window.Script329 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "3");
}

window.Script330 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "4");
}

window.Script331 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "5");
}

window.Script332 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "6");
}

window.Script333 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "7");
}

window.Script334 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "8");
}

window.Script335 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "9");
}

window.Script336 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "0");
}

window.Script337 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "C");
}

window.Script338 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script339 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script340 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script341 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script342 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script343 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script344 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script345 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script346 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script347 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script348 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;

    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // Firefox
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // IE / Edge
        element.msRequestFullscreen();
    } else if (element.webkitEnterFullscreen) { // iPhone Safari (csak videóknál működik)
        var video = document.querySelector("video");
        if (video) {
            video.webkitEnterFullscreen();
        } else {
            alert("Ez a böngésző nem támogatja a teljes képernyős módot.");
        }
    }
}

}

window.Script349 = function()
{
  function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE / Edge
        document.msExitFullscreen();
    }
}

}

window.Script350 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "1");
}
}

window.Script351 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "2");
}
}

window.Script352 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "3");
}
}

window.Script353 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "4");
}
}

window.Script354 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "5");
}
}

window.Script355 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "6");
}
}

window.Script356 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "7");
}
}

window.Script357 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "8");
}
}

window.Script358 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "9");
}
}

window.Script359 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "0");
}
}

window.Script360 = function()
{
  var player = GetPlayer();
var text = player.GetVar("szekreny1");
player.SetVar("szekreny1", text.slice(0, -1));
}

window.Script361 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script362 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script363 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script364 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script365 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script366 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script367 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script368 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script369 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script370 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script371 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;

    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // Firefox
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // IE / Edge
        element.msRequestFullscreen();
    } else if (element.webkitEnterFullscreen) { // iPhone Safari (csak videóknál működik)
        var video = document.querySelector("video");
        if (video) {
            video.webkitEnterFullscreen();
        } else {
            alert("Ez a böngésző nem támogatja a teljes képernyős módot.");
        }
    }
}

}

window.Script372 = function()
{
  function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE / Edge
        document.msExitFullscreen();
    }
}

}

window.Script373 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script374 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script375 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script376 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script377 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script378 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script379 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script380 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script381 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script382 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script383 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;

    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // Firefox
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // IE / Edge
        element.msRequestFullscreen();
    } else if (element.webkitEnterFullscreen) { // iPhone Safari (csak videóknál működik)
        var video = document.querySelector("video");
        if (video) {
            video.webkitEnterFullscreen();
        } else {
            alert("Ez a böngésző nem támogatja a teljes képernyős módot.");
        }
    }
}

}

window.Script384 = function()
{
  function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE / Edge
        document.msExitFullscreen();
    }
}

}

window.Script385 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("koordinata");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue && currentText.length === 1) {
    player.SetVar("koordinata", currentText + buttonValue);
}

}

window.Script386 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("koordinata");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue && currentText.length === 0) {
    player.SetVar("koordinata", currentText + buttonValue);
}

}

window.Script387 = function()
{
  var player = GetPlayer();
var text = player.GetVar("koordinata");

if (text.length === 3) {
    player.SetVar("koordinata", text.slice(0, -2));
} else if (text.length === 1) {
    player.SetVar("koordinata", text.slice(0, -1));
}

}

window.Script388 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "1");
}
}

window.Script389 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "2");
}
}

window.Script390 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "3");
}
}

window.Script391 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "4");
}
}

window.Script392 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "5");
}
}

window.Script393 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "6");
}
}

window.Script394 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "7");
}
}

window.Script395 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "8");
}
}

window.Script396 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "9");
}
}

window.Script397 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "0");
}
}

window.Script398 = function()
{
  var player = GetPlayer();
var text = player.GetVar("raktar");
player.SetVar("raktar", text.slice(0, -1));
}

window.Script399 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script400 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script401 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script402 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script403 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script404 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script405 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script406 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script407 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script408 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script409 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;

    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // Firefox
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // IE / Edge
        element.msRequestFullscreen();
    } else if (element.webkitEnterFullscreen) { // iPhone Safari (csak videóknál működik)
        var video = document.querySelector("video");
        if (video) {
            video.webkitEnterFullscreen();
        } else {
            alert("Ez a böngésző nem támogatja a teljes képernyős módot.");
        }
    }
}

}

window.Script410 = function()
{
  function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE / Edge
        document.msExitFullscreen();
    }
}

}

window.Script411 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("szam1");

var abc = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var index = abc.indexOf(betu);
index = (index + 1) % abc.length;

player.SetVar("szam1", abc[index]);
}

window.Script412 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("szam2");

var abc = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var index = abc.indexOf(betu);
index = (index + 1) % abc.length;

player.SetVar("szam2", abc[index]);
}

window.Script413 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("szam3");

var abc = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var index = abc.indexOf(betu);
index = (index + 1) % abc.length;

player.SetVar("szam3", abc[index]);
}

window.Script414 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("szam4");

var abc = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var index = abc.indexOf(betu);
index = (index + 1) % abc.length;

player.SetVar("szam4", abc[index]);
}

window.Script415 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("szam1");

var abc = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var index = abc.indexOf(betu);
index = (index - 1) % abc.length;

player.SetVar("szam1", abc[index]);
}

window.Script416 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("szam2");

var abc = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var index = abc.indexOf(betu);
index = (index - 1) % abc.length;

player.SetVar("szam2", abc[index]);
}

window.Script417 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("szam3");

var abc = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var index = abc.indexOf(betu);
index = (index - 1) % abc.length;

player.SetVar("szam3", abc[index]);
}

window.Script418 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("szam4");

var abc = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var index = abc.indexOf(betu);
index = (index - 1) % abc.length;

player.SetVar("szam4", abc[index]);
}

window.Script419 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script420 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script421 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script422 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script423 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script424 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script425 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script426 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script427 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script428 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script429 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;

    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // Firefox
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // IE / Edge
        element.msRequestFullscreen();
    } else if (element.webkitEnterFullscreen) { // iPhone Safari (csak videóknál működik)
        var video = document.querySelector("video");
        if (video) {
            video.webkitEnterFullscreen();
        } else {
            alert("Ez a böngésző nem támogatja a teljes képernyős módot.");
        }
    }
}

}

window.Script430 = function()
{
  function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE / Edge
        document.msExitFullscreen();
    }
}

}

window.Script431 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("utvonal"); 

player.SetVar("utvonal", currentText + "◀ ");

}

window.Script432 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("utvonal"); 

player.SetVar("utvonal", currentText + "▲ ");

}

window.Script433 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("utvonal"); 

player.SetVar("utvonal", currentText + "▶ ");

}

window.Script434 = function()
{
  var player = GetPlayer();
var text = player.GetVar("utvonal");
player.SetVar("utvonal", text.slice(0, -2));
}

window.Script435 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script436 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script437 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script438 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script439 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script440 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script441 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script442 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script443 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script444 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script445 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;

    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // Firefox
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // IE / Edge
        element.msRequestFullscreen();
    } else if (element.webkitEnterFullscreen) { // iPhone Safari (csak videóknál működik)
        var video = document.querySelector("video");
        if (video) {
            video.webkitEnterFullscreen();
        } else {
            alert("Ez a böngésző nem támogatja a teljes képernyős módot.");
        }
    }
}

}

window.Script446 = function()
{
  function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE / Edge
        document.msExitFullscreen();
    }
}

}

window.Script447 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script448 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script449 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script450 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script451 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script452 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script453 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script454 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script455 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script456 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script457 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;

    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // Firefox
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // IE / Edge
        element.msRequestFullscreen();
    } else if (element.webkitEnterFullscreen) { // iPhone Safari (csak videóknál működik)
        var video = document.querySelector("video");
        if (video) {
            video.webkitEnterFullscreen();
        } else {
            alert("Ez a böngésző nem támogatja a teljes képernyős módot.");
        }
    }
}

}

window.Script458 = function()
{
  function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE / Edge
        document.msExitFullscreen();
    }
}

}

};

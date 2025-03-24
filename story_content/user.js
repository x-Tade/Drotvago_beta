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

window.Script5 = function()
{
  var player = GetPlayer();
var text = player.GetVar("belepes");
player.SetVar("belepes", text.slice(0, -1));
}

window.Script6 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("belepes"); 
player.SetVar("belepes", currentText + "1");
}

window.Script7 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("belepes"); 
player.SetVar("belepes", currentText + "2");
}

window.Script8 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("belepes"); 
player.SetVar("belepes", currentText + "3");
}

window.Script9 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("belepes"); 
player.SetVar("belepes", currentText + "4");
}

window.Script10 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("belepes"); 
player.SetVar("belepes", currentText + "5");
}

window.Script11 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("belepes"); 
player.SetVar("belepes", currentText + "6");
}

window.Script12 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("belepes"); 
player.SetVar("belepes", currentText + "7");
}

window.Script13 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("belepes"); 
player.SetVar("belepes", currentText + "8");
}

window.Script14 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("belepes"); 
player.SetVar("belepes", currentText + "9");
}

window.Script15 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("belepes"); 
player.SetVar("belepes", currentText + "0");
}

window.Script16 = function()
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

window.Script17 = function()
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

window.Script18 = function()
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

window.Script19 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "1");
}

window.Script20 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "2");
}

window.Script21 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "3");
}

window.Script22 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "4");
}

window.Script23 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "5");
}

window.Script24 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "6");
}

window.Script25 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "7");
}

window.Script26 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "8");
}

window.Script27 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "9");
}

window.Script28 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "0");
}

window.Script29 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script30 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script31 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script32 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script33 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script34 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script35 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script36 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script37 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script38 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script39 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script40 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script41 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script42 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script43 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script44 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script45 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script46 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script47 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script48 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script49 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script50 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script51 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script52 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script53 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script54 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script55 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script56 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + " ");

}

window.Script57 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script58 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script59 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script60 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script61 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script62 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script63 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script64 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script65 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "1");
}

window.Script66 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "2");
}

window.Script67 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "3");
}

window.Script68 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "4");
}

window.Script69 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "5");
}

window.Script70 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "6");
}

window.Script71 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "7");
}

window.Script72 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "8");
}

window.Script73 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "9");
}

window.Script74 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "0");
}

window.Script75 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script76 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script77 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script78 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script79 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script80 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script81 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script82 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script83 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script84 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script85 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script86 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script87 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script88 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script89 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script90 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script91 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script92 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script93 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script94 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script95 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script96 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script97 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script98 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script99 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script100 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script101 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script102 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script103 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script104 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script105 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script106 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script107 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script108 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script109 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script110 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script111 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script112 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script113 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script114 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script115 = function()
{
  var player = GetPlayer();
var text = player.GetVar("hazszam");
player.SetVar("hazszam", text.slice(0, -1));
}

window.Script116 = function()
{
  var player = GetPlayer();
var text = player.GetVar("letesitmeny");
player.SetVar("letesitmeny", text.slice(0, -1));
}

window.Script117 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script118 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script119 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script120 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script121 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script122 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script123 = function()
{
  var player = GetPlayer();
var text = player.GetVar("vezeteknev");
player.SetVar("vezeteknev", text.slice(0, -1));
}

window.Script124 = function()
{
  var player = GetPlayer();
var text = player.GetVar("keresztnev");
player.SetVar("keresztnev", text.slice(0, -1));
}

window.Script125 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script126 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script127 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script128 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script129 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script130 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script131 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script132 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script133 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script134 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script135 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script136 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script137 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script138 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script139 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script140 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script141 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script142 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script143 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script144 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script145 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script146 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script147 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script148 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script149 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script150 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script151 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script152 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script153 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script154 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script155 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script156 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script157 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script158 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script159 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script160 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script161 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script162 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
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
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script170 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
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

window.Script190 = function()
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

window.Script191 = function()
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

window.Script192 = function()
{
  var player = GetPlayer();
var text = player.GetVar("szinvalto");
player.SetVar("szinvalto", text.slice(0, -1));
}

window.Script193 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szinvalto"); 
player.SetVar("szinvalto", currentText + "🟡");
}

window.Script194 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szinvalto"); 
player.SetVar("szinvalto", currentText + "🔴");
}

window.Script195 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szinvalto"); 
player.SetVar("szinvalto", currentText + "⚪");
}

window.Script196 = function()
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

window.Script197 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("runa1");

var runak = ["ᛗ", "ᛖ", "ᛈ", "ᚻ", "ᚩ", "ᛞ", "ᚳ", "ᛋ", "ᛇ", "ᚹ", "ᛠ", "ᚾ", "ᚼ", "ᚱ", "ᚲ", "ᛄ"];
var index = runak.indexOf(betu);
index = (index + 1) % runak.length;

player.SetVar("runa1", runak[index]);

}

window.Script198 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("runa1");

var runak = ["ᛗ", "ᛖ", "ᛈ", "ᚻ", "ᚩ", "ᛞ", "ᚳ", "ᛋ", "ᛇ", "ᚹ", "ᛠ", "ᚾ", "ᚼ", "ᚱ", "ᚲ", "ᛄ"];
var index = runak.indexOf(betu);
index = (index - 1 + runak.length) % runak.length;

player.SetVar("runa1", runak[index]);

}

window.Script199 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("runa2");

var runak = ["ᛗ", "ᛖ", "ᛈ", "ᚻ", "ᚩ", "ᛞ", "ᚳ", "ᛋ", "ᛇ", "ᚹ", "ᛠ", "ᚾ", "ᚼ", "ᚱ", "ᚲ", "ᛄ"];
var index = runak.indexOf(betu);
index = (index + 1) % runak.length;

player.SetVar("runa2", runak[index]);

}

window.Script200 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("runa3");

var runak = ["ᛗ", "ᛖ", "ᛈ", "ᚻ", "ᚩ", "ᛞ", "ᚳ", "ᛋ", "ᛇ", "ᚹ", "ᛠ", "ᚾ", "ᚼ", "ᚱ", "ᚲ", "ᛄ"];
var index = runak.indexOf(betu);
index = (index + 1) % runak.length;

player.SetVar("runa3", runak[index]);

}

window.Script201 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("runa4");

var runak = ["ᛗ", "ᛖ", "ᛈ", "ᚻ", "ᚩ", "ᛞ", "ᚳ", "ᛋ", "ᛇ", "ᚹ", "ᛠ", "ᚾ", "ᚼ", "ᚱ", "ᚲ", "ᛄ"];
var index = runak.indexOf(betu);
index = (index + 1) % runak.length;

player.SetVar("runa4", runak[index]);

}

window.Script202 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("runa2");

var runak = ["ᛗ", "ᛖ", "ᛈ", "ᚻ", "ᚩ", "ᛞ", "ᚳ", "ᛋ", "ᛇ", "ᚹ", "ᛠ", "ᚾ", "ᚼ", "ᚱ", "ᚲ", "ᛄ"];
var index = runak.indexOf(betu);
index = (index - 1 + runak.length) % runak.length;

player.SetVar("runa2", runak[index]);

}

window.Script203 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("runa3");

var runak = ["ᛗ", "ᛖ", "ᛈ", "ᚻ", "ᚩ", "ᛞ", "ᚳ", "ᛋ", "ᛇ", "ᚹ", "ᛠ", "ᚾ", "ᚼ", "ᚱ", "ᚲ", "ᛄ"];
var index = runak.indexOf(betu);
index = (index - 1 + runak.length) % runak.length;

player.SetVar("runa3", runak[index]);

}

window.Script204 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("runa4");

var runak = ["ᛗ", "ᛖ", "ᛈ", "ᚻ", "ᚩ", "ᛞ", "ᚳ", "ᛋ", "ᛇ", "ᚹ", "ᛠ", "ᚾ", "ᚼ", "ᚱ", "ᚲ", "ᛄ"];
var index = runak.indexOf(betu);
index = (index - 1 + runak.length) % runak.length;

player.SetVar("runa4", runak[index]);

}

window.Script205 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("betu1");

var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
var index = abc.indexOf(betu);
index = (index + 1) % abc.length;

player.SetVar("betu1", abc[index]);
}

window.Script206 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("betu1");

var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
var index = abc.indexOf(betu);
index = (index - 1 + abc.length) % abc.length;

player.SetVar("betu1", abc[index]);

}

window.Script207 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("betu2");

var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
var index = abc.indexOf(betu);
index = (index + 1) % abc.length;

player.SetVar("betu2", abc[index]);
}

window.Script208 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("betu3");

var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
var index = abc.indexOf(betu);
index = (index + 1) % abc.length;

player.SetVar("betu3", abc[index]);
}

window.Script209 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("betu4");

var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
var index = abc.indexOf(betu);
index = (index + 1) % abc.length;

player.SetVar("betu4", abc[index]);
}

window.Script210 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("betu2");

var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
var index = abc.indexOf(betu);
index = (index - 1 + abc.length) % abc.length;

player.SetVar("betu2", abc[index]);

}

window.Script211 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("betu3");

var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
var index = abc.indexOf(betu);
index = (index - 1 + abc.length) % abc.length;

player.SetVar("betu3", abc[index]);

}

window.Script212 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("betu4");

var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
var index = abc.indexOf(betu);
index = (index - 1 + abc.length) % abc.length;

player.SetVar("betu4", abc[index]);

}

window.Script213 = function()
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

};

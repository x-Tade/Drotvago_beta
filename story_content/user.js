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

window.Script2 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("Variable1"); 
player.SetVar("Variable1", currentText + "A");
}

window.Script3 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("Variable1"); 
player.SetVar("Variable1", currentText + "B");
}

window.Script4 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("Variable1"); 
player.SetVar("Variable1", currentText + "C");
}

window.Script5 = function()
{
  var player = GetPlayer();
var text = player.GetVar("Variable1");
player.SetVar("Variable1", text.slice(0, -1));
}

};

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

window.Script5 = function()
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

window.Script6 = function()
{
  var player = window.GetPlayer(); // Biztosítjuk, hogy a Storyline környezetből hívjuk meg

if (player) {
    var variables = Object.keys(player.GetVarNames ? player.GetVarNames() : {});
    var output = "Storyline változók:\n\n";

    variables.forEach(function(variable) {
        output += variable + " = " + player.GetVar(variable) + "\n";
    });

    console.log(output);
    alert(output);
} else {
    console.error("Storyline környezet nem érhető el!");
}

}

window.Script7 = function()
{
  var player = GetPlayer();
var text = player.GetVar("belepes");
player.SetVar("belepes", text.slice(0, -1));
}

window.Script8 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("belepes"); 
player.SetVar("belepes", currentText + "1");
}

window.Script9 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("belepes"); 
player.SetVar("belepes", currentText + "2");
}

window.Script10 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("belepes"); 
player.SetVar("belepes", currentText + "3");
}

window.Script11 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("belepes"); 
player.SetVar("belepes", currentText + "4");
}

window.Script12 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("belepes"); 
player.SetVar("belepes", currentText + "5");
}

window.Script13 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("belepes"); 
player.SetVar("belepes", currentText + "6");
}

window.Script14 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("belepes"); 
player.SetVar("belepes", currentText + "7");
}

window.Script15 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("belepes"); 
player.SetVar("belepes", currentText + "8");
}

window.Script16 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("belepes"); 
player.SetVar("belepes", currentText + "9");
}

window.Script17 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("belepes"); 
player.SetVar("belepes", currentText + "0");
}

window.Script18 = function()
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

window.Script19 = function()
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

window.Script20 = function()
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

window.Script21 = function()
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

window.Script22 = function()
{
  var player = window.GetPlayer(); // Biztosítjuk, hogy a Storyline környezetből hívjuk meg

if (player) {
    var variables = Object.keys(player.GetVarNames ? player.GetVarNames() : {});
    var output = "Storyline változók:\n\n";

    variables.forEach(function(variable) {
        output += variable + " = " + player.GetVar(variable) + "\n";
    });

    console.log(output);
    alert(output);
} else {
    console.error("Storyline környezet nem érhető el!");
}

}

window.Script23 = function()
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

window.Script24 = function()
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

window.Script25 = function()
{
  var player = window.GetPlayer(); // Biztosítjuk, hogy a Storyline környezetből hívjuk meg

if (player) {
    var variables = Object.keys(player.GetVarNames ? player.GetVarNames() : {});
    var output = "Storyline változók:\n\n";

    variables.forEach(function(variable) {
        output += variable + " = " + player.GetVar(variable) + "\n";
    });

    console.log(output);
    alert(output);
} else {
    console.error("Storyline környezet nem érhető el!");
}

}

window.Script26 = function()
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

window.Script27 = function()
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

window.Script28 = function()
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

window.Script29 = function()
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

window.Script30 = function()
{
  var player = window.GetPlayer(); // Biztosítjuk, hogy a Storyline környezetből hívjuk meg

if (player) {
    var variables = Object.keys(player.GetVarNames ? player.GetVarNames() : {});
    var output = "Storyline változók:\n\n";

    variables.forEach(function(variable) {
        output += variable + " = " + player.GetVar(variable) + "\n";
    });

    console.log(output);
    alert(output);
} else {
    console.error("Storyline környezet nem érhető el!");
}

}

window.Script31 = function()
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

window.Script32 = function()
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

window.Script33 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "1");
}

window.Script34 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "2");
}

window.Script35 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "3");
}

window.Script36 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "4");
}

window.Script37 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "5");
}

window.Script38 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "6");
}

window.Script39 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "7");
}

window.Script40 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "8");
}

window.Script41 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "9");
}

window.Script42 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "0");
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

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
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
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script66 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script67 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script68 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script69 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script70 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + " ");

}

window.Script71 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script72 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script73 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script74 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
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
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "1");
}

window.Script80 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "2");
}

window.Script81 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "3");
}

window.Script82 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "4");
}

window.Script83 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "5");
}

window.Script84 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "6");
}

window.Script85 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "7");
}

window.Script86 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "8");
}

window.Script87 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "9");
}

window.Script88 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "0");
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
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script104 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script105 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script106 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script107 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script108 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script109 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script110 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script111 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script112 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script113 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script114 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script115 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script116 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script117 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script118 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script119 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script120 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script121 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script122 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script123 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script124 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script125 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script126 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script127 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script128 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script129 = function()
{
  var player = GetPlayer();
var text = player.GetVar("hazszam");
player.SetVar("hazszam", text.slice(0, -1));
}

window.Script130 = function()
{
  var player = GetPlayer();
var text = player.GetVar("letesitmeny");
player.SetVar("letesitmeny", text.slice(0, -1));
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
var text = player.GetVar("vezeteknev");
player.SetVar("vezeteknev", text.slice(0, -1));
}

window.Script138 = function()
{
  var player = GetPlayer();
var text = player.GetVar("keresztnev");
player.SetVar("keresztnev", text.slice(0, -1));
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

window.Script204 = function()
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

window.Script205 = function()
{
  var player = window.GetPlayer(); // Biztosítjuk, hogy a Storyline környezetből hívjuk meg

if (player) {
    var variables = Object.keys(player.GetVarNames ? player.GetVarNames() : {});
    var output = "Storyline változók:\n\n";

    variables.forEach(function(variable) {
        output += variable + " = " + player.GetVar(variable) + "\n";
    });

    console.log(output);
    alert(output);
} else {
    console.error("Storyline környezet nem érhető el!");
}

}

window.Script206 = function()
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

window.Script207 = function()
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

window.Script208 = function()
{
  var player = window.GetPlayer(); // Biztosítjuk, hogy a Storyline környezetből hívjuk meg

if (player) {
    var variables = Object.keys(player.GetVarNames ? player.GetVarNames() : {});
    var output = "Storyline változók:\n\n";

    variables.forEach(function(variable) {
        output += variable + " = " + player.GetVar(variable) + "\n";
    });

    console.log(output);
    alert(output);
} else {
    console.error("Storyline környezet nem érhető el!");
}

}

window.Script209 = function()
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

window.Script210 = function()
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

window.Script211 = function()
{
  var player = window.GetPlayer(); // Biztosítjuk, hogy a Storyline környezetből hívjuk meg

if (player) {
    var variables = Object.keys(player.GetVarNames ? player.GetVarNames() : {});
    var output = "Storyline változók:\n\n";

    variables.forEach(function(variable) {
        output += variable + " = " + player.GetVar(variable) + "\n";
    });

    console.log(output);
    alert(output);
} else {
    console.error("Storyline környezet nem érhető el!");
}

}

window.Script212 = function()
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

window.Script213 = function()
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

window.Script214 = function()
{
  var player = GetPlayer();
var text = player.GetVar("szinvalto");
player.SetVar("szinvalto", text.slice(0, -1));
}

window.Script215 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szinvalto"); 
player.SetVar("szinvalto", currentText + "🟡");
}

window.Script216 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szinvalto"); 
player.SetVar("szinvalto", currentText + "🔴");
}

window.Script217 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szinvalto"); 
player.SetVar("szinvalto", currentText + "⚪");
}

window.Script218 = function()
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

window.Script219 = function()
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

window.Script220 = function()
{
  var player = window.GetPlayer(); // Biztosítjuk, hogy a Storyline környezetből hívjuk meg

if (player) {
    var variables = Object.keys(player.GetVarNames ? player.GetVarNames() : {});
    var output = "Storyline változók:\n\n";

    variables.forEach(function(variable) {
        output += variable + " = " + player.GetVar(variable) + "\n";
    });

    console.log(output);
    alert(output);
} else {
    console.error("Storyline környezet nem érhető el!");
}

}

window.Script221 = function()
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

window.Script222 = function()
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

window.Script223 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("runa1");

var runak = ["ᛗ", "ᛖ", "ᛈ", "ᚻ", "ᚩ", "ᛞ", "ᚳ", "ᛋ", "ᛇ", "ᚹ", "ᛠ", "ᚾ", "ᚼ", "ᚱ", "ᚲ", "ᛄ"];
var index = runak.indexOf(betu);
index = (index + 1) % runak.length;

player.SetVar("runa1", runak[index]);

}

window.Script224 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("runa1");

var runak = ["ᛗ", "ᛖ", "ᛈ", "ᚻ", "ᚩ", "ᛞ", "ᚳ", "ᛋ", "ᛇ", "ᚹ", "ᛠ", "ᚾ", "ᚼ", "ᚱ", "ᚲ", "ᛄ"];
var index = runak.indexOf(betu);
index = (index - 1 + runak.length) % runak.length;

player.SetVar("runa1", runak[index]);

}

window.Script225 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("runa2");

var runak = ["ᛗ", "ᛖ", "ᛈ", "ᚻ", "ᚩ", "ᛞ", "ᚳ", "ᛋ", "ᛇ", "ᚹ", "ᛠ", "ᚾ", "ᚼ", "ᚱ", "ᚲ", "ᛄ"];
var index = runak.indexOf(betu);
index = (index + 1) % runak.length;

player.SetVar("runa2", runak[index]);

}

window.Script226 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("runa3");

var runak = ["ᛗ", "ᛖ", "ᛈ", "ᚻ", "ᚩ", "ᛞ", "ᚳ", "ᛋ", "ᛇ", "ᚹ", "ᛠ", "ᚾ", "ᚼ", "ᚱ", "ᚲ", "ᛄ"];
var index = runak.indexOf(betu);
index = (index + 1) % runak.length;

player.SetVar("runa3", runak[index]);

}

window.Script227 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("runa4");

var runak = ["ᛗ", "ᛖ", "ᛈ", "ᚻ", "ᚩ", "ᛞ", "ᚳ", "ᛋ", "ᛇ", "ᚹ", "ᛠ", "ᚾ", "ᚼ", "ᚱ", "ᚲ", "ᛄ"];
var index = runak.indexOf(betu);
index = (index + 1) % runak.length;

player.SetVar("runa4", runak[index]);

}

window.Script228 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("runa2");

var runak = ["ᛗ", "ᛖ", "ᛈ", "ᚻ", "ᚩ", "ᛞ", "ᚳ", "ᛋ", "ᛇ", "ᚹ", "ᛠ", "ᚾ", "ᚼ", "ᚱ", "ᚲ", "ᛄ"];
var index = runak.indexOf(betu);
index = (index - 1 + runak.length) % runak.length;

player.SetVar("runa2", runak[index]);

}

window.Script229 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("runa3");

var runak = ["ᛗ", "ᛖ", "ᛈ", "ᚻ", "ᚩ", "ᛞ", "ᚳ", "ᛋ", "ᛇ", "ᚹ", "ᛠ", "ᚾ", "ᚼ", "ᚱ", "ᚲ", "ᛄ"];
var index = runak.indexOf(betu);
index = (index - 1 + runak.length) % runak.length;

player.SetVar("runa3", runak[index]);

}

window.Script230 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("runa4");

var runak = ["ᛗ", "ᛖ", "ᛈ", "ᚻ", "ᚩ", "ᛞ", "ᚳ", "ᛋ", "ᛇ", "ᚹ", "ᛠ", "ᚾ", "ᚼ", "ᚱ", "ᚲ", "ᛄ"];
var index = runak.indexOf(betu);
index = (index - 1 + runak.length) % runak.length;

player.SetVar("runa4", runak[index]);

}

window.Script231 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("betu1");

var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
var index = abc.indexOf(betu);
index = (index + 1) % abc.length;

player.SetVar("betu1", abc[index]);
}

window.Script232 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("betu1");

var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
var index = abc.indexOf(betu);
index = (index - 1 + abc.length) % abc.length;

player.SetVar("betu1", abc[index]);

}

window.Script233 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("betu2");

var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
var index = abc.indexOf(betu);
index = (index + 1) % abc.length;

player.SetVar("betu2", abc[index]);
}

window.Script234 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("betu3");

var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
var index = abc.indexOf(betu);
index = (index + 1) % abc.length;

player.SetVar("betu3", abc[index]);
}

window.Script235 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("betu4");

var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
var index = abc.indexOf(betu);
index = (index + 1) % abc.length;

player.SetVar("betu4", abc[index]);
}

window.Script236 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("betu2");

var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
var index = abc.indexOf(betu);
index = (index - 1 + abc.length) % abc.length;

player.SetVar("betu2", abc[index]);

}

window.Script237 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("betu3");

var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
var index = abc.indexOf(betu);
index = (index - 1 + abc.length) % abc.length;

player.SetVar("betu3", abc[index]);

}

window.Script238 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("betu4");

var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
var index = abc.indexOf(betu);
index = (index - 1 + abc.length) % abc.length;

player.SetVar("betu4", abc[index]);

}

window.Script239 = function()
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

window.Script240 = function()
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

window.Script241 = function()
{
  var player = window.GetPlayer(); // Biztosítjuk, hogy a Storyline környezetből hívjuk meg

if (player) {
    var variables = Object.keys(player.GetVarNames ? player.GetVarNames() : {});
    var output = "Storyline változók:\n\n";

    variables.forEach(function(variable) {
        output += variable + " = " + player.GetVar(variable) + "\n";
    });

    console.log(output);
    alert(output);
} else {
    console.error("Storyline környezet nem érhető el!");
}

}

window.Script242 = function()
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

window.Script243 = function()
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

window.Script244 = function()
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

window.Script245 = function()
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

window.Script246 = function()
{
  var player = window.GetPlayer(); // Biztosítjuk, hogy a Storyline környezetből hívjuk meg

if (player) {
    var variables = Object.keys(player.GetVarNames ? player.GetVarNames() : {});
    var output = "Storyline változók:\n\n";

    variables.forEach(function(variable) {
        output += variable + " = " + player.GetVar(variable) + "\n";
    });

    console.log(output);
    alert(output);
} else {
    console.error("Storyline környezet nem érhető el!");
}

}

window.Script247 = function()
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

window.Script248 = function()
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

window.Script249 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "1");
}

window.Script250 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "2");
}

window.Script251 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "3");
}

window.Script252 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "4");
}

window.Script253 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "5");
}

window.Script254 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "6");
}

window.Script255 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "7");
}

window.Script256 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "8");
}

window.Script257 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "9");
}

window.Script258 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "0");
}

window.Script259 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "C");
}

window.Script260 = function()
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

window.Script261 = function()
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

window.Script262 = function()
{
  var player = window.GetPlayer(); // Biztosítjuk, hogy a Storyline környezetből hívjuk meg

if (player) {
    var variables = Object.keys(player.GetVarNames ? player.GetVarNames() : {});
    var output = "Storyline változók:\n\n";

    variables.forEach(function(variable) {
        output += variable + " = " + player.GetVar(variable) + "\n";
    });

    console.log(output);
    alert(output);
} else {
    console.error("Storyline környezet nem érhető el!");
}

}

window.Script263 = function()
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

window.Script264 = function()
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

window.Script265 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "1");
}
}

window.Script266 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "2");
}
}

window.Script267 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "3");
}
}

window.Script268 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "4");
}
}

window.Script269 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "5");
}
}

window.Script270 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "6");
}
}

window.Script271 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "7");
}
}

window.Script272 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "8");
}
}

window.Script273 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "9");
}
}

window.Script274 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "0");
}
}

window.Script275 = function()
{
  var player = GetPlayer();
var text = player.GetVar("szekreny1");
player.SetVar("szekreny1", text.slice(0, -1));
}

window.Script276 = function()
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

window.Script277 = function()
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

window.Script278 = function()
{
  var player = window.GetPlayer(); // Biztosítjuk, hogy a Storyline környezetből hívjuk meg

if (player) {
    var variables = Object.keys(player.GetVarNames ? player.GetVarNames() : {});
    var output = "Storyline változók:\n\n";

    variables.forEach(function(variable) {
        output += variable + " = " + player.GetVar(variable) + "\n";
    });

    console.log(output);
    alert(output);
} else {
    console.error("Storyline környezet nem érhető el!");
}

}

window.Script279 = function()
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

window.Script280 = function()
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

window.Script281 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("koordinata");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue && currentText.length === 1) {
    player.SetVar("koordinata", currentText + buttonValue);
}

}

window.Script282 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("koordinata");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue && currentText.length === 0) {
    player.SetVar("koordinata", currentText + buttonValue);
}

}

window.Script283 = function()
{
  var player = GetPlayer();
var text = player.GetVar("koordinata");

if (text.length === 3) {
    player.SetVar("koordinata", text.slice(0, -2));
} else if (text.length === 1) {
    player.SetVar("koordinata", text.slice(0, -1));
}

}

window.Script284 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "1");
}
}

window.Script285 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "2");
}
}

window.Script286 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "3");
}
}

window.Script287 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "4");
}
}

window.Script288 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "5");
}
}

window.Script289 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "6");
}
}

window.Script290 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "7");
}
}

window.Script291 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "8");
}
}

window.Script292 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "9");
}
}

window.Script293 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "0");
}
}

window.Script294 = function()
{
  var player = GetPlayer();
var text = player.GetVar("raktar");
player.SetVar("raktar", text.slice(0, -1));
}

window.Script295 = function()
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

window.Script296 = function()
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

window.Script297 = function()
{
  var player = window.GetPlayer(); // Biztosítjuk, hogy a Storyline környezetből hívjuk meg

if (player) {
    var variables = Object.keys(player.GetVarNames ? player.GetVarNames() : {});
    var output = "Storyline változók:\n\n";

    variables.forEach(function(variable) {
        output += variable + " = " + player.GetVar(variable) + "\n";
    });

    console.log(output);
    alert(output);
} else {
    console.error("Storyline környezet nem érhető el!");
}

}

window.Script298 = function()
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

window.Script299 = function()
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

window.Script300 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("szam1");

var abc = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var index = abc.indexOf(betu);
index = (index + 1) % abc.length;

player.SetVar("szam1", abc[index]);
}

window.Script301 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("szam2");

var abc = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var index = abc.indexOf(betu);
index = (index + 1) % abc.length;

player.SetVar("szam2", abc[index]);
}

window.Script302 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("szam3");

var abc = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var index = abc.indexOf(betu);
index = (index + 1) % abc.length;

player.SetVar("szam3", abc[index]);
}

window.Script303 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("szam4");

var abc = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var index = abc.indexOf(betu);
index = (index + 1) % abc.length;

player.SetVar("szam4", abc[index]);
}

window.Script304 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("szam1");

var abc = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var index = abc.indexOf(betu);
index = (index - 1) % abc.length;

player.SetVar("szam1", abc[index]);
}

window.Script305 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("szam2");

var abc = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var index = abc.indexOf(betu);
index = (index - 1) % abc.length;

player.SetVar("szam2", abc[index]);
}

window.Script306 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("szam3");

var abc = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var index = abc.indexOf(betu);
index = (index - 1) % abc.length;

player.SetVar("szam3", abc[index]);
}

window.Script307 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("szam4");

var abc = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var index = abc.indexOf(betu);
index = (index - 1) % abc.length;

player.SetVar("szam4", abc[index]);
}

window.Script308 = function()
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

window.Script309 = function()
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

window.Script310 = function()
{
  var player = window.GetPlayer(); // Biztosítjuk, hogy a Storyline környezetből hívjuk meg

if (player) {
    var variables = Object.keys(player.GetVarNames ? player.GetVarNames() : {});
    var output = "Storyline változók:\n\n";

    variables.forEach(function(variable) {
        output += variable + " = " + player.GetVar(variable) + "\n";
    });

    console.log(output);
    alert(output);
} else {
    console.error("Storyline környezet nem érhető el!");
}

}

window.Script311 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("utvonal"); 

player.SetVar("utvonal", currentText + "◀ ");

}

window.Script312 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("utvonal"); 

player.SetVar("utvonal", currentText + "▲ ");

}

window.Script313 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("utvonal"); 

player.SetVar("utvonal", currentText + "▶ ");

}

window.Script314 = function()
{
  var player = GetPlayer();
var text = player.GetVar("utvonal");
player.SetVar("utvonal", text.slice(0, -2));
}

window.Script315 = function()
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

window.Script316 = function()
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

window.Script317 = function()
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

window.Script318 = function()
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

window.Script319 = function()
{
  var player = window.GetPlayer(); // Biztosítjuk, hogy a Storyline környezetből hívjuk meg

if (player) {
    var variables = Object.keys(player.GetVarNames ? player.GetVarNames() : {});
    var output = "Storyline változók:\n\n";

    variables.forEach(function(variable) {
        output += variable + " = " + player.GetVar(variable) + "\n";
    });

    console.log(output);
    alert(output);
} else {
    console.error("Storyline környezet nem érhető el!");
}

}

window.Script320 = function()
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

window.Script321 = function()
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

window.Script322 = function()
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

window.Script323 = function()
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

window.Script324 = function()
{
  var player = window.GetPlayer(); // Biztosítjuk, hogy a Storyline környezetből hívjuk meg

if (player) {
    var variables = Object.keys(player.GetVarNames ? player.GetVarNames() : {});
    var output = "Storyline változók:\n\n";

    variables.forEach(function(variable) {
        output += variable + " = " + player.GetVar(variable) + "\n";
    });

    console.log(output);
    alert(output);
} else {
    console.error("Storyline környezet nem érhető el!");
}

}

};

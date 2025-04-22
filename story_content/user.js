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
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // iOS: csak videót lehet fullscreenre rakni
        var video = document.querySelector("video");
        if (video && video.webkitEnterFullscreen) {
            video.webkitEnterFullscreen();
        } else {
            alert("iOS-en csak videót lehet teljes képernyőre rakni.");
        }
    }
}

enterFullscreen();

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
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // Keresünk vagy létrehozunk egy rejtett videót
        var video = document.getElementById("hiddenFullscreenVideo");
        if (!video) {
            video = document.createElement("video");
            video.id = "hiddenFullscreenVideo";
            video.src = "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAAAAG1wNDFtcDQyaXNvbTEyMAAAAG1vb3YAAABsbXZoZAAAAAB8JgB8JgAAAAAAAGQAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABhzdHRzAAAAAAAAAAEAAAABAAAAAA=="; // 1 képkockás, üres mp4
            video.setAttribute("playsinline", "true");
            video.style.position = "absolute";
            video.style.width = "1px";
            video.style.height = "1px";
            video.style.opacity = "0";
            document.body.appendChild(video);
        }

        // Fullscreen kérés
        if (video.webkitEnterFullscreen) {
            video.play().then(() => {
                video.webkitEnterFullscreen();
            }).catch(() => {
                alert("Nem sikerült fullscreen módba lépni.");
            });
        } else {
            alert("Ez az iOS böngésző nem támogatja a fullscreen módot.");
        }
    }
}

enterFullscreen();

}

window.Script17 = function()
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

window.Script18 = function()
{
  var player = GetPlayer();
var text = player.GetVar("belepes");
player.SetVar("belepes", text.slice(0, -1));
}

window.Script19 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("belepes"); 
player.SetVar("belepes", currentText + "1");
}

window.Script20 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("belepes"); 
player.SetVar("belepes", currentText + "2");
}

window.Script21 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("belepes"); 
player.SetVar("belepes", currentText + "3");
}

window.Script22 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("belepes"); 
player.SetVar("belepes", currentText + "4");
}

window.Script23 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("belepes"); 
player.SetVar("belepes", currentText + "5");
}

window.Script24 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("belepes"); 
player.SetVar("belepes", currentText + "6");
}

window.Script25 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("belepes"); 
player.SetVar("belepes", currentText + "7");
}

window.Script26 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("belepes"); 
player.SetVar("belepes", currentText + "8");
}

window.Script27 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("belepes"); 
player.SetVar("belepes", currentText + "9");
}

window.Script28 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("belepes"); 
player.SetVar("belepes", currentText + "0");
}

window.Script29 = function()
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

window.Script30 = function()
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

window.Script31 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script32 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script33 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script34 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script35 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script36 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script37 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script38 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script39 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script40 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script41 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // iOS: csak videót lehet fullscreenre rakni
        var video = document.querySelector("video");
        if (video && video.webkitEnterFullscreen) {
            video.webkitEnterFullscreen();
        } else {
            alert("iOS-en csak videót lehet teljes képernyőre rakni.");
        }
    }
}

enterFullscreen();

}

window.Script42 = function()
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

window.Script43 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // Keresünk vagy létrehozunk egy rejtett videót
        var video = document.getElementById("hiddenFullscreenVideo");
        if (!video) {
            video = document.createElement("video");
            video.id = "hiddenFullscreenVideo";
            video.src = "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAAAAG1wNDFtcDQyaXNvbTEyMAAAAG1vb3YAAABsbXZoZAAAAAB8JgB8JgAAAAAAAGQAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABhzdHRzAAAAAAAAAAEAAAABAAAAAA=="; // 1 képkockás, üres mp4
            video.setAttribute("playsinline", "true");
            video.style.position = "absolute";
            video.style.width = "1px";
            video.style.height = "1px";
            video.style.opacity = "0";
            document.body.appendChild(video);
        }

        // Fullscreen kérés
        if (video.webkitEnterFullscreen) {
            video.play().then(() => {
                video.webkitEnterFullscreen();
            }).catch(() => {
                alert("Nem sikerült fullscreen módba lépni.");
            });
        } else {
            alert("Ez az iOS böngésző nem támogatja a fullscreen módot.");
        }
    }
}

enterFullscreen();

}

window.Script44 = function()
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

window.Script45 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script46 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script47 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script48 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script49 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script50 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script51 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script52 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script53 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script54 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script55 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // iOS: csak videót lehet fullscreenre rakni
        var video = document.querySelector("video");
        if (video && video.webkitEnterFullscreen) {
            video.webkitEnterFullscreen();
        } else {
            alert("iOS-en csak videót lehet teljes képernyőre rakni.");
        }
    }
}

enterFullscreen();

}

window.Script56 = function()
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

window.Script57 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // Keresünk vagy létrehozunk egy rejtett videót
        var video = document.getElementById("hiddenFullscreenVideo");
        if (!video) {
            video = document.createElement("video");
            video.id = "hiddenFullscreenVideo";
            video.src = "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAAAAG1wNDFtcDQyaXNvbTEyMAAAAG1vb3YAAABsbXZoZAAAAAB8JgB8JgAAAAAAAGQAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABhzdHRzAAAAAAAAAAEAAAABAAAAAA=="; // 1 képkockás, üres mp4
            video.setAttribute("playsinline", "true");
            video.style.position = "absolute";
            video.style.width = "1px";
            video.style.height = "1px";
            video.style.opacity = "0";
            document.body.appendChild(video);
        }

        // Fullscreen kérés
        if (video.webkitEnterFullscreen) {
            video.play().then(() => {
                video.webkitEnterFullscreen();
            }).catch(() => {
                alert("Nem sikerült fullscreen módba lépni.");
            });
        } else {
            alert("Ez az iOS böngésző nem támogatja a fullscreen módot.");
        }
    }
}

enterFullscreen();

}

window.Script58 = function()
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

window.Script59 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script60 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script61 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script62 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script63 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script64 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script65 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script66 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script67 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script68 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script69 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // iOS: csak videót lehet fullscreenre rakni
        var video = document.querySelector("video");
        if (video && video.webkitEnterFullscreen) {
            video.webkitEnterFullscreen();
        } else {
            alert("iOS-en csak videót lehet teljes képernyőre rakni.");
        }
    }
}

enterFullscreen();

}

window.Script70 = function()
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

window.Script71 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // Keresünk vagy létrehozunk egy rejtett videót
        var video = document.getElementById("hiddenFullscreenVideo");
        if (!video) {
            video = document.createElement("video");
            video.id = "hiddenFullscreenVideo";
            video.src = "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAAAAG1wNDFtcDQyaXNvbTEyMAAAAG1vb3YAAABsbXZoZAAAAAB8JgB8JgAAAAAAAGQAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABhzdHRzAAAAAAAAAAEAAAABAAAAAA=="; // 1 képkockás, üres mp4
            video.setAttribute("playsinline", "true");
            video.style.position = "absolute";
            video.style.width = "1px";
            video.style.height = "1px";
            video.style.opacity = "0";
            document.body.appendChild(video);
        }

        // Fullscreen kérés
        if (video.webkitEnterFullscreen) {
            video.play().then(() => {
                video.webkitEnterFullscreen();
            }).catch(() => {
                alert("Nem sikerült fullscreen módba lépni.");
            });
        } else {
            alert("Ez az iOS böngésző nem támogatja a fullscreen módot.");
        }
    }
}

enterFullscreen();

}

window.Script72 = function()
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

window.Script73 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "1");
}

window.Script74 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "2");
}

window.Script75 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "3");
}

window.Script76 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "4");
}

window.Script77 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "5");
}

window.Script78 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "6");
}

window.Script79 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "7");
}

window.Script80 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "8");
}

window.Script81 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "9");
}

window.Script82 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "0");
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

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
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
player.SetVar("letesitmeny", currentText + " ");

}

window.Script111 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script112 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script113 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script114 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script115 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script116 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script117 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script118 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script119 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "1");
}

window.Script120 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "2");
}

window.Script121 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "3");
}

window.Script122 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "4");
}

window.Script123 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "5");
}

window.Script124 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "6");
}

window.Script125 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "7");
}

window.Script126 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "8");
}

window.Script127 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "9");
}

window.Script128 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "0");
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
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script150 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script151 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script152 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script153 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script154 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script155 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script156 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
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
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script162 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script163 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script164 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script165 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script166 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script167 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script168 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script169 = function()
{
  var player = GetPlayer();
var text = player.GetVar("hazszam");
player.SetVar("hazszam", text.slice(0, -1));
}

window.Script170 = function()
{
  var player = GetPlayer();
var text = player.GetVar("letesitmeny");
player.SetVar("letesitmeny", text.slice(0, -1));
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
var text = player.GetVar("vezeteknev");
player.SetVar("vezeteknev", text.slice(0, -1));
}

window.Script178 = function()
{
  var player = GetPlayer();
var text = player.GetVar("keresztnev");
player.SetVar("keresztnev", text.slice(0, -1));
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
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script236 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script237 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script238 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script239 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script240 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script241 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script242 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script243 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script244 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script245 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script246 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script247 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script248 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script249 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script250 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script251 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script252 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script253 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // iOS: csak videót lehet fullscreenre rakni
        var video = document.querySelector("video");
        if (video && video.webkitEnterFullscreen) {
            video.webkitEnterFullscreen();
        } else {
            alert("iOS-en csak videót lehet teljes képernyőre rakni.");
        }
    }
}

enterFullscreen();

}

window.Script254 = function()
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

window.Script255 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // Keresünk vagy létrehozunk egy rejtett videót
        var video = document.getElementById("hiddenFullscreenVideo");
        if (!video) {
            video = document.createElement("video");
            video.id = "hiddenFullscreenVideo";
            video.src = "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAAAAG1wNDFtcDQyaXNvbTEyMAAAAG1vb3YAAABsbXZoZAAAAAB8JgB8JgAAAAAAAGQAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABhzdHRzAAAAAAAAAAEAAAABAAAAAA=="; // 1 képkockás, üres mp4
            video.setAttribute("playsinline", "true");
            video.style.position = "absolute";
            video.style.width = "1px";
            video.style.height = "1px";
            video.style.opacity = "0";
            document.body.appendChild(video);
        }

        // Fullscreen kérés
        if (video.webkitEnterFullscreen) {
            video.play().then(() => {
                video.webkitEnterFullscreen();
            }).catch(() => {
                alert("Nem sikerült fullscreen módba lépni.");
            });
        } else {
            alert("Ez az iOS böngésző nem támogatja a fullscreen módot.");
        }
    }
}

enterFullscreen();

}

window.Script256 = function()
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

window.Script257 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script258 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script259 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script260 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script261 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script262 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script263 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script264 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script265 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script266 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script267 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // iOS: csak videót lehet fullscreenre rakni
        var video = document.querySelector("video");
        if (video && video.webkitEnterFullscreen) {
            video.webkitEnterFullscreen();
        } else {
            alert("iOS-en csak videót lehet teljes képernyőre rakni.");
        }
    }
}

enterFullscreen();

}

window.Script268 = function()
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

window.Script269 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // Keresünk vagy létrehozunk egy rejtett videót
        var video = document.getElementById("hiddenFullscreenVideo");
        if (!video) {
            video = document.createElement("video");
            video.id = "hiddenFullscreenVideo";
            video.src = "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAAAAG1wNDFtcDQyaXNvbTEyMAAAAG1vb3YAAABsbXZoZAAAAAB8JgB8JgAAAAAAAGQAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABhzdHRzAAAAAAAAAAEAAAABAAAAAA=="; // 1 képkockás, üres mp4
            video.setAttribute("playsinline", "true");
            video.style.position = "absolute";
            video.style.width = "1px";
            video.style.height = "1px";
            video.style.opacity = "0";
            document.body.appendChild(video);
        }

        // Fullscreen kérés
        if (video.webkitEnterFullscreen) {
            video.play().then(() => {
                video.webkitEnterFullscreen();
            }).catch(() => {
                alert("Nem sikerült fullscreen módba lépni.");
            });
        } else {
            alert("Ez az iOS böngésző nem támogatja a fullscreen módot.");
        }
    }
}

enterFullscreen();

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
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "1");
}

window.Script272 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "2");
}

window.Script273 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "3");
}

window.Script274 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "4");
}

window.Script275 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "5");
}

window.Script276 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "6");
}

window.Script277 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "7");
}

window.Script278 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "8");
}

window.Script279 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "9");
}

window.Script280 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "0");
}

window.Script281 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script282 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script283 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script284 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script285 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script286 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script287 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script288 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script289 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script290 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script291 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script292 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script293 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script294 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script295 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script296 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script297 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script298 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script299 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script300 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script301 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script302 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script303 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script304 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script305 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script306 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script307 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script308 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + " ");

}

window.Script309 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script310 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script311 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script312 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script313 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script314 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script315 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script316 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script317 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "1");
}

window.Script318 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "2");
}

window.Script319 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "3");
}

window.Script320 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "4");
}

window.Script321 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "5");
}

window.Script322 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "6");
}

window.Script323 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "7");
}

window.Script324 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "8");
}

window.Script325 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "9");
}

window.Script326 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "0");
}

window.Script327 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script328 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script329 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script330 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script331 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script332 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script333 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script334 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script335 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script336 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script337 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script338 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script339 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script340 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script341 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script342 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script343 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script344 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script345 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script346 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script347 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script348 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script349 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script350 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script351 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script352 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script353 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script354 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script355 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script356 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script357 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script358 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script359 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script360 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script361 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script362 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script363 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script364 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script365 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script366 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script367 = function()
{
  var player = GetPlayer();
var text = player.GetVar("letesitmeny");
player.SetVar("letesitmeny", text.slice(0, -1));
}

window.Script368 = function()
{
  var player = GetPlayer();
var text = player.GetVar("hazszam");
player.SetVar("hazszam", text.slice(0, -1));
}

window.Script369 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script370 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script371 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script372 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script373 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script374 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script375 = function()
{
  var player = GetPlayer();
var text = player.GetVar("vezeteknev");
player.SetVar("vezeteknev", text.slice(0, -1));
}

window.Script376 = function()
{
  var player = GetPlayer();
var text = player.GetVar("keresztnev");
player.SetVar("keresztnev", text.slice(0, -1));
}

window.Script377 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script378 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script379 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script380 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script381 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script382 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script383 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script384 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script385 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script386 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script387 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script388 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script389 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script390 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script391 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script392 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script393 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script394 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script395 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script396 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script397 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script398 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script399 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script400 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script401 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script402 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script403 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script404 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script405 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script406 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script407 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script408 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script409 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script410 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script411 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script412 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script413 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script414 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script415 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script416 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script417 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script418 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script419 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script420 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script421 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script422 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script423 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script424 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script425 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script426 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script427 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script428 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script429 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script430 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script431 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script432 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script433 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script434 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script435 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script436 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script437 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script438 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script439 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script440 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script441 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script442 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script443 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script444 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script445 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script446 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script447 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script448 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script449 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script450 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script451 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // iOS: csak videót lehet fullscreenre rakni
        var video = document.querySelector("video");
        if (video && video.webkitEnterFullscreen) {
            video.webkitEnterFullscreen();
        } else {
            alert("iOS-en csak videót lehet teljes képernyőre rakni.");
        }
    }
}

enterFullscreen();

}

window.Script452 = function()
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

window.Script453 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // Keresünk vagy létrehozunk egy rejtett videót
        var video = document.getElementById("hiddenFullscreenVideo");
        if (!video) {
            video = document.createElement("video");
            video.id = "hiddenFullscreenVideo";
            video.src = "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAAAAG1wNDFtcDQyaXNvbTEyMAAAAG1vb3YAAABsbXZoZAAAAAB8JgB8JgAAAAAAAGQAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABhzdHRzAAAAAAAAAAEAAAABAAAAAA=="; // 1 képkockás, üres mp4
            video.setAttribute("playsinline", "true");
            video.style.position = "absolute";
            video.style.width = "1px";
            video.style.height = "1px";
            video.style.opacity = "0";
            document.body.appendChild(video);
        }

        // Fullscreen kérés
        if (video.webkitEnterFullscreen) {
            video.play().then(() => {
                video.webkitEnterFullscreen();
            }).catch(() => {
                alert("Nem sikerült fullscreen módba lépni.");
            });
        } else {
            alert("Ez az iOS böngésző nem támogatja a fullscreen módot.");
        }
    }
}

enterFullscreen();

}

window.Script454 = function()
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

window.Script455 = function()
{
  var player = GetPlayer();
var text = player.GetVar("szinvalto");

var emojis = ["⚪", "🔴", "🟡"];
for (var i = 0; i < emojis.length; i++) {
    if (text.endsWith(emojis[i])) {
        text = text.slice(0, -emojis[i].length);
        break;
    }
}

player.SetVar("szinvalto", text);

}

window.Script456 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szinvalto"); 
player.SetVar("szinvalto", currentText + "🟡");
}

window.Script457 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szinvalto"); 
player.SetVar("szinvalto", currentText + "🔴");
}

window.Script458 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szinvalto"); 
player.SetVar("szinvalto", currentText + "⚪");
}

window.Script459 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script460 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script461 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script462 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script463 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script464 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script465 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script466 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script467 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script468 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script469 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // iOS: csak videót lehet fullscreenre rakni
        var video = document.querySelector("video");
        if (video && video.webkitEnterFullscreen) {
            video.webkitEnterFullscreen();
        } else {
            alert("iOS-en csak videót lehet teljes képernyőre rakni.");
        }
    }
}

enterFullscreen();

}

window.Script470 = function()
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

window.Script471 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // Keresünk vagy létrehozunk egy rejtett videót
        var video = document.getElementById("hiddenFullscreenVideo");
        if (!video) {
            video = document.createElement("video");
            video.id = "hiddenFullscreenVideo";
            video.src = "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAAAAG1wNDFtcDQyaXNvbTEyMAAAAG1vb3YAAABsbXZoZAAAAAB8JgB8JgAAAAAAAGQAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABhzdHRzAAAAAAAAAAEAAAABAAAAAA=="; // 1 képkockás, üres mp4
            video.setAttribute("playsinline", "true");
            video.style.position = "absolute";
            video.style.width = "1px";
            video.style.height = "1px";
            video.style.opacity = "0";
            document.body.appendChild(video);
        }

        // Fullscreen kérés
        if (video.webkitEnterFullscreen) {
            video.play().then(() => {
                video.webkitEnterFullscreen();
            }).catch(() => {
                alert("Nem sikerült fullscreen módba lépni.");
            });
        } else {
            alert("Ez az iOS böngésző nem támogatja a fullscreen módot.");
        }
    }
}

enterFullscreen();

}

window.Script472 = function()
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

window.Script473 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("runa1");

var runak = ["ᛗ", "ᛖ", "ᛈ", "ᚻ", "ᚩ", "ᛞ", "ᚳ", "ᛋ", "ᛇ", "ᚹ", "ᛠ", "ᚾ", "ᚼ", "ᚱ", "ᚲ", "ᛄ"];
var index = runak.indexOf(betu);
index = (index + 1) % runak.length;

player.SetVar("runa1", runak[index]);

}

window.Script474 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("runa1");

var runak = ["ᛗ", "ᛖ", "ᛈ", "ᚻ", "ᚩ", "ᛞ", "ᚳ", "ᛋ", "ᛇ", "ᚹ", "ᛠ", "ᚾ", "ᚼ", "ᚱ", "ᚲ", "ᛄ"];
var index = runak.indexOf(betu);
index = (index - 1 + runak.length) % runak.length;

player.SetVar("runa1", runak[index]);

}

window.Script475 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("runa2");

var runak = ["ᛗ", "ᛖ", "ᛈ", "ᚻ", "ᚩ", "ᛞ", "ᚳ", "ᛋ", "ᛇ", "ᚹ", "ᛠ", "ᚾ", "ᚼ", "ᚱ", "ᚲ", "ᛄ"];
var index = runak.indexOf(betu);
index = (index + 1) % runak.length;

player.SetVar("runa2", runak[index]);

}

window.Script476 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("runa3");

var runak = ["ᛗ", "ᛖ", "ᛈ", "ᚻ", "ᚩ", "ᛞ", "ᚳ", "ᛋ", "ᛇ", "ᚹ", "ᛠ", "ᚾ", "ᚼ", "ᚱ", "ᚲ", "ᛄ"];
var index = runak.indexOf(betu);
index = (index + 1) % runak.length;

player.SetVar("runa3", runak[index]);

}

window.Script477 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("runa4");

var runak = ["ᛗ", "ᛖ", "ᛈ", "ᚻ", "ᚩ", "ᛞ", "ᚳ", "ᛋ", "ᛇ", "ᚹ", "ᛠ", "ᚾ", "ᚼ", "ᚱ", "ᚲ", "ᛄ"];
var index = runak.indexOf(betu);
index = (index + 1) % runak.length;

player.SetVar("runa4", runak[index]);

}

window.Script478 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("runa2");

var runak = ["ᛗ", "ᛖ", "ᛈ", "ᚻ", "ᚩ", "ᛞ", "ᚳ", "ᛋ", "ᛇ", "ᚹ", "ᛠ", "ᚾ", "ᚼ", "ᚱ", "ᚲ", "ᛄ"];
var index = runak.indexOf(betu);
index = (index - 1 + runak.length) % runak.length;

player.SetVar("runa2", runak[index]);

}

window.Script479 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("runa3");

var runak = ["ᛗ", "ᛖ", "ᛈ", "ᚻ", "ᚩ", "ᛞ", "ᚳ", "ᛋ", "ᛇ", "ᚹ", "ᛠ", "ᚾ", "ᚼ", "ᚱ", "ᚲ", "ᛄ"];
var index = runak.indexOf(betu);
index = (index - 1 + runak.length) % runak.length;

player.SetVar("runa3", runak[index]);

}

window.Script480 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("runa4");

var runak = ["ᛗ", "ᛖ", "ᛈ", "ᚻ", "ᚩ", "ᛞ", "ᚳ", "ᛋ", "ᛇ", "ᚹ", "ᛠ", "ᚾ", "ᚼ", "ᚱ", "ᚲ", "ᛄ"];
var index = runak.indexOf(betu);
index = (index - 1 + runak.length) % runak.length;

player.SetVar("runa4", runak[index]);

}

window.Script481 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("betu1");

var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
var index = abc.indexOf(betu);
index = (index + 1) % abc.length;

player.SetVar("betu1", abc[index]);
}

window.Script482 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("betu1");

var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
var index = abc.indexOf(betu);
index = (index - 1 + abc.length) % abc.length;

player.SetVar("betu1", abc[index]);

}

window.Script483 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("betu2");

var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
var index = abc.indexOf(betu);
index = (index + 1) % abc.length;

player.SetVar("betu2", abc[index]);
}

window.Script484 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("betu3");

var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
var index = abc.indexOf(betu);
index = (index + 1) % abc.length;

player.SetVar("betu3", abc[index]);
}

window.Script485 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("betu4");

var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
var index = abc.indexOf(betu);
index = (index + 1) % abc.length;

player.SetVar("betu4", abc[index]);
}

window.Script486 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("betu2");

var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
var index = abc.indexOf(betu);
index = (index - 1 + abc.length) % abc.length;

player.SetVar("betu2", abc[index]);

}

window.Script487 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("betu3");

var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
var index = abc.indexOf(betu);
index = (index - 1 + abc.length) % abc.length;

player.SetVar("betu3", abc[index]);

}

window.Script488 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("betu4");

var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
var index = abc.indexOf(betu);
index = (index - 1 + abc.length) % abc.length;

player.SetVar("betu4", abc[index]);

}

window.Script489 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script490 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script491 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script492 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script493 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script494 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script495 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script496 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script497 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script498 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script499 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // iOS: csak videót lehet fullscreenre rakni
        var video = document.querySelector("video");
        if (video && video.webkitEnterFullscreen) {
            video.webkitEnterFullscreen();
        } else {
            alert("iOS-en csak videót lehet teljes képernyőre rakni.");
        }
    }
}

enterFullscreen();

}

window.Script500 = function()
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

window.Script501 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // Keresünk vagy létrehozunk egy rejtett videót
        var video = document.getElementById("hiddenFullscreenVideo");
        if (!video) {
            video = document.createElement("video");
            video.id = "hiddenFullscreenVideo";
            video.src = "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAAAAG1wNDFtcDQyaXNvbTEyMAAAAG1vb3YAAABsbXZoZAAAAAB8JgB8JgAAAAAAAGQAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABhzdHRzAAAAAAAAAAEAAAABAAAAAA=="; // 1 képkockás, üres mp4
            video.setAttribute("playsinline", "true");
            video.style.position = "absolute";
            video.style.width = "1px";
            video.style.height = "1px";
            video.style.opacity = "0";
            document.body.appendChild(video);
        }

        // Fullscreen kérés
        if (video.webkitEnterFullscreen) {
            video.play().then(() => {
                video.webkitEnterFullscreen();
            }).catch(() => {
                alert("Nem sikerült fullscreen módba lépni.");
            });
        } else {
            alert("Ez az iOS böngésző nem támogatja a fullscreen módot.");
        }
    }
}

enterFullscreen();

}

window.Script502 = function()
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

window.Script503 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "1");
}

window.Script504 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "2");
}

window.Script505 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "3");
}

window.Script506 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "4");
}

window.Script507 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "5");
}

window.Script508 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "6");
}

window.Script509 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "7");
}

window.Script510 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "8");
}

window.Script511 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "9");
}

window.Script512 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "0");
}

window.Script513 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "C");
}

window.Script514 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script515 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script516 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script517 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script518 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script519 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script520 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script521 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script522 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script523 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script524 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // iOS: csak videót lehet fullscreenre rakni
        var video = document.querySelector("video");
        if (video && video.webkitEnterFullscreen) {
            video.webkitEnterFullscreen();
        } else {
            alert("iOS-en csak videót lehet teljes képernyőre rakni.");
        }
    }
}

enterFullscreen();

}

window.Script525 = function()
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

window.Script526 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // Keresünk vagy létrehozunk egy rejtett videót
        var video = document.getElementById("hiddenFullscreenVideo");
        if (!video) {
            video = document.createElement("video");
            video.id = "hiddenFullscreenVideo";
            video.src = "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAAAAG1wNDFtcDQyaXNvbTEyMAAAAG1vb3YAAABsbXZoZAAAAAB8JgB8JgAAAAAAAGQAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABhzdHRzAAAAAAAAAAEAAAABAAAAAA=="; // 1 képkockás, üres mp4
            video.setAttribute("playsinline", "true");
            video.style.position = "absolute";
            video.style.width = "1px";
            video.style.height = "1px";
            video.style.opacity = "0";
            document.body.appendChild(video);
        }

        // Fullscreen kérés
        if (video.webkitEnterFullscreen) {
            video.play().then(() => {
                video.webkitEnterFullscreen();
            }).catch(() => {
                alert("Nem sikerült fullscreen módba lépni.");
            });
        } else {
            alert("Ez az iOS böngésző nem támogatja a fullscreen módot.");
        }
    }
}

enterFullscreen();

}

window.Script527 = function()
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

window.Script528 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "1");
}
}

window.Script529 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "2");
}
}

window.Script530 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "3");
}
}

window.Script531 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "4");
}
}

window.Script532 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "5");
}
}

window.Script533 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "6");
}
}

window.Script534 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "7");
}
}

window.Script535 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "8");
}
}

window.Script536 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "9");
}
}

window.Script537 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "0");
}
}

window.Script538 = function()
{
  var player = GetPlayer();
var text = player.GetVar("szekreny1");
player.SetVar("szekreny1", text.slice(0, -1));
}

window.Script539 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script540 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script541 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script542 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script543 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script544 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script545 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script546 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script547 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script548 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script549 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // iOS: csak videót lehet fullscreenre rakni
        var video = document.querySelector("video");
        if (video && video.webkitEnterFullscreen) {
            video.webkitEnterFullscreen();
        } else {
            alert("iOS-en csak videót lehet teljes képernyőre rakni.");
        }
    }
}

enterFullscreen();

}

window.Script550 = function()
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

window.Script551 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // Keresünk vagy létrehozunk egy rejtett videót
        var video = document.getElementById("hiddenFullscreenVideo");
        if (!video) {
            video = document.createElement("video");
            video.id = "hiddenFullscreenVideo";
            video.src = "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAAAAG1wNDFtcDQyaXNvbTEyMAAAAG1vb3YAAABsbXZoZAAAAAB8JgB8JgAAAAAAAGQAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABhzdHRzAAAAAAAAAAEAAAABAAAAAA=="; // 1 képkockás, üres mp4
            video.setAttribute("playsinline", "true");
            video.style.position = "absolute";
            video.style.width = "1px";
            video.style.height = "1px";
            video.style.opacity = "0";
            document.body.appendChild(video);
        }

        // Fullscreen kérés
        if (video.webkitEnterFullscreen) {
            video.play().then(() => {
                video.webkitEnterFullscreen();
            }).catch(() => {
                alert("Nem sikerült fullscreen módba lépni.");
            });
        } else {
            alert("Ez az iOS böngésző nem támogatja a fullscreen módot.");
        }
    }
}

enterFullscreen();

}

window.Script552 = function()
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

window.Script553 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("koordinata");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue && currentText.length === 1) {
    player.SetVar("koordinata", currentText + buttonValue);
}

}

window.Script554 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("koordinata");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue && currentText.length === 0) {
    player.SetVar("koordinata", currentText + buttonValue);
}

}

window.Script555 = function()
{
  var player = GetPlayer();
var text = player.GetVar("koordinata");

if (text.length === 3) {
    player.SetVar("koordinata", text.slice(0, -2));
} else if (text.length === 1) {
    player.SetVar("koordinata", text.slice(0, -1));
}

}

window.Script556 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "1");
}
}

window.Script557 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "2");
}
}

window.Script558 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "3");
}
}

window.Script559 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "4");
}
}

window.Script560 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "5");
}
}

window.Script561 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "6");
}
}

window.Script562 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "7");
}
}

window.Script563 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "8");
}
}

window.Script564 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "9");
}
}

window.Script565 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "0");
}
}

window.Script566 = function()
{
  var player = GetPlayer();
var text = player.GetVar("raktar");
player.SetVar("raktar", text.slice(0, -1));
}

window.Script567 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script568 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script569 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script570 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script571 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script572 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script573 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script574 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script575 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script576 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script577 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // iOS: csak videót lehet fullscreenre rakni
        var video = document.querySelector("video");
        if (video && video.webkitEnterFullscreen) {
            video.webkitEnterFullscreen();
        } else {
            alert("iOS-en csak videót lehet teljes képernyőre rakni.");
        }
    }
}

enterFullscreen();

}

window.Script578 = function()
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

window.Script579 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // Keresünk vagy létrehozunk egy rejtett videót
        var video = document.getElementById("hiddenFullscreenVideo");
        if (!video) {
            video = document.createElement("video");
            video.id = "hiddenFullscreenVideo";
            video.src = "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAAAAG1wNDFtcDQyaXNvbTEyMAAAAG1vb3YAAABsbXZoZAAAAAB8JgB8JgAAAAAAAGQAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABhzdHRzAAAAAAAAAAEAAAABAAAAAA=="; // 1 képkockás, üres mp4
            video.setAttribute("playsinline", "true");
            video.style.position = "absolute";
            video.style.width = "1px";
            video.style.height = "1px";
            video.style.opacity = "0";
            document.body.appendChild(video);
        }

        // Fullscreen kérés
        if (video.webkitEnterFullscreen) {
            video.play().then(() => {
                video.webkitEnterFullscreen();
            }).catch(() => {
                alert("Nem sikerült fullscreen módba lépni.");
            });
        } else {
            alert("Ez az iOS böngésző nem támogatja a fullscreen módot.");
        }
    }
}

enterFullscreen();

}

window.Script580 = function()
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

window.Script581 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("szam1");

var abc = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var index = abc.indexOf(betu);
index = (index + 1) % abc.length;

player.SetVar("szam1", abc[index]);
}

window.Script582 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("szam2");

var abc = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var index = abc.indexOf(betu);
index = (index + 1) % abc.length;

player.SetVar("szam2", abc[index]);
}

window.Script583 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("szam3");

var abc = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var index = abc.indexOf(betu);
index = (index + 1) % abc.length;

player.SetVar("szam3", abc[index]);
}

window.Script584 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("szam4");

var abc = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var index = abc.indexOf(betu);
index = (index + 1) % abc.length;

player.SetVar("szam4", abc[index]);
}

window.Script585 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("szam1");

var abc = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var index = abc.indexOf(betu);
index = (index - 1 + abc.length) % abc.length;

player.SetVar("szam1", abc[index]);
}

window.Script586 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("szam2");

var abc = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var index = abc.indexOf(betu);
index = (index - 1 + abc.length) % abc.length;

player.SetVar("szam2", abc[index]);
}

window.Script587 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("szam3");

var abc = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var index = abc.indexOf(betu);
index = (index - 1 + abc.length) % abc.length;

player.SetVar("szam3", abc[index]);
}

window.Script588 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("szam4");

var abc = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var index = abc.indexOf(betu);
index = (index - 1 + abc.length) % abc.length;

player.SetVar("szam4", abc[index]);
}

window.Script589 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script590 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script591 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script592 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script593 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script594 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script595 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script596 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script597 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script598 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script599 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // iOS: csak videót lehet fullscreenre rakni
        var video = document.querySelector("video");
        if (video && video.webkitEnterFullscreen) {
            video.webkitEnterFullscreen();
        } else {
            alert("iOS-en csak videót lehet teljes képernyőre rakni.");
        }
    }
}

enterFullscreen();

}

window.Script600 = function()
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

window.Script601 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // Keresünk vagy létrehozunk egy rejtett videót
        var video = document.getElementById("hiddenFullscreenVideo");
        if (!video) {
            video = document.createElement("video");
            video.id = "hiddenFullscreenVideo";
            video.src = "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAAAAG1wNDFtcDQyaXNvbTEyMAAAAG1vb3YAAABsbXZoZAAAAAB8JgB8JgAAAAAAAGQAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABhzdHRzAAAAAAAAAAEAAAABAAAAAA=="; // 1 képkockás, üres mp4
            video.setAttribute("playsinline", "true");
            video.style.position = "absolute";
            video.style.width = "1px";
            video.style.height = "1px";
            video.style.opacity = "0";
            document.body.appendChild(video);
        }

        // Fullscreen kérés
        if (video.webkitEnterFullscreen) {
            video.play().then(() => {
                video.webkitEnterFullscreen();
            }).catch(() => {
                alert("Nem sikerült fullscreen módba lépni.");
            });
        } else {
            alert("Ez az iOS böngésző nem támogatja a fullscreen módot.");
        }
    }
}

enterFullscreen();

}

window.Script602 = function()
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

window.Script603 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("utvonal"); 

player.SetVar("utvonal", currentText + "◀ ");

}

window.Script604 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("utvonal"); 

player.SetVar("utvonal", currentText + "▲ ");

}

window.Script605 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("utvonal"); 

player.SetVar("utvonal", currentText + "▶ ");

}

window.Script606 = function()
{
  var player = GetPlayer();
var text = player.GetVar("utvonal");
player.SetVar("utvonal", text.slice(0, -2));
}

window.Script607 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script608 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script609 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script610 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script611 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script612 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script613 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script614 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script615 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script616 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script617 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // iOS: csak videót lehet fullscreenre rakni
        var video = document.querySelector("video");
        if (video && video.webkitEnterFullscreen) {
            video.webkitEnterFullscreen();
        } else {
            alert("iOS-en csak videót lehet teljes képernyőre rakni.");
        }
    }
}

enterFullscreen();

}

window.Script618 = function()
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

window.Script619 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // Keresünk vagy létrehozunk egy rejtett videót
        var video = document.getElementById("hiddenFullscreenVideo");
        if (!video) {
            video = document.createElement("video");
            video.id = "hiddenFullscreenVideo";
            video.src = "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAAAAG1wNDFtcDQyaXNvbTEyMAAAAG1vb3YAAABsbXZoZAAAAAB8JgB8JgAAAAAAAGQAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABhzdHRzAAAAAAAAAAEAAAABAAAAAA=="; // 1 képkockás, üres mp4
            video.setAttribute("playsinline", "true");
            video.style.position = "absolute";
            video.style.width = "1px";
            video.style.height = "1px";
            video.style.opacity = "0";
            document.body.appendChild(video);
        }

        // Fullscreen kérés
        if (video.webkitEnterFullscreen) {
            video.play().then(() => {
                video.webkitEnterFullscreen();
            }).catch(() => {
                alert("Nem sikerült fullscreen módba lépni.");
            });
        } else {
            alert("Ez az iOS böngésző nem támogatja a fullscreen módot.");
        }
    }
}

enterFullscreen();

}

window.Script620 = function()
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

window.Script621 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script622 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script623 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script624 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script625 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script626 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script627 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script628 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script629 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script630 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script631 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // iOS: csak videót lehet fullscreenre rakni
        var video = document.querySelector("video");
        if (video && video.webkitEnterFullscreen) {
            video.webkitEnterFullscreen();
        } else {
            alert("iOS-en csak videót lehet teljes képernyőre rakni.");
        }
    }
}

enterFullscreen();

}

window.Script632 = function()
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

window.Script633 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // Keresünk vagy létrehozunk egy rejtett videót
        var video = document.getElementById("hiddenFullscreenVideo");
        if (!video) {
            video = document.createElement("video");
            video.id = "hiddenFullscreenVideo";
            video.src = "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAAAAG1wNDFtcDQyaXNvbTEyMAAAAG1vb3YAAABsbXZoZAAAAAB8JgB8JgAAAAAAAGQAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABhzdHRzAAAAAAAAAAEAAAABAAAAAA=="; // 1 képkockás, üres mp4
            video.setAttribute("playsinline", "true");
            video.style.position = "absolute";
            video.style.width = "1px";
            video.style.height = "1px";
            video.style.opacity = "0";
            document.body.appendChild(video);
        }

        // Fullscreen kérés
        if (video.webkitEnterFullscreen) {
            video.play().then(() => {
                video.webkitEnterFullscreen();
            }).catch(() => {
                alert("Nem sikerült fullscreen módba lépni.");
            });
        } else {
            alert("Ez az iOS böngésző nem támogatja a fullscreen módot.");
        }
    }
}

enterFullscreen();

}

window.Script634 = function()
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

window.Script635 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script636 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script637 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script638 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script639 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script640 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script641 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script642 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script643 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script644 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script645 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // iOS: csak videót lehet fullscreenre rakni
        var video = document.querySelector("video");
        if (video && video.webkitEnterFullscreen) {
            video.webkitEnterFullscreen();
        } else {
            alert("iOS-en csak videót lehet teljes képernyőre rakni.");
        }
    }
}

enterFullscreen();

}

window.Script646 = function()
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

window.Script647 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // Keresünk vagy létrehozunk egy rejtett videót
        var video = document.getElementById("hiddenFullscreenVideo");
        if (!video) {
            video = document.createElement("video");
            video.id = "hiddenFullscreenVideo";
            video.src = "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAAAAG1wNDFtcDQyaXNvbTEyMAAAAG1vb3YAAABsbXZoZAAAAAB8JgB8JgAAAAAAAGQAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABhzdHRzAAAAAAAAAAEAAAABAAAAAA=="; // 1 képkockás, üres mp4
            video.setAttribute("playsinline", "true");
            video.style.position = "absolute";
            video.style.width = "1px";
            video.style.height = "1px";
            video.style.opacity = "0";
            document.body.appendChild(video);
        }

        // Fullscreen kérés
        if (video.webkitEnterFullscreen) {
            video.play().then(() => {
                video.webkitEnterFullscreen();
            }).catch(() => {
                alert("Nem sikerült fullscreen módba lépni.");
            });
        } else {
            alert("Ez az iOS böngésző nem támogatja a fullscreen módot.");
        }
    }
}

enterFullscreen();

}

window.Script648 = function()
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

window.Script649 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script650 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script651 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script652 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script653 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script654 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script655 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script656 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script657 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script658 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script659 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // iOS: csak videót lehet fullscreenre rakni
        var video = document.querySelector("video");
        if (video && video.webkitEnterFullscreen) {
            video.webkitEnterFullscreen();
        } else {
            alert("iOS-en csak videót lehet teljes képernyőre rakni.");
        }
    }
}

enterFullscreen();

}

window.Script660 = function()
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

window.Script661 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // Keresünk vagy létrehozunk egy rejtett videót
        var video = document.getElementById("hiddenFullscreenVideo");
        if (!video) {
            video = document.createElement("video");
            video.id = "hiddenFullscreenVideo";
            video.src = "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAAAAG1wNDFtcDQyaXNvbTEyMAAAAG1vb3YAAABsbXZoZAAAAAB8JgB8JgAAAAAAAGQAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABhzdHRzAAAAAAAAAAEAAAABAAAAAA=="; // 1 képkockás, üres mp4
            video.setAttribute("playsinline", "true");
            video.style.position = "absolute";
            video.style.width = "1px";
            video.style.height = "1px";
            video.style.opacity = "0";
            document.body.appendChild(video);
        }

        // Fullscreen kérés
        if (video.webkitEnterFullscreen) {
            video.play().then(() => {
                video.webkitEnterFullscreen();
            }).catch(() => {
                alert("Nem sikerült fullscreen módba lépni.");
            });
        } else {
            alert("Ez az iOS böngésző nem támogatja a fullscreen módot.");
        }
    }
}

enterFullscreen();

}

window.Script662 = function()
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

window.Script663 = function()
{
  var player = GetPlayer();
var text = player.GetVar("letesitmeny");
player.SetVar("letesitmeny", text.slice(0, -1));
}

window.Script664 = function()
{
  var player = GetPlayer();
var text = player.GetVar("hazszam");
player.SetVar("hazszam", text.slice(0, -1));
}

window.Script665 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "1");
}

window.Script666 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "2");
}

window.Script667 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "3");
}

window.Script668 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "4");
}

window.Script669 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "5");
}

window.Script670 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "6");
}

window.Script671 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "7");
}

window.Script672 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "8");
}

window.Script673 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "9");
}

window.Script674 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "0");
}

window.Script675 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script676 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script677 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script678 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script679 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script680 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script681 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script682 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script683 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script684 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script685 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script686 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script687 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script688 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script689 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script690 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script691 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script692 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script693 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script694 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script695 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script696 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script697 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script698 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script699 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script700 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script701 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script702 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + " ");

}

window.Script703 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script704 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script705 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script706 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script707 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script708 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script709 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script710 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script711 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "1");
}

window.Script712 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "2");
}

window.Script713 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "3");
}

window.Script714 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "4");
}

window.Script715 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "5");
}

window.Script716 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "6");
}

window.Script717 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "7");
}

window.Script718 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "8");
}

window.Script719 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "9");
}

window.Script720 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "0");
}

window.Script721 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script722 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script723 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script724 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script725 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script726 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script727 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script728 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script729 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script730 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script731 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script732 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script733 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script734 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script735 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script736 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script737 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script738 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script739 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script740 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script741 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script742 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script743 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script744 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script745 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script746 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script747 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script748 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script749 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script750 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script751 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script752 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script753 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script754 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script755 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script756 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script757 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script758 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script759 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script760 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script761 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script762 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script763 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script764 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script765 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script766 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script767 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script768 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script769 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script770 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script771 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // iOS: csak videót lehet fullscreenre rakni
        var video = document.querySelector("video");
        if (video && video.webkitEnterFullscreen) {
            video.webkitEnterFullscreen();
        } else {
            alert("iOS-en csak videót lehet teljes képernyőre rakni.");
        }
    }
}

enterFullscreen();

}

window.Script772 = function()
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

window.Script773 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // Keresünk vagy létrehozunk egy rejtett videót
        var video = document.getElementById("hiddenFullscreenVideo");
        if (!video) {
            video = document.createElement("video");
            video.id = "hiddenFullscreenVideo";
            video.src = "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAAAAG1wNDFtcDQyaXNvbTEyMAAAAG1vb3YAAABsbXZoZAAAAAB8JgB8JgAAAAAAAGQAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABhzdHRzAAAAAAAAAAEAAAABAAAAAA=="; // 1 képkockás, üres mp4
            video.setAttribute("playsinline", "true");
            video.style.position = "absolute";
            video.style.width = "1px";
            video.style.height = "1px";
            video.style.opacity = "0";
            document.body.appendChild(video);
        }

        // Fullscreen kérés
        if (video.webkitEnterFullscreen) {
            video.play().then(() => {
                video.webkitEnterFullscreen();
            }).catch(() => {
                alert("Nem sikerült fullscreen módba lépni.");
            });
        } else {
            alert("Ez az iOS böngésző nem támogatja a fullscreen módot.");
        }
    }
}

enterFullscreen();

}

window.Script774 = function()
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

window.Script775 = function()
{
  var player = GetPlayer();
var text = player.GetVar("letesitmeny");
player.SetVar("letesitmeny", text.slice(0, -1));
}

window.Script776 = function()
{
  var player = GetPlayer();
var text = player.GetVar("hazszam");
player.SetVar("hazszam", text.slice(0, -1));
}

window.Script777 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "1");
}

window.Script778 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "2");
}

window.Script779 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "3");
}

window.Script780 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "4");
}

window.Script781 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "5");
}

window.Script782 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "6");
}

window.Script783 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "7");
}

window.Script784 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "8");
}

window.Script785 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "9");
}

window.Script786 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "0");
}

window.Script787 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script788 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script789 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script790 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script791 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script792 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script793 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script794 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script795 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script796 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script797 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script798 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script799 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script800 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script801 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script802 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script803 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script804 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script805 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script806 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script807 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script808 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script809 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script810 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script811 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script812 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script813 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script814 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + " ");

}

window.Script815 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script816 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script817 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script818 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script819 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script820 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script821 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script822 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script823 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "1");
}

window.Script824 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "2");
}

window.Script825 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "3");
}

window.Script826 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "4");
}

window.Script827 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "5");
}

window.Script828 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "6");
}

window.Script829 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "7");
}

window.Script830 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "8");
}

window.Script831 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "9");
}

window.Script832 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "0");
}

window.Script833 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script834 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script835 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script836 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script837 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script838 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script839 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script840 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script841 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script842 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script843 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script844 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script845 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script846 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script847 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script848 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script849 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script850 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script851 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script852 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script853 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script854 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script855 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script856 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script857 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script858 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script859 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script860 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script861 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script862 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script863 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script864 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script865 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script866 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script867 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script868 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script869 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script870 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script871 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script872 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script873 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script874 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script875 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script876 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script877 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script878 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script879 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script880 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script881 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script882 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script883 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // iOS: csak videót lehet fullscreenre rakni
        var video = document.querySelector("video");
        if (video && video.webkitEnterFullscreen) {
            video.webkitEnterFullscreen();
        } else {
            alert("iOS-en csak videót lehet teljes képernyőre rakni.");
        }
    }
}

enterFullscreen();

}

window.Script884 = function()
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

window.Script885 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // Keresünk vagy létrehozunk egy rejtett videót
        var video = document.getElementById("hiddenFullscreenVideo");
        if (!video) {
            video = document.createElement("video");
            video.id = "hiddenFullscreenVideo";
            video.src = "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAAAAG1wNDFtcDQyaXNvbTEyMAAAAG1vb3YAAABsbXZoZAAAAAB8JgB8JgAAAAAAAGQAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABhzdHRzAAAAAAAAAAEAAAABAAAAAA=="; // 1 képkockás, üres mp4
            video.setAttribute("playsinline", "true");
            video.style.position = "absolute";
            video.style.width = "1px";
            video.style.height = "1px";
            video.style.opacity = "0";
            document.body.appendChild(video);
        }

        // Fullscreen kérés
        if (video.webkitEnterFullscreen) {
            video.play().then(() => {
                video.webkitEnterFullscreen();
            }).catch(() => {
                alert("Nem sikerült fullscreen módba lépni.");
            });
        } else {
            alert("Ez az iOS böngésző nem támogatja a fullscreen módot.");
        }
    }
}

enterFullscreen();

}

window.Script886 = function()
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

window.Script887 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script888 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script889 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script890 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script891 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script892 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script893 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script894 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script895 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script896 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script897 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // iOS: csak videót lehet fullscreenre rakni
        var video = document.querySelector("video");
        if (video && video.webkitEnterFullscreen) {
            video.webkitEnterFullscreen();
        } else {
            alert("iOS-en csak videót lehet teljes képernyőre rakni.");
        }
    }
}

enterFullscreen();

}

window.Script898 = function()
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

window.Script899 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // Keresünk vagy létrehozunk egy rejtett videót
        var video = document.getElementById("hiddenFullscreenVideo");
        if (!video) {
            video = document.createElement("video");
            video.id = "hiddenFullscreenVideo";
            video.src = "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAAAAG1wNDFtcDQyaXNvbTEyMAAAAG1vb3YAAABsbXZoZAAAAAB8JgB8JgAAAAAAAGQAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABhzdHRzAAAAAAAAAAEAAAABAAAAAA=="; // 1 képkockás, üres mp4
            video.setAttribute("playsinline", "true");
            video.style.position = "absolute";
            video.style.width = "1px";
            video.style.height = "1px";
            video.style.opacity = "0";
            document.body.appendChild(video);
        }

        // Fullscreen kérés
        if (video.webkitEnterFullscreen) {
            video.play().then(() => {
                video.webkitEnterFullscreen();
            }).catch(() => {
                alert("Nem sikerült fullscreen módba lépni.");
            });
        } else {
            alert("Ez az iOS böngésző nem támogatja a fullscreen módot.");
        }
    }
}

enterFullscreen();

}

window.Script900 = function()
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

window.Script901 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script902 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script903 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script904 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script905 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script906 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script907 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script908 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script909 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script910 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script911 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // iOS: csak videót lehet fullscreenre rakni
        var video = document.querySelector("video");
        if (video && video.webkitEnterFullscreen) {
            video.webkitEnterFullscreen();
        } else {
            alert("iOS-en csak videót lehet teljes képernyőre rakni.");
        }
    }
}

enterFullscreen();

}

window.Script912 = function()
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

window.Script913 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // Keresünk vagy létrehozunk egy rejtett videót
        var video = document.getElementById("hiddenFullscreenVideo");
        if (!video) {
            video = document.createElement("video");
            video.id = "hiddenFullscreenVideo";
            video.src = "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAAAAG1wNDFtcDQyaXNvbTEyMAAAAG1vb3YAAABsbXZoZAAAAAB8JgB8JgAAAAAAAGQAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABhzdHRzAAAAAAAAAAEAAAABAAAAAA=="; // 1 képkockás, üres mp4
            video.setAttribute("playsinline", "true");
            video.style.position = "absolute";
            video.style.width = "1px";
            video.style.height = "1px";
            video.style.opacity = "0";
            document.body.appendChild(video);
        }

        // Fullscreen kérés
        if (video.webkitEnterFullscreen) {
            video.play().then(() => {
                video.webkitEnterFullscreen();
            }).catch(() => {
                alert("Nem sikerült fullscreen módba lépni.");
            });
        } else {
            alert("Ez az iOS böngésző nem támogatja a fullscreen módot.");
        }
    }
}

enterFullscreen();

}

window.Script914 = function()
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

window.Script915 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "1");
}

window.Script916 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "2");
}

window.Script917 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "3");
}

window.Script918 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "4");
}

window.Script919 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "5");
}

window.Script920 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "6");
}

window.Script921 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "7");
}

window.Script922 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "8");
}

window.Script923 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "9");
}

window.Script924 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "0");
}

window.Script925 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script926 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script927 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script928 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script929 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script930 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script931 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script932 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script933 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script934 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script935 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script936 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script937 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script938 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script939 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script940 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script941 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script942 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script943 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script944 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script945 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script946 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script947 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script948 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script949 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script950 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script951 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script952 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + " ");

}

window.Script953 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script954 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script955 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script956 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script957 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script958 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script959 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script960 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script961 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "1");
}

window.Script962 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "2");
}

window.Script963 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "3");
}

window.Script964 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "4");
}

window.Script965 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "5");
}

window.Script966 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "6");
}

window.Script967 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "7");
}

window.Script968 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "8");
}

window.Script969 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "9");
}

window.Script970 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "0");
}

window.Script971 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script972 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script973 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script974 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script975 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script976 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script977 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script978 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script979 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script980 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script981 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script982 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script983 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script984 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script985 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script986 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script987 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script988 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script989 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script990 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script991 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script992 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script993 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script994 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script995 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script996 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script997 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script998 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script999 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script1000 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script1001 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script1002 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script1003 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script1004 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script1005 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script1006 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script1007 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script1008 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script1009 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script1010 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script1011 = function()
{
  var player = GetPlayer();
var text = player.GetVar("hazszam");
player.SetVar("hazszam", text.slice(0, -1));
}

window.Script1012 = function()
{
  var player = GetPlayer();
var text = player.GetVar("letesitmeny");
player.SetVar("letesitmeny", text.slice(0, -1));
}

window.Script1013 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script1014 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script1015 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script1016 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script1017 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script1018 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script1019 = function()
{
  var player = GetPlayer();
var text = player.GetVar("vezeteknev");
player.SetVar("vezeteknev", text.slice(0, -1));
}

window.Script1020 = function()
{
  var player = GetPlayer();
var text = player.GetVar("keresztnev");
player.SetVar("keresztnev", text.slice(0, -1));
}

window.Script1021 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script1022 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script1023 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script1024 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script1025 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script1026 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script1027 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script1028 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script1029 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script1030 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script1031 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script1032 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script1033 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script1034 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script1035 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script1036 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script1037 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script1038 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script1039 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script1040 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script1041 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script1042 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script1043 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script1044 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script1045 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script1046 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script1047 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script1048 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script1049 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script1050 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script1051 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script1052 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script1053 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script1054 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script1055 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script1056 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script1057 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script1058 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script1059 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script1060 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script1061 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script1062 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script1063 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script1064 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script1065 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script1066 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script1067 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script1068 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script1069 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script1070 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script1071 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script1072 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script1073 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script1074 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script1075 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script1076 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script1077 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script1078 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script1079 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script1080 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script1081 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script1082 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script1083 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("vezeteknev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("vezeteknev", currentText + buttonValue);
}
}

window.Script1084 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("keresztnev");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("keresztnev", currentText + buttonValue);
}
}

window.Script1085 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script1086 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script1087 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script1088 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script1089 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script1090 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script1091 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script1092 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script1093 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script1094 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script1095 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // iOS: csak videót lehet fullscreenre rakni
        var video = document.querySelector("video");
        if (video && video.webkitEnterFullscreen) {
            video.webkitEnterFullscreen();
        } else {
            alert("iOS-en csak videót lehet teljes képernyőre rakni.");
        }
    }
}

enterFullscreen();

}

window.Script1096 = function()
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

window.Script1097 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // Keresünk vagy létrehozunk egy rejtett videót
        var video = document.getElementById("hiddenFullscreenVideo");
        if (!video) {
            video = document.createElement("video");
            video.id = "hiddenFullscreenVideo";
            video.src = "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAAAAG1wNDFtcDQyaXNvbTEyMAAAAG1vb3YAAABsbXZoZAAAAAB8JgB8JgAAAAAAAGQAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABhzdHRzAAAAAAAAAAEAAAABAAAAAA=="; // 1 képkockás, üres mp4
            video.setAttribute("playsinline", "true");
            video.style.position = "absolute";
            video.style.width = "1px";
            video.style.height = "1px";
            video.style.opacity = "0";
            document.body.appendChild(video);
        }

        // Fullscreen kérés
        if (video.webkitEnterFullscreen) {
            video.play().then(() => {
                video.webkitEnterFullscreen();
            }).catch(() => {
                alert("Nem sikerült fullscreen módba lépni.");
            });
        } else {
            alert("Ez az iOS böngésző nem támogatja a fullscreen módot.");
        }
    }
}

enterFullscreen();

}

window.Script1098 = function()
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

window.Script1099 = function()
{
  var player = GetPlayer();
var text = player.GetVar("szinvalto");

var emojis = ["⚪", "🔴", "🟡"];
for (var i = 0; i < emojis.length; i++) {
    if (text.endsWith(emojis[i])) {
        text = text.slice(0, -emojis[i].length);
        break;
    }
}

player.SetVar("szinvalto", text);

}

window.Script1100 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szinvalto"); 
player.SetVar("szinvalto", currentText + "🟡");
}

window.Script1101 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szinvalto"); 
player.SetVar("szinvalto", currentText + "🔴");
}

window.Script1102 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szinvalto"); 
player.SetVar("szinvalto", currentText + "⚪");
}

window.Script1103 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script1104 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script1105 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script1106 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script1107 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script1108 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script1109 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script1110 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script1111 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script1112 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script1113 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // iOS: csak videót lehet fullscreenre rakni
        var video = document.querySelector("video");
        if (video && video.webkitEnterFullscreen) {
            video.webkitEnterFullscreen();
        } else {
            alert("iOS-en csak videót lehet teljes képernyőre rakni.");
        }
    }
}

enterFullscreen();

}

window.Script1114 = function()
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

window.Script1115 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // Keresünk vagy létrehozunk egy rejtett videót
        var video = document.getElementById("hiddenFullscreenVideo");
        if (!video) {
            video = document.createElement("video");
            video.id = "hiddenFullscreenVideo";
            video.src = "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAAAAG1wNDFtcDQyaXNvbTEyMAAAAG1vb3YAAABsbXZoZAAAAAB8JgB8JgAAAAAAAGQAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABhzdHRzAAAAAAAAAAEAAAABAAAAAA=="; // 1 képkockás, üres mp4
            video.setAttribute("playsinline", "true");
            video.style.position = "absolute";
            video.style.width = "1px";
            video.style.height = "1px";
            video.style.opacity = "0";
            document.body.appendChild(video);
        }

        // Fullscreen kérés
        if (video.webkitEnterFullscreen) {
            video.play().then(() => {
                video.webkitEnterFullscreen();
            }).catch(() => {
                alert("Nem sikerült fullscreen módba lépni.");
            });
        } else {
            alert("Ez az iOS böngésző nem támogatja a fullscreen módot.");
        }
    }
}

enterFullscreen();

}

window.Script1116 = function()
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

window.Script1117 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("runa1");

var runak = ["ᛗ", "ᛖ", "ᛈ", "ᚻ", "ᚩ", "ᛞ", "ᚳ", "ᛋ", "ᛇ", "ᚹ", "ᛠ", "ᚾ", "ᚼ", "ᚱ", "ᚲ", "ᛄ"];
var index = runak.indexOf(betu);
index = (index + 1) % runak.length;

player.SetVar("runa1", runak[index]);

}

window.Script1118 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("runa1");

var runak = ["ᛗ", "ᛖ", "ᛈ", "ᚻ", "ᚩ", "ᛞ", "ᚳ", "ᛋ", "ᛇ", "ᚹ", "ᛠ", "ᚾ", "ᚼ", "ᚱ", "ᚲ", "ᛄ"];
var index = runak.indexOf(betu);
index = (index - 1 + runak.length) % runak.length;

player.SetVar("runa1", runak[index]);

}

window.Script1119 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("runa2");

var runak = ["ᛗ", "ᛖ", "ᛈ", "ᚻ", "ᚩ", "ᛞ", "ᚳ", "ᛋ", "ᛇ", "ᚹ", "ᛠ", "ᚾ", "ᚼ", "ᚱ", "ᚲ", "ᛄ"];
var index = runak.indexOf(betu);
index = (index + 1) % runak.length;

player.SetVar("runa2", runak[index]);

}

window.Script1120 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("runa3");

var runak = ["ᛗ", "ᛖ", "ᛈ", "ᚻ", "ᚩ", "ᛞ", "ᚳ", "ᛋ", "ᛇ", "ᚹ", "ᛠ", "ᚾ", "ᚼ", "ᚱ", "ᚲ", "ᛄ"];
var index = runak.indexOf(betu);
index = (index + 1) % runak.length;

player.SetVar("runa3", runak[index]);

}

window.Script1121 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("runa4");

var runak = ["ᛗ", "ᛖ", "ᛈ", "ᚻ", "ᚩ", "ᛞ", "ᚳ", "ᛋ", "ᛇ", "ᚹ", "ᛠ", "ᚾ", "ᚼ", "ᚱ", "ᚲ", "ᛄ"];
var index = runak.indexOf(betu);
index = (index + 1) % runak.length;

player.SetVar("runa4", runak[index]);

}

window.Script1122 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("runa2");

var runak = ["ᛗ", "ᛖ", "ᛈ", "ᚻ", "ᚩ", "ᛞ", "ᚳ", "ᛋ", "ᛇ", "ᚹ", "ᛠ", "ᚾ", "ᚼ", "ᚱ", "ᚲ", "ᛄ"];
var index = runak.indexOf(betu);
index = (index - 1 + runak.length) % runak.length;

player.SetVar("runa2", runak[index]);

}

window.Script1123 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("runa3");

var runak = ["ᛗ", "ᛖ", "ᛈ", "ᚻ", "ᚩ", "ᛞ", "ᚳ", "ᛋ", "ᛇ", "ᚹ", "ᛠ", "ᚾ", "ᚼ", "ᚱ", "ᚲ", "ᛄ"];
var index = runak.indexOf(betu);
index = (index - 1 + runak.length) % runak.length;

player.SetVar("runa3", runak[index]);

}

window.Script1124 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("runa4");

var runak = ["ᛗ", "ᛖ", "ᛈ", "ᚻ", "ᚩ", "ᛞ", "ᚳ", "ᛋ", "ᛇ", "ᚹ", "ᛠ", "ᚾ", "ᚼ", "ᚱ", "ᚲ", "ᛄ"];
var index = runak.indexOf(betu);
index = (index - 1 + runak.length) % runak.length;

player.SetVar("runa4", runak[index]);

}

window.Script1125 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("betu1");

var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
var index = abc.indexOf(betu);
index = (index + 1) % abc.length;

player.SetVar("betu1", abc[index]);
}

window.Script1126 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("betu1");

var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
var index = abc.indexOf(betu);
index = (index - 1 + abc.length) % abc.length;

player.SetVar("betu1", abc[index]);

}

window.Script1127 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("betu2");

var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
var index = abc.indexOf(betu);
index = (index + 1) % abc.length;

player.SetVar("betu2", abc[index]);
}

window.Script1128 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("betu3");

var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
var index = abc.indexOf(betu);
index = (index + 1) % abc.length;

player.SetVar("betu3", abc[index]);
}

window.Script1129 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("betu4");

var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
var index = abc.indexOf(betu);
index = (index + 1) % abc.length;

player.SetVar("betu4", abc[index]);
}

window.Script1130 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("betu2");

var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
var index = abc.indexOf(betu);
index = (index - 1 + abc.length) % abc.length;

player.SetVar("betu2", abc[index]);

}

window.Script1131 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("betu3");

var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
var index = abc.indexOf(betu);
index = (index - 1 + abc.length) % abc.length;

player.SetVar("betu3", abc[index]);

}

window.Script1132 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("betu4");

var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
var index = abc.indexOf(betu);
index = (index - 1 + abc.length) % abc.length;

player.SetVar("betu4", abc[index]);

}

window.Script1133 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script1134 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script1135 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script1136 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script1137 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script1138 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script1139 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script1140 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script1141 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script1142 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script1143 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // iOS: csak videót lehet fullscreenre rakni
        var video = document.querySelector("video");
        if (video && video.webkitEnterFullscreen) {
            video.webkitEnterFullscreen();
        } else {
            alert("iOS-en csak videót lehet teljes képernyőre rakni.");
        }
    }
}

enterFullscreen();

}

window.Script1144 = function()
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

window.Script1145 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // Keresünk vagy létrehozunk egy rejtett videót
        var video = document.getElementById("hiddenFullscreenVideo");
        if (!video) {
            video = document.createElement("video");
            video.id = "hiddenFullscreenVideo";
            video.src = "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAAAAG1wNDFtcDQyaXNvbTEyMAAAAG1vb3YAAABsbXZoZAAAAAB8JgB8JgAAAAAAAGQAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABhzdHRzAAAAAAAAAAEAAAABAAAAAA=="; // 1 képkockás, üres mp4
            video.setAttribute("playsinline", "true");
            video.style.position = "absolute";
            video.style.width = "1px";
            video.style.height = "1px";
            video.style.opacity = "0";
            document.body.appendChild(video);
        }

        // Fullscreen kérés
        if (video.webkitEnterFullscreen) {
            video.play().then(() => {
                video.webkitEnterFullscreen();
            }).catch(() => {
                alert("Nem sikerült fullscreen módba lépni.");
            });
        } else {
            alert("Ez az iOS böngésző nem támogatja a fullscreen módot.");
        }
    }
}

enterFullscreen();

}

window.Script1146 = function()
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

window.Script1147 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "1");
}

window.Script1148 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "2");
}

window.Script1149 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "3");
}

window.Script1150 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "4");
}

window.Script1151 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "5");
}

window.Script1152 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "6");
}

window.Script1153 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "7");
}

window.Script1154 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "8");
}

window.Script1155 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "9");
}

window.Script1156 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "0");
}

window.Script1157 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "C");
}

window.Script1158 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script1159 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script1160 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script1161 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script1162 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script1163 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script1164 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script1165 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script1166 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script1167 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script1168 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // iOS: csak videót lehet fullscreenre rakni
        var video = document.querySelector("video");
        if (video && video.webkitEnterFullscreen) {
            video.webkitEnterFullscreen();
        } else {
            alert("iOS-en csak videót lehet teljes képernyőre rakni.");
        }
    }
}

enterFullscreen();

}

window.Script1169 = function()
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

window.Script1170 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // Keresünk vagy létrehozunk egy rejtett videót
        var video = document.getElementById("hiddenFullscreenVideo");
        if (!video) {
            video = document.createElement("video");
            video.id = "hiddenFullscreenVideo";
            video.src = "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAAAAG1wNDFtcDQyaXNvbTEyMAAAAG1vb3YAAABsbXZoZAAAAAB8JgB8JgAAAAAAAGQAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABhzdHRzAAAAAAAAAAEAAAABAAAAAA=="; // 1 képkockás, üres mp4
            video.setAttribute("playsinline", "true");
            video.style.position = "absolute";
            video.style.width = "1px";
            video.style.height = "1px";
            video.style.opacity = "0";
            document.body.appendChild(video);
        }

        // Fullscreen kérés
        if (video.webkitEnterFullscreen) {
            video.play().then(() => {
                video.webkitEnterFullscreen();
            }).catch(() => {
                alert("Nem sikerült fullscreen módba lépni.");
            });
        } else {
            alert("Ez az iOS böngésző nem támogatja a fullscreen módot.");
        }
    }
}

enterFullscreen();

}

window.Script1171 = function()
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

window.Script1172 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "1");
}
}

window.Script1173 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "2");
}
}

window.Script1174 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "3");
}
}

window.Script1175 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "4");
}
}

window.Script1176 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "5");
}
}

window.Script1177 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "6");
}
}

window.Script1178 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "7");
}
}

window.Script1179 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "8");
}
}

window.Script1180 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "9");
}
}

window.Script1181 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "0");
}
}

window.Script1182 = function()
{
  var player = GetPlayer();
var text = player.GetVar("szekreny1");
player.SetVar("szekreny1", text.slice(0, -1));
}

window.Script1183 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script1184 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script1185 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script1186 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script1187 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script1188 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script1189 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script1190 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script1191 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script1192 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script1193 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // iOS: csak videót lehet fullscreenre rakni
        var video = document.querySelector("video");
        if (video && video.webkitEnterFullscreen) {
            video.webkitEnterFullscreen();
        } else {
            alert("iOS-en csak videót lehet teljes képernyőre rakni.");
        }
    }
}

enterFullscreen();

}

window.Script1194 = function()
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

window.Script1195 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // Keresünk vagy létrehozunk egy rejtett videót
        var video = document.getElementById("hiddenFullscreenVideo");
        if (!video) {
            video = document.createElement("video");
            video.id = "hiddenFullscreenVideo";
            video.src = "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAAAAG1wNDFtcDQyaXNvbTEyMAAAAG1vb3YAAABsbXZoZAAAAAB8JgB8JgAAAAAAAGQAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABhzdHRzAAAAAAAAAAEAAAABAAAAAA=="; // 1 képkockás, üres mp4
            video.setAttribute("playsinline", "true");
            video.style.position = "absolute";
            video.style.width = "1px";
            video.style.height = "1px";
            video.style.opacity = "0";
            document.body.appendChild(video);
        }

        // Fullscreen kérés
        if (video.webkitEnterFullscreen) {
            video.play().then(() => {
                video.webkitEnterFullscreen();
            }).catch(() => {
                alert("Nem sikerült fullscreen módba lépni.");
            });
        } else {
            alert("Ez az iOS böngésző nem támogatja a fullscreen módot.");
        }
    }
}

enterFullscreen();

}

window.Script1196 = function()
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

window.Script1197 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("koordinata");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue && currentText.length === 1) {
    player.SetVar("koordinata", currentText + buttonValue);
}

}

window.Script1198 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("koordinata");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue && currentText.length === 0) {
    player.SetVar("koordinata", currentText + buttonValue);
}

}

window.Script1199 = function()
{
  var player = GetPlayer();
var text = player.GetVar("koordinata");

if (text.length === 3) {
    player.SetVar("koordinata", text.slice(0, -2));
} else if (text.length === 1) {
    player.SetVar("koordinata", text.slice(0, -1));
}

}

window.Script1200 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "1");
}
}

window.Script1201 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "2");
}
}

window.Script1202 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "3");
}
}

window.Script1203 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "4");
}
}

window.Script1204 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "5");
}
}

window.Script1205 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "6");
}
}

window.Script1206 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "7");
}
}

window.Script1207 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "8");
}
}

window.Script1208 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "9");
}
}

window.Script1209 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "0");
}
}

window.Script1210 = function()
{
  var player = GetPlayer();
var text = player.GetVar("raktar");
player.SetVar("raktar", text.slice(0, -1));
}

window.Script1211 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script1212 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script1213 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script1214 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script1215 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script1216 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script1217 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script1218 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script1219 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script1220 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script1221 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // iOS: csak videót lehet fullscreenre rakni
        var video = document.querySelector("video");
        if (video && video.webkitEnterFullscreen) {
            video.webkitEnterFullscreen();
        } else {
            alert("iOS-en csak videót lehet teljes képernyőre rakni.");
        }
    }
}

enterFullscreen();

}

window.Script1222 = function()
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

window.Script1223 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // Keresünk vagy létrehozunk egy rejtett videót
        var video = document.getElementById("hiddenFullscreenVideo");
        if (!video) {
            video = document.createElement("video");
            video.id = "hiddenFullscreenVideo";
            video.src = "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAAAAG1wNDFtcDQyaXNvbTEyMAAAAG1vb3YAAABsbXZoZAAAAAB8JgB8JgAAAAAAAGQAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABhzdHRzAAAAAAAAAAEAAAABAAAAAA=="; // 1 képkockás, üres mp4
            video.setAttribute("playsinline", "true");
            video.style.position = "absolute";
            video.style.width = "1px";
            video.style.height = "1px";
            video.style.opacity = "0";
            document.body.appendChild(video);
        }

        // Fullscreen kérés
        if (video.webkitEnterFullscreen) {
            video.play().then(() => {
                video.webkitEnterFullscreen();
            }).catch(() => {
                alert("Nem sikerült fullscreen módba lépni.");
            });
        } else {
            alert("Ez az iOS böngésző nem támogatja a fullscreen módot.");
        }
    }
}

enterFullscreen();

}

window.Script1224 = function()
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

window.Script1225 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("szam1");

var abc = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var index = abc.indexOf(betu);
index = (index + 1) % abc.length;

player.SetVar("szam1", abc[index]);
}

window.Script1226 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("szam2");

var abc = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var index = abc.indexOf(betu);
index = (index + 1) % abc.length;

player.SetVar("szam2", abc[index]);
}

window.Script1227 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("szam3");

var abc = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var index = abc.indexOf(betu);
index = (index + 1) % abc.length;

player.SetVar("szam3", abc[index]);
}

window.Script1228 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("szam4");

var abc = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var index = abc.indexOf(betu);
index = (index + 1) % abc.length;

player.SetVar("szam4", abc[index]);
}

window.Script1229 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("szam1");

var abc = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var index = abc.indexOf(betu);
index = (index - 1 + abc.length) % abc.length;

player.SetVar("szam1", abc[index]);
}

window.Script1230 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("szam2");

var abc = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var index = abc.indexOf(betu);
index = (index - 1 + abc.length) % abc.length;

player.SetVar("szam2", abc[index]);
}

window.Script1231 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("szam3");

var abc = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var index = abc.indexOf(betu);
index = (index - 1 + abc.length) % abc.length;

player.SetVar("szam3", abc[index]);
}

window.Script1232 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("szam4");

var abc = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var index = abc.indexOf(betu);
index = (index - 1 + abc.length) % abc.length;

player.SetVar("szam4", abc[index]);
}

window.Script1233 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script1234 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script1235 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script1236 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script1237 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script1238 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script1239 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script1240 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script1241 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script1242 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script1243 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // iOS: csak videót lehet fullscreenre rakni
        var video = document.querySelector("video");
        if (video && video.webkitEnterFullscreen) {
            video.webkitEnterFullscreen();
        } else {
            alert("iOS-en csak videót lehet teljes képernyőre rakni.");
        }
    }
}

enterFullscreen();

}

window.Script1244 = function()
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

window.Script1245 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // Keresünk vagy létrehozunk egy rejtett videót
        var video = document.getElementById("hiddenFullscreenVideo");
        if (!video) {
            video = document.createElement("video");
            video.id = "hiddenFullscreenVideo";
            video.src = "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAAAAG1wNDFtcDQyaXNvbTEyMAAAAG1vb3YAAABsbXZoZAAAAAB8JgB8JgAAAAAAAGQAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABhzdHRzAAAAAAAAAAEAAAABAAAAAA=="; // 1 képkockás, üres mp4
            video.setAttribute("playsinline", "true");
            video.style.position = "absolute";
            video.style.width = "1px";
            video.style.height = "1px";
            video.style.opacity = "0";
            document.body.appendChild(video);
        }

        // Fullscreen kérés
        if (video.webkitEnterFullscreen) {
            video.play().then(() => {
                video.webkitEnterFullscreen();
            }).catch(() => {
                alert("Nem sikerült fullscreen módba lépni.");
            });
        } else {
            alert("Ez az iOS böngésző nem támogatja a fullscreen módot.");
        }
    }
}

enterFullscreen();

}

window.Script1246 = function()
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

window.Script1247 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("utvonal"); 

player.SetVar("utvonal", currentText + "◀ ");

}

window.Script1248 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("utvonal"); 

player.SetVar("utvonal", currentText + "▲ ");

}

window.Script1249 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("utvonal"); 

player.SetVar("utvonal", currentText + "▶ ");

}

window.Script1250 = function()
{
  var player = GetPlayer();
var text = player.GetVar("utvonal");
player.SetVar("utvonal", text.slice(0, -2));
}

window.Script1251 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script1252 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script1253 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script1254 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script1255 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script1256 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script1257 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script1258 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script1259 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script1260 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script1261 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // iOS: csak videót lehet fullscreenre rakni
        var video = document.querySelector("video");
        if (video && video.webkitEnterFullscreen) {
            video.webkitEnterFullscreen();
        } else {
            alert("iOS-en csak videót lehet teljes képernyőre rakni.");
        }
    }
}

enterFullscreen();

}

window.Script1262 = function()
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

window.Script1263 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // Keresünk vagy létrehozunk egy rejtett videót
        var video = document.getElementById("hiddenFullscreenVideo");
        if (!video) {
            video = document.createElement("video");
            video.id = "hiddenFullscreenVideo";
            video.src = "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAAAAG1wNDFtcDQyaXNvbTEyMAAAAG1vb3YAAABsbXZoZAAAAAB8JgB8JgAAAAAAAGQAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABhzdHRzAAAAAAAAAAEAAAABAAAAAA=="; // 1 képkockás, üres mp4
            video.setAttribute("playsinline", "true");
            video.style.position = "absolute";
            video.style.width = "1px";
            video.style.height = "1px";
            video.style.opacity = "0";
            document.body.appendChild(video);
        }

        // Fullscreen kérés
        if (video.webkitEnterFullscreen) {
            video.play().then(() => {
                video.webkitEnterFullscreen();
            }).catch(() => {
                alert("Nem sikerült fullscreen módba lépni.");
            });
        } else {
            alert("Ez az iOS böngésző nem támogatja a fullscreen módot.");
        }
    }
}

enterFullscreen();

}

window.Script1264 = function()
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

window.Script1265 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script1266 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script1267 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script1268 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script1269 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script1270 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script1271 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script1272 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script1273 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script1274 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script1275 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // iOS: csak videót lehet fullscreenre rakni
        var video = document.querySelector("video");
        if (video && video.webkitEnterFullscreen) {
            video.webkitEnterFullscreen();
        } else {
            alert("iOS-en csak videót lehet teljes képernyőre rakni.");
        }
    }
}

enterFullscreen();

}

window.Script1276 = function()
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

window.Script1277 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // Keresünk vagy létrehozunk egy rejtett videót
        var video = document.getElementById("hiddenFullscreenVideo");
        if (!video) {
            video = document.createElement("video");
            video.id = "hiddenFullscreenVideo";
            video.src = "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAAAAG1wNDFtcDQyaXNvbTEyMAAAAG1vb3YAAABsbXZoZAAAAAB8JgB8JgAAAAAAAGQAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABhzdHRzAAAAAAAAAAEAAAABAAAAAA=="; // 1 képkockás, üres mp4
            video.setAttribute("playsinline", "true");
            video.style.position = "absolute";
            video.style.width = "1px";
            video.style.height = "1px";
            video.style.opacity = "0";
            document.body.appendChild(video);
        }

        // Fullscreen kérés
        if (video.webkitEnterFullscreen) {
            video.play().then(() => {
                video.webkitEnterFullscreen();
            }).catch(() => {
                alert("Nem sikerült fullscreen módba lépni.");
            });
        } else {
            alert("Ez az iOS böngésző nem támogatja a fullscreen módot.");
        }
    }
}

enterFullscreen();

}

window.Script1278 = function()
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

window.Script1279 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script1280 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script1281 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script1282 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script1283 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script1284 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script1285 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script1286 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script1287 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script1288 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script1289 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // iOS: csak videót lehet fullscreenre rakni
        var video = document.querySelector("video");
        if (video && video.webkitEnterFullscreen) {
            video.webkitEnterFullscreen();
        } else {
            alert("iOS-en csak videót lehet teljes képernyőre rakni.");
        }
    }
}

enterFullscreen();

}

window.Script1290 = function()
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

window.Script1291 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // Keresünk vagy létrehozunk egy rejtett videót
        var video = document.getElementById("hiddenFullscreenVideo");
        if (!video) {
            video = document.createElement("video");
            video.id = "hiddenFullscreenVideo";
            video.src = "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAAAAG1wNDFtcDQyaXNvbTEyMAAAAG1vb3YAAABsbXZoZAAAAAB8JgB8JgAAAAAAAGQAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABhzdHRzAAAAAAAAAAEAAAABAAAAAA=="; // 1 képkockás, üres mp4
            video.setAttribute("playsinline", "true");
            video.style.position = "absolute";
            video.style.width = "1px";
            video.style.height = "1px";
            video.style.opacity = "0";
            document.body.appendChild(video);
        }

        // Fullscreen kérés
        if (video.webkitEnterFullscreen) {
            video.play().then(() => {
                video.webkitEnterFullscreen();
            }).catch(() => {
                alert("Nem sikerült fullscreen módba lépni.");
            });
        } else {
            alert("Ez az iOS böngésző nem támogatja a fullscreen módot.");
        }
    }
}

enterFullscreen();

}

window.Script1292 = function()
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

window.Script1293 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script1294 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script1295 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script1296 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script1297 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script1298 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script1299 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script1300 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script1301 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script1302 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script1303 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // iOS: csak videót lehet fullscreenre rakni
        var video = document.querySelector("video");
        if (video && video.webkitEnterFullscreen) {
            video.webkitEnterFullscreen();
        } else {
            alert("iOS-en csak videót lehet teljes képernyőre rakni.");
        }
    }
}

enterFullscreen();

}

window.Script1304 = function()
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

window.Script1305 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // Keresünk vagy létrehozunk egy rejtett videót
        var video = document.getElementById("hiddenFullscreenVideo");
        if (!video) {
            video = document.createElement("video");
            video.id = "hiddenFullscreenVideo";
            video.src = "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAAAAG1wNDFtcDQyaXNvbTEyMAAAAG1vb3YAAABsbXZoZAAAAAB8JgB8JgAAAAAAAGQAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABhzdHRzAAAAAAAAAAEAAAABAAAAAA=="; // 1 képkockás, üres mp4
            video.setAttribute("playsinline", "true");
            video.style.position = "absolute";
            video.style.width = "1px";
            video.style.height = "1px";
            video.style.opacity = "0";
            document.body.appendChild(video);
        }

        // Fullscreen kérés
        if (video.webkitEnterFullscreen) {
            video.play().then(() => {
                video.webkitEnterFullscreen();
            }).catch(() => {
                alert("Nem sikerült fullscreen módba lépni.");
            });
        } else {
            alert("Ez az iOS böngésző nem támogatja a fullscreen módot.");
        }
    }
}

enterFullscreen();

}

window.Script1306 = function()
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

window.Script1307 = function()
{
  var player = GetPlayer();
var text = player.GetVar("hazszam");
player.SetVar("hazszam", text.slice(0, -1));
}

window.Script1308 = function()
{
  var player = GetPlayer();
var text = player.GetVar("letesitmeny");
player.SetVar("letesitmeny", text.slice(0, -1));
}

window.Script1309 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "1");
}

window.Script1310 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "2");
}

window.Script1311 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "3");
}

window.Script1312 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "4");
}

window.Script1313 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "5");
}

window.Script1314 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "6");
}

window.Script1315 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "7");
}

window.Script1316 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "8");
}

window.Script1317 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "9");
}

window.Script1318 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "0");
}

window.Script1319 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1320 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1321 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1322 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1323 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1324 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1325 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1326 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1327 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1328 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1329 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1330 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1331 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1332 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1333 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1334 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1335 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1336 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1337 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1338 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1339 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1340 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1341 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1342 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1343 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1344 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1345 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1346 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + " ");

}

window.Script1347 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1348 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1349 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1350 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1351 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1352 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1353 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1354 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1355 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "1");
}

window.Script1356 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "2");
}

window.Script1357 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "3");
}

window.Script1358 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "4");
}

window.Script1359 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "5");
}

window.Script1360 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "6");
}

window.Script1361 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "7");
}

window.Script1362 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "8");
}

window.Script1363 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "9");
}

window.Script1364 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "0");
}

window.Script1365 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script1366 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script1367 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script1368 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script1369 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script1370 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script1371 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script1372 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script1373 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script1374 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script1375 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script1376 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script1377 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script1378 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script1379 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script1380 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script1381 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script1382 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script1383 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script1384 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script1385 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script1386 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script1387 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script1388 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script1389 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script1390 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script1391 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script1392 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script1393 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script1394 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script1395 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script1396 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script1397 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script1398 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script1399 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script1400 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script1401 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script1402 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script1403 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script1404 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script1405 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script1406 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script1407 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script1408 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script1409 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script1410 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script1411 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script1412 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script1413 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script1414 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script1415 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // iOS: csak videót lehet fullscreenre rakni
        var video = document.querySelector("video");
        if (video && video.webkitEnterFullscreen) {
            video.webkitEnterFullscreen();
        } else {
            alert("iOS-en csak videót lehet teljes képernyőre rakni.");
        }
    }
}

enterFullscreen();

}

window.Script1416 = function()
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

window.Script1417 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // Keresünk vagy létrehozunk egy rejtett videót
        var video = document.getElementById("hiddenFullscreenVideo");
        if (!video) {
            video = document.createElement("video");
            video.id = "hiddenFullscreenVideo";
            video.src = "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAAAAG1wNDFtcDQyaXNvbTEyMAAAAG1vb3YAAABsbXZoZAAAAAB8JgB8JgAAAAAAAGQAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABhzdHRzAAAAAAAAAAEAAAABAAAAAA=="; // 1 képkockás, üres mp4
            video.setAttribute("playsinline", "true");
            video.style.position = "absolute";
            video.style.width = "1px";
            video.style.height = "1px";
            video.style.opacity = "0";
            document.body.appendChild(video);
        }

        // Fullscreen kérés
        if (video.webkitEnterFullscreen) {
            video.play().then(() => {
                video.webkitEnterFullscreen();
            }).catch(() => {
                alert("Nem sikerült fullscreen módba lépni.");
            });
        } else {
            alert("Ez az iOS böngésző nem támogatja a fullscreen módot.");
        }
    }
}

enterFullscreen();

}

window.Script1418 = function()
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

window.Script1419 = function()
{
  var player = GetPlayer();
var text = player.GetVar("hazszam");
player.SetVar("hazszam", text.slice(0, -1));
}

window.Script1420 = function()
{
  var player = GetPlayer();
var text = player.GetVar("letesitmeny");
player.SetVar("letesitmeny", text.slice(0, -1));
}

window.Script1421 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "1");
}

window.Script1422 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "2");
}

window.Script1423 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "3");
}

window.Script1424 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "4");
}

window.Script1425 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "5");
}

window.Script1426 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "6");
}

window.Script1427 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "7");
}

window.Script1428 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "8");
}

window.Script1429 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "9");
}

window.Script1430 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + "0");
}

window.Script1431 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1432 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1433 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1434 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1435 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1436 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1437 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1438 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1439 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1440 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1441 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1442 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1443 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1444 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1445 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1446 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1447 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1448 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1449 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1450 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1451 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1452 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1453 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1454 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1455 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1456 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1457 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1458 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny"); 
player.SetVar("letesitmeny", currentText + " ");

}

window.Script1459 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1460 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1461 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1462 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1463 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1464 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1465 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1466 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("letesitmeny");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("letesitmeny", currentText + buttonValue);
}
}

window.Script1467 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "1");
}

window.Script1468 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "2");
}

window.Script1469 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "3");
}

window.Script1470 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "4");
}

window.Script1471 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "5");
}

window.Script1472 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "6");
}

window.Script1473 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "7");
}

window.Script1474 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "8");
}

window.Script1475 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "9");
}

window.Script1476 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("hazszam"); 
player.SetVar("hazszam", currentText + "0");
}

window.Script1477 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script1478 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script1479 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script1480 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script1481 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script1482 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script1483 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script1484 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script1485 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script1486 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script1487 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script1488 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script1489 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script1490 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script1491 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script1492 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script1493 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script1494 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script1495 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script1496 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script1497 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script1498 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script1499 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script1500 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script1501 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script1502 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script1503 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script1504 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kozterulet");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("kozterulet", buttonValue);
}
}

window.Script1505 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script1506 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script1507 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script1508 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script1509 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script1510 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script1511 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script1512 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script1513 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script1514 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script1515 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script1516 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("telepules");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue) {
    player.SetVar("telepules", buttonValue);
}
}

window.Script1517 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script1518 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script1519 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script1520 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script1521 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script1522 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script1523 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script1524 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script1525 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script1526 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script1527 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // iOS: csak videót lehet fullscreenre rakni
        var video = document.querySelector("video");
        if (video && video.webkitEnterFullscreen) {
            video.webkitEnterFullscreen();
        } else {
            alert("iOS-en csak videót lehet teljes képernyőre rakni.");
        }
    }
}

enterFullscreen();

}

window.Script1528 = function()
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

window.Script1529 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // Keresünk vagy létrehozunk egy rejtett videót
        var video = document.getElementById("hiddenFullscreenVideo");
        if (!video) {
            video = document.createElement("video");
            video.id = "hiddenFullscreenVideo";
            video.src = "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAAAAG1wNDFtcDQyaXNvbTEyMAAAAG1vb3YAAABsbXZoZAAAAAB8JgB8JgAAAAAAAGQAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABhzdHRzAAAAAAAAAAEAAAABAAAAAA=="; // 1 képkockás, üres mp4
            video.setAttribute("playsinline", "true");
            video.style.position = "absolute";
            video.style.width = "1px";
            video.style.height = "1px";
            video.style.opacity = "0";
            document.body.appendChild(video);
        }

        // Fullscreen kérés
        if (video.webkitEnterFullscreen) {
            video.play().then(() => {
                video.webkitEnterFullscreen();
            }).catch(() => {
                alert("Nem sikerült fullscreen módba lépni.");
            });
        } else {
            alert("Ez az iOS böngésző nem támogatja a fullscreen módot.");
        }
    }
}

enterFullscreen();

}

window.Script1530 = function()
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

window.Script1531 = function()
{
  var player = GetPlayer();
var text = player.GetVar("szinvalto");

var emojis = ["⚪", "🔴", "🟡"];
for (var i = 0; i < emojis.length; i++) {
    if (text.endsWith(emojis[i])) {
        text = text.slice(0, -emojis[i].length);
        break;
    }
}

player.SetVar("szinvalto", text);

}

window.Script1532 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szinvalto"); 
player.SetVar("szinvalto", currentText + "🟡");
}

window.Script1533 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szinvalto"); 
player.SetVar("szinvalto", currentText + "🔴");
}

window.Script1534 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szinvalto"); 
player.SetVar("szinvalto", currentText + "⚪");
}

window.Script1535 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script1536 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script1537 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script1538 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script1539 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script1540 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script1541 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script1542 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script1543 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script1544 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script1545 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // iOS: csak videót lehet fullscreenre rakni
        var video = document.querySelector("video");
        if (video && video.webkitEnterFullscreen) {
            video.webkitEnterFullscreen();
        } else {
            alert("iOS-en csak videót lehet teljes képernyőre rakni.");
        }
    }
}

enterFullscreen();

}

window.Script1546 = function()
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

window.Script1547 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // Keresünk vagy létrehozunk egy rejtett videót
        var video = document.getElementById("hiddenFullscreenVideo");
        if (!video) {
            video = document.createElement("video");
            video.id = "hiddenFullscreenVideo";
            video.src = "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAAAAG1wNDFtcDQyaXNvbTEyMAAAAG1vb3YAAABsbXZoZAAAAAB8JgB8JgAAAAAAAGQAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABhzdHRzAAAAAAAAAAEAAAABAAAAAA=="; // 1 képkockás, üres mp4
            video.setAttribute("playsinline", "true");
            video.style.position = "absolute";
            video.style.width = "1px";
            video.style.height = "1px";
            video.style.opacity = "0";
            document.body.appendChild(video);
        }

        // Fullscreen kérés
        if (video.webkitEnterFullscreen) {
            video.play().then(() => {
                video.webkitEnterFullscreen();
            }).catch(() => {
                alert("Nem sikerült fullscreen módba lépni.");
            });
        } else {
            alert("Ez az iOS böngésző nem támogatja a fullscreen módot.");
        }
    }
}

enterFullscreen();

}

window.Script1548 = function()
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

window.Script1549 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("runa1");

var runak = ["ᛗ", "ᛖ", "ᛈ", "ᚻ", "ᚩ", "ᛞ", "ᚳ", "ᛋ", "ᛇ", "ᚹ", "ᛠ", "ᚾ", "ᚼ", "ᚱ", "ᚲ", "ᛄ"];
var index = runak.indexOf(betu);
index = (index + 1) % runak.length;

player.SetVar("runa1", runak[index]);

}

window.Script1550 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("runa1");

var runak = ["ᛗ", "ᛖ", "ᛈ", "ᚻ", "ᚩ", "ᛞ", "ᚳ", "ᛋ", "ᛇ", "ᚹ", "ᛠ", "ᚾ", "ᚼ", "ᚱ", "ᚲ", "ᛄ"];
var index = runak.indexOf(betu);
index = (index - 1 + runak.length) % runak.length;

player.SetVar("runa1", runak[index]);

}

window.Script1551 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("runa2");

var runak = ["ᛗ", "ᛖ", "ᛈ", "ᚻ", "ᚩ", "ᛞ", "ᚳ", "ᛋ", "ᛇ", "ᚹ", "ᛠ", "ᚾ", "ᚼ", "ᚱ", "ᚲ", "ᛄ"];
var index = runak.indexOf(betu);
index = (index + 1) % runak.length;

player.SetVar("runa2", runak[index]);

}

window.Script1552 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("runa3");

var runak = ["ᛗ", "ᛖ", "ᛈ", "ᚻ", "ᚩ", "ᛞ", "ᚳ", "ᛋ", "ᛇ", "ᚹ", "ᛠ", "ᚾ", "ᚼ", "ᚱ", "ᚲ", "ᛄ"];
var index = runak.indexOf(betu);
index = (index + 1) % runak.length;

player.SetVar("runa3", runak[index]);

}

window.Script1553 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("runa4");

var runak = ["ᛗ", "ᛖ", "ᛈ", "ᚻ", "ᚩ", "ᛞ", "ᚳ", "ᛋ", "ᛇ", "ᚹ", "ᛠ", "ᚾ", "ᚼ", "ᚱ", "ᚲ", "ᛄ"];
var index = runak.indexOf(betu);
index = (index + 1) % runak.length;

player.SetVar("runa4", runak[index]);

}

window.Script1554 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("runa2");

var runak = ["ᛗ", "ᛖ", "ᛈ", "ᚻ", "ᚩ", "ᛞ", "ᚳ", "ᛋ", "ᛇ", "ᚹ", "ᛠ", "ᚾ", "ᚼ", "ᚱ", "ᚲ", "ᛄ"];
var index = runak.indexOf(betu);
index = (index - 1 + runak.length) % runak.length;

player.SetVar("runa2", runak[index]);

}

window.Script1555 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("runa3");

var runak = ["ᛗ", "ᛖ", "ᛈ", "ᚻ", "ᚩ", "ᛞ", "ᚳ", "ᛋ", "ᛇ", "ᚹ", "ᛠ", "ᚾ", "ᚼ", "ᚱ", "ᚲ", "ᛄ"];
var index = runak.indexOf(betu);
index = (index - 1 + runak.length) % runak.length;

player.SetVar("runa3", runak[index]);

}

window.Script1556 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("runa4");

var runak = ["ᛗ", "ᛖ", "ᛈ", "ᚻ", "ᚩ", "ᛞ", "ᚳ", "ᛋ", "ᛇ", "ᚹ", "ᛠ", "ᚾ", "ᚼ", "ᚱ", "ᚲ", "ᛄ"];
var index = runak.indexOf(betu);
index = (index - 1 + runak.length) % runak.length;

player.SetVar("runa4", runak[index]);

}

window.Script1557 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("betu1");

var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
var index = abc.indexOf(betu);
index = (index + 1) % abc.length;

player.SetVar("betu1", abc[index]);
}

window.Script1558 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("betu1");

var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
var index = abc.indexOf(betu);
index = (index - 1 + abc.length) % abc.length;

player.SetVar("betu1", abc[index]);

}

window.Script1559 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("betu2");

var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
var index = abc.indexOf(betu);
index = (index + 1) % abc.length;

player.SetVar("betu2", abc[index]);
}

window.Script1560 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("betu3");

var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
var index = abc.indexOf(betu);
index = (index + 1) % abc.length;

player.SetVar("betu3", abc[index]);
}

window.Script1561 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("betu4");

var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
var index = abc.indexOf(betu);
index = (index + 1) % abc.length;

player.SetVar("betu4", abc[index]);
}

window.Script1562 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("betu2");

var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
var index = abc.indexOf(betu);
index = (index - 1 + abc.length) % abc.length;

player.SetVar("betu2", abc[index]);

}

window.Script1563 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("betu3");

var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
var index = abc.indexOf(betu);
index = (index - 1 + abc.length) % abc.length;

player.SetVar("betu3", abc[index]);

}

window.Script1564 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("betu4");

var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
var index = abc.indexOf(betu);
index = (index - 1 + abc.length) % abc.length;

player.SetVar("betu4", abc[index]);

}

window.Script1565 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script1566 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script1567 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script1568 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script1569 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script1570 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script1571 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script1572 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script1573 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script1574 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script1575 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // iOS: csak videót lehet fullscreenre rakni
        var video = document.querySelector("video");
        if (video && video.webkitEnterFullscreen) {
            video.webkitEnterFullscreen();
        } else {
            alert("iOS-en csak videót lehet teljes képernyőre rakni.");
        }
    }
}

enterFullscreen();

}

window.Script1576 = function()
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

window.Script1577 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // Keresünk vagy létrehozunk egy rejtett videót
        var video = document.getElementById("hiddenFullscreenVideo");
        if (!video) {
            video = document.createElement("video");
            video.id = "hiddenFullscreenVideo";
            video.src = "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAAAAG1wNDFtcDQyaXNvbTEyMAAAAG1vb3YAAABsbXZoZAAAAAB8JgB8JgAAAAAAAGQAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABhzdHRzAAAAAAAAAAEAAAABAAAAAA=="; // 1 képkockás, üres mp4
            video.setAttribute("playsinline", "true");
            video.style.position = "absolute";
            video.style.width = "1px";
            video.style.height = "1px";
            video.style.opacity = "0";
            document.body.appendChild(video);
        }

        // Fullscreen kérés
        if (video.webkitEnterFullscreen) {
            video.play().then(() => {
                video.webkitEnterFullscreen();
            }).catch(() => {
                alert("Nem sikerült fullscreen módba lépni.");
            });
        } else {
            alert("Ez az iOS böngésző nem támogatja a fullscreen módot.");
        }
    }
}

enterFullscreen();

}

window.Script1578 = function()
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

window.Script1579 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script1580 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script1581 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script1582 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script1583 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script1584 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script1585 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script1586 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script1587 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script1588 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script1589 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // iOS: csak videót lehet fullscreenre rakni
        var video = document.querySelector("video");
        if (video && video.webkitEnterFullscreen) {
            video.webkitEnterFullscreen();
        } else {
            alert("iOS-en csak videót lehet teljes képernyőre rakni.");
        }
    }
}

enterFullscreen();

}

window.Script1590 = function()
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

window.Script1591 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // Keresünk vagy létrehozunk egy rejtett videót
        var video = document.getElementById("hiddenFullscreenVideo");
        if (!video) {
            video = document.createElement("video");
            video.id = "hiddenFullscreenVideo";
            video.src = "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAAAAG1wNDFtcDQyaXNvbTEyMAAAAG1vb3YAAABsbXZoZAAAAAB8JgB8JgAAAAAAAGQAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABhzdHRzAAAAAAAAAAEAAAABAAAAAA=="; // 1 képkockás, üres mp4
            video.setAttribute("playsinline", "true");
            video.style.position = "absolute";
            video.style.width = "1px";
            video.style.height = "1px";
            video.style.opacity = "0";
            document.body.appendChild(video);
        }

        // Fullscreen kérés
        if (video.webkitEnterFullscreen) {
            video.play().then(() => {
                video.webkitEnterFullscreen();
            }).catch(() => {
                alert("Nem sikerült fullscreen módba lépni.");
            });
        } else {
            alert("Ez az iOS böngésző nem támogatja a fullscreen módot.");
        }
    }
}

enterFullscreen();

}

window.Script1592 = function()
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

window.Script1593 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "1");
}

window.Script1594 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "2");
}

window.Script1595 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "3");
}

window.Script1596 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "4");
}

window.Script1597 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "5");
}

window.Script1598 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "6");
}

window.Script1599 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "7");
}

window.Script1600 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "8");
}

window.Script1601 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "9");
}

window.Script1602 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "0");
}

window.Script1603 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "C");
}

window.Script1604 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script1605 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script1606 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script1607 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script1608 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script1609 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script1610 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script1611 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script1612 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script1613 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script1614 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // iOS: csak videót lehet fullscreenre rakni
        var video = document.querySelector("video");
        if (video && video.webkitEnterFullscreen) {
            video.webkitEnterFullscreen();
        } else {
            alert("iOS-en csak videót lehet teljes képernyőre rakni.");
        }
    }
}

enterFullscreen();

}

window.Script1615 = function()
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

window.Script1616 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // Keresünk vagy létrehozunk egy rejtett videót
        var video = document.getElementById("hiddenFullscreenVideo");
        if (!video) {
            video = document.createElement("video");
            video.id = "hiddenFullscreenVideo";
            video.src = "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAAAAG1wNDFtcDQyaXNvbTEyMAAAAG1vb3YAAABsbXZoZAAAAAB8JgB8JgAAAAAAAGQAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABhzdHRzAAAAAAAAAAEAAAABAAAAAA=="; // 1 képkockás, üres mp4
            video.setAttribute("playsinline", "true");
            video.style.position = "absolute";
            video.style.width = "1px";
            video.style.height = "1px";
            video.style.opacity = "0";
            document.body.appendChild(video);
        }

        // Fullscreen kérés
        if (video.webkitEnterFullscreen) {
            video.play().then(() => {
                video.webkitEnterFullscreen();
            }).catch(() => {
                alert("Nem sikerült fullscreen módba lépni.");
            });
        } else {
            alert("Ez az iOS böngésző nem támogatja a fullscreen módot.");
        }
    }
}

enterFullscreen();

}

window.Script1617 = function()
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

window.Script1618 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "1");
}
}

window.Script1619 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "2");
}
}

window.Script1620 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "3");
}
}

window.Script1621 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "4");
}
}

window.Script1622 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "5");
}
}

window.Script1623 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "6");
}
}

window.Script1624 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "7");
}
}

window.Script1625 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "8");
}
}

window.Script1626 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "9");
}
}

window.Script1627 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "0");
}
}

window.Script1628 = function()
{
  var player = GetPlayer();
var text = player.GetVar("szekreny1");
player.SetVar("szekreny1", text.slice(0, -1));
}

window.Script1629 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script1630 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script1631 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script1632 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script1633 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script1634 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script1635 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script1636 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script1637 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script1638 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script1639 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // iOS: csak videót lehet fullscreenre rakni
        var video = document.querySelector("video");
        if (video && video.webkitEnterFullscreen) {
            video.webkitEnterFullscreen();
        } else {
            alert("iOS-en csak videót lehet teljes képernyőre rakni.");
        }
    }
}

enterFullscreen();

}

window.Script1640 = function()
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

window.Script1641 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // Keresünk vagy létrehozunk egy rejtett videót
        var video = document.getElementById("hiddenFullscreenVideo");
        if (!video) {
            video = document.createElement("video");
            video.id = "hiddenFullscreenVideo";
            video.src = "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAAAAG1wNDFtcDQyaXNvbTEyMAAAAG1vb3YAAABsbXZoZAAAAAB8JgB8JgAAAAAAAGQAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABhzdHRzAAAAAAAAAAEAAAABAAAAAA=="; // 1 képkockás, üres mp4
            video.setAttribute("playsinline", "true");
            video.style.position = "absolute";
            video.style.width = "1px";
            video.style.height = "1px";
            video.style.opacity = "0";
            document.body.appendChild(video);
        }

        // Fullscreen kérés
        if (video.webkitEnterFullscreen) {
            video.play().then(() => {
                video.webkitEnterFullscreen();
            }).catch(() => {
                alert("Nem sikerült fullscreen módba lépni.");
            });
        } else {
            alert("Ez az iOS böngésző nem támogatja a fullscreen módot.");
        }
    }
}

enterFullscreen();

}

window.Script1642 = function()
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

window.Script1643 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script1644 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script1645 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script1646 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script1647 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script1648 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script1649 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script1650 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script1651 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script1652 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script1653 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // iOS: csak videót lehet fullscreenre rakni
        var video = document.querySelector("video");
        if (video && video.webkitEnterFullscreen) {
            video.webkitEnterFullscreen();
        } else {
            alert("iOS-en csak videót lehet teljes képernyőre rakni.");
        }
    }
}

enterFullscreen();

}

window.Script1654 = function()
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

window.Script1655 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // Keresünk vagy létrehozunk egy rejtett videót
        var video = document.getElementById("hiddenFullscreenVideo");
        if (!video) {
            video = document.createElement("video");
            video.id = "hiddenFullscreenVideo";
            video.src = "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAAAAG1wNDFtcDQyaXNvbTEyMAAAAG1vb3YAAABsbXZoZAAAAAB8JgB8JgAAAAAAAGQAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABhzdHRzAAAAAAAAAAEAAAABAAAAAA=="; // 1 képkockás, üres mp4
            video.setAttribute("playsinline", "true");
            video.style.position = "absolute";
            video.style.width = "1px";
            video.style.height = "1px";
            video.style.opacity = "0";
            document.body.appendChild(video);
        }

        // Fullscreen kérés
        if (video.webkitEnterFullscreen) {
            video.play().then(() => {
                video.webkitEnterFullscreen();
            }).catch(() => {
                alert("Nem sikerült fullscreen módba lépni.");
            });
        } else {
            alert("Ez az iOS böngésző nem támogatja a fullscreen módot.");
        }
    }
}

enterFullscreen();

}

window.Script1656 = function()
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

window.Script1657 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("koordinata");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue && currentText.length === 1) {
    player.SetVar("koordinata", currentText + buttonValue);
}

}

window.Script1658 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("koordinata");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue && currentText.length === 0) {
    player.SetVar("koordinata", currentText + buttonValue);
}

}

window.Script1659 = function()
{
  var player = GetPlayer();
var text = player.GetVar("koordinata");

if (text.length === 3) {
    player.SetVar("koordinata", text.slice(0, -2));
} else if (text.length === 1) {
    player.SetVar("koordinata", text.slice(0, -1));
}

}

window.Script1660 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "1");
}
}

window.Script1661 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "2");
}
}

window.Script1662 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "3");
}
}

window.Script1663 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "4");
}
}

window.Script1664 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "5");
}
}

window.Script1665 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "6");
}
}

window.Script1666 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "7");
}
}

window.Script1667 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "8");
}
}

window.Script1668 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "9");
}
}

window.Script1669 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "0");
}
}

window.Script1670 = function()
{
  var player = GetPlayer();
var text = player.GetVar("raktar");
player.SetVar("raktar", text.slice(0, -1));
}

window.Script1671 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script1672 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script1673 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script1674 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script1675 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script1676 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script1677 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script1678 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script1679 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script1680 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script1681 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // iOS: csak videót lehet fullscreenre rakni
        var video = document.querySelector("video");
        if (video && video.webkitEnterFullscreen) {
            video.webkitEnterFullscreen();
        } else {
            alert("iOS-en csak videót lehet teljes képernyőre rakni.");
        }
    }
}

enterFullscreen();

}

window.Script1682 = function()
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

window.Script1683 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // Keresünk vagy létrehozunk egy rejtett videót
        var video = document.getElementById("hiddenFullscreenVideo");
        if (!video) {
            video = document.createElement("video");
            video.id = "hiddenFullscreenVideo";
            video.src = "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAAAAG1wNDFtcDQyaXNvbTEyMAAAAG1vb3YAAABsbXZoZAAAAAB8JgB8JgAAAAAAAGQAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABhzdHRzAAAAAAAAAAEAAAABAAAAAA=="; // 1 képkockás, üres mp4
            video.setAttribute("playsinline", "true");
            video.style.position = "absolute";
            video.style.width = "1px";
            video.style.height = "1px";
            video.style.opacity = "0";
            document.body.appendChild(video);
        }

        // Fullscreen kérés
        if (video.webkitEnterFullscreen) {
            video.play().then(() => {
                video.webkitEnterFullscreen();
            }).catch(() => {
                alert("Nem sikerült fullscreen módba lépni.");
            });
        } else {
            alert("Ez az iOS böngésző nem támogatja a fullscreen módot.");
        }
    }
}

enterFullscreen();

}

window.Script1684 = function()
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

window.Script1685 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("szam1");

var abc = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var index = abc.indexOf(betu);
index = (index + 1) % abc.length;

player.SetVar("szam1", abc[index]);
}

window.Script1686 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("szam2");

var abc = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var index = abc.indexOf(betu);
index = (index + 1) % abc.length;

player.SetVar("szam2", abc[index]);
}

window.Script1687 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("szam3");

var abc = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var index = abc.indexOf(betu);
index = (index + 1) % abc.length;

player.SetVar("szam3", abc[index]);
}

window.Script1688 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("szam4");

var abc = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var index = abc.indexOf(betu);
index = (index + 1) % abc.length;

player.SetVar("szam4", abc[index]);
}

window.Script1689 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("szam1");

var abc = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var index = abc.indexOf(betu);
index = (index - 1 + abc.length) % abc.length;

player.SetVar("szam1", abc[index]);
}

window.Script1690 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("szam2");

var abc = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var index = abc.indexOf(betu);
index = (index - 1 + abc.length) % abc.length;

player.SetVar("szam2", abc[index]);
}

window.Script1691 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("szam3");

var abc = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var index = abc.indexOf(betu);
index = (index - 1 + abc.length) % abc.length;

player.SetVar("szam3", abc[index]);
}

window.Script1692 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("szam4");

var abc = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var index = abc.indexOf(betu);
index = (index - 1 + abc.length) % abc.length;

player.SetVar("szam4", abc[index]);
}

window.Script1693 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script1694 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script1695 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script1696 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script1697 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script1698 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script1699 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script1700 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script1701 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script1702 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script1703 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // iOS: csak videót lehet fullscreenre rakni
        var video = document.querySelector("video");
        if (video && video.webkitEnterFullscreen) {
            video.webkitEnterFullscreen();
        } else {
            alert("iOS-en csak videót lehet teljes képernyőre rakni.");
        }
    }
}

enterFullscreen();

}

window.Script1704 = function()
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

window.Script1705 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // Keresünk vagy létrehozunk egy rejtett videót
        var video = document.getElementById("hiddenFullscreenVideo");
        if (!video) {
            video = document.createElement("video");
            video.id = "hiddenFullscreenVideo";
            video.src = "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAAAAG1wNDFtcDQyaXNvbTEyMAAAAG1vb3YAAABsbXZoZAAAAAB8JgB8JgAAAAAAAGQAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABhzdHRzAAAAAAAAAAEAAAABAAAAAA=="; // 1 képkockás, üres mp4
            video.setAttribute("playsinline", "true");
            video.style.position = "absolute";
            video.style.width = "1px";
            video.style.height = "1px";
            video.style.opacity = "0";
            document.body.appendChild(video);
        }

        // Fullscreen kérés
        if (video.webkitEnterFullscreen) {
            video.play().then(() => {
                video.webkitEnterFullscreen();
            }).catch(() => {
                alert("Nem sikerült fullscreen módba lépni.");
            });
        } else {
            alert("Ez az iOS böngésző nem támogatja a fullscreen módot.");
        }
    }
}

enterFullscreen();

}

window.Script1706 = function()
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

window.Script1707 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("utvonal"); 

player.SetVar("utvonal", currentText + "◀ ");

}

window.Script1708 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("utvonal"); 

player.SetVar("utvonal", currentText + "▲ ");

}

window.Script1709 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("utvonal"); 

player.SetVar("utvonal", currentText + "▶ ");

}

window.Script1710 = function()
{
  var player = GetPlayer();
var text = player.GetVar("utvonal");
player.SetVar("utvonal", text.slice(0, -2));
}

window.Script1711 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script1712 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script1713 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script1714 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script1715 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script1716 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script1717 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script1718 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script1719 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script1720 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script1721 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // iOS: csak videót lehet fullscreenre rakni
        var video = document.querySelector("video");
        if (video && video.webkitEnterFullscreen) {
            video.webkitEnterFullscreen();
        } else {
            alert("iOS-en csak videót lehet teljes képernyőre rakni.");
        }
    }
}

enterFullscreen();

}

window.Script1722 = function()
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

window.Script1723 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // Keresünk vagy létrehozunk egy rejtett videót
        var video = document.getElementById("hiddenFullscreenVideo");
        if (!video) {
            video = document.createElement("video");
            video.id = "hiddenFullscreenVideo";
            video.src = "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAAAAG1wNDFtcDQyaXNvbTEyMAAAAG1vb3YAAABsbXZoZAAAAAB8JgB8JgAAAAAAAGQAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABhzdHRzAAAAAAAAAAEAAAABAAAAAA=="; // 1 képkockás, üres mp4
            video.setAttribute("playsinline", "true");
            video.style.position = "absolute";
            video.style.width = "1px";
            video.style.height = "1px";
            video.style.opacity = "0";
            document.body.appendChild(video);
        }

        // Fullscreen kérés
        if (video.webkitEnterFullscreen) {
            video.play().then(() => {
                video.webkitEnterFullscreen();
            }).catch(() => {
                alert("Nem sikerült fullscreen módba lépni.");
            });
        } else {
            alert("Ez az iOS böngésző nem támogatja a fullscreen módot.");
        }
    }
}

enterFullscreen();

}

window.Script1724 = function()
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

window.Script1725 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script1726 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script1727 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script1728 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script1729 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script1730 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script1731 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script1732 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script1733 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script1734 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script1735 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // iOS: csak videót lehet fullscreenre rakni
        var video = document.querySelector("video");
        if (video && video.webkitEnterFullscreen) {
            video.webkitEnterFullscreen();
        } else {
            alert("iOS-en csak videót lehet teljes képernyőre rakni.");
        }
    }
}

enterFullscreen();

}

window.Script1736 = function()
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

window.Script1737 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // Keresünk vagy létrehozunk egy rejtett videót
        var video = document.getElementById("hiddenFullscreenVideo");
        if (!video) {
            video = document.createElement("video");
            video.id = "hiddenFullscreenVideo";
            video.src = "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAAAAG1wNDFtcDQyaXNvbTEyMAAAAG1vb3YAAABsbXZoZAAAAAB8JgB8JgAAAAAAAGQAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABhzdHRzAAAAAAAAAAEAAAABAAAAAA=="; // 1 képkockás, üres mp4
            video.setAttribute("playsinline", "true");
            video.style.position = "absolute";
            video.style.width = "1px";
            video.style.height = "1px";
            video.style.opacity = "0";
            document.body.appendChild(video);
        }

        // Fullscreen kérés
        if (video.webkitEnterFullscreen) {
            video.play().then(() => {
                video.webkitEnterFullscreen();
            }).catch(() => {
                alert("Nem sikerült fullscreen módba lépni.");
            });
        } else {
            alert("Ez az iOS böngésző nem támogatja a fullscreen módot.");
        }
    }
}

enterFullscreen();

}

window.Script1738 = function()
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

window.Script1739 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script1740 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script1741 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script1742 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script1743 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script1744 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script1745 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script1746 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script1747 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script1748 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script1749 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // iOS: csak videót lehet fullscreenre rakni
        var video = document.querySelector("video");
        if (video && video.webkitEnterFullscreen) {
            video.webkitEnterFullscreen();
        } else {
            alert("iOS-en csak videót lehet teljes képernyőre rakni.");
        }
    }
}

enterFullscreen();

}

window.Script1750 = function()
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

window.Script1751 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // Keresünk vagy létrehozunk egy rejtett videót
        var video = document.getElementById("hiddenFullscreenVideo");
        if (!video) {
            video = document.createElement("video");
            video.id = "hiddenFullscreenVideo";
            video.src = "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAAAAG1wNDFtcDQyaXNvbTEyMAAAAG1vb3YAAABsbXZoZAAAAAB8JgB8JgAAAAAAAGQAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABhzdHRzAAAAAAAAAAEAAAABAAAAAA=="; // 1 képkockás, üres mp4
            video.setAttribute("playsinline", "true");
            video.style.position = "absolute";
            video.style.width = "1px";
            video.style.height = "1px";
            video.style.opacity = "0";
            document.body.appendChild(video);
        }

        // Fullscreen kérés
        if (video.webkitEnterFullscreen) {
            video.play().then(() => {
                video.webkitEnterFullscreen();
            }).catch(() => {
                alert("Nem sikerült fullscreen módba lépni.");
            });
        } else {
            alert("Ez az iOS böngésző nem támogatja a fullscreen módot.");
        }
    }
}

enterFullscreen();

}

window.Script1752 = function()
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

window.Script1753 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script1754 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script1755 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script1756 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script1757 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script1758 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script1759 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script1760 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script1761 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script1762 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script1763 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // iOS: csak videót lehet fullscreenre rakni
        var video = document.querySelector("video");
        if (video && video.webkitEnterFullscreen) {
            video.webkitEnterFullscreen();
        } else {
            alert("iOS-en csak videót lehet teljes képernyőre rakni.");
        }
    }
}

enterFullscreen();

}

window.Script1764 = function()
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

window.Script1765 = function()
{
  function enterFullscreen() {
    var element = document.documentElement;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isIOS) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // Keresünk vagy létrehozunk egy rejtett videót
        var video = document.getElementById("hiddenFullscreenVideo");
        if (!video) {
            video = document.createElement("video");
            video.id = "hiddenFullscreenVideo";
            video.src = "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAAAAG1wNDFtcDQyaXNvbTEyMAAAAG1vb3YAAABsbXZoZAAAAAB8JgB8JgAAAAAAAGQAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABhzdHRzAAAAAAAAAAEAAAABAAAAAA=="; // 1 képkockás, üres mp4
            video.setAttribute("playsinline", "true");
            video.style.position = "absolute";
            video.style.width = "1px";
            video.style.height = "1px";
            video.style.opacity = "0";
            document.body.appendChild(video);
        }

        // Fullscreen kérés
        if (video.webkitEnterFullscreen) {
            video.play().then(() => {
                video.webkitEnterFullscreen();
            }).catch(() => {
                alert("Nem sikerült fullscreen módba lépni.");
            });
        } else {
            alert("Ez az iOS böngésző nem támogatja a fullscreen módot.");
        }
    }
}

enterFullscreen();

}

window.Script1766 = function()
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

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
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script272 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script273 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script274 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script275 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script276 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script277 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script278 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script279 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script280 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script281 = function()
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

window.Script282 = function()
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

window.Script283 = function()
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

window.Script284 = function()
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

window.Script285 = function()
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

window.Script286 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szinvalto"); 
player.SetVar("szinvalto", currentText + "🟡");
}

window.Script287 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szinvalto"); 
player.SetVar("szinvalto", currentText + "🔴");
}

window.Script288 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szinvalto"); 
player.SetVar("szinvalto", currentText + "⚪");
}

window.Script289 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script290 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script291 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script292 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script293 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script294 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script295 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script296 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script297 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script298 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script299 = function()
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

window.Script300 = function()
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

window.Script301 = function()
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

window.Script302 = function()
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

window.Script303 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("runa1");

var runak = ["ᛗ", "ᛖ", "ᛈ", "ᚻ", "ᚩ", "ᛞ", "ᚳ", "ᛋ", "ᛇ", "ᚹ", "ᛠ", "ᚾ", "ᚼ", "ᚱ", "ᚲ", "ᛄ"];
var index = runak.indexOf(betu);
index = (index + 1) % runak.length;

player.SetVar("runa1", runak[index]);

}

window.Script304 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("runa1");

var runak = ["ᛗ", "ᛖ", "ᛈ", "ᚻ", "ᚩ", "ᛞ", "ᚳ", "ᛋ", "ᛇ", "ᚹ", "ᛠ", "ᚾ", "ᚼ", "ᚱ", "ᚲ", "ᛄ"];
var index = runak.indexOf(betu);
index = (index - 1 + runak.length) % runak.length;

player.SetVar("runa1", runak[index]);

}

window.Script305 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("runa2");

var runak = ["ᛗ", "ᛖ", "ᛈ", "ᚻ", "ᚩ", "ᛞ", "ᚳ", "ᛋ", "ᛇ", "ᚹ", "ᛠ", "ᚾ", "ᚼ", "ᚱ", "ᚲ", "ᛄ"];
var index = runak.indexOf(betu);
index = (index + 1) % runak.length;

player.SetVar("runa2", runak[index]);

}

window.Script306 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("runa3");

var runak = ["ᛗ", "ᛖ", "ᛈ", "ᚻ", "ᚩ", "ᛞ", "ᚳ", "ᛋ", "ᛇ", "ᚹ", "ᛠ", "ᚾ", "ᚼ", "ᚱ", "ᚲ", "ᛄ"];
var index = runak.indexOf(betu);
index = (index + 1) % runak.length;

player.SetVar("runa3", runak[index]);

}

window.Script307 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("runa4");

var runak = ["ᛗ", "ᛖ", "ᛈ", "ᚻ", "ᚩ", "ᛞ", "ᚳ", "ᛋ", "ᛇ", "ᚹ", "ᛠ", "ᚾ", "ᚼ", "ᚱ", "ᚲ", "ᛄ"];
var index = runak.indexOf(betu);
index = (index + 1) % runak.length;

player.SetVar("runa4", runak[index]);

}

window.Script308 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("runa2");

var runak = ["ᛗ", "ᛖ", "ᛈ", "ᚻ", "ᚩ", "ᛞ", "ᚳ", "ᛋ", "ᛇ", "ᚹ", "ᛠ", "ᚾ", "ᚼ", "ᚱ", "ᚲ", "ᛄ"];
var index = runak.indexOf(betu);
index = (index - 1 + runak.length) % runak.length;

player.SetVar("runa2", runak[index]);

}

window.Script309 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("runa3");

var runak = ["ᛗ", "ᛖ", "ᛈ", "ᚻ", "ᚩ", "ᛞ", "ᚳ", "ᛋ", "ᛇ", "ᚹ", "ᛠ", "ᚾ", "ᚼ", "ᚱ", "ᚲ", "ᛄ"];
var index = runak.indexOf(betu);
index = (index - 1 + runak.length) % runak.length;

player.SetVar("runa3", runak[index]);

}

window.Script310 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("runa4");

var runak = ["ᛗ", "ᛖ", "ᛈ", "ᚻ", "ᚩ", "ᛞ", "ᚳ", "ᛋ", "ᛇ", "ᚹ", "ᛠ", "ᚾ", "ᚼ", "ᚱ", "ᚲ", "ᛄ"];
var index = runak.indexOf(betu);
index = (index - 1 + runak.length) % runak.length;

player.SetVar("runa4", runak[index]);

}

window.Script311 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("betu1");

var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
var index = abc.indexOf(betu);
index = (index + 1) % abc.length;

player.SetVar("betu1", abc[index]);
}

window.Script312 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("betu1");

var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
var index = abc.indexOf(betu);
index = (index - 1 + abc.length) % abc.length;

player.SetVar("betu1", abc[index]);

}

window.Script313 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("betu2");

var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
var index = abc.indexOf(betu);
index = (index + 1) % abc.length;

player.SetVar("betu2", abc[index]);
}

window.Script314 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("betu3");

var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
var index = abc.indexOf(betu);
index = (index + 1) % abc.length;

player.SetVar("betu3", abc[index]);
}

window.Script315 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("betu4");

var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
var index = abc.indexOf(betu);
index = (index + 1) % abc.length;

player.SetVar("betu4", abc[index]);
}

window.Script316 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("betu2");

var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
var index = abc.indexOf(betu);
index = (index - 1 + abc.length) % abc.length;

player.SetVar("betu2", abc[index]);

}

window.Script317 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("betu3");

var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
var index = abc.indexOf(betu);
index = (index - 1 + abc.length) % abc.length;

player.SetVar("betu3", abc[index]);

}

window.Script318 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("betu4");

var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
var index = abc.indexOf(betu);
index = (index - 1 + abc.length) % abc.length;

player.SetVar("betu4", abc[index]);

}

window.Script319 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script320 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script321 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script322 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script323 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script324 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script325 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script326 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script327 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script328 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script329 = function()
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

window.Script330 = function()
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

window.Script331 = function()
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

window.Script332 = function()
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

window.Script333 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script334 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script335 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script336 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script337 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script338 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script339 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script340 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script341 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script342 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script343 = function()
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

window.Script344 = function()
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

window.Script345 = function()
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

window.Script346 = function()
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

window.Script347 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "1");
}

window.Script348 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "2");
}

window.Script349 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "3");
}

window.Script350 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "4");
}

window.Script351 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "5");
}

window.Script352 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "6");
}

window.Script353 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "7");
}

window.Script354 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "8");
}

window.Script355 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "9");
}

window.Script356 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "0");
}

window.Script357 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("muhely"); 
player.SetVar("muhely", currentText + "C");
}

window.Script358 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script359 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script360 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script361 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script362 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script363 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script364 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script365 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script366 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script367 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script368 = function()
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

window.Script369 = function()
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

window.Script370 = function()
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

window.Script371 = function()
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

window.Script372 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "1");
}
}

window.Script373 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "2");
}
}

window.Script374 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "3");
}
}

window.Script375 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "4");
}
}

window.Script376 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "5");
}
}

window.Script377 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "6");
}
}

window.Script378 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "7");
}
}

window.Script379 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "8");
}
}

window.Script380 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "9");
}
}

window.Script381 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("szekreny1"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("szekreny1", currentText + "0");
}
}

window.Script382 = function()
{
  var player = GetPlayer();
var text = player.GetVar("szekreny1");
player.SetVar("szekreny1", text.slice(0, -1));
}

window.Script383 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script384 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script385 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script386 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script387 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script388 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script389 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script390 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script391 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script392 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script393 = function()
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

window.Script394 = function()
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

window.Script395 = function()
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

window.Script396 = function()
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

window.Script397 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script398 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script399 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script400 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script401 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script402 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script403 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script404 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script405 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script406 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script407 = function()
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

window.Script408 = function()
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

window.Script409 = function()
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
var currentText = player.GetVar("koordinata");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue && currentText.length === 1) {
    player.SetVar("koordinata", currentText + buttonValue);
}

}

window.Script412 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("koordinata");

var buttonValue = event.target.getAttribute("data-acc-text") || event.currentTarget.getAttribute("data-acc-text");

if (buttonValue && currentText.length === 0) {
    player.SetVar("koordinata", currentText + buttonValue);
}

}

window.Script413 = function()
{
  var player = GetPlayer();
var text = player.GetVar("koordinata");

if (text.length === 3) {
    player.SetVar("koordinata", text.slice(0, -2));
} else if (text.length === 1) {
    player.SetVar("koordinata", text.slice(0, -1));
}

}

window.Script414 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "1");
}
}

window.Script415 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "2");
}
}

window.Script416 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "3");
}
}

window.Script417 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "4");
}
}

window.Script418 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "5");
}
}

window.Script419 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "6");
}
}

window.Script420 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "7");
}
}

window.Script421 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "8");
}
}

window.Script422 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "9");
}
}

window.Script423 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("raktar"); 

// Ellenőrizzük, hogy a jelenlegi hossz kisebb-e 4-nél
if (currentText.length < 4) {
    player.SetVar("raktar", currentText + "0");
}
}

window.Script424 = function()
{
  var player = GetPlayer();
var text = player.GetVar("raktar");
player.SetVar("raktar", text.slice(0, -1));
}

window.Script425 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script426 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script427 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script428 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script429 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script430 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script431 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script432 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script433 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script434 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script435 = function()
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

window.Script436 = function()
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

window.Script437 = function()
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

window.Script438 = function()
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

window.Script439 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("szam1");

var abc = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var index = abc.indexOf(betu);
index = (index + 1) % abc.length;

player.SetVar("szam1", abc[index]);
}

window.Script440 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("szam2");

var abc = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var index = abc.indexOf(betu);
index = (index + 1) % abc.length;

player.SetVar("szam2", abc[index]);
}

window.Script441 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("szam3");

var abc = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var index = abc.indexOf(betu);
index = (index + 1) % abc.length;

player.SetVar("szam3", abc[index]);
}

window.Script442 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("szam4");

var abc = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var index = abc.indexOf(betu);
index = (index + 1) % abc.length;

player.SetVar("szam4", abc[index]);
}

window.Script443 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("szam1");

var abc = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var index = abc.indexOf(betu);
index = (index - 1) % abc.length;

player.SetVar("szam1", abc[index]);
}

window.Script444 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("szam2");

var abc = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var index = abc.indexOf(betu);
index = (index - 1) % abc.length;

player.SetVar("szam2", abc[index]);
}

window.Script445 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("szam3");

var abc = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var index = abc.indexOf(betu);
index = (index - 1) % abc.length;

player.SetVar("szam3", abc[index]);
}

window.Script446 = function()
{
  var player = GetPlayer();
var betu = player.GetVar("szam4");

var abc = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var index = abc.indexOf(betu);
index = (index - 1) % abc.length;

player.SetVar("szam4", abc[index]);
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

window.Script459 = function()
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

window.Script460 = function()
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

window.Script461 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("utvonal"); 

player.SetVar("utvonal", currentText + "◀ ");

}

window.Script462 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("utvonal"); 

player.SetVar("utvonal", currentText + "▲ ");

}

window.Script463 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("utvonal"); 

player.SetVar("utvonal", currentText + "▶ ");

}

window.Script464 = function()
{
  var player = GetPlayer();
var text = player.GetVar("utvonal");
player.SetVar("utvonal", text.slice(0, -2));
}

window.Script465 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script466 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script467 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script468 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script469 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script470 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script471 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script472 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script473 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script474 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script475 = function()
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

window.Script476 = function()
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

window.Script477 = function()
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

window.Script478 = function()
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

window.Script479 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script480 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script481 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script482 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script483 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script484 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script485 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script486 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script487 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script488 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script489 = function()
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

window.Script490 = function()
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

window.Script491 = function()
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

window.Script492 = function()
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

window.Script493 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script494 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script495 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script496 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script497 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script498 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script499 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script500 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script501 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script502 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script503 = function()
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

window.Script504 = function()
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

window.Script505 = function()
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

window.Script506 = function()
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

window.Script507 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "1");
} else {
    player.SetVar("kartya", currentText + "1");
}
}

window.Script508 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "2");
} else {
    player.SetVar("kartya", currentText + "2");
}
}

window.Script509 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "3");
} else {
    player.SetVar("kartya", currentText + "3");
}
}

window.Script510 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "4");
} else {
    player.SetVar("kartya", currentText + "4");
}
}

window.Script511 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "5");
} else {
    player.SetVar("kartya", currentText + "5");
}
}

window.Script512 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "6");
} else {
    player.SetVar("kartya", currentText + "6");
}
}

window.Script513 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "7");
} else {
    player.SetVar("kartya", currentText + "7");
}
}

window.Script514 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "8");
} else {
    player.SetVar("kartya", currentText + "8");
}
}

window.Script515 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "9");
} else {
    player.SetVar("kartya", currentText + "9");
}
}

window.Script516 = function()
{
  var player = GetPlayer();
var currentText = player.GetVar("kartya");

if (currentText.length >= 4) {
    player.SetVar("kartya", "0");
} else {
    player.SetVar("kartya", currentText + "0");
}
}

window.Script517 = function()
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

window.Script518 = function()
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

window.Script519 = function()
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

window.Script520 = function()
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

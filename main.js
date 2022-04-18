var bleep = new Audio();
bleep.src = "sounds/bleep.wav";
function loadContent(num){
    bleep.play();
}
function openNav() {
    document.getElementById("sideNavigation").style.left = "0px";
    document.getElementById("allcontent").style.marginLeft = "250px";
    document.getElementById("navshadow").style.display = "block";
    document.documentElement.style.overflow = 'hidden';
}
 
function closeNav() {
    document.getElementById("sideNavigation").style.left = "-250px";
    document.getElementById("allcontent").style.marginLeft = "0px";
   document.getElementById("navshadow").style.display = "none";
   document.documentElement.style.overflowY = 'visible';
}
 
function closeBox() {
  document.getElementById("welbox").style.display = "none";
     document.getElementById("bgshadow").style.height = "0";
     document.documentElement.style.overflow = 'auto';
     document.documentElement.style.overflowX = 'hidden';
}

function openShare() {
  document.getElementById("shareit").style.display = "block";
    document.getElementById("sharebox").style.display = "block"; 
}
 
function closeShare() {
  document.getElementById("shareit").style.display = "none";
     document.getElementById("sharebox").style.display = "none";
}

function myFunction() {
  var copyText = document.getElementById("myurl");
  copyText.select();
  document.execCommand("copy");
}
//////////////////////////////////   Open and close sidebar   /////////////////////////////////////

function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


document.getElementById("mySidenav").onclick = function() {closeNav()};
document.getElementById("particles-js").onclick = function() {closeNav()};
document.getElementById("about").onclick = function() {closeNav()};
document.getElementById("main-works").onclick = function() {closeNav()};
document.getElementById("contact").onclick = function() {closeNav()};



////////////////////////////////   Show navbar menu on scroll   ///////////////////////////////////

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
}



//////////////////////////////   Filter for works buttons   ////////////////////////////////////////////

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn-works");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active-works");
    current[0].className = current[0].className.replace(" active-works", "");
    this.className += " active-works";
  });
}









// Add active class to the current button (highlight it)
var header = document.getElementById("language-select");
var btns = header.getElementsByClassName("language");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active-lang");
  current[0].className = current[0].className.replace(" active-lang", "");
  this.className += " active-lang";
  });
}
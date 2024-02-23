/*!
* Start Bootstrap - Small Business v5.0.6 (https://startbootstrap.com/template/small-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-small-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
function myFunction() {
  var MoreInf = document.getElementById("MoreInf")
  var MoreInfText = document.getElementById("MoreInfText")
  var Dots = document.getElementById("Dots")
  if (Dots.style.display === "none") {
    Dots.style.display = "inline";
    MoreInf.innerHTML = "More Info";
    MoreInfText.style.display = "none";
  } else {
    Dots.style.display = "none";
    MoreInf.innerHTML = "Less Info";
    MoreInfText.style.display = "inline";
  }
}
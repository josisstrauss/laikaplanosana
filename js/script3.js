var GB = document.getElementById("GB");
var MB = document.getElementById("MB");
var MiB = document.getElementById("MiB");

function izteiktmb() {
  var GB = document.getElementById("GB").value;
  var MB2 = GB * 1000;
  document.getElementById("MB").value = MB2;
}

function izteiktmib() {
  var GB = document.getElementById("GB").value;
  var MiB2 = GB * 953.674316;
  document.getElementById("MiB").value = MiB2;
}
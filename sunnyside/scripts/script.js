"use strict;"

 function myFunction() {
    var x = document.getElementById("tglmn");
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
  }
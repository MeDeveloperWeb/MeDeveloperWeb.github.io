alert("WELCOME TO THIS PAGE ." )

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = " Click here to see content. " ;
    moreText.style.display = "none";
  }
 else {
    dots.style.display = "none";
    btnText.innerHTML = "Click here to hide content .";
    moreText.style.display = "inline";
  }
}
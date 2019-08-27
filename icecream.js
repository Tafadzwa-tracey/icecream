
function show_hide()
{
  var click=document.getElementById("dropdown_content");
  click.style.display=none;
  if(click.style.display=="none")
    {click.style.display="block";}
  else { click.style.display="none";}
}


var myIndex = 0;

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
carousel();

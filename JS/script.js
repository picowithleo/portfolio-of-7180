// W3Schools. (2019). JavaScript Tutorial. Retrieved from https://www.w3schools.com/js/default.asp

//Get the button:
var mybutton = document.getElementById("myBtn");
//Get the navbar ID:
var navbar = document.getElementById("WB-timeline");
var sticky = 370;//SET THE offset top as 370


// When scrolls down 420px from the top of the website, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 420 || document.documentElement.scrollTop > 420) {
    mybutton.style.display = "block";//change to block
  } else {
    mybutton.style.display = "none";
  }
  
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky") //add class sticky style to override the element
  } else {
    navbar.classList.remove("sticky");
  }
}

// When clicks on the button, scroll to the top
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("myImg");
// to all images
var images = document.getElementsByClassName('myImages');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
    var img = images[i];
    // and attach our click listener for this image.
    img.onclick = function(evt) {
        console.log(evt);
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}

//W3Schools. (2019). How TO - Responsive Image Grid. Retrieved from https://www.w3schools.com/howto/howto_css_image_grid_responsive.asp
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

//a function to hide div element.
function HideFunction() {
    var x = document.getElementById("plc-main");
    var y = document.getElementById("photo")
    if (x.style.display = "none") {//hide x and show y
      y.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

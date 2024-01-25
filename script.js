$(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      items: 1,
      margin: 10,
      loop: true
    });
  });


  var counted = 0;
$(window).scroll(function() {

  var count = $('#counter-about');
  if(count.length){
  var oTop = count.offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 1;
  }
}

});

// sticky header

$(window).on("scroll touchmove", function() {

  if ($(document).scrollTop() > $("#sticky-wrapper").position().top) {
    $('.sticky-area').css('width', '100%');
    $('.sticky-area').css('position', 'fixed');
    $('.sticky-area').css('top', '0px');
    $('.sticky-area').css('background', '#cddadc');
    $('.sticky-area').css('z-index', '1111');
    $('.sticky-area').css('box-shadow', '0 3px 16px -2px #ebe8e8');
    $('#sticky-wrapper').addClass('is-sticky');

  }
  else{
  $('.sticky-area').removeAttr('style');

  }
  
});


// loader js

document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
      document.querySelector(
          "body").style.visibility = "hidden";
      document.querySelector(
          ".preloader").style.visibility = "visible";
  } else {
      document.querySelector(
          ".preloader").style.display = "none";
      document.querySelector(
          "body").style.visibility = "visible";
  }
  };



function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);


// mobile menu

$( document ).ready(function() {

  $( ".cross" ).hide();
  $( ".menu" ).hide();
  $( ".hamburger" ).click(function() {
  $( ".menu" ).slideToggle( "slow", function() {
  $( ".hamburger" ).hide();
  $( ".cross" ).show();
  });
  });
  
  $( ".cross" ).click(function() {
  $( ".menu" ).slideToggle( "slow", function() {
  $( ".cross" ).hide();
  $( ".hamburger" ).show();
  });
  });
  
  });

 // Close out sub menu
 $('.sub__close').click(function(e) {
  e.preventDefault();
  
  $(this).parent().parent().removeClass('is-active');
});

// Trigger sub menu
$('.menu ul .nav__submenu').click(function(e) {
  e.preventDefault();
  
  $(this).siblings().addClass('is-active');
});



function activeTab(evt, id) {
           
  // Get all elements with class="tablinks" and remove the class "active"
   let tabactive = document.getElementsByClassName("TabButtonSelected");
   tabactive[0].className = tabactive[0].className.replace(" TabButtonSelected", "");

   document.getElementById(id).style.display = "block";
   evt.currentTarget.className += " TabButtonSelected";

   displaySection(evt,id)
}

function displaySection(evt, id) {

   let tabactive = document.getElementsByClassName("tab-section");
   tabactive[0].className = tabactive[0].className.replace(" d-chart-show", "d-chart-n");
   // add below line of codes
   [...document.querySelectorAll('div.tab-section')].forEach(item => item.style.display='none')
   document.getElementById("Section" + id).style.display = "block";
   evt.currentTarget.className += " d-chart-show";

}


// window load popup form


// Get references to the close button and the modal
const closeModalButton = document.getElementById("closeModalButton");
const modal = document.getElementById("modal");
const innerContainer = document.querySelector(".video-auto-play-container");
const showModalButton = document.getElementById("showModalButton");
  // Function to show the modal and set the body's overflow to hidden
  function showModal() {
    modal.style.display = "flex";
    document.body.classList.add("modal-open");
  }

  // Function to hide the modal and reset the body's overflow to auto
  function hideModal() {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  }

  // Function to check if the user has seen the modal in the current session
function hasSeenModalInSession() {
  return sessionStorage.getItem("modalSeen") === "true";
}

  // Function to check if the user has seen the modal
  function hasSeenModal() {
    return sessionStorage.getItem("modalSeen") === "true";
  }

  // Function to mark the modal as seen for the current session
function markModalAsSeenInSession() {
  sessionStorage.setItem("modalSeen", "true");
}

  // Function to mark the modal as seen
  function markModalAsSeen() {
    localStorage.setItem("modalSeen", "true");
  }

  // Check if the user has seen the modal
  if (!hasSeenModalInSession()) {
    showModal();
  }

  // Add a click event listener to the close button
  closeModalButton.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent the click event from bubbling to the modal
    hideModal();
    markModalAsSeenInSession();
  });

  // Add a click event listener to the modal overlay
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      hideModal();
      markModalAsSeenInSession();
    }
  });

  // Prevent clicks inside the inner container from closing the modal
  innerContainer.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent the click event from bubbling to the modal
  });

  // Add a click event listener to the "Show Modal" button to trigger showModal
  showModalButton.addEventListener("click", () => {
    showModal();
  });

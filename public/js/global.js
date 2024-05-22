jQuery(document).ready(function(){
    jQuery(".hamburger").click(function(){
        jQuery(this).toggleClass("is-active");
    });

    jQuery(".navitem a").click(function(){
      jQuery(".hamburger").removeClass("is-active"); // Remove "is-active" from the hamburger
    });

    jQuery(".menu-overlay").click(function(){
      jQuery(".hamburger").removeClass("is-active"); // Remove "is-active" from the hamburger
    });

    jQuery(".navitem").click(function(){
      jQuery(".hamburger").removeClass("is-active"); // Remove "is-active" from the hamburger
    });

    jQuery(".help-button").click(function(){
      jQuery(".instruction").addClass("active");
    });

    jQuery(".instruction-close").click(function(){
      jQuery(".instruction").removeClass("active");
    });
});

// Dynamic putting active class
const navLinks = document.querySelectorAll('.navitem a');
navLinks.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');  
  }
});


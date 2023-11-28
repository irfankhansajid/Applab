$('.slider').slick({
  infinite: true,
  slideToShow: 1,
  slideToScroll: 1
});

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})


<h5 class="text-primary">01</h5>
                <h4>Sign Up for free</h3>
                <p class="mt-3 text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.</p>


<div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider>

<ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m uk-grid">
    <li>
        <div class="uk-panel">
            <img src="images/slider1.jpg" alt="">
            <div class="uk-position-center uk-panel"><h1>1</h1></div>
        </div>
    </li>
    <li>
        <div class="uk-panel">
            <img src="images/slider2.jpg" alt="">
            <div class="uk-position-center uk-panel"><h1>2</h1></div>
        </div>
    </li>
    <li>
        <div class="uk-panel">
            <img src="images/slider3.jpg" alt="">
            <div class="uk-position-center uk-panel"><h1>3</h1></div>
        </div>
    </li>
    <li>
        <div class="uk-panel">
            <img src="images/slider4.jpg" alt="">
            <div class="uk-position-center uk-panel"><h1>4</h1></div>
        </div>
    </li>
    <li>
        <div class="uk-panel">
            <img src="images/slider5.jpg" alt="">
            <div class="uk-position-center uk-panel"><h1>5</h1></div>
        </div>
    </li>
   
</ul>

<a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
<a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

</div>
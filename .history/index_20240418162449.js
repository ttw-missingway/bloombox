console.log("Hello world");
let cats = [];
let count = 0;

async function logCats() {
  const response = await fetch("https://ghibliapi.vercel.app/films");
  cats = await response.json();
  console.log(cats);
}

$(document).scroll(function() {
    var windowHeight = $(window).height();

    $('.cat-image').each(function() {
        var $this = $(this);
        var parentOffsetTop = $this.parent().offset().top;
        var parentHeight = $this.parent().height();
        var scrollPosition = $(window).scrollTop();
        var speed = 0.05; // Adjust based on the desired effect

        // Calculate the start and end points of the parallax effect
        var startEffect = parentOffsetTop - windowHeight;
        var endEffect = parentOffsetTop + parentHeight;
        
        // Calculate the current scroll position within the effect range
        var scrollRange = endEffect - startEffect;
        var scrollEffectPosition = scrollPosition - startEffect;
        
        // Calculate the percentage of the scroll within the effect range
        var scrollPercent = scrollEffectPosition / scrollRange;
        
        // Ensure the percentage is between 0 and 1
        scrollPercent = Math.min(Math.max(scrollPercent, 0), 1);
        
        // Calculate the movement distance based on the percentage
        var movementRange = 40; // This should match the extra height added to the image
        var distance = (movementRange * scrollPercent) - (movementRange / 2); // Adjust movement to start from the middle

        // Apply the calculated transform
        $this.css('transform', `translateY(${distance}px)`);
    });
});

window.onload = async function () {
  await logCats();
  $("#main_div").prepend('<div id="cats-container" class="flex-col"></div>');
  cats.forEach((cat) => {
    count++;
    $("#cats-container").prepend(
      `<div class="cat">
      <h1>${cat.title}</h1>
      <div class="img-wrapper"><img class="cat-image" src="${cat.image}" alt="${cat.title}"></div>
      <p>${cat.description}</p>
      </div>`);
  });
};

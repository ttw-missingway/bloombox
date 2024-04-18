let cats = [];
let count = 0;

async function logCats() {
  const response = await fetch("https://ghibliapi.vercel.app/films");
  cats = await response.json();
  console.log(cats);
}

$(document).scroll(function() {
    var scrollPosition = $(window).scrollTop();

    $('.cat-image').each(function() {
        var imageOffsetTop = $(this).parent().offset().top; // Get the top position of the image's parent div
        var speed = 0.05; // Adjust this value to control the speed of the parallax effect
        var distance = (scrollPosition - imageOffsetTop) * speed + 'px';

        // Only apply the effect when the image is in the viewport
        if (scrollPosition + $(window).height() > imageOffsetTop && scrollPosition < imageOffsetTop + $(this).parent().height()) {
            $(this).css('transform', `translateY(${distance})`);
        }
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
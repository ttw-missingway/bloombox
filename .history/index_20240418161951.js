console.log("Hello world");
let cats = [];
let count = 0;

async function logCats() {
  const response = await fetch("https://ghibliapi.vercel.app/films");
  cats = await response.json();
  console.log(cats);
}

$(document).scroll(function() {
  var scrollPosition = $(window).scrollTop();
  var speed = 0.05; // Adjust this value to control the speed of the parallax effect

  $('.cat-image').each(function() {
      var distance = (scrollPosition * speed) + 'px';
      $(this).css('transform', `translateY(${distance})`);
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

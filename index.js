let cards = [];

async function logCards() {
  const response = await fetch("https://ghibliapi.vercel.app/films");
  cards = await response.json();
}

$(document).scroll(function () {
  var scrollPosition = $(window).scrollTop();

  $(".card-image").each(function () {
    var imageOffsetTop = $(this).parent().offset().top; // Get the top position of the image's parent div
    var speed = 0.05; // Adjust this value to control the speed of the parallax effect
    var distance = (scrollPosition - imageOffsetTop) * speed + "px";

    // Only apply the effect when the image is in the viewport
    if (
      scrollPosition + $(window).height() > imageOffsetTop &&
      scrollPosition < imageOffsetTop + $(this).parent().height()
    ) {
      $(this).css("transform", `translateY(${distance})`);
    }
  });
});

window.onload = async function () {
  console.log("Starting Bloombox Connection...");
  await logCards();
  console.log("Data fetched: ", cards);
  $("body").append(`<div id="main_div"></div>`);
  console.log("Appending to DOM");
  $("#main_div").prepend('<div id="card-container" class="flex-col"></div>');
  console.log("Prepending to #Main Div");
  cards.forEach((card) => {
    $("#card-container").prepend(
      `<div class="card">
      <div class="card-header">
        <h1>${card.title}</h1>
      </div>
      <div class="img-wrapper"><img class="card-image" src="${card.image}" alt="${card.title}"></div>
      <p class="card-copy">${card.description}</p>
      </div>`
    );
  });
  console.log("Populating #Main Div with fetched data");
  $(".card-copy").each(function () {
    if ($(this).prop("scrollHeight") > $(this).innerHeight()) {
      // Content is overflowing
      $(this).addClass("is-overflowing");
    }
  });
  console.log("Hydrating data with javascript");
  console.log("Done");
};

console.log("Hello world");
let cats = [];

async function logCats() {
  const response = await fetch("https://ghibliapi.vercel.app/films");
  cats = await response.json();
}

window.onload = function () {
  logCats();
  $("#main_div").prepend('<div id="cats-container" class="flex-col">...</div>');
  cats.
};


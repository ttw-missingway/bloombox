console.log("Hello world");
async function logCats() {
  const response = await fetch("https://ghibliapi.vercel.app/films");
  const cats = await response.json();
  console.log(cats);
}

window.onload = function () {
  logCats();
  $("#main_div").prepend('<div class="flex-col">...</div>');
};


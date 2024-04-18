console.log("Hello world");
let cats = [];
let count = 0;

async function logCats() {
  const response = await fetch("https://ghibliapi.vercel.app/films");
  cats = await response.json();
  console.log(cats);
}

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

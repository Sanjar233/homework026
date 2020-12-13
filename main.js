let btn = document.querySelector("button");
function getRandomColor() {
  return Math.ceil(Math.random() * 255);
}
btn.addEventListener("click", function () {
  let color = getRandomColor();
  let squares = document.querySelectorAll(".square");
  for (let square of squares) {
    square.style.background = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`
  }
});
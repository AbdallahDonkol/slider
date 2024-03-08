var allImgs = Array.from(document.querySelectorAll(".item img"));
var boxContainer = document.querySelector(".lightBoxContainer");
var lightBox = document.querySelector(".lightBox");
var rightBtn = document.getElementById("rightBtn");
var leftBtn = document.getElementById("leftBtn");
var index;
for (var i = 0; i < allImgs.length; i++) {
  allImgs[i].addEventListener("click", function (e) {
    boxContainer.classList.replace("d-none", "d-flex");
    var currentSrc = e.target.getAttribute("src");
    lightBox.style.backgroundImage = `url(${currentSrc})`;
    index = allImgs.indexOf(e.target);
    if (index == allImgs.length - 1) {
      rightBtn.classList.add("visually-hidden");
    }
    if (index == 0) {
      leftBtn.classList.add("visually-hidden");
    }
  });
}

document.getElementById("closeBtn").addEventListener("click", function () {
  boxContainer.classList.replace("d-flex", "d-none");
  if (index < allImgs.length) {
    rightBtn.classList.replace("visually-hidden", "visible");
  }
  if (index >= 0) {
    leftBtn.classList.replace("visually-hidden", "visible");
  }
});

rightBtn.addEventListener("click", function () {
  index++;
  if (index < allImgs.length) {
    lightBox.style.backgroundImage = `url(${allImgs[index].getAttribute(
      "src"
    )})`;
    leftBtn.classList.replace("visually-hidden", "visible");
  }
  if (index == allImgs.length - 1) {
    rightBtn.classList.add("visually-hidden");
  }
});
leftBtn.addEventListener("click", function () {
  index--;
  if (index >= 0) {
    lightBox.style.backgroundImage = `url(${allImgs[index].getAttribute(
      "src"
    )})`;
    rightBtn.classList.replace("visually-hidden", "visible");
  }
  if (index == 0) {
    leftBtn.classList.add("visually-hidden");
  }
});

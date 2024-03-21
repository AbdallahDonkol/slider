var imgs = Array.from(document.querySelectorAll(".item img"));
var mainImgContainer = document.querySelector(".lightBoxContainer");
var mainImg = document.querySelector(".lightBox");
var closeBtn = document.getElementById("closeBtn");
var leftBtn = document.getElementById("leftBtn");
var rightBtn = document.getElementById("rightBtn");
var index;

for(var i=0; i<imgs.length;i++ ){
  imgs[i].addEventListener("click",function(e){
    var currentSrc = e.target.getAttribute("src");
    mainImg.style.backgroundImage = `url(${currentSrc})`;
    mainImgContainer.classList.replace("d-none","d-flex");
    index = imgs.indexOf(e.target);
  })
}

closeBtn.addEventListener("click",function(){
  closeSlider();
})

leftBtn.addEventListener("click",function(){
  prevSlider()
});

rightBtn.addEventListener("click",function(){
  nextSlider()
})

function closeSlider(){
  mainImgContainer.classList.replace("d-flex","d-none");
}

function prevSlider(){
  index--;
  if(index == -1){
    index = imgs.length -1;
  }
  mainImg.style.backgroundImage = `url(${imgs[index].getAttribute("src")})`;
}

function nextSlider(){
  index++;
  if(index == imgs.length ){
    index = 0;
  }
  mainImg.style.backgroundImage = `url(${imgs[index].getAttribute("src")})`;
}

document.addEventListener("keyup",function(e){
  switch(e.code){
    case "Escape": closeSlider(); break;
    case "ArrowLeft": prevSlider(); break;
    case "ArrowRight": nextSlider(); break;
  } 
});

mainImgContainer.addEventListener("click", function(e){
  if(e.target != mainImg && e.target !== leftBtn && e.target != rightBtn){
    closeSlider();
  }
})

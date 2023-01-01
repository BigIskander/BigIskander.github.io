function pageOnLoad() {
  pageOnScrollDo();
}

function pageOnResize() {
  pageOnScrollDo();
}

function pageOnScrollDo() {
  body = document.querySelector("body");
  toTopButton = document.querySelector(".to_top");
  if((body.scrollHeight > window.innerHeight) && (pageYOffset > 20)) {
    contentPosition = document.querySelector(".content").getBoundingClientRect();
    toTopButton.style.top = (pageYOffset + window.innerHeight - toTopButton.offsetHeight) + "px";
    toTopButton.style.left = (contentPosition.right + 10) + "px";
    toTopButton.style.visibility = "visible";
    //+ toTopButton.offsetWidth
  } else {
    toTopButton.style.visibility = "hidden";
  }
}

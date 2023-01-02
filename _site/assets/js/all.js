var zoomed = false;

function pageOnLoad() {
  pageOnScrollDo();
  addZoomToImages();
}

function pageOnResize() {
  zoomOutImage();
  pageOnScrollDo();
}

function pageOnScrollDo() {
  zoomOutImage();
  //to top button
  body = document.querySelector("body");
  toTopButton = document.querySelector(".to_top");
  if((body.scrollHeight > window.innerHeight) && (pageYOffset > 20)) {
    contentPosition = document.querySelector(".content").getBoundingClientRect();
    toTopButton.style.top = (pageYOffset + window.innerHeight - toTopButton.offsetHeight) + "px";
    toTopButton.style.left = (contentPosition.right + 10) + "px";
    toTopButton.style.visibility = "visible";
  } else {
    toTopButton.style.visibility = "hidden";
  }
}

function addZoomToImages() {
    content = document.querySelector(".content");
    images = content.querySelectorAll("img");
    images.forEach(image => {
      image.setAttribute("onclick", "zoomInImage(this)");
    });
}

function zoomInImage(image) {
    zoomOutImage();
    zoomedImage = document.querySelector(".image_zoom");
    zoomedImage.setAttribute("src", image.getAttribute("src"));
    if(image.naturalHeight > (window.innerHeight * 0.9)
        || image.naturalWidth > (window.innerWidth * 0.9))
    {
        if(image.naturalHeight == image.naturalWidth)
        {
            zoomedImageHeight = window.innerHeight * 0.9;
            zoomedImageWidth = window.innerWidth * 0.9;
        } else if(image.naturalHeight > image.naturalWidth) {
            zoomedImageHeight = window.innerHeight * 0.9;
            zoomedImageWidth = image.naturalWidth * (zoomedImageHeight / image.naturalHeight);
        } else {
            zoomedImageWidth = window.innerWidth * 0.9;
            zoomedImageHeight = image.naturalHeight * (zoomedImageWidth / image.naturalWidth);
        }
    } else {
        zoomedImageHeight = image.naturalHeight;
        zoomedImageWidth = image.naturalWidth;
    }
    topAdjust = zoomedImageHeight >= (window.innerHeight * 0.9)
        ? window.innerHeight * 0.05 : (window.innerHeight - zoomedImageHeight) / 2;
    leftAdjust = zoomedImageWidth >= (window.innerWidth * 0.9)
        ? window.innerWidth * 0.05 : (window.innerWidth - zoomedImageWidth) / 2;
    zoomedImage.style.height = zoomedImageHeight;
    zoomedImage.style.width = zoomedImageWidth;
    zoomedImage.style.top = topAdjust + "px";
    zoomedImage.style.left = leftAdjust + "px";
    zoomedImage.parentElement.style.top = pageYOffset + "px";
    zoomedImage.parentElement.style.height=window.innerHeight + "px";
    zoomedImage.style.visibility = "visible";
    zoomedImage.parentElement.style.visibility = "visible";
    zoomed=true;
    setTimeout(() => {
      body.addEventListener("click", zoomOutImage)
    }, 100);
}

function zoomOutImage() {
    if(zoomed) {
      zoomedImage = document.querySelector(".image_zoom");
      zoomedImage.setAttribute("src", "");
      zoomedImage.style.visibility = "hidden";
      zoomedImage.parentElement.style.visibility = "hidden";
      zoomed=false;
      body = document.querySelector("body");
      body.removeEventListener("click", zoomOutImage);
    }
}

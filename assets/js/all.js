var zoomed = false;
var over = false;

function pageOnLoad() {
  document.addEventListener("scroll", pageOnScrollDo);
  window.addEventListener("resize", pageOnResize);
  addZoomToImages();
  contentOverflow();
}

function whilePageLoading() {
  if(document.readyState != 'complete') {
    overflowText = document.getElementById("content_overflow");
    overflowText.innerHTML = "<b>Страница загружается...</b>";
    overflowText.style.visibility = "visible";
    overflowText.style.height = "";
  }
}

setTimeout(whilePageLoading, 100);

function contentOverflow()
{
  element = document.querySelector(".main_content");
  overflowText = document.getElementById("content_overflow");
  if(element.scrollWidth > element.clientWidth * 1.02) {
    overflowText.innerHTML = "Часть содержимого не уместилась по ширине, потяните (прокрутите) страницу влево чтобы увидеть.";
    overflowText.style.visibility = "visible";
  } else {
    overflowText.innerHTML = "";
    overflowText.style.visibility = "hidden";
  }
}

function pageOnResize() {
  zoomOutImage();
  pageOnScrollDo();
  contentOverflow();
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

function addTextUnderImage(image, text) {
  imgagePosition = image.getBoundingClientRect();
  zoomTextDiv = document.createElement("div");
  zoomTextDiv.innerHTML = text;
  zoomTextDiv.className = "zoom_me";
  zoomTextDiv.style.width = image.offsetWidth + "px";
  image.insertAdjacentElement('afterend', zoomTextDiv)
}

function addZoomToImages() {
    content = document.querySelector(".content");
    images = content.querySelectorAll("img");
    images.forEach(image => {
      imageName = image.getAttribute("name");
      if(imageName) {
          addTextUnderImage(image, "<b>" + imageName + "</b>");
      }
    });
    images = content.querySelectorAll("img.zoomable");
    images.forEach(image => {
      image.setAttribute('class', 'zoomable');
      image.setAttribute("onclick", "zoomInImage(this)");
    });
    try {
      if(window.matchMedia("(hover: none)").matches) {
        images.forEach(image => {
          imageName = image.getAttribute("name");
          if(imageName) {
            nameElement = image.nextSibling;
            nameElement.innerHTML = nameElement.innerHTML
                            + "<br />Нажмите на изображение чтобы увеличить.";
          } else {
            addTextUnderImage(image, "Нажмите на изображение чтобы увеличить.");
          }
        });
      }
    } catch (error) {
      console.error(error);
    }
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
            if(zoomedImageWidth > (window.innerWidth * 0.9)) {
              zoomedImageWidth = window.innerWidth * 0.9;
              zoomedImageHeight = image.naturalHeight * (zoomedImageWidth / image.naturalWidth);
            }
        } else {
            zoomedImageWidth = window.innerWidth * 0.9;
            zoomedImageHeight = image.naturalHeight * (zoomedImageWidth / image.naturalWidth);
            if(zoomedImageHeight > (window.innerHeight * 0.9)) {
              zoomedImageHeight = window.innerHeight * 0.9;
              zoomedImageWidth = image.naturalWidth * (zoomedImageHeight / image.naturalHeight);
            }
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
    zoomedImage.parentElement.style.left = pageXOffset + "px";
    zoomedImage.parentElement.style.height = window.innerHeight + "px";
    zoomedImage.style.visibility = "visible";
    zoomedImage.parentElement.style.visibility = "visible";
    zoomed=true;
    setTimeout(() => {
      zoomedImage.addEventListener("click", zoomOutImage)
    }, 100);
}

function zoomOutImage() {
    if(zoomed) {
      zoomedImage = document.querySelector(".image_zoom");
      zoomedImage.setAttribute("src", "");
      zoomedImage.style.visibility = "hidden";
      zoomedImage.parentElement.style.visibility = "hidden";
      zoomed=false;
      zoomedImage.removeEventListener("click", zoomOutImage);
    }
}

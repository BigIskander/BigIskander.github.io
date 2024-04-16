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
  if((body.scrollHeight > window.innerHeight) && (window.scrollY > 20)) {
    contentPosition = document.querySelector(".content").getBoundingClientRect();
    toTopButton.style.top = (window.scrollY + window.innerHeight - toTopButton.offsetHeight) + "px";
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
      if(image.naturalWidth > image.width || image.naturalHeight > image.height) {
        image.setAttribute("onclick", "zoomInImage(this)");
      } else {
        image.className="";
      }
    });
    try {
      if(window.matchMedia("(hover: none)").matches) {
        images.forEach(image => {
          if(image.naturalWidth > image.width || image.naturalHeight > image.height) {
            imageName = image.getAttribute("name");
            if(imageName) {
              nameElement = image.nextSibling;
              nameElement.innerHTML = nameElement.innerHTML
                              + "<br />Нажмите на изображение чтобы увеличить.";
            } else {
              addTextUnderImage(image, "Нажмите на изображение чтобы увеличить.");
            }
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
    zoomedImagePreload = document.querySelector(".image_zoom_preload");
    // show load spinner
    spinner = document.getElementById("loadingSpinner")
    spinner.style.top = (window.scrollY + window.innerHeight/2) + "px"
    // if larger image should load
    if(image.currentSrc && image.currentSrc!=image.src) {
      zoomedImagePreload.src = image.currentSrc
      if(!zoomedImagePreload.complete) spinner.style.visibility = "visible"
    } else {
      zoomedImage.src = image.src
      if(!zoomedImage.complete) spinner.style.visibility = "visible"
    }
    // calculate image position
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
    // set images position
    zoomedImage.style.height = zoomedImageHeight + "px";
    zoomedImage.style.width = zoomedImageWidth + "px";
    zoomedImage.style.top = topAdjust + "px";
    zoomedImage.style.left = leftAdjust + "px";
    zoomedImagePreload.style.height = zoomedImageHeight + "px";
    zoomedImagePreload.style.width = zoomedImageWidth + "px";
    zoomedImagePreload.style.top = topAdjust + "px";
    zoomedImagePreload.style.left = leftAdjust + "px";
    // set parent element position
    zoomedImage.parentElement.style.top = window.scrollY + "px";
    zoomedImage.parentElement.style.left = window.scrollX + "px";
    zoomedImage.parentElement.style.height = window.innerHeight + "px";
    zoomedImage.parentElement.style.width = window.innerWidth + "px";
    // show image
    if(image.currentSrc && image.currentSrc!=image.src) {
      zoomedImagePreload.style.visibility = "visible";
      zoomedImagePreload.onload= () => { 
        zoomedImage.src=image.src
        if(!zoomedImage.complete) spinner.style.visibility = "visible"
        zoomedImage.onload = () => {
          zoomedImage.style.visibility = "visible"
          zoomedImagePreload.style.visibility = "hidden"
          spinner.style.visibility = "hidden"
        }
      }
    } else {
      zoomedImage.style.visibility = "visible"
      zoomedImage.onload = () => {    
        spinner.style.visibility = "hidden"
      }
    }
    zoomedImage.parentElement.style.visibility = "visible";
    zoomed=true;
    // zoom out event listener
    setTimeout(() => {
      zoomedImage.addEventListener("click", zoomOutImage)
      zoomedImagePreload.addEventListener("click", zoomOutImage)
    }, 100);
}

function zoomOutImage() {
    if(zoomed) {
      spinner = document.getElementById("loadingSpinner")
      spinner.style.visibility = "hidden"
      zoomedImage = document.querySelector(".image_zoom");
      zoomedImagePreload = document.querySelector(".image_zoom_preload");
      zoomedImage.setAttribute("src", "");
      zoomedImagePreload.setAttribute("src", "");
      zoomedImage.style.visibility = "hidden";
      zoomedImagePreload.style.visibility = "hidden";
      zoomedImage.parentElement.style.visibility = "hidden";
      zoomed=false;
      zoomedImage.removeEventListener("click", zoomOutImage);
      zoomedImagePreload.removeEventListener("click", zoomOutImage);
    }
}

function show_hide_element(elementID){
  element=document.getElementById(elementID);
  emText=element.parentElement.querySelector("em");
  if(element.className!="code_lines_hide"){
    className="code_lines_hide"
    text="показать"
  } else {
    className="code_lines_show"
    text="скрыть"
  }
  element.className=className;
  emText.innerHTML=text;
}


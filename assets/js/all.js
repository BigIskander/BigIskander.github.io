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
    if(isPageInEnglish)
      overflowText.innerHTML = "<b>Page is loading...</b>";
    else
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
    if(isPageInEnglish)
      overflowText.innerHTML = "Part of the content does not fit by width, in order to see please drag (scroll) page to the left.";
    else
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
              if(isPageInEnglish)
                nameElement.innerHTML = nameElement.innerHTML
                              + "<br />Click on image to zoom in.";
              else
                nameElement.innerHTML = nameElement.innerHTML
                              + "<br />Нажмите на изображение чтобы увеличить.";
            } else {
              if(isPageInEnglish)
                addTextUnderImage(image, "Click on image to zoom in.");
              else
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
	imageZoomDiv = document.querySelector(".image_zoom_div");
	zoomedImage = imageZoomDiv.querySelector(".image_zoom");
	zoomedImagePreload = imageZoomDiv.querySelector(".image_zoom_preload");
	zoomedImageLink = imageZoomDiv.querySelector(".image_zoom_open_url");
	zoomedImageLink.setAttribute("href", image.src);
	loadingSpinner = imageZoomDiv.querySelector(".image_loading_spinner");
	//
	imageZoomDiv.style.top = window.scrollY + "px";
	imageZoomDiv.style.left = window.scrollX + "px";
	imageZoomDiv.style.visibility = "visible";
	zoomed = true;
	isImagePreload = false;
	zoomedImage.onload = function() {
		isImagePreload = true;
		loadingSpinner.style.visibility = "hidden";
		zoomedImagePreload.style.visibility = "hidden";
		zoomedImage.style.visibility = "visible";
	}
	zoomedImage.onerror = function() {
		isImagePreload = true;
		loadingSpinner.style.visibility = "hidden";
	}
	zoomedImagePreload.onload = function() {
		zoomedImage.src = image.src;
		zoomedImagePreload.style.visibility = "visible";
	}
	zoomedImagePreload.onerror = function() {
		isImagePreload = true;
		loadingSpinner.style.visibility = "hidden";
	}
	if(image.currentSrc && image.currentSrc!=image.src) {
		zoomedImagePreload.src = image.currentSrc;
	} else {
		zoomedImage.src = image.src;
	}
	setTimeout(function() {
		if(!isImagePreload) loadingSpinner.style.visibility = "visible";
	}, 200);
}

function zoomOutImage() {
	if(zoomed) {
		imageZoomDiv = document.querySelector(".image_zoom_div");
		zoomedImage = imageZoomDiv.querySelector(".image_zoom");
		zoomedImagePreload = imageZoomDiv.querySelector(".image_zoom_preload");
		zoomedImageLink = imageZoomDiv.querySelector(".image_zoom_open_url");
		loadingSpinner = imageZoomDiv.querySelector(".image_loading_spinner");
		//
		imageZoomDiv.style.visibility = "hidden";
		loadingSpinner.style.visibility = "hidden";
		zoomedImagePreload.style.visibility = "hidden";
		zoomedImage.style.visibility = "hidden";
		zoomedImagePreload.removeAttribute("src");
		zoomedImage.removeAttribute("src");
		zoomedImageLink.removeAttribute("href");
		document.body.style.removeProperty("overflow");
		imageZoomDiv.style.removeProperty("top");
		imageZoomDiv.style.removeProperty("left");
		zoomed = false;
	}
}

function show_hide_element(elementID){
  element=document.getElementById(elementID);
  emText=element.parentElement.querySelector("em");
  if(element.className!="code_lines_hide"){
    className="code_lines_hide"
    if(isPageInEnglish)
      text="show"
    else
      text="показать"
  } else {
    className="code_lines_show"
    if(isPageInEnglish)
      text="hide"
    else
      text="скрыть"
  }
  element.className=className;
  emText.innerHTML=text;
}


var zoomed = false;
var over = false;
var isContentTable = false;
var links = [];

function failedToLoadMessage(message = "") {
	const failedToLoadTag = document.getElementById("failed_to_load");
	failedToLoadTag.innerText = message;
	failedToLoadTag.style.visibility = "visible";
}

function pageOnLoad() {
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
	toTopSetMarginLeft();
	if(isContentTable) contentTableSetMarginLeft();
	zoomOutImage();
	pageOnScrollDo();
	resizeTextUnderImages();
	contentOverflow();
}

function toTopSetMarginLeft() {
	document.querySelector(".to_top").style.marginLeft = 
		(document.querySelector(".content").getBoundingClientRect().right) + "px";
}

function contentTableSetMarginLeft() {
	if(isContentTable) {
		document.getElementById("content_table").style.left = ( 
			document.querySelector(".content").getBoundingClientRect().right - 
			document.getElementById("content_table_left").getBoundingClientRect().width +
			5
		) + "px";
	}
}

function showHideContentTable() {
	if(isContentTable) {
		el = document.getElementById("content_table_left");
		el2 = document.getElementById("content_table");
		emText = document.getElementById("content_table_right").querySelector("em");
		if(el.className == "content_table_left_hide") {
			el.className = "content_table_left";
			el2.className = "content_table";
			if(isPageInEnglish)
				emText.innerText = "hide";
			else
				emText.innerText = "скрыть";
			contentTableSetMarginLeft();
		} else {
			el.className = "content_table_left_hide";
			el2.className = "content_table_collapse";
			if(isPageInEnglish)
				emText.innerText = "show";
			else
				emText.innerText = "показать";
			contentTableSetMarginLeft();
		}
	}
}

function addContentTable(links) {
	el = document.getElementById("content_table_left").querySelector("ul");
	numOfLinks = Math.floor(links.length / 2);
	for(var i = 0; i < numOfLinks; i = i + 1) {
		newEl = document.createElement("li");
		newLink = document.createElement("a");
		newLink.onclick = "showHideContentTable()";
		newLink.href = links[i * 2 + 1];
		newLink.innerText = links[i * 2];
		newEl.appendChild(newLink);
		el.appendChild(newEl);
	}
	isContentTable = true;
	contentTableSetMarginLeft();
	document.getElementById("content_table").style.visibility = "visible";
}

function pageOnScrollDo() {
	zoomOutImage();
	//to top button
	body = document.querySelector("body");
	toTopButton = document.querySelector(".to_top");
	if((body.scrollHeight > window.innerHeight) && (window.scrollY > 20)) {
		toTopButton.style.visibility = "visible";
	} else {
		toTopButton.style.visibility = "hidden";
	}
}

function addTextUnderImage(image, text, hide = false) {
	zoomTextDiv = document.createElement("div");
	zoomTextDiv.innerHTML = text;
	if(hide) zoomTextDiv.className = "zoom_me zoom_me_hide";
	else zoomTextDiv.className = "zoom_me";
	if(image.offsetWidth != 0) zoomTextDiv.style.width = image.offsetWidth + "px";
	image.insertAdjacentElement('afterend', zoomTextDiv)
}

function resizeTextUnderImages() {
	var images = content.querySelectorAll("img.zoomable");
	images.forEach(image => {
		zoomTextDiv = image.nextSibling;
		if(zoomTextDiv) {
			if(zoomTextDiv.classList)
			if(zoomTextDiv.classList.contains("zoom_me")) {
				if(image.offsetWidth != 0) zoomTextDiv.style.width = image.offsetWidth + "px";
			}
		}
	});
}

function isZoomable(image) {
	if(window.matchMedia) if(window.matchMedia("(hover: none)").matches) return true;
	if(image.srcset) return true;
	if(image.naturalWidth > image.width || image.naturalHeight > image.height) return true;
	return false;
}

function addZoomToImages() {
	content = document.querySelector(".content");
	var images = content.querySelectorAll("img.zoomable");
	images.forEach(image => {
		addZoomToImage(image);
	});
}

function isNotImage(image) {
	if(image) {
		if(image.nodeName == "IMG")
			return false;
	}
	return true;
}

function addZoomToImage(image) {
	if(isNotImage(image)) image = this;
	if(isPageInEnglish) underImageText = '<div class="zoom_me_hide zoom_me_hide_loading">Click on image to zoom in.</div>';
	else underImageText = '<div class="zoom_me_hide zoom_me_hide_loading">Нажмите на изображение чтобы увеличить.</div>';
	imageName = image.getAttribute("name");
	if(imageName) underImageText = "<div><b>" + imageName + "</b></div>" + underImageText;
	addTextUnderImage(image, underImageText);
	if(!image.complete) image.addEventListener("load", () => {
		image.nextSibling.style.width = image.offsetWidth + "px";
		image.nextSibling.querySelector(".zoom_me_hide").className = "zoom_me_hide";
	}); else 
		image.nextSibling.querySelector(".zoom_me_hide").className = "zoom_me_hide";
	if(image.classList.contains("zoomable")) {
		image.addEventListener("click", zoomInImage);
		image.addEventListener("mouseover", cursorIfZoomable);
	}
}

function cursorIfZoomable(image) {
	if(isNotImage(image)) image = this;
	if(!image.complete) return;
	if(!isZoomable(image)) {
		image.style.cursor = "default";
	} else {
		image.style.cursor = "zoom-in";
	}
}

function zoomInImage(image) {
	zoomOutImage();
	if(isNotImage(image)) image = this;
	if(!image.complete) return;
	if(!isZoomable(image)) return;
	//
	imageZoomDiv = document.querySelector(".image_zoom_div");
	zoomedImage = imageZoomDiv.querySelector(".image_zoom");
	zoomedImagePreload = imageZoomDiv.querySelector(".image_zoom_preload");
	zoomedImageLink = imageZoomDiv.querySelector(".image_zoom_open_url");
	zoomedImageLink.setAttribute("href", image.src);
	loadingSpinner = imageZoomDiv.querySelector(".image_loading_spinner");
	//
	imageZoomDiv.style.top = window.scrollY + "px";
	imageZoomDiv.style.left = window.scrollX + "px";
	imageZoomDiv.style.width = window.innerWidth + "px";
	imageZoomDiv.style.height = window.innerHeight + "px";
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
		if(image.alt) zoomedImage.alt = image.alt;
		zoomedImagePreload.style.visibility = "visible";
	}
	zoomedImagePreload.onerror = function() {
		isImagePreload = true;
		loadingSpinner.style.visibility = "hidden";
	}
	if(image.currentSrc && image.currentSrc!=image.src) {
		zoomedImagePreload.src = image.currentSrc;
		if(image.alt) zoomedImagePreload.alt = image.alt;
	} else {
		zoomedImage.src = image.src;
		if(image.alt) zoomedImage.alt = image.alt;
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
		zoomedImagePreload.removeAttribute("alt");
		zoomedImage.removeAttribute("src");
		zoomedImage.removeAttribute("alt");
		zoomedImageLink.removeAttribute("href");
		imageZoomDiv.style.removeProperty("top");
		imageZoomDiv.style.removeProperty("left");
		imageZoomDiv.style.removeProperty("width");
		imageZoomDiv.style.removeProperty("height");
		zoomed = false;
	}
}

function show_hide_element(elementID){
	element=document.getElementById(elementID);
	emText=element.parentElement.querySelector("em");
	if(element.className!="code_lines_hide") {
		className="code_lines_hide";
		if(isPageInEnglish)
			text="show";
		else
			text="показать";
	} else {
		className="code_lines_show";
		if(isPageInEnglish)
			text="hide";
		else
			text="скрыть";
	}
	element.className=className;
	emText.innerHTML=text;
}

function adjust_internal_licks() {
	var links = document.querySelectorAll("a");
	links.forEach(link => {
		if(link.host == window.location.host && link.target == "_blank") {
			if(link.rel != "opener") link.rel = "opener";
		}
	});
}

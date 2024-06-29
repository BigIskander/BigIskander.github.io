---
redirect_from: 
    - /galleryscript
layout: post
title: "Фотогалерея."
gallery: "Y"
---

Это страница демонстрирующая работу моего скрипта фотогалереи. Для демонстрации я использовал свои старые фотографии Казани (города Казань).

Скрипт написан на JavaScript без применения какого либо фреймворка.

Размеры и расположение элементов фотогалереи подстраиваются под размеры окна браузера. Поэтому, фотогалерея будет хорошо смотреться в большинстве современных устройств и браузеров.

<div style="overflow: hidden;">
    <div id="gallery"></div>
</div>
<script src="/assets/images/posts/2024-galleryscript/images_list.js"></script>
<script>galleryCreate("gallery", images, "Фотографии Казани 2008 год.", zoomInImage);</script>

<div class="zoom_me_gallery">Нажмите на изображение чтобы увеличить.</div>

Для тех, кто хотел бы встроить подобную фотогалерею на свой сайт: исходный код и более подробное описание скрипта фотогалереи доступны по <a href="https://github.com/BigIskander/photo_gallery" target="_blank">этой ссылке</a>.

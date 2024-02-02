---
layout: post
title: "Рукописная клавиатура для Linux"
---
Пару месяцев назад я решил пересесть на Linux, т.е. начать использовать Linux в качестве своей основной операционной системы. Так как я изучаю китайский язык, мне понадобилась клавиатура рукописного ввода, т.е. такая программа, где можно нарисовать нужный иероглиф и эта программа сама распознает этот иероглиф и переведет его в печатный вид. Сколько не искал, не смог найти готовую программу, готовую рукописную клавиатуру. Поэтому, написал свою программу, клавиатуру рукописного ввода для Linux.

Вначале написал программу использующую для распознавания иероглифов Google API, требующую постоянного подключения к интернету и поддерживающую только китайский язык.

Позднее написал версию использующую для распознавания иероглифов пакет tesseract-ocr (вместо Google API), работающую без подключения к интернету и поддерживающую несколько языков.

<h2>Как пользоваться программой:</h2>
<ol>
<li>Запустить программу, клавиатуру рукописного ввода для Linux.</li>
<li>Поставить курсор куда должен быть введен текст (где то в окне другой программы).</li>
<li>Аккуратно, на канвасе (внутри окна программы), нарисовать иероглиф или иероглифы.</li>
<li>Нажать кнопку Recognize (для версии использующей tesseract-ocr).</li>
<li>Выбрать один из предложенных программой вариантов, нажатием кнопки с соответсвующим иероглифом.</li>
</ol>

Далее программа скопирует выбранный иероглиф (или иероглифы) в буфер обмена и вставит в то место, куда должен быть введен текст.

<h2>Примеры использования программы.</h2>

Версия использующая Google API:

<img src="/assets/images/posts/2024-02-01-handwritingkeyboard/1.png" class="zoomable" style="max-height:300px;">

<img src="/assets/images/posts/2024-02-01-handwritingkeyboard/2.png" class="zoomable" style="max-height:300px;">

<img src="/assets/images/posts/2024-02-01-handwritingkeyboard/3.png" class="zoomable" style="max-height:300px;">

Версия испльзующая tesseract-ocr:

<img src="/assets/images/posts/2024-02-01-handwritingkeyboard/4.png" class="zoomable" style="max-height:300px;">

<img src="/assets/images/posts/2024-02-01-handwritingkeyboard/5.png" class="zoomable" style="max-height:300px;">

<img src="/assets/images/posts/2024-02-01-handwritingkeyboard/6.png" class="zoomable" style="max-height:300px;">

<img src="/assets/images/posts/2024-02-01-handwritingkeyboard/7.png" class="zoomable" style="max-height:300px;">

<h2>Страница проекта на Github:</h2>

Для тех, кому интересно, ссылки на скачивание и более подробное описание технических особенностей программ доступно на страницах проектов на Github, по ссылкам ниже:

<a href="https://github.com/BigIskander/Handwriting-keyboard-for-Linux." target="_blank">https://github.com/BigIskander/Handwriting-keyboard-for-Linux.</a>

<a href="https://github.com/BigIskander/Handwriting-keyboard-for-Linux-tesseract" target="_blank">https://github.com/BigIskander/Handwriting-keyboard-for-Linux-tesseract</a>
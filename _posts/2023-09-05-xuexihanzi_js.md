---
layout: post
title: "Программа для запоминания китайских слов 汉字 версия 3"
---

Данная программа написана для изучения китайского языка, однако, при желании, её можно применять и для изучения других разговорных языков. Этот пост написал в продолжении предыдущей <a href="/2022/11/05/xuexihanzi2.html" target="_blank" >записи</a>. Попользовавшись какое-то время своей программой для запоминания китайских слов, решил переписать ее, сделав более удобной в использовании. Более ранняя версия программы становилась неудобной в использовании с увеличением количества изучаемых слов, так же в ней отсутсвовали некоторые нужные мне функции.

У меня стало чуть больше свободного времени и я решил написать для себя программу, которая была бы максимально удобной в использовании. 

Эту версию программы написал на языке программирования JavaScript с применением фреймворков NUXT 3 и Electron. Программа запакована с помощью инструмента Electron-builder. Предыдущие версии  программы были написаны на языке программирования Python (старые версии доступны по ссылкам: <a href="/2022/11/05/xuexihanzi2.html" target="_blank" >версия 2</a> и <a href="/2022/09/28/xuexihanzi.html" target="_blank" >версия 1</a>).

v1.0.0

Изменения по сравнению с предыдущей версией (написанной на Python):
<ol>
<li>Изменены интерфейс и управление программой. Сделал программу более интуитивной и понятной в использовании.</li>
<li>Улучшил алгоритмы выполнения упражнений. Теперь программа учитывает, какие слова лучше запомнились какие нет.</li>
<li>Добавил новое упражнение <b>Карточки</b>.</li>
<li>Добавил возможность повторения ранее изученных слов.</li>
<li>Добавил функцию озвучки текста.</li>
<li>Добавил панель рукописного ввода.</li>
<li>Сделал удобное управление списками слов внутри самой программы.</li>
<li>При редактировани отдельного слова программа может подсказать варианты перевода китайских слов (на английский) и pinyin.</li>
<li>Добавил инструкцию по использованию программы внутри самой программы (в раздел о программе).</li>
<li>Добавил в программу основные слова из учебника <b>Кондрашевский</b> (первые 40 упражнений) и список слов <b>HSK 4</b>.</li>
</ol>

<b>Update (7 april 2024):</b> v1.1.0

Изменения по сравнению с предыдущей версией (v1.0.0):

<ol>
<li>Добавил версию для macOS.</li>
<li>Добавил опцию изучать 25 слов за 1 раз.</li>
<li>Добавил возможность менять размер элементов интерфейса в настройках программы.</li>
<li>Добавил темную тему оформления.</li>
<li>Добавил контекстное меню к полям для ввода текста.</li>
<li>Добавил поддержку tesseract-ocr.</li>
<li>Исправил некоторые ошибки в работе программы, которые встречались в предыдущей версии.</li>
</ol>

<b>Интерфейс программы.</b>

<div class="images_row">
    <div>
        <img src="/assets/images/posts/2023-09-05-xuexihanzi_js/0.png" style="width:300px; margin-top: 5px;" class="zoomable">
    </div>
    <div>
        <img src="/assets/images/posts/2023-09-05-xuexihanzi_js/1.png" style="width:300px; margin-top: 5px;" class="zoomable">
    </div>
    <div>
        <img src="/assets/images/posts/2023-09-05-xuexihanzi_js/2.png" style="width:300px; margin-top: 5px;" class="zoomable">
    </div>
    <div>
        <img src="/assets/images/posts/2023-09-05-xuexihanzi_js/3.png" style="width:300px; margin-top: 5px;" class="zoomable">
    </div>
    <div>
        <img src="/assets/images/posts/2023-09-05-xuexihanzi_js/4.png" style="width:300px; margin-top: 5px;" class="zoomable">
    </div>
    <div>
        <img src="/assets/images/posts/2023-09-05-xuexihanzi_js/5.png" style="width:300px; margin-top: 5px;" class="zoomable">
    </div>
    <div>
        <img src="/assets/images/posts/2023-09-05-xuexihanzi_js/6.png" style="width:300px; margin-top: 5px;" class="zoomable">
    </div>
    <div>
        <img src="/assets/images/posts/2023-09-05-xuexihanzi_js/7.png" style="width:300px; margin-top: 5px;" class="zoomable">
    </div>
</div>

На данный момент программа доступна для операционных систем Windows, macOS и Linux.

Примечания: 
<ul>
<li>В Windows при первом запуске может ругаться антивирус, как на подозрительный файл; нужно дождаться, пока антивирус проверит файл. В дальнейшем, программа запускается без вопросов.</li>
<li>В macOS может понадобиться добавить программу в исключение безопасности (подробнее <a href="https://support.apple.com/ru-ru/guide/mac-help/mh40616/mac" target="_blank">здесь</a>).</li>
<li>В Linux для работы функции озвучки текста дополнительно требуется установить програмный пакет espeak-ng. Для запуска программы с файла с расширением .AppImage нужно в свойствах файла разрешить выполнять файл как программу.</li>
</ul>

<b>Программа предоставляется бесплатно, как есть, без каких либо гарантий.</b> <br/>
<b>Скачать программу:</b>

v1.1.0

<b><i>Windows:</i></b>

<a href="https://github.com/BigIskander/xuexihanzi_js_release/releases/download/v1.1.0/xuexihanzi_js.Setup.1.1.0_ia32.exe">xuexihanzi_js.Setup.1.1.0_ia32.exe</a>&nbsp;
<br/>sha256: 2e9b128d74e443e20264a5f3b3af55cca49c2b34149db38a5aceaa9ce6748505

<a href="https://github.com/BigIskander/xuexihanzi_js_release/releases/download/v1.1.0/xuexihanzi_js.Setup.1.1.0_x64.exe">xuexihanzi_js.Setup.1.1.0_x64.exe</a>&nbsp;
<br/>sha256: 0aa2a6c9655c535ea14f701748a184c39a6809431e3bcd4cca7575789078938a

<a href="https://github.com/BigIskander/xuexihanzi_js_release/releases/download/v1.1.0/xuexihanzi_js.Setup.1.1.0_arm64.exe">xuexihanzi_js.Setup.1.1.0_arm64.exe</a>&nbsp;
<br/>sha256: 4ebe0b16251bdd3a2830846d7539aad4b7620ccb0917239ad918be3861b13d53

<b><i>macOS:</i></b>

<a href="https://github.com/BigIskander/xuexihanzi_js_release/releases/download/v1.1.0/xuexihanzi_js-1.1.0.dmg">xuexihanzi_js-1.1.0.dmg</a>&nbsp;
<br/>sha256: e4fe03f477ed1885335e2aed7d0cbe41c5af1c70d1b7d2c60b7b4b2a11856064

<a href="https://github.com/BigIskander/xuexihanzi_js_release/releases/download/v1.1.0/xuexihanzi_js-1.1.0-arm64.dmg">xuexihanzi_js-1.1.0-arm64.dmg</a>&nbsp;
<br/>sha256: 50074961f23fe50eb1e9910bac9d4773b1c9272f6f2b72b3102ec1c6084cbaa4

<b><i>Linux:</i></b>

<a href="https://github.com/BigIskander/xuexihanzi_js_release/releases/download/v1.1.0/xuexihanzi_js_1.1.0_amd64.deb">xuexihanzi_js_1.1.0_amd64.deb</a>&nbsp;
<br/>sha256: 268a7c558e93a2d3a095ea288f105d4d55d0de3444b636505c2707a03ed6ee53

<a href="https://github.com/BigIskander/xuexihanzi_js_release/releases/download/v1.1.0/xuexihanzi_js-1.1.0.AppImage">xuexihanzi_js-1.1.0.AppImage</a>&nbsp;
<br/>sha256: 7a49de033fef8e5adfdaba3ecad4fcfd94ed7ee95e558a0fb8a1900ee6927ffb

<a href="https://github.com/BigIskander/xuexihanzi_js_release/releases/download/v1.1.0/xuexihanzi_js-1.1.0-armv7l.AppImage">xuexihanzi_js-1.1.0-armv7l.AppImage</a>&nbsp;
<br/>sha256: 6712a8f3d4da2f46aa1a9f43ceacd08b6a647e6171e32c3b64089d81fc75ab96

<a href="https://github.com/BigIskander/xuexihanzi_js_release/releases/download/v1.1.0/xuexihanzi_js-1.1.0-arm64.AppImage">xuexihanzi_js-1.1.0-arm64.AppImage</a>&nbsp;
<br/>sha256: 0c2b9b93cad85076ee98ad65f167f0ea9e6fa88626f6812a7fa6c91d929e0cc1

<div style="border-color: grey; border-width: 0px; border-top-width: 1px; border-bottom-width: 1px; border-style: solid;">

<p>v1.0.0 (<a href="JavaScript:void(0);" onclick="show_hide_element('ver_1_0')"><em>показать</em></a>)</p>

<div id="ver_1_0" class="code_lines_hide" style="overflow: clip;">

<p><b><i>Windows:</i></b></p>

<p><a href="https://github.com/BigIskander/BigIskander.github.io/raw/main/assets/fordownload/xuexihanzi_js/xuexihanzi_js%20Setup%201.0.0.exe?download=">xuexihanzi_js Setup 1.0.0.exe</a>&nbsp;
<br/>sha256: 380612c4db40e344eda289677a2ddb401cf6b7f77f99e55a629889543d4de750</p>

<p><b><i>Linux:</i></b></p>

<p><a href="https://github.com/BigIskander/BigIskander.github.io/raw/main/assets/fordownload/xuexihanzi_js/xuexihanzi_js_1.0.0_amd64.deb?download=">xuexihanzi_js_1.0.0_amd64.deb</a>&nbsp;
<br/>sha256: bbdebcd4e709450d097cccdbc83e6aeaa28837b203d6ba2aea2e7969fde0c494</p>

<p><a href="https://github.com/BigIskander/BigIskander.github.io/raw/main/assets/fordownload/xuexihanzi_js/xuexihanzi_js_1.0.0_arm64.deb?download=">xuexihanzi_js_1.0.0_arm64.deb</a>&nbsp;
<br/>sha256: 67378137fb48795cebc46d52df6e8d192b96f2757077ce2b3b3ea38239df7dec</p>

<p><a href="https://github.com/BigIskander/BigIskander.github.io/raw/main/assets/fordownload/xuexihanzi_js/xuexihanzi_js-1.0.0.AppImage?download=">xuexihanzi_js-1.0.0.AppImage</a>&nbsp;
<br/>sha256: 162c8e015c8e4652735e1c9d1a6013b5c3d5e46bc2ca4f9192f6f638bf904aa5</p>

<p><a href="https://github.com/BigIskander/BigIskander.github.io/raw/main/assets/fordownload/xuexihanzi_js/xuexihanzi_js-1.0.0-arm64.AppImage?download=">xuexihanzi_js-1.0.0-arm64.AppImage</a>&nbsp;
<br/>sha256: f5a28c08ebbb0e2058e4ff340a8c6d41a40ec9c1945897899eb50ac9d3337062</p>

</div>
</div>

Программу писал для личного пользования. Но, надеюсь, для Вас эта программа тоже окажется полезной. Удачи в изучении китайского языка.

再见。
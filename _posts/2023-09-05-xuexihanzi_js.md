---
layout: post
title: "Программа для запоминания китайских слов 汉字 версия 3"
---

Данная программа написана для изучения китайского языка, однако, при желании, её можно применять и для изучения других разговорных языков. Этот пост написал в продолжении предыдущей <a href="/2022/11/05/xuexihanzi2.html" target="_blank" rel="opener" >записи</a>. Попользовавшись какое-то время своей программой для запоминания китайских слов, решил переписать ее, сделав более удобной в использовании. Более ранняя версия программы становилась неудобной в использовании с увеличением количества изучаемых слов, так же в ней отсутсвовали некоторые нужные мне функции.

У меня стало чуть больше свободного времени и я решил написать для себя программу, которая была бы максимально удобной в использовании. 

Эту версию программы написал на языке программирования JavaScript с применением фреймворков NUXT 3 и Electron. Программа запакована с помощью инструмента Electron-builder. Предыдущие версии  программы были написаны на языке программирования Python (старые версии доступны по ссылкам: <a href="/2022/11/05/xuexihanzi2.html" target="_blank" rel="opener" >версия 2</a> и <a href="/2022/09/28/xuexihanzi.html" target="_blank" rel="opener" >версия 1</a>).

<a href="#download_links">Ссылки на скачивание программы.</a>

<h3>Интерфейс программы.</h3>

<div class="images_row">
    <div>
        <img src="/assets/images/posts/2023-09-05-xuexihanzi_js/0.png" alt="Снимок экрана, интерфейс программы." style="width:300px; margin-top: 5px;" class="zoomable">
    </div>
    <div>
        <img src="/assets/images/posts/2023-09-05-xuexihanzi_js/1.png" alt="Снимок экрана, интерфейс программы." style="width:300px; margin-top: 5px;" class="zoomable">
    </div>
    <div>
        <img src="/assets/images/posts/2023-09-05-xuexihanzi_js/2.png" alt="Снимок экрана, интерфейс программы." style="width:300px; margin-top: 5px;" class="zoomable">
    </div>
    <div>
        <img src="/assets/images/posts/2023-09-05-xuexihanzi_js/3.png" alt="Снимок экрана, интерфейс программы." style="width:300px; margin-top: 5px;" class="zoomable">
    </div>
    <div>
        <img src="/assets/images/posts/2023-09-05-xuexihanzi_js/4.png" alt="Снимок экрана, интерфейс программы." style="width:300px; margin-top: 5px;" class="zoomable">
    </div>
    <div>
        <img src="/assets/images/posts/2023-09-05-xuexihanzi_js/5.png" alt="Снимок экрана, интерфейс программы." style="width:300px; margin-top: 5px;" class="zoomable">
    </div>
    <div>
        <img src="/assets/images/posts/2023-09-05-xuexihanzi_js/6.png" alt="Снимок экрана, интерфейс программы." style="width:300px; margin-top: 5px;" class="zoomable">
    </div>
    <div>
        <img src="/assets/images/posts/2023-09-05-xuexihanzi_js/7.png" alt="Снимок экрана, интерфейс программы." style="width:300px; margin-top: 5px;" class="zoomable">
    </div>
</div>

<h3>Улучшения и дополнения, изменения по сравнению с предыдущими версими программы.</h3>

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

<b><i>Update (7 april 2024):</i></b> v1.1.0

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

<b><i>Update (5 june 2025):</i></b> v1.2.0

Изменения по сравнению с предыдущей версией (v1.1.0):

<ol>
<li>Добавил функцию автокорректировки черт при рукописном вводе иероглифов. Подробнее об этой функции можно почитать <a href="https://bigiskander.github.io/2025/06/02/strokeautocorrect.html" target="_blank">по этой ссылке</a>.</li>
<li>Добавил поддержку Paddle OCR.</li>
<li>Убрал ограничение на минимальный размер окна программы.</li>
<li>Добавил сочетание клавиш, для показа подсказки в упрежнении на ввод.</li>
<li>Добавил опцию, завершать работу программы когда все окна закрыты в macOS.</li>
<li>Исправил некоторые ошибки в работе программы, которые встречались в предыдущей версии.</li>
</ol>

<b><i>Update (25 june 2025):</i></b> v1.2.1

Изменения по сравнению с предыдущей версией (v1.2.0):

<ol>
<li>Улучшил функцию автокорректировки черт при рукописном вводе иероглифов. Подробнее об этой функции можно почитать <a href="https://bigiskander.github.io/2025/06/02/strokeautocorrect.html" target="_blank">по этой ссылке</a>.</li>
<li>Добавил опцию отмена (предыдущего действия) в панели рукописного ввода.</li>
<li>Добавил опцию показать (вспомогательную) сетку на заднем плане панели рукописного ввода.</li>
<li>Исправил некоторые ошибки в работе программы, которые встречались в предыдущей версии.</li>
</ol>

<h3>Примечания.</h3>

На данный момент программа доступна для операционных систем Windows, macOS и Linux.

Примечания: 
<ul>
<li style="margin-top:10px;">В Windows при первом запуске может ругаться антивирус, как на подозрительный файл; нужно дождаться, пока антивирус проверит файл. В дальнейшем программа запускается без вопросов.</li>
<li style="margin-top:10px;">В Linux для работы функции озвучки текста дополнительно требуется установить програмный пакет espeak-ng. Для запуска программы с файла с расширением .AppImage нужно в свойствах файла разрешить выполнять файл как программу.</li>
<li style="margin-top:10px;">
<div>В macOS после установки, при попытке запуска приложения может появиться уведомление, сообщающее о том, что приложение повреждено и не может быть запущено. Это связано с тем, что у приложения нет подписи (так как я не зарегистрирован в Apple в качестве разработчика). MacOS не позволяет запускать неподписанные приложения (подробнее об этом можно почитать <a href="https://ordonez.tv/2024/11/04/how-to-run-unsigned-apps-in-macos-15-1/" target="_blank">по этой ссылке</a>[на английском]).</div>
<div style="margin-top:3px;">Обойти это ограничение можно открыв терминал и выполнив команду:</div>
<div><code style="background-color:#CCC;padding:5px;color:#000;">xattr -r -d com.apple.quarantine /Applications/xuexihanzi_js.app</code></div>
</li>
</ul>

<h3 id="download_links">Ссылки на скачивание программы:</h3>

<b><i>Программа предоставляется бесплатно, как есть, без каких либо гарантий.</i></b>

<p>v1.2.1</p>

<p><b><i>Windows:</i></b></p>

<p><a href="https://github.com/BigIskander/xuexihanzi_js_release/releases/download/v1.2.1/xuexihanzi_js.Setup.1.2.1_ia32.exe">xuexihanzi_js.Setup.1.2.1_ia32.exe</a>&nbsp;
<br/>sha256: a3c9a455f4bd9d7db0051d01b224231565e2206578777e06699ced5b99307165</p>

<p><a href="https://github.com/BigIskander/xuexihanzi_js_release/releases/download/v1.2.1/xuexihanzi_js.Setup.1.2.1_x64.exe">xuexihanzi_js.Setup.1.2.1_x64.exe</a>&nbsp;
<br/>sha256: 550c3068de94988e8a278ba9ff283d27fc70742f80ab74834df736dbb0ca6bf6</p>

<p><a href="https://github.com/BigIskander/xuexihanzi_js_release/releases/download/v1.2.1/xuexihanzi_js.Setup.1.2.1_arm64.exe">xuexihanzi_js.Setup.1.2.1_arm64.exe</a>&nbsp;
<br/>sha256: 89ed28fbe204a9a40e2760eec6c673450a12a5f87b40c112d7f528562f4d300b</p>

<p><b><i>macOS:</i></b></p>

<p><a href="https://github.com/BigIskander/xuexihanzi_js_release/releases/download/v1.2.1/xuexihanzi_js-1.2.1.dmg">xuexihanzi_js-1.2.1.dmg</a>&nbsp;
<br/>sha256: e6727b5bd24b3421c9301fede418dfc63765ea7200c049f42018cca5a99cf41e</p>

<p><a href="https://github.com/BigIskander/xuexihanzi_js_release/releases/download/v1.2.1/xuexihanzi_js-1.2.1-arm64.dmg">xuexihanzi_js-1.2.1-arm64.dmg</a>&nbsp;
<br/>sha256: 12ddb1d9ccada40a0f2852e5cf30c430919aca6c3822fbc9406cfcbebd8297ba</p>

<p><b><i>Linux:</i></b></p>

<p><a href="https://github.com/BigIskander/xuexihanzi_js_release/releases/download/v1.2.1/xuexihanzi_js_1.2.1_amd64.deb">xuexihanzi_js_1.2.1_amd64.deb</a>&nbsp;
<br/>sha256: 5e162bddd7bee339093a0ec82501fd54fcf23b404d236343d056bc40bfe0102a</p>

<p><a href="https://github.com/BigIskander/xuexihanzi_js_release/releases/download/v1.2.1/xuexihanzi_js_1.2.1_arm64.deb">xuexihanzi_js_1.2.1_arm64.deb</a>&nbsp;
<br/>sha256: e89a829da250205b650574f88a154f7e9dc4a27c1e32a5eacaecb93f76049ffa</p>

<p><a href="https://github.com/BigIskander/xuexihanzi_js_release/releases/download/v1.2.1/xuexihanzi_js_1.2.1_armv7l.deb">xuexihanzi_js_1.2.1_armv7l.deb</a>&nbsp;
<br/>sha256: 16cae47e02388b78fd24badd6783196891cbe8cdcd96bc2e54db721879485c0b</p>

<p><a href="https://github.com/BigIskander/xuexihanzi_js_release/releases/download/v1.2.1/xuexihanzi_js-1.2.1.AppImage">xuexihanzi_js-1.2.1.AppImage</a>&nbsp;
<br/>sha256: e569ce518ecd8f9f67356834b895378f0f8898067fe256a5461ba29f97b46083</p>

<p><a href="https://github.com/BigIskander/xuexihanzi_js_release/releases/download/v1.2.1/xuexihanzi_js-1.2.1-arm64.AppImage">xuexihanzi_js-1.2.1-arm64.AppImage</a>&nbsp;
<br/>sha256: 4999fa95a4037bccf9bedf7f2a107556a26450c4f4bf2a13d766ff11a35089d7</p>

<p><a href="https://github.com/BigIskander/xuexihanzi_js_release/releases/download/v1.2.1/xuexihanzi_js-1.2.1-armv7l.AppImage">xuexihanzi_js-1.2.1-armv7l.AppImage</a>&nbsp;
<br/>sha256: 19d072f9469c0ab99c2e29c6424055a5d2c70b22e2d05f482c8ca18ac8548fea</p>

<div style="border-color: grey; border-width: 0px; border-top-width: 1px; border-bottom-width: 1px; border-style: solid;">

<p>v1.2.0 (<a href="JavaScript:void(0);" onclick="show_hide_element('ver_1_2')"><em>показать</em></a>)</p>

<div id="ver_1_2" class="code_lines_hide" style="overflow: clip;">

<p><b><i>Windows:</i></b></p>

<p><a href="https://github.com/BigIskander/xuexihanzi_js_release/releases/download/v1.2.0/xuexihanzi_js.Setup.1.2.0_ia32.exe">xuexihanzi_js.Setup.1.2.0_ia32.exe</a>&nbsp;
<br/>sha256: 91ba901056dc086c10d869813406e05dde6f4a98b706236996061085be119fbb</p>

<p><a href="https://github.com/BigIskander/xuexihanzi_js_release/releases/download/v1.2.0/xuexihanzi_js.Setup.1.2.0_x64.exe">xuexihanzi_js.Setup.1.2.0_x64.exe</a>&nbsp;
<br/>sha256: 269a4b8b2d02091c76bf799e54cdc65cb3db592fa9bfebabb25d2140f275dda0</p>

<p><a href="https://github.com/BigIskander/xuexihanzi_js_release/releases/download/v1.2.0/xuexihanzi_js.Setup.1.2.0_arm64.exe">xuexihanzi_js.Setup.1.2.0_arm64.exe</a>&nbsp;
<br/>sha256: 0797d6795778ea48ac11dc075f2bee058db811212376226bf410d62e5cf46b36</p>

<p><b><i>macOS:</i></b></p>

<p><a href="https://github.com/BigIskander/xuexihanzi_js_release/releases/download/v1.2.0/xuexihanzi_js-1.2.0.dmg">xuexihanzi_js-1.2.0.dmg</a>&nbsp;
<br/>sha256: 13ec6f47ded771189b7412536908594149c0c48cfaeb71d4145e4b339740b1cf</p>

<p><a href="https://github.com/BigIskander/xuexihanzi_js_release/releases/download/v1.2.0/xuexihanzi_js-1.2.0-arm64.dmg">xuexihanzi_js-1.2.0-arm64.dmg</a>&nbsp;
<br/>sha256: b94bf2b523c11105f0e75f7dc987d4c91a3c29cbc8a9f5804f4c9e573fab8310</p>

<p><b><i>Linux:</i></b></p>

<p><a href="https://github.com/BigIskander/xuexihanzi_js_release/releases/download/v1.2.0/xuexihanzi_js_1.2.0_amd64.deb">xuexihanzi_js_1.2.0_amd64.deb</a>&nbsp;
<br/>sha256: 155201a1eb8f0f5bd8ad945920a5984882b60aa46e90e8a57f42d9dd050f0083</p>

<p><a href="https://github.com/BigIskander/xuexihanzi_js_release/releases/download/v1.2.0/xuexihanzi_js_1.2.0_arm64.deb">xuexihanzi_js_1.2.0_arm64.deb</a>&nbsp;
<br/>sha256: cbd3545e8609298b8c69edc223d8ef7073445a0cb587ad89b97c226fc89b209b</p>

<p><a href="https://github.com/BigIskander/xuexihanzi_js_release/releases/download/v1.2.0/xuexihanzi_js_1.2.0_armv7l.deb">xuexihanzi_js_1.2.0_armv7l.deb</a>&nbsp;
<br/>sha256: 86d6b0458846c35bb601d98d828862ac9e4191af7a6328b3956bd9e69c3117fa</p>

<p><a href="https://github.com/BigIskander/xuexihanzi_js_release/releases/download/v1.2.0/xuexihanzi_js-1.2.0.AppImage">xuexihanzi_js-1.2.0.AppImage</a>&nbsp;
<br/>sha256: 24b44938c5add1753e9f11ba1317b1b46ff1d4a83f8a9a88aa12ddc237b30454</p>

<p><a href="https://github.com/BigIskander/xuexihanzi_js_release/releases/download/v1.2.0/xuexihanzi_js-1.2.0-arm64.AppImage">xuexihanzi_js-1.2.0-arm64.AppImage</a>&nbsp;
<br/>sha256: 33f1e0a5c897712f4b5a4a8ff4e6d64437f9c5269ce3053355b3cfca6a34d8ca</p>

<p><a href="https://github.com/BigIskander/xuexihanzi_js_release/releases/download/v1.2.0/xuexihanzi_js-1.2.0-armv7l.AppImage">xuexihanzi_js-1.2.0-armv7l.AppImage</a>&nbsp;
<br/>sha256: 6ebe5e42810211cae74cd0ab1f79dbcd974de54677ea8eef110f2cb430597a45</p>

</div>
</div>

<div style="border-color: grey; border-width: 0px; border-top-width: 1px; border-bottom-width: 1px; border-style: solid;">

<p>v1.1.0 (<a href="JavaScript:void(0);" onclick="show_hide_element('ver_1_1')"><em>показать</em></a>)</p>

<div id="ver_1_1" class="code_lines_hide" style="overflow: clip;">

<p><b><i>Windows:</i></b></p>

<p><a href="https://github.com/BigIskander/xuexihanzi_js_release/releases/download/v1.1.0/xuexihanzi_js.Setup.1.1.0_ia32.exe">xuexihanzi_js.Setup.1.1.0_ia32.exe</a>&nbsp;
<br/>sha256: 2e9b128d74e443e20264a5f3b3af55cca49c2b34149db38a5aceaa9ce6748505</p>

<p><a href="https://github.com/BigIskander/xuexihanzi_js_release/releases/download/v1.1.0/xuexihanzi_js.Setup.1.1.0_x64.exe">xuexihanzi_js.Setup.1.1.0_x64.exe</a>&nbsp;
<br/>sha256: 0aa2a6c9655c535ea14f701748a184c39a6809431e3bcd4cca7575789078938a</p>

<p><a href="https://github.com/BigIskander/xuexihanzi_js_release/releases/download/v1.1.0/xuexihanzi_js.Setup.1.1.0_arm64.exe">xuexihanzi_js.Setup.1.1.0_arm64.exe</a>&nbsp;
<br/>sha256: 4ebe0b16251bdd3a2830846d7539aad4b7620ccb0917239ad918be3861b13d53</p>

<p><b><i>macOS:</i></b></p>

<p><a href="https://github.com/BigIskander/xuexihanzi_js_release/releases/download/v1.1.0/xuexihanzi_js-1.1.0.dmg">xuexihanzi_js-1.1.0.dmg</a>&nbsp;
<br/>sha256: e4fe03f477ed1885335e2aed7d0cbe41c5af1c70d1b7d2c60b7b4b2a11856064</p>

<p><a href="https://github.com/BigIskander/xuexihanzi_js_release/releases/download/v1.1.0/xuexihanzi_js-1.1.0-arm64.dmg">xuexihanzi_js-1.1.0-arm64.dmg</a>&nbsp;
<br/>sha256: 50074961f23fe50eb1e9910bac9d4773b1c9272f6f2b72b3102ec1c6084cbaa4</p>

<p><b><i>Linux:</i></b></p>

<p><a href="https://github.com/BigIskander/xuexihanzi_js_release/releases/download/v1.1.0/xuexihanzi_js_1.1.0_amd64.deb">xuexihanzi_js_1.1.0_amd64.deb</a>&nbsp;
<br/>sha256: 268a7c558e93a2d3a095ea288f105d4d55d0de3444b636505c2707a03ed6ee53</p>

<p><a href="https://github.com/BigIskander/xuexihanzi_js_release/releases/download/v1.1.0/xuexihanzi_js-1.1.0.AppImage">xuexihanzi_js-1.1.0.AppImage</a>&nbsp;
<br/>sha256: 7a49de033fef8e5adfdaba3ecad4fcfd94ed7ee95e558a0fb8a1900ee6927ffb</p>

<p><a href="https://github.com/BigIskander/xuexihanzi_js_release/releases/download/v1.1.0/xuexihanzi_js-1.1.0-armv7l.AppImage">xuexihanzi_js-1.1.0-armv7l.AppImage</a>&nbsp;
<br/>sha256: 6712a8f3d4da2f46aa1a9f43ceacd08b6a647e6171e32c3b64089d81fc75ab96</p>

<p><a href="https://github.com/BigIskander/xuexihanzi_js_release/releases/download/v1.1.0/xuexihanzi_js-1.1.0-arm64.AppImage">xuexihanzi_js-1.1.0-arm64.AppImage</a>&nbsp;
<br/>sha256: 0c2b9b93cad85076ee98ad65f167f0ea9e6fa88626f6812a7fa6c91d929e0cc1</p>

</div>
</div>

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
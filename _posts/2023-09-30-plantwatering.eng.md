---
layout: post
title: "Automatic plant watering and collecting soil moisture data, a simple device."
rus_v: "/2023/09/20/plantwatering.html"
---
This is the device I build myself by using electronic components. This is my hobby project. Device checks soil moisture once an hour and if moisture less than 20% pours 300 ml of water to the plant tray. Device also sends soil moisture data to MQTT server via WiFi. Device works autonomously, device is powered by using small sollar pannel and accumulator.

If you interested, I published all project files in github repository: 
<a href="https://github.com/BigIskander/PlantWatering/tree/main" target="_blank">https://github.com/BigIskander/PlantWatering/tree/main</a>

<h2>Collecting data and monitoring soil moisture.</h2>

After I build the device, I collected data during the perion of three months. All this time device worked autonomously (i.e. without using external power source). Accumulator slightly charged from sollar pannel during day time and slightly discharged during night time.

At the beginning, the purpose was: to determine the soil moisture level, in which it will be better to water the plant. For that reason at the beginnig the watering function of the device was disabled and I just monitored the data sent by the device. In that period, I watered the plant manually when needed. Then, by analysing collected data (graphs of soil moisture changes), I decided that, it will be the best if I will water the plant when the moisture level drops below 20%. That way, after prelininary observation, the device was programmed to water the plant (i.e. pour 300 ml of water) if soil moisture drops below 20%. After that I continued observations.

The plant was only watered to plant tray (for all the period of observation).

The data was collected this way: 1) device once an hour via WiFi sent data to MQTT server; 2) program in my computer minitored messages from MQTT server and write them to log file.

Then the data from log file was processed and displayed in easier to understand fomat (like graphs).

<h2>Observation results.</h2>

Below is the graphs of soil moisture [Влажность почвы] and voltage levels (on the battery) [Напряжение]. The graphs build based on observations for the time period of 3 months (2327 observations). Small red squares [Полив] denominates time points when the plant was automatically watered by the device.

<img src="/assets/images/posts/2023-09-20-plantwatering/moisture.png" class="zoomable" style="width:calc(max(1753px,100%))" id="image1" alt="График валжности почвы за 3 месяца.">

<img src="/assets/images/posts/2023-09-20-plantwatering/voltage.png" class="zoomable" style="width:calc(max(1752px,100%))" id="image1" alt="График напряжения за 3 месяца.">

For better clarity, below is the graphs built based on observation period of 1 week.

<img src="/assets/images/posts/2023-09-20-plantwatering/moisture2.png" class="zoomable" style="width:calc(max(1753px,100%))" id="image1" alt="График валжности почвы за неделю.">

<img src="/assets/images/posts/2023-09-20-plantwatering/voltage2.png" class="zoomable" style="width:calc(max(1752px,100%))" id="image1" alt="График напряжения за неделю.">

On the graphs you can see how soil moisture and battery voltage changes depending from the time of day. In hot days, after watering the plant, soil moisture rised pretty slowly. For that reason some days the device watered the plant twice with time break of 1 hour.



<h2>About MQTT server.</h2>

MQTT server was used to collect the data from the device. MQTT is the protocol used to send the data between smart devices. For this project I used MQTT server provided by service <a href="https://www.wqtt.ru" target="_blank">https://www.wqtt.ru</a>. If you want, you can use any similar service or set up your own local MQTT server (in case you have appropriate scills).

On MQTT server, 3 topics was created:
<ul>
<li>voltage - voltage of the battery</li>
<li>moisture - soil moisture level</li>
<li>water - watering (0 - plant was not watered, 1 - plant was watered)</li>
</ul>

The feature of MQTT technology is that MQTT server gets data from devices and send this data to subscribed (to these messages) devices, MQTT server usually do not store this messages. Server can only retain the last message in the topic if this message was sent with parameter retain equal to true. For that reason, I used script written in python (<a href="https://www.python.org" target="_blank">https://www.python.org</a>). This script was monitoring messages from MQTT server and saving them to separate file on the computer.

To process saved MQTT messages and present collected data in more easy to read way I write a small program working inside jupyter notebook <a href="https://jupyter.org" target="_blank">https://jupyter.org</a>.

Script used to collect the data and small programm used to process collected data:
<br/><a href="https://github.com/BigIskander/PlantWatering/tree/main/MQTT_Data" target="_blank">https://github.com/BigIskander/PlantWatering/tree/main/MQTT_Data</a>

In order to use this script (and to collect data) you need to write MQTT server credentials in file <b>credentials.py</b>.

To watch messages from MQTT server in real time I used MQTT Explorer program <a href="http://mqtt-explorer.com" target="_blank">http://mqtt-explorer.com</a>. Unfortunatelly this program can't export data and to save (collected data), i.e. the data is only available inside the program until you close it.

<h2>Circuit diagram.</h2>
Electronic components:
<ul>
<li>U1 - Wemos D1 mini (microcontroller)</li>
<li>U2 - Capacitive soil moisture sensor V1.2 (built on NE555 chip)</li>
<li>U3 - 5V DC motor (submersible water pump)</li>
<li>U4 - 1 watt small solar pannel</li>
<li>U5 - push button switch</li>
<li>U6 - battery charge indicator</li>
<li>J1 - battery charger module 03962A</li>
<li>J2 - 18650 Li-Ion battery</li>
<li>R1, R2, R3, R4, R5 - 10K Ohm resistors</li>
<li>C1 - 16V 100µF capacitor</li>
<li>T1, T2, T3, T4, T5 - FQP30N06 MOSFET transistors</li>
<li>+ prototyping board and wires with diameter 24 AWG</li>
</ul>

<img src="/assets/images/posts/2023-09-20-plantwatering/CircuitDiagram.png" class="zoomable" style="width:calc(max(300px,80%))" id="image0" />

<h2>Recommendations on how to build the device and write programm in to microcontroller.</h2>

For more comfort (while building the device) it is better to prepare well lit place, it is necessary to better see small details, because some components quite small in size. I would recommend to use soldering iron with adjustable temperature and good solder, because electronic components can get broke if you overheat them while soldering.

You need to write programm in to mictocontroller before you connect it to the board, because if someting is connected to microcontroller program can not be written to mictocontroller. 

To write the program in to the mictocontroller I used Arduino IDE (<a href="https://www.arduino.cc/en/software" target="_blank">https://www.arduino.cc/en/software</a>). The program for microcontroller was written in <b>C++</b> programming language. Before writing programm in to the mictocontroller you need to write credentias (used to connect to WiFi and MQTT server) in <b>credentials.hpp</b> file. If you want you can modify the device and the programm.

Programm for the microcontroller:
<br/> <a href="https://github.com/BigIskander/PlantWatering/tree/main/PlantWatering" target="_blank">https://github.com/BigIskander/PlantWatering/tree/main/PlantWatering</a>

<h2>Some technical details.</h2>

Most electronic components was bought from these internet stores: <a href="https://amperka.ru" target="_blank">https://amperka.ru</a> , <a href="https://mcustore.ru" target="_blank">https://mcustore.ru</a> and <a href="https://aliexpress.ru" target="_blank">https://aliexpress.ru</a>. Flexible tube for watering was bought from <a href="https://www.ozon.ru" target="_blank">https://www.ozon.ru</a>. Some part I already had at home.

The device is build by using <b>Wemos D1 mini</b> microcontroller. This is the microcontroller using small amount of electricity. However, the battery still won't last long if microcontroller will be active all the time. For that reason, in order to decreasy electricity consumption, the microntroller was programmed so that in time periods between measurements it will be in deep sleep mode (that is the mode when the electricity consumption of the device is minimal).

In order to measure soil moisture <b>Capacitive soil moisture sensor V1.2</b> was used. This is the analog sensor, the voltage on the output pin depends from soil moisture. Unfortunatele the voltage on the output pin also depends from voltage of power source used to power the sensor. In order to acoont for this feature, I needed some method to measure the voltage on the power source.

The difficulty was that selected microcontroller only have one analog pin, which can measure voltage in range from 0 to 3.3 volt, and I need to measure voltage from two sources. Also 18650 Li-Ion accumulator voltage (which is also necessary to measure) is usually in range from 3.7 to 4.2 volts, this is beyond the measurement range of 3.3 volt maximum. For that reason, in order to consecuently measure voltage from two sources I bult circuit by using transistors, to measure the voltage of accumutor (battery) I built voltage divider circuit. 

After the device was built, I made a calibrations. I measured values when the sensor is dry (0% moisture) and when sensor is in water (100% moisture). I measured values for different voltage levels (of power source). Then, based on measurements, I wrote a formula which will be used by programm (in microcontroller) to calculate soil moisture level. 

In practice, the device first measures the voltage level of the power source (accumulator), then measures the voltage level in out pin of soil moisture sensor. Then calculates soil moisture level and if soil moisture less than 20%, pours 300 ml of water (in the plant tray). After that the device via WiFi sends data to MQTT server. After the data was sent the device switches to deep sleep mode for 1 hour and after 1 hour the cycle repeats.

The amount of water to pour for one watering was decidend depending on volume of plant tray. I decided that in my case 300 ml of water will be appropriate amount to water the plant. If you want you can change the amount of water used for watering inside the programm.

In order to determine how long the pump needs to be on to pour necessary amount of water, at first I measured the amout of water which pump pumps in time period of 10 second. Then based on that I calculated how much secons pump needs in order to pour necessary omount of water and programmed microcontroller so that when watering will be need the pump will be turned on for set amount of secons and then turned off.

<h2>Photos of the device:</h2>
<img src="/assets/images/posts/2023-09-20-plantwatering/IMG_20230326_100836.jpg" class="zoomable" style="width:calc(max(300px,25%))" id="image1" alt="Снимок устройства.">
<img src="/assets/images/posts/2023-09-20-plantwatering/IMG_20230326_100901.jpg" class="zoomable"
style="width:calc(max(300px,25%))" id="image2" alt="Снимок устройства.">
<img src="/assets/images/posts/2023-09-20-plantwatering/IMG_20230326_101018.jpg" class="zoomable" style="width:calc(max(300px,25%))" id="image3" alt="Снимок устройства.">
<img src="/assets/images/posts/2023-09-20-plantwatering/IMG_20230401_112216.jpg" class="zoomable" style="width:calc(max(300px,25%))" id="image4" alt="Снимок устройства.">
<img src="/assets/images/posts/2023-09-20-plantwatering/IMG_20230612_072729.jpg" class="zoomable" style="width:calc(max(300px,25%))" id="image5" alt="Снимок устройства.">

<p>
Video demonstration of device working (watering the plant):<br/>
<video style="width:calc(min(100%,1280px))" preload="auto" controls>
    <source src="/assets/images/posts/2023-09-20-plantwatering/VID_20230604_092944.mp4" type='video/mp4'/>
    Your browser does not support the video tag.
</video>
</p>


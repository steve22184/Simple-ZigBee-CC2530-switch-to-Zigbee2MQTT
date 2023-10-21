# Simple-ZigBee-CC2530-switch-to-Zigbee2MQTT
Simple ZigBee switch based on TI's CC2530 connecting to Zigbee2MQTT

This is a prototype of a simple switch connecting to Zigbee2MQTT. It is based on a CC2530 from Texas Instruments using Z-Stack 3.0.2 and IAR 10.30 as compiler.

The foundation for the code is the GenericApp example with the ON-OFF Cluster functionality taken from the SampleSwitch example.

It is programmed as an End Device and is intended as a simple platform as starting point for future upgrades, where more switches, temperature sensors etc.can be implemented.

![IMG2](https://github.com/LemmeDasker/TestZigbee/assets/38005465/5e3acf4f-fb30-45d9-8a93-845ba9567916)

## Using the device
You will first have to connect thee switches to pin P2.0, P0.1 and P0.2.

P2.0:
When powered on for the first time, the device will connect to the ZigBee network by pressing the switch.

P0.1:
This will send an 'On' command to ZigBee2MQTT..

P0.1:
This will send an 'Off' command to ZigBee2MQTT..

That's it.

## ZigBee2MQTT
You will need to use the file CC2530Converter.js as the ZigBee2MQTT converter file. Please refer to ZigBee2MQTT's support page for more info about configuring ZigBee2MQTT:
https://www.zigbee2mqtt.io/advanced/support-new-devices/01_support_new_devices.html


## HEX file
I have precopiled the code so you don't have to do it yourself. It is attached as 'CC2530App.hex'. You can use the CC Debugger to upload.



## ******************** ATTENTION - Please help *********************

The code works 99% now, but I need some help with the last 1% !!!

The device is successfully joining the network, interviewed and is paired. It also seems to accept the converter file:
```
Zigbee2MQTT:info  2023-10-21 10:43:40: Successfully interviewed '0x00124b00279e698d', device has successfully been paired
Zigbee2MQTT:info  2023-10-21 10:43:40: Device '0x00124b00279e698d' is supported, identified as: Test FlemmingsZigbees (Test)
```

When I press the 'On' button, I get this message. But I can not see any changes in Zigbee2MQTT's web frontend.
```
Zigbee2MQTT:info  2023-10-21 11:11:01: MQTT publish: topic 'zigbee2mqtt/0x00124b00279e698d', payload '{"action":"on","linkquality":145,"state":null}'
Zigbee2MQTT:info  2023-10-21 11:11:01: MQTT publish: topic 'zigbee2mqtt/0x00124b00279e698d', payload '{"action":"","linkquality":145,"state":null}'
Zigbee2MQTT:info  2023-10-21 11:11:01: MQTT publish: topic 'zigbee2mqtt/0x00124b00279e698d/action', payload 'on'
```

I must be related to the Converter file. But I can not figure out what is wrong.

Feel free to clone the project as a solid starting point for your own project.

And please feel free to make a Pull Request when you figure out where the problem is and you want to share the fix. Or just send me a mail: lemme136@gmail.com


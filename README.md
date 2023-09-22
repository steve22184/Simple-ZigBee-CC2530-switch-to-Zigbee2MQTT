# Simple-ZigBee-CC2530-switch-to-Zigbee2MQTT
Simple ZigBee switch based on TI's CC2530 connecting to Zigbee2MQTT

This is a prototype of a simple switch connecting to Zigbee2MQTT. It is based on a CC2530 from Texas Instruments using Z-Stack 3.0.2 and IAR 10.30 as compiler.

The foundation for the code is the GenericApp example with the ON-OFF Cluster functionality taken from the SampleSwitch example.

It is programmed as an End Device and is intended as a simple platform as starting point for future upgrades, where more switches, temperature sensors etc.can be implemented.

![IMG2](https://github.com/LemmeDasker/TestZigbee/assets/38005465/5e3acf4f-fb30-45d9-8a93-845ba9567916)

## Using the device
You will first have to connect two switches to pin P2.0 and P0.1.
After that, using it is simple. When powered on for the first time, the device will connect to the ZigBee network by pressing the switch connected to pin P2.0. The command used is:

```
bdb_StartCommissioning(BDB_COMMISSIONING_MODE_NWK_STEERING);
```

The switch used for controlling the device is connected to pin P0.1 and will send a Togge command to ZigBee2MQTT.

That's it.

## ZigBee2MQTT
You will need to use the file Converter.js as the ZigBee2MQTT converter file. Please refer to ZigBee2MQTT's support page for more info about configuring ZigBee2MQTT:
https://www.zigbee2mqtt.io/advanced/support-new-devices/01_support_new_devices.html

## ******************** ATTENTION - Please help *********************

The code works 99% now, but I need some help with the last 1% !!!

The device is successfully joining the network, interviewed and is paired. But when ZigBee2MQTT tries to configure, the device times out - see below from the ZigBee2MQTT log:

```
error 2023-09-17 20:54:04: Failed to configure '0x00124b00279e698d', attempt 2 (Error: ConfigureReporting 0x00124b00279e698d/1 genOnOff([{"attribute":"onOff","minimumReportInterval":0,
"maximumReportInterval":3600,"reportableChange":0}],"sendWhen":"immediate","timeout":10000,"disableResponse":false,"disableRecovery":false,"disableDefaultResponse":true,"direction":0,"srcEndpoint":null,"reservedBits":0,"manufacturerCode":null,
"transactionSequenceNumber":null,"writeUndiv":false})failed (Timeout - 64357 - 1 - 15 - 6 - 7 after 10000ms)
    at Timeout._onTimeout (C:\Zigbee2MQTT\node_modules\zigbee-herdsman\src\utils\waitress.ts:64:35)
    at listOnTimeout (node:internal/timers:559:17)
    at processTimers (node:internal/timers:502:7))
```

I am not sure where the problem is. It could be the Converter file that are not right, it could be some final configuration of ZigBee2MQTT that I missed, and finally the ZigBee code itself.

Feel free to clone the project as a solid starting point for your own project.

And please feel free to make a Pull Request when you figure out where the problem is with my code and you want to share the fix. Or just send me a mail: lemme136@gmail.com


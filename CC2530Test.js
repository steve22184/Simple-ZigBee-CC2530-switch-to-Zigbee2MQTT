const fz = require('zigbee-herdsman-converters/converters/fromZigbee');
const tz = require('zigbee-herdsman-converters/converters/toZigbee');
const exposes = require('zigbee-herdsman-converters/lib/exposes');
const reporting = require('zigbee-herdsman-converters/lib/reporting');
const extend = require('zigbee-herdsman-converters/lib/extend');
const e = exposes.presets;
const ea = exposes.access;

const definition = {
    zigbeeModel: ['FMGC'], // The model ID from: Device with modelID 'lumi.sens' is not supported.
    model: 'Test', // Vendor model number, look on the device for a model number
    vendor: 'Test', // Vendor of the device (only used for documentation and startup logging)
    description: 'FlemmingsZigbees', // Description of the device, copy from vendor site. (only used for documentation and startup logging)
    fromZigbee: [fz.on_off], // We will add this later
    toZigbee: [], // Should be empty, unless device can be controlled (e.g. lights, switches).
    exposes: [e.switch()], // Defines what this device exposes, used for e.g. Home Assistant discovery and in the frontend
    // The configure method below is needed to make the device reports on/off state changes
    // when the device is controlled manually through the button on it.
    configure: async (device, coordinatorEndpoint, logger) => {
        const endpoint = device.getEndpoint(1);
        await reporting.bind(endpoint, coordinatorEndpoint, ['genOnOff']);
        await reporting.onOff(endpoint);
    },
};

module.exports = definition;

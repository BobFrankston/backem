import mqtt from 'mqtt';
import { msg } from './index.js';
const mqttHost = "pi4c";
const mqttPort = 1883; // 1883 is the default port for MQTT
export function mqttListner(subscribe, handler, timeout = 1000 * 60 * 5) {
    try {
        const seen = new Set();
        const client = mqtt.connect(`mqtt://${mqttHost}:${mqttPort}`);
        // Subscribe to the device status topic
        // client.subscribe('tele/+/LWT');  -- for online/offline we care
        client.subscribe(subscribe);
        // Handle received MQTT messages
        client.on('message', async (topic, message) => {
            // Must be a discovery message
            if (seen.has(topic))
                return;
            seen.add(topic);
            const payload = JSON.parse(message.toString());
            handler(payload);
        });
        setTimeout(() => {
            console.warn(`Timeout ${subscribe}`);
            client.unsubscribe(subscribe);
            client.end();
        }, timeout); // 5 minutes
    }
    catch (e) {
        msg('mqttListner', e.message);
        debugger;
        //  throw e;
    }
}
//# sourceMappingURL=mqttx.js.map
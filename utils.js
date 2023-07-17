import { exec } from 'child_process';
import ping from 'ping';
import * as dns from 'dns';
import { msg } from './index.js';
export async function executeCommandLine(command) {
    return new Promise((resolve, reject) => { exec(command, (error, stdout, stderr) => { error ? reject(error) : resolve(stdout.trim()); }); });
}
export async function testHostReachability(host) {
    try {
        let ipAddress = null;
        if (/^[0-9.]+$/.test(host))
            ipAddress = host;
        else {
            const ipAddresses = await dns.promises.resolve(host);
            if (ipAddresses.length === 0) {
                msg('No IP addresses found for the ${host}');
                return false;
            }
            ipAddress = ipAddresses[0];
        }
        const result = await ping.promise.probe(ipAddress);
        return result.alive;
    }
    catch (e) {
        msg(`Probing ${host}`, e.message);
        return false;
    }
}
//# sourceMappingURL=utils.js.map
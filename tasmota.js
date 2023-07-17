import fs from 'fs';
import fp from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { executeCommandLine, testHostReachability } from './utils.js';
import { mqttListner } from './mqttx.js';
const here = path.dirname(fileURLToPath(import.meta.url));
const decode = path.join(path.dirname(here), 'tstools', 'decode-config.exe');
const backedup = new Map();
const waiter = 1000 * 60 * 15; // 15 minutes
let backdir = '';
export function enumerateTasmotaDevices(backdirp) {
    backdir = backdirp;
    mqttListner('tasmota/discovery/#', backupTasmotaSettings);
}
if (!fs.existsSync(decode)) {
    console.error(`Missing ../tstools/decode-config.exe. It is available from https://github.com/tasmota/decode-config/releases`);
    process.exit(1);
}
// async function backupTasmotaSettings(deviceIp: string, hn: string, backupFile: string) {
async function backupTasmotaSettings(payloado) {
    const payload = payloado;
    const backupFile = path.join(backdir, 'tasmota', `${payload.hn}.json`);
    if (!payload.ip || !payload.hn) {
        // debugger;
        return;
    }
    try {
        const last = backedup.get(payload.hn);
        if (last && (new Date().getTime() - last.getTime()) < waiter)
            return;
        if (!await testHostReachability(payload.ip))
            return;
        const cmd = `${decode} -s ${payload.hn}.aaz.lt --json-indent 2 -o ${backupFile}`;
        await executeCommandLine(cmd);
        // If we wwant to processs it might as well start in memory?
        // const cmd2 = `${decode} -s ${hn}.aaz.lt`;
        // const output = await executeCommandLine(cmd2);
        // const status = JSON.parse(output) as TasmotaSettings;
        // const bak = backupFile.replace(".json", ".bak.json");
        // await fp.writeFile(bak, JSON.stringify(status, null, 2));
        backedup.set(payload.hn, new Date());
        return;
    }
    catch (e) {
        console.error(`Error ${e.message.split('\n')[0]}`);
        await fp.writeFile(backupFile.replace(".json", ".err"), e.toString());
        return;
    }
}
// From previous version    
// const url = `http://${deviceIp}/cm?cmnd=status%205`;
// // const url = `http://${deviceIp}/cm?cmnd=Dump`;
// try {
//     backupFile = backupFile.replace(".json", ".bak.json");
//     const response = (await (await fetch(url)).json()) as TasmotaStatus;
//     // const data = response.data as TasmotaStatus;
//     await fp.writeFile(backupFile, JSON.stringify(response, null, 2));
//     const rurl = `http://${deviceIp}/cm?cmnd=rule`;
//     const rules = (await (await fetch(rurl)).json());
//     const hasNonEmptyRule = (entries: Record<string, { Rules: string }>): boolean =>
//         Object.values(entries).some(({ Rules }) => typeof Rules === 'string' && Rules.trim() !== '');
//     if (hasNonEmptyRule(rules))
//         await fp.writeFile(backupFile.replace(".json", "-rules.json"), JSON.stringify(rules, null, 2));
//     // if (data && data.Status) {
//     //     return data as TasmotaStatus;
//     // } else {
//     //     console.error('Invalid response from Tasmota ${devceIp} ${JSON.stringify(response)}');
//     // }
// } catch (error: any) {
//     msg(`Failed to request ${deviceIp}`, error.message);
//     // debugger;
// }
//# sourceMappingURL=tasmota.js.map
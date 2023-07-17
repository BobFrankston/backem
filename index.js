import fs from 'fs';
import { mdnsx } from './mdnsx.js';
import { enumerateTasmotaDevices } from './tasmota.js';
const backdir = 'y:/dev/homecontrol/backups';
if (!fs.existsSync(backdir))
    fs.mkdirSync(backdir);
export function msg(s, e) {
    const st = `${new Date().toLocaleString('se')} ${s}`;
    if (e) {
        console.error(st, e);
    }
    else
        console.log(st);
    return st;
}
mdnsx(backdir);
enumerateTasmotaDevices(backdir);
//# sourceMappingURL=index.js.map
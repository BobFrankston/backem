import mdns from 'multicast-dns'; // https://www.npmjs.com/package/multicast-dns
import { Answer } from 'dns-packet';
import fs from 'fs';
import { BackupShelly } from './shelly.js';
import path from 'path';
import { mdnsx } from './mdnsx.js';
import { enumerateTasmotaDevices } from './tasmota.js';

const backdir = 'y:/dev/homecontrol/backups';
if (!fs.existsSync(backdir)) fs.mkdirSync(backdir);

export function msg(s: string, e?: any) {
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
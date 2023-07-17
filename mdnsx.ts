import mdns from 'multicast-dns'; // https://www.npmjs.com/package/multicast-dns
import { Answer } from 'dns-packet';
import fs from 'fs';
import { BackupShelly } from './shelly.js';
import path from 'path';
import { msg } from './index.js';

export function mdnsx(backdir: string, timeout = 5 * 60 * 1000 ) {
    const m = mdns();

    const seen = new Map<string, number>();
    let seened = 0;
    const aaaa = new Map<string, string>();

    m.on('response', async response => {
        response.answers.forEach(async answer => {
            const tname = answer.type + ":" + answer.name;
            if (seen.has(tname)) return seen.set(tname, seen.get(tname)! + 1);
            seened++;
            seen.set(tname, 1);
            const aname = answer.name?.toLowerCase();
            if (!aname)
                debugger;
            if (aname.includes('shelly'))
                return BackupShelly(path.join(backdir, "shelly"), answer);
            if (aname.includes('amazon')) return;
            // if (aname.includes('amazon')) return;
            const count  = seen.get(tname)
            msg(`Response#${count} [${answer.type}] ${answer.name}`);
            if ((answer.type as any) === 'AAAA') {
                aaaa.set(answer.name, (answer as any).data);
            }
        });
    });

    m.query({
        questions: [{
            name: '_http._tcp.local',
            type: 'PTR'
        }]
    });

    setTimeout(() => {
        msg(`Timeout mdns`)
        m.destroy();
    }, timeout);  // 5 minutes

    let saved = 0;
    setInterval(() => {
        if (saved = seened) return;
        fs.writeFileSync(path.join(backdir, 'seen.json'), JSON.stringify([...seen.entries()], null, 2));

        if (aaaa.size === 0) return;
        const aas = "name,ipv6\n" + [...aaaa.entries()].map(([k, v]) => `${k},${v}`).join('\n');
        fs.writeFileSync(path.join(backdir, 'aaaa.csv'), aas);
        saved = seened;
    }, 10 * 1000);
}
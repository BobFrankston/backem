import fs from 'fs';
import fp from 'fs/promises';
import path from 'path';
import { msg } from './index.js';
const shellys = new Map();
export async function BackupShelly(backdir, answer) {
    if (!fs.existsSync(backdir))
        fs.mkdirSync(backdir);
    // msg(`${aa.type} ${JSON.stringify(aa)}`)
    if (answer.type !== 'SRV')
        return;
    shellys.set(answer.name, answer.name);
    msg(`Found Shelly device: ${answer.name}`);
    shellys.set(answer.name, "found");
    const sh = answer.name.split('.')[0];
    const devdir = path.join(backdir, `${sh}`); // For additional details
    const assureDevDir = () => { if (!fs.existsSync(devdir))
        fs.mkdirSync(devdir); };
    // if (sh.includes("3c610579a4ec")) debugger;
    try {
        async function savekind(ask, kind) {
            try {
                const xget = `http://${sh}/rpc/${ask}.List`;
                const things = await (await fetch(xget)).json();
                const items = things[kind];
                if (!items.length)
                    return null;
                assureDevDir();
                await fp.writeFile(path.join(devdir, `hooks.json`), JSON.stringify(things, null, 2));
                return things;
            }
            catch (e) {
                msg(`Error getting ${ask} for ${sh}f`, e.message);
            }
        }
        const getter = `http://${sh}/rpc/Shelly.GetConfig`;
        // msg(getter);
        const result = await (await fetch(getter)).json();
        await fp.writeFile(path.join(backdir, `${sh}.json`), JSON.stringify(result, null, 2));
        await savekind("Webhook", "hooks");
        // need to get scripts separately?
        // http://192.168.33.1/rpc/Script.List
        const slist = `http://${sh}/rpc/Script.List`;
        const scripts = await (await fetch(slist)).json();
        if (scripts.scripts.length) {
            assureDevDir();
            // Get scripts
            await fp.writeFile(path.join(devdir, `scripts.json`), JSON.stringify(scripts, null, 2));
            for (const sc of scripts.scripts) {
                try {
                    const sget = `http://${sh}/rpc/Script.GetCode?id=${sc.id}`;
                    const result = await (await fetch(sget)).json();
                    const script = result.data.trim();
                    if (script)
                        await fp.writeFile(path.join(devdir, `${sc.name}.js`), script);
                }
                catch (e) {
                    msg(answer.name, e.message);
                    // debugger;
                }
            }
        }
    }
    catch (e) {
        const backv1 = path.join(backdir, 'v1');
        if (!fs.existsSync(backv1))
            fs.mkdirSync(backv1);
        try {
            const getv1 = `http://${sh}/status`;
            const result = await (await fetch(getv1)).json();
            await fp.writeFile(path.join(backv1, `${sh}.json`), JSON.stringify(result, null, 2));
        }
        catch (e) {
            msg(answer.name, e.message);
            await fp.writeFile(path.join(backv1, `${sh}.fail`), e.message);
        }
    }
}
//# sourceMappingURL=shelly.js.map
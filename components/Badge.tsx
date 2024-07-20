import type { BadgeProp } from "../global.d.ts";

export function SlBadge(prop: BadgeProp) {
    const { children, ...ps } = prop;
    return <sl-badge {...ps}>{children}</sl-badge>;
}

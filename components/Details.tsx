import type { DetailsProp } from "../global.d.ts";

export function SlDetails(prop: DetailsProp) {
    const { children, ...ps } = prop;
    return <sl-details {...ps}>{children}</sl-details>;
}

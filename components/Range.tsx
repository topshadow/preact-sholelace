import type { RangeProp } from "../global.d.ts";

export function SlRange(prop: RangeProp) {
    const { children, ...ps } = prop;
    return <sl-range {...ps}>{children}</sl-range>;
}

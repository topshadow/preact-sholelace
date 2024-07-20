import type { AnimateProp } from "../global.d.ts";

export function SlAnimation(prop: AnimateProp) {
    const { children, ...ps } = prop;
    return <sl-animation {...ps}>{children}</sl-animation>;
}

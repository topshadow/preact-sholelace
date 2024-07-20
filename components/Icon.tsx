import type { IconProp } from "../global.d.ts";

export function SlIcon(prop: IconProp) {
    const { children, ...ps } = prop;
    return <sl-icon {...ps}>{children?children:''}</sl-icon>;
}

import type { TagProp } from "../global.d.ts";

export function SlTag(prop: TagProp) {
    const { children, ...ps } = prop;
    return <sl-tag {...ps}>{children}</sl-tag>;
}

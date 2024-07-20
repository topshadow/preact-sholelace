import type { DialogProp } from "../global.d.ts";

export function SlDialog(prop: DialogProp) {
    const { children, ...ps } = prop;
    return <sl-dialog {...ps}>{children}</sl-dialog>;
}

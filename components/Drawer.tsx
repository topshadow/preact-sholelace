import type { DrawerProp } from "../global.d.ts";

export function SlDrawer(prop: DrawerProp) {
    const { children, ...ps } = prop;
    return <sl-drawer {...ps}>{children}</sl-drawer>;
}

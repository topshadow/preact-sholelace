import type { DropdownProp } from "../global.d.ts";

export function SlDropdown(prop: DropdownProp) {
    const { children, ...ps } = prop;
    return <sl-dropdown {...ps}>{children}</sl-dropdown>;
}

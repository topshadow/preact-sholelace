import type { ButtonGroupProp } from "../global.d.ts";
export function SlButtonGroup(prop: ButtonGroupProp) {
    const { children, ...ps } = prop;
    return <sl-button-group {...ps}>{children}</sl-button-group>;
}

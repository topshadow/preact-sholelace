import type { CheckboxProp } from "../global.d.ts";
export function SlCheckbox(prop: CheckboxProp) {
    const { children, ...ps } = prop;
    return <sl-checkbox {...ps} >{children}</sl-checkbox>;
}

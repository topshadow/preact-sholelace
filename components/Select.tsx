import type { OptionProp, SelectProp } from "../global.d.ts";

export function SlSelect(prop: SelectProp) {
    const { children, ...ps } = prop;
    return <sl-select {...ps}>{children}</sl-select>;
}
export function SlOption(prop: OptionProp) {
    const { children, ...ps } = prop;
    return <sl-option {...ps}>{children}</sl-option>;
}

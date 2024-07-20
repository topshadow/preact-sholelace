import type { InputProp } from "../global.d.ts";

export function SlInput(prop: InputProp) {
    const { children, ...ps } = prop;
    return <sl-input {...ps}>{children}</sl-input>;
}

import type { SpinnerProp } from "../global.d.ts";

export function SlSpinner(prop: SpinnerProp) {
    const { children, ...ps } = prop;
    return <sl-spinner {...ps}>{children}</sl-spinner>;
}

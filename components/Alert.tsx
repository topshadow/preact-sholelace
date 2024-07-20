import type { AlertProp } from "../global.d.ts";
export function SlAlert(prop: AlertProp) {
    const { children, ...ps } = prop;
    return <sl-alert {...ps}>{children}</sl-alert>;
}

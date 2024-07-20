import type { IconButtonProp } from "../global.d.ts";

export function SlIconButton(prop: IconButtonProp) {
    const { children, ...ps } = prop;
    return <sl-icon-button {...ps}>{children}</sl-icon-button>;
}

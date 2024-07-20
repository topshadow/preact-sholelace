import type { TooltipProp } from "../global.d.ts";

export function SlTooltip(prop: TooltipProp) {
    const { children, ...ps } = prop;
    return <sl-tooltip {...ps}>{children}</sl-tooltip>;
}

import type { SplitPanelProp } from "../global.d.ts";

export function SlSplitPanel(prop: SplitPanelProp) {
    const { children, ...ps } = prop;
    return <sl-split-panel {...ps}>{children}</sl-split-panel>;
}

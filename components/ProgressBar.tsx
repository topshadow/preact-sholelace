import  type{ ProgressBarProp } from "../global.d.ts";

export function SlProgressBar(prop: ProgressBarProp) {
    const { children, ...ps } = prop;
    return <sl-progress-bar {...ps}>{children}</sl-progress-bar>;
}

import  type{ ProgressBarProp } from "../global.d.ts";

export function SlProgressRing(prop: ProgressBarProp) {
    const { children, ...ps } = prop;
    return <sl-progress-ring {...ps}>{children}</sl-progress-ring>;
}

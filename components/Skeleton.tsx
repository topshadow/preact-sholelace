import type { SkeletonProp } from "../global.d.ts";

export function SlSkeleton(prop: SkeletonProp) {
    const { children, ...ps } = prop;
    return <sl-skeleton {...ps}>{children}</sl-skeleton>;
}

import type { RatingProp } from "../global.d.ts";

export function SlRating(prop: RatingProp) {
    const { children, ...ps } = prop;
    return <sl-rating {...ps}>{children}</sl-rating>;
}

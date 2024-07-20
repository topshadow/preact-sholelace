import type { CarouselProp, Childrenable } from "../global.d.ts";

export function SlCarousel(prop: CarouselProp) {
    const { children, ...ps } = prop;
    return <sl-carousel {...ps}>{children}</sl-carousel>;
}
export function SlCarouselItem(prop: Childrenable) {
    const { children } = prop;
    return <sl-carousel-item>{children}</sl-carousel-item>;
}

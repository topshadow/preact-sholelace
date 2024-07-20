import type { CardProp } from "../global.d.ts";

export function SlCard(prop: CardProp) {
    const { image, header, children, footer } = prop;
    return (
        <sl-card>
            {image}
            {header}
            {children}
            {footer}
        </sl-card>
    );
}

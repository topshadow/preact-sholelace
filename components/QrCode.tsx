import type { QrCodeProp } from "../global.d.ts";

export function SlQrCode(prop: QrCodeProp) {
    const { children, ...ps } = prop;
    return <sl-qr-code {...ps}>{children}</sl-qr-code>;
}

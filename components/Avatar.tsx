import type { AvatarProp } from "../global.d.ts";

export function SlAvatar(prop: AvatarProp & { children?: unknown }) {
    const { children, ...ps } = prop;
    return <sl-avatar {...ps}>{children}</sl-avatar>;
}

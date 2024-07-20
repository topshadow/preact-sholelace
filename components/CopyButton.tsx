import type { CopyButtonProp } from "../global.d.ts";

export function SlCopyButton(prop: CopyButtonProp) {
    const { value } = prop;
    return <sl-copy-button value={value}></sl-copy-button>;
}

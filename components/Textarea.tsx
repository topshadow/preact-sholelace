import type { TextAreaProp } from "../global.d.ts";
export function SlTextarea(prop: TextAreaProp) {
    const { children, ...ps } = prop;
    return <sl-textarea {...ps}>{children}</sl-textarea>;
}

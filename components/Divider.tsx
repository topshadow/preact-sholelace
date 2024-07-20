import  type{ DividerProp } from "../global.d.ts";

export function SlDivider(prop:DividerProp){
    const {...ps}=prop;
    return <sl-divider {...ps}></sl-divider>
}

import type{ SwitchProp } from "../global.d.ts";

export  function SlSwitch(prop:SwitchProp){
    const {children,...ps} =prop;
    return <sl-switch {...ps}>{children}</sl-switch>
}
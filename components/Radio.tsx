import type{ RadioProp,RadioButtonProp,RadioGroupProp } from "../global.d.ts";

export function SlRadio(prop:RadioProp){
    const {children,...ps}=prop;
    return <sl-radio {...ps}>{children}</sl-radio>

}
export function SlRadioGroup(prop:RadioGroupProp){
    const {children,...ps}=prop;
    return <sl-radio-group {...ps}>{children}</sl-radio-group>
}

export function SlRadioButton(prop:RadioButtonProp){
    const {children,...ps}=prop;
    return <sl-radio-button {...ps}>{children}</sl-radio-button>
}
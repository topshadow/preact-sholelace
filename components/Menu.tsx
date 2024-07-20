import type{ MenuProp,MenuItemProp,MenuLabelProp } from "../global.d.ts";

export function SlMenu(prop:MenuProp){
    const {children,...ps}=prop;
    return <sl-menu {...ps}>{children}</sl-menu>
}
export function SlMenuItem(prop:MenuItemProp){
    const {children,...ps}=prop;
    return <sl-menu-item {...ps}>{children}</sl-menu-item>
}

export function SlMenuLabel(prop:MenuLabelProp){
    const {children,...ps}=prop;
    return <sl-menu-label {...ps}>{children}</sl-menu-label>

}
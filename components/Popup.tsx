import  type{ PopupProp } from "../global.d.ts";

export function SlPopup(prop:PopupProp){
    const {children,...ps}=prop ;

    return <sl-popup {...ps}>{children}</sl-popup>
}
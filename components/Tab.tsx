import type{ TabProp ,TabGroupProp,TabPanelProp} from "../global.d.ts";

export function SlTab(prop:TabProp){
    const {children,...ps}=prop;
    return <sl-tab {...ps}>{children}</sl-tab>

}


export function SlTabGroup(prop:TabGroupProp){
    const {children,...ps}=prop;
    return <sl-tab-group {...ps}>{children}</sl-tab-group>
}

export function SlTabPanel(prop:TabPanelProp){
    const {children,...ps}=prop;
    return <sl-tab-panel {...ps}>{children}</sl-tab-panel>
}
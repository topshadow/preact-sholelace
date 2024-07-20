import type{ TreeItemProp, TreeProp } from "../global.d.ts";

export function SlTree(prop:TreeProp){
    const {children,...ps}=prop;

    return <sl-tree {...ps}>{children}</sl-tree>

}

export function SlTreeItem(prop:TreeItemProp){
    const {children,...ps}=prop;
    return <sl-tree-item {...ps}>{children}</sl-tree-item>
}
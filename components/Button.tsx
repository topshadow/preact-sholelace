import type {ButtonProp} from '../global.d.ts'
export function SlButton(prop:ButtonProp ) {
    const {children,...ps}=prop;
    return <sl-button  {...ps}>{children}</sl-button>;
}



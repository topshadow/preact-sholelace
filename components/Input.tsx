import type { InputProp } from "../global.d.ts";

export function SlInput(prop: InputProp) {
    const { children, ...ps } = prop;
    
    return (
        <sl-input
            {...ps}
            defaultValue="" 
            onsl-change={(e) => console.log('ok sl change')}
            onBlur={(e) => alert("e")}
        >
            {children}
        </sl-input>
    );
}

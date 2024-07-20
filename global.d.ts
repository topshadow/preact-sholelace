// deno-lint-ignore-file no-empty-interface
import type { VNode } from "preact";
type Sizeable = { size?: "small" | "medium" | "large" };
type Childrenable = { children?: unknown };
type ButtonProp = {
    variant?:
        | "default"
        | "primary"
        | "success"
        | "neutral"
        | "warning"
        | "danger"
        | "text"
        | "default";
    size?: "small" | "medium" | "large";
    caret?: boolean;
    disabled?: boolean;
    loading?: boolean;
    outline?: boolean;
    pill?: boolean;
    circle?: boolean;
    type?: "button" | "submit" | "reset" | "button";
    name?: string;
    value?: string;
    /**When set, the underlying button will be rendered as an <a> with this href instead of a <button>.		 */
    href?: string;
    /**Tells the browser where to open the link. Only used when href is present. */
    target?: "_blank" | "_parent" | "_self" | "_top";
    /**	When using href, this attribute will map to the underlying link’s rel attribute. Unlike regular links, the default is noreferrer noopener to prevent security exploits. However, if you’re using target to point to a specific tab/window, this will prevent that from working correctly. You can remove or change the default value by setting the attribute to an empty string or a value of your choice, respectively.		 */
    rel?: "noreferrer" | "noopener";
    /**	Tells the browser to download the linked file as this filename. Only used when href is present. */
    download?: string | undefined;
    /**The “form owner” to associate the button with. If omitted, the closest containing form will be used instead. The value of this attribute must be an id of a form in the same document or shadow root as the button. */
    form?: string;
    formAction?: string;
    children?: unknown;
    // formaction	Used to override the form owner’s action attribute.		string	-
    // formEnctype
    // formenctype	Used to override the form owner’s enctype attribute.		'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain'	-
    // formMethod
    // formmethod	Used to override the form owner’s method attribute.		'post' | 'get'	-
    // formNoValidate
    // formnovalidate	Used to override the form owner’s novalidate attribute.		boolean	-
    // formTarget
    // formtarget	Used to override the form owner’s target attribute.		'_self' | '_blank' | '_parent' | '_top' | string	-
    // validity	Gets the validity state object		-	-
    // validationMessage	Gets the validation message		-	-
    // updateComplete
} & Childrenable;

type AlertProp =
    & {
        /**	Indicates whether or not the alert is open. You can toggle this attribute to show and hide the alert, or you can use the show() and hide() methods and this attribute will reflect the alert’s open state.	 default:false	 */
        open?: boolean;
        /** Enables a close button that allows the user to dismiss the alert.		closable:false */
        closable?: boolean;
        /** The alert’s theme variant.		'primary' | 'success' | 'neutral' | 'warning' | 'danger'	'primary' default primary */
        variant?: "primary" | "success" | "neutral" | "warning" | "danger";
        /** The length of time, in milliseconds, the alert will show before closing itself. If the user interacts with the alert before it closes (e.g. moves the mouse over it), the timer will restart. Defaults to Infinity, meaning the alert will not close on its own.		-	Infinity */
        duration?: number;
        /**	A read-only promise that resolves when the component has finished updating. */
        // updateComplete
    }
    & Sizeable
    & Childrenable;
type AnimateProp = {
    /**The name of the built-in animation to use. For custom animations, use the keyframes prop.		string */
    name?: string;
    /**Plays the animation. When omitted, the animation will be paused. This attribute will be automatically removed when the animation finishes or gets canceled.	,default false	 */
    play?: boolean;
    /**	The number of milliseconds to delay the start of the animation.		number	0 */
    delay?: number;
    /**	Determines the direction of playback as well as the behavior when reaching the end of an iteration. Learn more		PlaybackDirection	 'normal' */
    direction?: string;
    /**	The number of milliseconds each iteration of the animation takes to complete.		number	 */
    duration?: number;
    /**	The easing function to use for the animation. This can be a Shoelace easing function or a custom easing function such as cubic-bezier(0, 1, .76, 1.14).		string liner */
    easing?: string;
    /**The number of milliseconds to delay after the active period of an animation sequence.		number	0 */
    endDelay?: number;

    /**Sets how the animation applies styles to its target before and after its execution.		FillMode */
    fill?: string | "auto";
    /**	The number of iterations to run before the animation completes. Defaults to Infinity, which loops.		-	Infinity */
    iterations?: number;
    /**The offset at which to start the animation, usually between 0 (start) and 1 (end). */
    iterationStart?: number;
    // iteration-start
    /**The keyframes to use for the animation. If this is set, name will be ignored.	 */
    keyframes?: unknown[];
    /**Sets the animation’s playback rate. The default is 1, which plays the animation at a normal speed. Setting this to 2, for example, will double the animation’s speed. A negative value can be used to reverse the animation. This value can be changed without causing the animation to restart.		 */
    playbackRate?: number;

    // playback-rate:	number
    /**Gets and sets the current animation time.		CSSNumberish */
    currentTime?: number;
} & { children: unknown };

type IconProp = {
    /**The name of the icon to draw. Available names depend on the icon library being used. */
    name?: string;
    /**	An external URL of an SVG file. Be sure you trust the content you are including, as it will be executed as code and can result in XSS attacks.		 */
    src?: string;
    /**	An alternate description to use for assistive devices. If omitted, the icon will be considered presentational and ignored by assistive devices.	 */
    label?: string;
    library?: string;
} & { children?: unknown };

type AvatarProp =
    & {
        /**	The image source to use for the avatar.		 */
        image?: string;
        /**	A label to use to describe the avatar to assistive devices.		 */
        label?: string;
        /**	Initials to use as a fallback when no image is available (1–2 characters max recommended).		 */
        initials?: string;
        /**	Indicates how the browser should load the image.		default 'eager' */
        loading?: "eager" | "lazy";
        /**The shape of the avatar.	 default 'circle'	' */
        shape?: "circle" | "square" | "rounded";
    }
    & Sizeable
    & Childrenable;
type BadgeProp =
    & {
        /**The badge’s theme variant. default primary */
        variant?: "primary" | "success" | "neutral" | "warning" | "danger";
        /**	Draws a pill-style badge with rounded edges.  default false */
        pill?: boolean;
        /**	Makes the badge pulsate to draw attention.		 */
        pulse?: boolean;
    }
    & Childrenable
    & Sizeable;
type CarouselProp = {
    /**When set, allows the user to navigate the carousel in the same direction indefinitely.	false */
    loop?: boolean;
    /**When set, show the carousel’s navigation. false */
    navigation?: boolean;
    /** 	When set, show the carousel’s pagination indicators.	false	 */
    pagination?: boolean;
    /**When set, the slides will scroll automatically when the user is not interacting with them.false		 */
    autoplay?: boolean;
    /**Specifies the amount of time, in milliseconds, between each automatic scroll.		number	3000 */
    autoplayInterval?: number;
    // autoplay-interval
    /**Specifies how many slides should be shown at a given time.		number	1 */
    slidesPerPage?: number;
    // slides-per-page
    /**Specifies the number of slides the carousel will advance when scrolling, useful when specifying a slides-per-page greater than one. It can’t be higher than slides-per-page.		number	1 */
    slidesPerMove?: number;
    // slides-per-move
    /**Specifies the orientation in which the carousel will lay out.		'horizontal' | 'vertical'	'horizontal' */
    orientation?: "horizontal" | "vertical";
    /**When set, it is possible to scroll through the slides by dragging them with the mouse. */
    mouseDragging?: boolean;
} & Childrenable;

type BreadcrumbProp =
    & {
        separator?: VNode;
    }
    & Childrenable
    & Sizeable;
type BreadcrumbItemProp =
    & { href?: string }
    & Childrenable
    & Sizeable;
type ButtonGroupProp = { label?: string } & Childrenable;
type CardProp = {
    /**An optional header for the card. */
    header?: VNode;
    /**An optional footer for the card. */
    footer?: VNode;
    /**An optional image to render at the start of the card. */
    image?: VNode;
} & Childrenable;

export interface SlCheckboxProp {
    /** The name of the checkbox, submitted as a name/value pair with form data.		*/
    name?: string;
    /** 	The current value of the checkbox, submitted as a name/value pair with form data.		string	- */
    value?: string;
    /**The checkbox’s size. default 'medium'*/

    disabled?: boolean;
    /**	Disables the checkbox. 	Draws the checkbox in a checked state.				 */
    checked?: boolean;
    /**	Draws the checkbox in an indeterminate state. This is usually applied to checkboxes that represents a “select all/none” behavior when associated checkboxes have a mix of checked and unchecked states.		 */
    indeterminate?: boolean;
    /**	The default value of the form control. Primarily used for resetting the form control.		 */
    defaultChecked?: boolean;
    /**	By default, form controls are associated with the nearest containing <form> element. This attribute allows you to place the form control outside of a form and associate it with the form that has this id. The form must be in the same document or shadow root for this to work.		 */
    form?: string;
    /**	Makes the checkbox a required field.		 false*/
    required?: boolean;
    /**The checkbox’s help text. If you need to display HTML, use the help-text slot instead.		 */
    helpText?: string;
    /**	Gets the validity state object	 */
    validity?: boolean;
    validationMessage?: string;
}
type CheckboxProp =
    & SlCheckboxProp
    & Sizeable
    & Childrenable;
type CopyButtonProp =
    & {
        value: string;
    }
    & Childrenable
    & Sizeable;

type DetailsProp =
    & {
        /**Indicates whether or not the details is open. You can toggle this attribute to show and hide the details, or you can use the show() and hide() methods and this attribute will reflect the details’ open state.		boolean */
        open?: false;
        /**The summary to show in the header. If you need to display HTML, use the summary slot instead.		 */
        summary?: string;
        /**Disables the details so it can’t be toggled.		false*/
        disabled?: boolean;
    }
    & Sizeable
    & Childrenable;
type DialogProp =
    & {
        /**	Exposes the internal modal utility that controls focus trapping. To temporarily disable focus trapping and allow third-party modals spawned from an active Shoelace modal, call modal.activateExternal() when the third-party modal opens. Upon closing, call modal.deactivateExternal() to restore Shoelace’s focus trapping.		-	new Modal(this) */
        modal?: unknown;
        /**	Indicates whether or not the dialog is open. You can toggle this attribute to show and hide the dialog, or you can use the show() and hide() methods and this attribute will reflect the dialog’s open state.		boolean */
        open?: boolean;
        /**	The dialog’s label as displayed in the header. You should always include a relevant label even when using no-header, as it is required for proper accessibility. If you need to display HTML, use the label slot instead.		 */
        label?: string;
        /**Disables the header. This will also remove the default close button, so please ensure you provide an easy, accessible way for users to dismiss the dialog.		boolean	false */
        noHeader?: boolean;
        // no-header
    }
    & Childrenable
    & Sizeable;
type DividerProp = {
    /**Draws the divider in a vertical orientation.		 */
    vertical?: boolean;
};
type IconButtonProp =
    & {
        /**The name of the icon to draw. Available names depend on the icon library being used.	 */
        name?: string;
        /**The name of a registered custom icon library.	 */
        library?: string;
        /**	An external URL of an SVG file. Be sure you trust the content you are including, as it will be executed as code and can result in XSS attacks.		string | undefined	- */
        src?: string;
        /**	When set, the underlying button will be rendered as an <a> with this href instead of a <button>.		string | undefined	- */
        href?: string;
        /**	Tells the browser where to open the link. Only used when href is set.		'_blank' | '_parent' | '_self' | '_top' | undefined	- */
        target?: "_blank" | "_parent" | "_self" | "_top";
        /**	Tells the browser to download the linked file as this filename. Only used when href is set.		string | undefined	- */
        download?: string;
        /**	A description that gets read by assistive devices. For optimal accessibility, you should always include a label that describes what the icon button does.		string	'' */
        label?: string;
        /**	Disables the button.		boolean	false */
        disabled?: boolean;
    }
    & Childrenable
    & Sizeable;
type DrawerProp =
    & {
        /** */
        modal?: unknown;
        /**Indicates whether or not the drawer is open. You can toggle this attribute to show and hide the drawer, or you can use the show() and hide() methods and this attribute will reflect the drawer’s open state.		 false */
        open?: boolean;
        /**	The drawer’s label as displayed in the header. You should always include a relevant label even when using no-header, as it is required for proper accessibility. If you need to display HTML, use the label slot instead.		 */
        label?: string;
        /**	The direction from which the drawer will open. default 'end'		 */
        placement?: "top" | "end" | "bottom" | "start";
        /** 	By default, the drawer slides out of its containing block (usually the viewport). To make the drawer slide out of its parent element, set this attribute and add position: relative to the parent. default false		 */
        contained?: boolean;
        /**no-header	Removes the header. This will also remove the default close button, so please ensure you provide an easy, accessible way for users to dismiss the drawer.		boolean */
        noHeader?: boolean;
    }
    & Childrenable
    & Sizeable;

type DropdownProp =
    & {
        /**	Indicates whether or not the dropdown is open. You can toggle this attribute to show and hide the dropdown, or you can use the show() and hide() methods and this attribute will reflect the dropdown’s open state.		default false */
        open?: boolean;
        /**	The preferred placement of the dropdown panel. Note that the actual placement may vary as needed to keep the panel inside of the viewport. default 'bottom-start' 		*/
        placement?:
            | "top"
            | "top-start"
            | "top-end"
            | "bottom"
            | "bottom-start"
            | "bottom-end"
            | "right"
            | "right-start"
            | "right-end"
            | "left"
            | "left-start"
            | "left-end";
        /**	Disables the dropdown so the panel will not open.		boolean	 */
        disabled?: boolean;
        /**	By default, the dropdown is closed when an item is selected. This attribute will keep it open instead. Useful for dropdowns that allow for multiple interactions.		boolean	false */
        stayOpenOnSelect?: boolean;
        // stay-open-on-select
        /**The dropdown will close when the user interacts outside of this element (e.g. clicking). Useful for composing other components that use a dropdown internally.		HTMLElement | undefined	- */
        containingElement?: unknown;
        /**	The distance in pixels from which to offset the panel away from its trigger.	 */
        distance?: number;
        /**The distance in pixels from which to offset the panel along its trigger.	 */
        skidding?: number;
        /**	Enable this option to prevent the panel from being clipped when the component is placed inside a container with overflow: auto|scroll. Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios.		boolean	false */
        hoist?: boolean;
        /**Syncs the popup width or height to that of the trigger element.		*/
        sync?: "width" | "height" | "both" | undefined;
    }
    & Childrenable
    & Sizeable;

type InputProp =
    & {
        /**	The type of input. Works the same as a native <input> element, but only a subset of types are supported. Defaults to text.		'date' | 'datetime-local' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'time' | 'url'	'text' */
        type?:
            | "date"
            | "datetime-local"
            | "email"
            | "number"
            | "password"
            | "search"
            | "tel"
            | "text"
            | "time"
            | "url";
        /**The name of the input, submitted as a name/value pair with form data.		string	'' */
        name?: string;
        /**	The current value of the input, submitted as a name/value pair with form data.		string	'' */
        value?: string;
        /**	The default value of the form control. Primarily used for resetting the form control.		string	'' */
        defaultValue?: string;

        /**	Draws a filled input.		boolean	false */
        filled?: boolean;
        /**Draws a pill-style input with rounded edges.		boolean	false */
        pill?: boolean;
        /**The input’s label. If you need to display HTML, use the label slot instead.		string	'' */
        label?: string;
        /**help-text	The input’s help text. If you need to display HTML, use the help-text slot instead.		string	'' */
        helpText?: string;

        /**	Adds a clear button when the input is not empty.		boolean	false */
        clearable?: boolean;
        /**	Disables the input.		boolean	false */
        disabled?: boolean;
        /**	Placeholder text to show as a hint when the input is empty.		string	'' */
        placeholder?: string;
        /**	Makes the input readonly.		boolean	false */
        readonly?: boolean;
        /**password-toggle	Adds a button to toggle the password’s visibility. Only applies to password types.		boolean	false */
        passwordToggle?: boolean;

        /**password-visible	Determines whether or not the password is currently visible. Only applies to password input types.		boolean	false */
        passwordVisible?: boolean;

        /**no-spin-buttons	Hides the browser’s built-in increment/decrement spin buttons for number inputs.		boolean	false */
        noSpinButtons?: boolean;

        /**	By default, form controls are associated with the nearest containing <form> element. This attribute allows you to place the form control outside of a form and associate it with the form that has this id. The form must be in the same document or shadow root for this to work. */
        form?: string;
        /**	Makes the input a required field.	 */
        required?: boolean;
        /**	A regular expression pattern to validate input against.		 */
        pattern?: string;
        /**	The minimum length of input that will be considered valid.	 */
        minlength?: number;
        /**The maximum length of input that will be considered valid. */
        maxlength?: number;
        /**	The input’s minimum value. Only applies to date and number input types.		 */
        min?: number | string;
        /**The input’s maximum value. Only applies to date and number input types. */
        max?: number | string;
        /**Specifies the granularity that the value must adhere to, or the special value any which means no stepping is implied, allowing any numeric value. Only applies to date and number input types. */
        step?: number | "any";
        /**Controls whether and how text input is automatically capitalized as it is entered by the user.		 */
        autocapitalize?:
            | "off"
            | "none"
            | "on"
            | "sentences"
            | "words"
            | "characters";
        /**	Indicates whether the browser’s autocorrect feature is on or off. */
        autocorrect?: "off" | "on";
        /**	Specifies what permission the browser has to provide assistance in filling out form field values. Refer to this page on MDN for available values.		 */
        autocomplete?: string;
        /**Indicates that the input should receive focus on page load.		 */
        autofocus?: boolean;
        /**	Used to customize the label or icon of the Enter key on virtual keyboards.		 */
        enterkeyhint?:
            | "enter"
            | "done"
            | "go"
            | "next"
            | "previous"
            | "search"
            | "send";
        /**Enables spell checking on the input.		boolean	true */
        spellcheck?: boolean;
        /**Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual keyboard on supportive devices.			- */
        inputmode?:
            | "none"
            | "text"
            | "decimal"
            | "numeric"
            | "tel"
            | "search"
            | "email"
            | "url";
        /**	Gets or sets the current value as a Date object. Returns null if the value can’t be converted. This will use the native <input type="{{type}}"> implementation and may result in an error.		-	- */
        valueAsDate?: boolean;
        /**	Gets or sets the current value as a number. Returns NaN if the value can’t be converted.		-	- */
        valueAsNumber?: boolean;
        /**	Gets the validity state object		-	- */
        validity?: boolean;
        /**	Gets the validation message		 */
        validationMessage?: string;
    }
    & Sizeable
    & Childrenable;

type MenuProp = Childrenable;
type MenuLabelProp = Childrenable;
type MenuItemProp =
    & {
        /**	The type of menu item to render. To use checked, this value must be set to checkbox. default normal */
        type?: "normal" | "checkbox";
        /**	Draws the item in a checked state.	 */
        checked?: boolean;
        /**A unique value to store in the menu item. This can be used as a way to identify menu items when selected.	 */
        value?: string;
        /**Draws the menu item in a loading state.		 */
        loading?: boolean;
        /**Draws the menu item in a disabled state, preventing selection.	 */
        disabled?: boolean;
    }
    & Childrenable
    & Sizeable;

type SelectProp =
    & {
        /**The name of the select, submitted as a name/value pair with form data.	 */
        name?: string;
        /**	The current value of the select, submitted as a name/value pair with form data. When multiple is enabled, the value attribute will be a space-delimited list of values based on the options selected, and the value property will be an array. For this reason, values must not contain spaces.	 */
        value?: string | string[];
        /**	The default value of the form control. Primarily used for resetting the form control. */
        defaultValue?: string | string[];
        /**	Placeholder text to show as a hint when the select is empty. */
        placeholder?: string;
        /**	Allows more than one option to be selected.		 */
        multiple?: boolean;
        /**max-options-visible	The maximum number of selected options to show when multiple is true. After the maximum, ”+n” will be shown to indicate the number of additional items that are selected. Set to 0 to remove the limit.		number	3 */
        maxOptionsVisible?: number;
        /**	Disables the select control.		boolean	false */
        disabled?: boolean;
        /**	Adds a clear button when the select is not empty.		boolean	false */
        clearable?: boolean;
        /**	Indicates whether or not the select is open. You can toggle this attribute to show and hide the menu, or you can use the show() and hide() methods and this attribute will reflect the select’s open state.		boolean	false */
        open?: boolean;
        /**	Enable this option to prevent the listbox from being clipped when the component is placed inside a container with overflow: auto|scroll. Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios.		boolean	false */
        hoist?: boolean;
        /**Draws a filled select.		boolean	false */
        filled?: boolean;
        /**	Draws a pill-style select with rounded edges.		boolean	false */
        pill?: boolean;
        /**	The select’s label. If you need to display HTML, use the label slot instead.		string	'' */
        label?: string;
        /**	The preferred placement of the select’s menu. Note that the actual placement may vary as needed to keep the listbox inside of the viewport.	 */
        placement?: "top" | "bottom";
        /**help-text	The select’s help text. If you need to display HTML, use the help-text slot instead.		string	'' */
        helpText?: string;
        /**	By default, form controls are associated with the nearest containing <form> element. This attribute allows you to place the form control outside of a form and associate it with the form that has this id. The form must be in the same document or shadow root for this to work.		string	'' */
        form?: string;
        /**	The select’s required attribute.		boolean	false */
        required?: boolean;
        /**	A function that customizes the tags to be rendered when multiple=true. The first argument is the option, the second is the current tag’s index. The function should return either a Lit TemplateResult or a string containing trusted HTML of the symbol to render at the specified value.		(option: SlOption, index: number) => TemplateResult | string | HTMLElement	- */
        getTag?: string;
        /**	Gets the validity state object		-	- */
        validity?: unknown;
        /**Gets the validation message		- */
        validationMessage?: string;
    }
    & Childrenable
    & Sizeable;
type OptionProp = {
    /**The option’s value. When selected, the containing form control will receive this value. The value must be unique from other options in the same group. Values may not contain spaces, as spaces are used as delimiters when listing multiple values.		string	'' */
    value?: string;
    /**	Draws the option in a disabled state, preventing selection.		boolean	false */
    disabled?: boolean;
} & Childrenable;

export interface SlPopupProp {
    /**	A reference to the internal popup container. Useful for animating and styling the popup with JavaScript.		 */
    popup?: HTMLElement;
    /**	The element the popup will be anchored to. If the anchor lives outside of the popup, you can provide the anchor element id, a DOM element reference, or a VirtualElement. If the anchor lives inside the popup, use the anchor slot instead.		Element | string | VirtualElement	- */
    anchor?: Element | string;
    /**	Activates the positioning logic and shows the popup. When this attribute is removed, the positioning logic is torn down and the popup will be hidden.	 boolean	 */
    active?: boolean;
    /**	The preferred placement of the popup. Note that the actual placement will vary as configured to keep the panel inside of the viewport.		'top' */
    placement?:
        | "top"
        | "top-start"
        | "top-end"
        | "bottom"
        | "bottom-start"
        | "bottom-end"
        | "right"
        | "right-start"
        | "right-end"
        | "left"
        | "left-start"
        | "left-end";
    /**Determines how the popup is positioned. The absolute strategy works well in most cases, but if overflow is clipped, using a fixed position strategy can often workaround it. default   'absolute' */
    strategy?: "absolute" | "fixed";
    /**The distance in pixels from which to offset the panel away from its anchor. */
    distance?: number;
    /**The distance in pixels from which to offset the panel along its anchor. */
    skidding?: number;
    /**	Attaches an arrow to the popup. The arrow’s size and color can be customized using the --arrow-size and --arrow-color custom properties. For additional customizations, you can also target the arrow using ::part(arrow) in your stylesheet.	default false */
    arrow?: boolean;
    /**The placement of the arrow. The default is anchor, which will align the arrow as close to the center of the anchor as possible, considering available space and arrow-padding. A value of start, end, or center will align the arrow to the start, end, or center of the popover instead.default 			'anchor' */
    arrowPlacement?: "start" | "end" | "center" | "anchor";
    // arrow-placement
    /**	The amount of padding between the arrow and the edges of the popup. If the popup has a border-radius, for example, this will prevent it from overflowing the corners.		number	10 */
    arrowPadding?: number;
    // arrow-padding false
    /**	When set, placement of the popup will flip to the opposite site to keep it in view. You can use flipFallbackPlacements to further configure how the fallback placement is determined.	 */
    flip?: boolean;
    /**If the preferred placement doesn’t fit, popup will be tested in these fallback placements until one fits. Must be a string of any number of placements separated by a space, e.g. “top bottom left”. If no placement fits, the flip fallback strategy will be used instead.		string	'' */
    flipFallbackPlacements?: string;
    // flip-fallback-placements
    /**When neither the preferred placement nor the fallback placements fit, this value will be used to determine whether the popup should be positioned using the best available fit based on available space or as it was initially preferred.'best-fit'		 */
    flipFallbackStrategy?: "best-fit" | "initial";
    // flip-fallback-strategy
    /**	The flip boundary describes clipping element(s) that overflow will be checked relative to when flipping. By default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can change the boundary by passing a reference to one or more elements to this property.		Element | Element[]	- */
    flipBoundary?: unknown | unknown[];
    /**flip-padding	The amount of padding, in pixels, to exceed before the flip behavior will occur.		number	0 */
    flipPadding?: number;
    /**	Moves the popup along the axis to keep it in view when clipped.	,false */
    shift?: boolean;
    /**	The shift boundary describes clipping element(s) that overflow will be checked relative to when shifting. By default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can change the boundary by passing a reference to one or more elements to this property.		Element | Element[]	- */
    shiftBoundary?: unknown[] | unknown | unknown[];
    /**shift-padding	The amount of padding, in pixels, to exceed before the shift behavior will occur.		number	0 */
    shiftPadding?: number;
    /**auto-size	When set, this will cause the popup to automatically resize itself to prevent it from overflowing.			- */
    autoSize?: "horizontal" | "vertical" | "both";
    /**	Syncs the popup’s width or height to that of the anchor element.		'width' | 'height' | 'both'	- */
    sync?: "width" | "height" | "both";
    /**	The auto-size boundary describes clipping element(s) that overflow will be checked relative to when resizing. By default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can change the boundary by passing a reference to one or more elements to this property.		Element | Element[]	- */

    autoSizeBoundary?: Element | Element[];
    /**auto-size-padding	The amount of padding, in pixels, to exceed before the auto-size behavior will occur.		number	0 */

    autoSizePadding?: number;

    /**hover-bridge	When a gap exists between the anchor and the popup element, this option will add a “hover bridge” that fills the gap using an invisible element. This makes listening for events such as mouseenter and mouseleave more sane because the pointer never technically leaves the element. The hover bridge will only be drawn when the popover is active.		boolean	false */
    hoverBridge?: boolean;
}

export interface SlProgressBarProp {
    /**The current progress as a percentage, 0 to 100.	 */
    value?: number;
    /**	When true, percentage is ignored, the label is hidden, and the progress bar is drawn in an indeterminate state.		 */
    indeterminate?: boolean;
    /**	A custom label for assistive devices.		 */
    label?: string;
}
type ProgressBarProp =
    | (SlProgressBarProp & Childrenable & Sizeable)
    | Partial<HTMLDivElement>;
type PopupProp =
    | (SlPopupProp & Childrenable & Sizeable)
    | Partial<HTMLDivElement>;

export interface SlProgressRing {
    /**	The current progress as a percentage, 0 to 100.	 */
    value?: number;
    /**	A custom label for assistive devices.	 */
    label?: string;
}
type ProgressRingProp =
    | (SlProgressRing & Childrenable & Sizeable)
    | Partial<HTMLDivElement>;
export interface SlQrCodeProp {
    /**The QR code’s value.		 */
    value?: string;
    /**	The label for assistive devices to announce. If unspecified, the value will be used instead.	 */
    label?: string;
    /**	The label for assistive devices to announce. If unspecified, the value will be used instead.	 */
    fill?: "black";
    /**	The background color. This can be any valid CSS color or transparent. It cannot be a CSS custom property.		string	'white' */
    background?: string | "white";
    /**The edge radius of each module. Must be between 0 and 0.5.		number	0 */
    radius?: number;
}
type QrCodeProp = SlQrCodeProp & Sizeable;

export interface SlRadioProp {
    /**The radio’s value. When selected, the radio group will receive this value.		 */
    value?: string;
    /**Disables the radio. */
    disabled?: boolean;
}

export interface SlRadioButtonProp {
    /**The radio’s value. When selected, the radio group will receive this value.	 */
    value?: string;
    /**	Disables the radio button. */
    disabled?: boolean;

    /**Draws a pill-style radio button with rounded edges.		boolean	false */
    pill?: boolean;
}
export interface SlRadioGroupProp {
    /**The radio group’s label. Required for proper accessibility. If you need to display HTML, use the label slot instead. */
    label?: string;
    /**help-text	The radio groups’s help text. If you need to display HTML, use the help-text slot instead.		string	'' */
    helpText?: string;
    /**The name of the radio group, submitted as a name/value pair with form data.	 */
    name?: string;
    /**	The current value of the radio group, submitted as a name/value pair with form data.		string	'' */
    value?: string;
    /**	By default, form controls are associated with the nearest containing <form> element. This attribute allows you to place the form control outside of a form and associate it with the form that has this id. The form must be in the same document or shadow root for this to work.		 */
    form?: string;
    /**	Ensures a child radio is checked before allowing the containing form to submit.	 */
    required?: boolean;
    /**Gets the validity state object		-	- */
    validity?: unknown;
    /**	Gets the validation message		-	- */
    validationMessage?: unknown;
}

export type RadioProp = SlRadioProp & Childrenable & Sizeable;
export type RadioButtonProp = SlRadioButtonProp & Childrenable & Sizeable;
export type RadioGroupProp = SlRadioGroupProp & Childrenable & Sizeable;
export interface SlRangeProp {
    /**The name of the range, submitted as a name/value pair with form data.	 */
    name?: string;
    /**	The current value of the range, submitted as a name/value pair with form data.		 */
    value?: number;
    /**	The range’s label. If you need to display HTML, use the label slot instead.	 */
    label?: string;
    /**help-text	The range’s help text. If you need to display HTML, use the help-text slot instead.		string	'' */
    helpText?: string;
    /**	Disables the range.		 */
    disabled?: boolean;
    /**	The minimum acceptable value of the range.		 */
    min?: number;
    /**	The maximum acceptable value of the range.		 */
    max?: number;
    /**	The interval at which the range will increase and decrease.		 */
    step?: number;
    /**The preferred placement of the range’s tooltip.	top */
    tooltip?: "top" | "bottom" | "none";
    /**	A function used to format the tooltip’s value. The range’s value is passed as the first and only argument. The function should return a string to display in the tooltip. 	(value: number) => string	- */
    tooltipFormatter?: (value: number) => string;
    /**By default, form controls are associated with the nearest containing <form> element. This attribute allows you to place the form control outside of a form and associate it with the form that has this id. The form must be in the same document or shadow root for this to work.	 */
    form?: string;
    /**	The default value of the form control. Primarily used for resetting the form control.	 */
    defaultValue?: number;
    /**Gets the validity state object		-	- */
    validity?: unknown;
    /**	Gets the validation message		-	- */
    validationMessage?: unknown;
}
export type RangeProp =
    | (SlRangeProp & Childrenable & Sizeable)
    | Partial<HTMLDivElement>;

export interface SlRatingProp {
    /**A label that describes the rating to assistive devices. */
    label?: string;
    /**	The current rating.	 */
    value?: number;
    /**The highest rating to show.		 */
    max?: number;
    /**	The precision at which the rating will increase and decrease. For example, to allow half-star ratings, set this attribute to 0.5.		 */
    precision?: number;
    /**	Makes the rating readonly.	 */
    readonly?: boolean;
    /**	Disables the rating.		 */
    disabled?: boolean;
    /**	A function that customizes the symbol to be rendered. The first and only argument is the rating’s current value. The function should return a string containing trusted HTML of the symbol to render at the specified value. Works well with <sl-icon> elements. */
    getSymbol?: (value: number) => string;
}
export type RatingProp =
    | (SlRatingProp & Childrenable & Sizeable)
    | Partial<HTMLDivElement>;
export interface SlSkeletonProp {
    /**	Determines which effect the skeleton will use.	 */
    effect?: "pulse" | "sheen" | "none";
}

export type SkeletonProp =
    | (SlSkeletonProp & Childrenable & Sizeable)
    | HTMLDivElement;

export interface SlSpinnerProp {
}

export type SpinnerProp =
    | (SlSpinnerProp & Childrenable & Sizeable)
    | Partial<HTMLDivElement>;

export interface SlSplitPanelProp {
    /**The current position of the divider from the primary panel’s edge as a percentage 0–100. Defaults to 50% of the container’s initial size.	 */
    position?: number;
    /**position-in-pixels	The current position of the divider from the primary panel’s edge in pixels.		number	- */
    positionInPixels?: number;
    /**Draws the split panel in a vertical orientation with the start and end panels stacked. */
    vertical?: boolean;
    /**	Disables resizing. Note that the position may still change as a result of resizing the host element.		boolean	false */
    disabled?: boolean;
    /**	If no primary panel is designated, both panels will resize proportionally when the host element is resized. If a primary panel is designated, it will maintain its size and the other panel will grow or shrink as needed when the host element is resized.	 */
    primary?: "start" | "end" | undefined;
    /**One or more space-separated values at which the divider should snap. Values can be in pixels or percentages, e.g. "100px 50%". */
    snap?: string;
    /**snap-threshold	How close the divider must be to a snap point until snapping occurs.		number	12 */
    snapThreshold?: number;
}

export type SplitPanelProp =
    | SlSplitPanelProp & Childrenable & Sizeable
    | Partial<HTMLDivElement>;
export interface SlSwitchProp {
    /**The name of the switch, submitted as a name/value pair with form data.	 */
    name?: string;
    /**	The current value of the switch, submitted as a name/value pair with form data.	 */
    value?: string;
    /**Disables the switch.	 */
    disabled?: boolean;
    /**Draws the switch in a checked state.		 */
    checked?: boolean;
    /**	The default value of the form control. Primarily used for resetting the form control.	 */
    defaultChecked?: boolean;
    /**By default, form controls are associated with the nearest containing <form> element. This attribute allows you to place the form control outside of a form and associate it with the form that has this id. The form must be in the same document or shadow root for this to work. */
    form?: string;
    /**	Makes the switch a required field.		 */
    required?: boolean;
    /**help-text	The switch’s help text. If you need to display HTML, use the help-text slot instead.		string	'' */
    helpText?: string;
    /**	Gets the validity state object		-	- */
    validity?: unknown;
    /**	Gets the validation message		-	- */
    validationMessage?: unknown;
}

export interface SlTabProp {
    /**	The name of the tab panel this tab is associated with. The panel must be located in the same tab group.		 */
    panel?: string;
    /**Draws the tab in an active state. */
    active?: boolean;
    /**	Makes the tab closable and shows a close button.	 */
    closable?: boolean;
    /**Disables the tab and prevents selection.		 */
    disabled?: boolean;
}
export type TabProp =
    | (SlTabProp & Childrenable & Sizeable)
    | Partial<HTMLDivElement>;

export type SwitchProp =
    | (SlSwitchProp & Sizeable & Childrenable)
    | HTMLDivElement;

export interface SlTabGroupProp {
    /**	The placement of the tabs.  default top*/
    placement?: "top" | "bottom" | "start" | "end";
    /**When set to auto, navigating tabs with the arrow keys will instantly show the corresponding tab panel. When set to manual, the tab will receive focus but will not show until the user presses spacebar or enter.	 */
    activation?: "auto" | "manual";
    /**no-scroll-controls	Disables the scroll arrows that appear when tabs overflow.		boolean	false */
    noScrollControls?: boolean;
}
export type TabGroupProp =
    | (SlTabGroupProp & Childrenable & Sizeable)
    | HTMLDivElement;
export interface SlTabPanelProp {
    /**The tab panel’s name.	 */
    name?: string;
    /**	When true, the tab panel will be shown.	 */
    active?: boolean;
}
export type TabPanelProp =
    | (SlTabPanelProp & Childrenable & Sizeable)
    | HTMLDivElement;
export interface SlTagProp {
    /**	The tag’s theme variant. 'neutral' */
    variant?: "primary" | "success" | "neutral" | "warning" | "danger" | "text";
    /**	Draws a pill-style tag with rounded edges.		boolean	false */
    pill?: boolean;
    /**	Makes the tag removable and shows a remove button.		boolean	false */
    removable?: boolean;
}
export interface SlTextAreaProp {
    /**The name of the textarea, submitted as a name/value pair with form data. */
    name?: string;
    /**	The current value of the textarea, submitted as a name/value pair with form data. */
    value?: string;
    /**	The textarea’s size.	default  medium */
    size?: "small" | "medium" | "large";
    /**Draws a filled textarea.		boolean	false */
    filled?: boolean;
    /**	The textarea’s label. If you need to display HTML, use the label slot instead.		string	'' */
    label?: string;
    /**help-text	The textarea’s help text. If you need to display HTML, use the help-text slot instead.		string	'' */
    helpText?: string;
    /**	Placeholder text to show as a hint when the input is empty.		string	'' */
    placeholder?: string;
    /**	The number of rows to display by default.		number	4 */
    rows?: string;
    /**	Controls how the textarea can be resized.		'none' | 'vertical' | 'auto'	'vertical' */
    resize?: string;
    /**Disables the textarea.		boolean	false */
    disabled?: boolean;
    /**	Makes the textarea readonly.		boolean	false */
    readonly?: boolean;
    /**	By default, form controls are associated with the nearest containing <form> element. This attribute allows you to place the form control outside of a form and associate it with the form that has this id. The form must be in the same document or shadow root for this to work.		string	'' */
    form?: string;
    /**	Makes the textarea a required field.		boolean	false */
    required?: string;
    /**	The minimum length of input that will be considered valid.		number	- */
    minlength?: number;
    /**	The maximum length of input that will be considered valid.		number	- */
    maxlength?: number;
    /**Controls whether and how text input is automatically capitalized as it is entered by the user.		'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters'	- */
    autocapitalize?:
        | "off"
        | "none"
        | "on"
        | "sentences"
        | "words"
        | "characters";
    /**Indicates whether the browser’s autocorrect feature is on or off.		string	- */
    autocorrect?: string;
    /**	Specifies what permission the browser has to provide assistance in filling out form field values. Refer to this page on MDN for available values.		string	- */
    autocomplete?: string;
    /**	Indicates that the input should receive focus on page load.		boolean	 */
    autofocus?: boolean;
    /**Used to customize the label or icon of the Enter key on virtual keyboards.		'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send'	- */
    enterkeyhint?:
        | "enter"
        | "done"
        | "go"
        | "next"
        | "previous"
        | "search"
        | "send";
    /**	Enables spell checking on the textarea.		boolean	true */
    spellcheck?: boolean;
    /**Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual keyboard on supportive devices.		'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url'	- */
    inputmode?:
        | "none"
        | "text"
        | "decimal"
        | "numeric"
        | "tel"
        | "search"
        | "email"
        | "url";
    /**The default value of the form control. Primarily used for resetting the form control.	 */
    defaultValue?: string;
    /**	Gets the validity state object		-	- */
    validity?: unknown;
    /**	Gets the validation message		-	- */
    validationMessage?: unknown;
}
export type TextAreaProp =
    | (SlTextAreaProp & Childrenable & Sizeable)
    | Partial<HTMLTextAreaElement>;

export type TagProp =
    | (SlTagProp & Sizeable & Childrenable)
    | Partial<HTMLDivElement>;

export interface SlTooltipProp {
    /**The tooltip’s content. If you need to display HTML, use the content slot instead.	 */
    content?: string;
    /**	The preferred placement of the tooltip. Note that the actual placement may vary as needed to keep the tooltip inside of the viewport.		 */
    placement?:
        | "top"
        | "top-start"
        | "top-end"
        | "right"
        | "right-start"
        | "right-end"
        | "bottom"
        | "bottom-start"
        | "bottom-end"
        | "left"
        | "left-start"
        | "left-end";
    /**	Disables the tooltip so it won’t show when triggered. */
    disabled?: boolean;
    /**The distance in pixels from which to offset the tooltip away from its target. */
    distance?: number;
    /**	Indicates whether or not the tooltip is open. You can use this in lieu of the show/hide methods.		 */
    open?: boolean;
    /**The distance in pixels from which to offset the tooltip along its target.	 */
    skidding?: number;
    /**	Controls how the tooltip is activated. Possible options include click, hover, focus, and manual. Multiple options can be passed by separating them with a space. When manual is used, the tooltip must be activated programmatically.		 */
    trigger?: "hover" | "focus";
    /**Enable this option to prevent the tooltip from being clipped when the component is placed inside a container with overflow: auto|hidden|scroll. Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios.		boolean	false */
    hoist?: boolean;
}

export type TooltipProp =
    | (SlTooltipProp & Childrenable & Sizeable)
    | Partial<HTMLDivElement>;

export interface SlTreeProp {
    /**The selection behavior of the tree. Single selection allows only one node to be selected at a time. Multiple displays checkboxes and allows more than one node to be selected. Leaf allows only leaf nodes to be selected.,default single */
    selection?: "single" | "multiple" | "leaf";
}

export type TreeProp = (SlTreeProp & Childrenable & Sizeable) | HTMLDivElement;

export interface SlTreeItemProp {
    /**	Expands the tree item.		 */
    expanded?: boolean;
    /**Draws the tree item in a selected state.		false */
    selected?: boolean;
    /**Disables the tree item. */
    disabled?: boolean;
    /**	Enables lazy loading behavior.	default false	 */
    lazy?: boolean;
}
export type TreeItemProp =
    | (SlTreeItemProp & Childrenable & Sizeable)
    | HTMLDivElement;

declare global {
    namespace preact.JSX {
        export interface IntrinsicElements {
            /** s */
            "sl-button": HTMLButtonElement | ButtonProp;
            "sl-alert": HTMLDivElement | AlertProp;
            "sl-icon": HTMLDivElement | IconProp;
            "sl-animation": HTMLDivElement | AnimateProp;
            "sl-avatar": HTMLDivElement | AvatarProp;
            "sl-badge": HTMLDivElement | BadgeProp;
            "sl-breadcrumb": HTMLDivElement | BreadcrumbProp;
            "sl-breadcrumb-item": HTMLDivElement | BreadcrumbItemProp;
            "sl-button-group": HTMLDivElement | ButtonGroupProp;
            "sl-card": CardProp;
            "sl-carousel": HTMLDivElement | CarouselProp;
            "sl-carousel-item": HTMLDivElement | Childrenable;
            "sl-checkbox": HTMLDivElement | CheckboxProp;
            "sl-copy-button": HTMLButtonElement | CopyButtonProp;
            "sl-details": HTMLDivElement | DetailsProp;
            "sl-dialog": HTMLDialogElement | DialogProp;
            "sl-divider": HTMLDivElement | DividerProp;
            "sl-drawer": HTMLDivElement | DrawerProp;
            "sl-dropdown": HTMLDivElement | DropdownProp;
            "sl-icon-button": HTMLButtonElement | IconButtonProp;
            "sl-input": HTMLInputElement | InputProp;
            "sl-menu": HTMLDivElement | MenuProp;
            "sl-menu-item": HTMLDivElement | MenuItemProp;
            "sl-menu-label": HTMLDivElement | MenuLabelProp;
            "sl-select": HTMLSelectElement | SelectProp;
            "sl-option": HTMLOptionElement | OptionProp;
            "sl-popup": PopupProp;
            "sl-progress-bar": ProgressBarProp;
            "sl-progress-ring": ProgressRingProp;
            "sl-qr-code": QrCodeProp;
            "sl-radio": RadioProp;
            "sl-radio-button": RadioButtonProp;
            "sl-radio-group": RadioGroupProp;
            "sl-range": RangeProp;
            "sl-rating": RatingProp;
            "sl-skeleton": SkeletonProp;
            "sl-spinner": SpinnerProp;
            "sl-split-panel": SplitPanelProp;
            "sl-switch": SwitchProp;
            "sl-tab": TabProp;
            "sl-tab-group": TabGroupProp;
            "sl-tab-panel": TabPanelProp;
            "sl-tag": TagProp;
            "sl-textarea": TextAreaProp;
            "sl-tooltip": TooltipProp;
            'sl-tree':TreeProp
            'sl-tree-item':TreeItemProp
        }
    }
}
export type {
    AlertProp,
    AnimateProp,
    AvatarProp,
    BadgeProp,
    BreadcrumbItemProp,
    BreadcrumbProp,
    ButtonGroupProp,
    ButtonProp,
    CardProp,
    CarouselProp,
    CheckboxProp,
    Childrenable,
    CopyButtonProp,
    DetailsProp,
    DialogProp,
    DividerProp,
    DrawerProp,
    DropdownProp,
    IconButtonProp,
    IconProp,
    InputProp,
    MenuItemProp,
    MenuLabelProp,
    MenuProp,
    OptionProp,
    PopupProp,
    ProgressBarProp,
    QrCodeProp,
    SelectProp,
};

import type { BreadcrumbProp ,BreadcrumbItemProp} from "../global.d.ts";
export function SlBreadCrumb(prop: BreadcrumbProp) {
  const { separator, children, ...ps } = prop;

  return (
    <sl-breadcrumb {...ps}>
      {separator ? separator : null}
      {children}
    </sl-breadcrumb>
  );
}
export function SlBreadCrumbItem(prop:BreadcrumbItemProp) {
  const {  children, ...ps } = prop;

  return <sl-breadcrumb-item {...ps}>{children}</sl-breadcrumb-item>
}

{
  /* <sl-breadcrumb>
  <sl-breadcrumb-item>Catalog</sl-breadcrumb-item>
  <sl-breadcrumb-item>Clothing</sl-breadcrumb-item>
  <sl-breadcrumb-item>Women's</sl-breadcrumb-item>
  <sl-breadcrumb-item>Shirts &amp; Tops</sl-breadcrumb-item>
</sl-breadcrumb> */
}

import React, { forwardRef } from "react";
import BaseLink, { BaseLinkProps } from "./BaseLink";

const CustomLink = forwardRef<HTMLAnchorElement, BaseLinkProps>(
    ({ children, href }, ref) => {
        return (
            <BaseLink
                href={href}
                ref={ref}
            >
                {children}
            </BaseLink>
        );
    }
);

CustomLink.displayName = "CustomLink";
export default CustomLink;

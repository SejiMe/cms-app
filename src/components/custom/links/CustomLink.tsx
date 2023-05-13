import React, { forwardRef } from "react";
import BaseLink, { BaseLinkProps } from "./BaseLink";

const CustomLink = forwardRef<HTMLAnchorElement, BaseLinkProps>(
    ({ children, href, nextLinkProps, ...rest }, ref) => {
        return (
            <BaseLink
                {...nextLinkProps}
                {...rest}
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

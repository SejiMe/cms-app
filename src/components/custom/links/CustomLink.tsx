import React, { forwardRef } from "react";
import BaseLink, { type BaseLinkProps } from "./BaseLink";
import { clsxm } from "@/utils/merge";

const CustomLink = forwardRef<HTMLAnchorElement, BaseLinkProps>(
    ({ children, href, nextLinkProps, className, ...rest }, ref) => {
        return (
            <BaseLink
                className={clsxm("", className)}
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

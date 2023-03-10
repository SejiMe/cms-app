import Link, { LinkProps } from "next/link";
import React from "react";

import { clsxm } from "@utils/merge";

export type BaseLinkProps = {
    href: string;
    children: React.ReactNode;
    openNewTab?: boolean;
    className?: string;
    nextLinkProps?: Omit<LinkProps, "href">;
} & React.ComponentPropsWithRef<"a">;

const BaseLink = React.forwardRef<HTMLAnchorElement, BaseLinkProps>(
    (
        {
            children,
            href,
            openNewTab,
            className,
            nextLinkProps,
            ...rest
        },
        ref
    ) => {
        // return false if url href donest starts either / or # 
        const isNewTab = openNewTab !== undefined? openNewTab: href && !href.startsWith("/") && !href.startsWith("#");
        console.log(isNewTab);
        if (!isNewTab) {
            return (
                <Link
                    href={href}
                    {...nextLinkProps}
                >
                    <a
                        ref={ref}
                        {...rest}
                        className={className}
                    >
                        {children}
                    </a>
                </Link>
            );
        }

        return (
            <a
                ref={ref}
                target='_blank'
                rel='noopener noreferrer'
                href={href}
                {...rest}
                className={clsxm("cursor-newtab", className)}
            >
                {children}
            </a>
        );
    }
);

BaseLink.displayName = "BaseLink";
export default BaseLink;

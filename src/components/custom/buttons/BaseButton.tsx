import { clsxm } from "@/utils/merge";
import React from "react";

type ButtonProps = {
    children?: React.ReactNode;
    className?: string;
} & React.ComponentPropsWithRef<"button">;

const BaseButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, type, className, ...rest }, ref) => {
        return (
            <button
                ref={ref}
                type={type}
                {...rest}
                className={clsxm("", className)}
            >
                {children}
            </button>
        );
    }
);
BaseButton.displayName = "BaseButton";
export default BaseButton;

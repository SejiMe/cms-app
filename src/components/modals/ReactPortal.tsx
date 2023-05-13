import React, { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

//Create Wrapper  generator
const createWrapperAppendToBody = (wrapperID: string) => {
    /* Checking if the document object exists. If it does not exist, it returns null. */
    if (!document) return null;
    const wrapperElement = document.createElement("div");
    wrapperElement.setAttribute("id", wrapperID);
    document.body.appendChild(wrapperElement);
    return wrapperElement;
};

type ReactPortalProps = {
    children: React.ReactNode;
    wrapperID: string;
};

const ReactPortal = ({ children, wrapperID }: ReactPortalProps) => {
    const [wrapperElement, setWrapperElement] =
        useState<HTMLElement>();

    useLayoutEffect(() => {
        let element = document.getElementById(wrapperID);
        let systemCreated = false;
        if (!element) {
            systemCreated = true;
            element = createWrapperAppendToBody(wrapperID);
        }
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        setWrapperElement(element!);
        return () => {
            if (systemCreated && element?.parentNode) {
                element.parentNode.removeChild(element);
            }
        };
    }, [wrapperID]);
    if (!wrapperElement) return null;
    return createPortal(children, wrapperElement);
};

export default ReactPortal;

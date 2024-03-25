import { useState, useLayoutEffect, ReactNode } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
    children: ReactNode;
    wrapperId?: string;
}

function createWrapperAndAppendToBody(wrapperId: string) {
    const wrapperElement = document.createElement('div');
    wrapperElement.setAttribute('id', wrapperId);
    wrapperElement.setAttribute('class', 'modal');
    document.body.append(wrapperElement);

    return wrapperElement;
}

function Portal({children, wrapperId = 'portal-wrapper'}: PortalProps) {
    const [wrapperElement, setWrapperElement] = useState< HTMLElement | null>(null);

    useLayoutEffect(() => {
        let element = document.getElementById(wrapperId);

        if(!element){
            element = createWrapperAndAppendToBody(wrapperId);
        }
    }, [wrapperId])

    return createPortal(children, wrapperElement);
}
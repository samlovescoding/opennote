import { useState } from "react";

export const useDisclosure = (defaultState = false, rememberKey = null) => {
    const lastRemembered = localStorage.getItem(rememberKey) === "1";
    const [state, setState] = useState(
        rememberKey ? lastRemembered : defaultState
    );
    const isOpen = state === true;
    const isClosed = state === false;
    const open = (e) => {
        e?.preventDefault();
        setState(true);
        if (rememberKey) {
            localStorage.setItem(rememberKey, "1");
        }
    };
    const close = (e) => {
        e?.preventDefault();
        setState(false);
        if (rememberKey) {
            localStorage.setItem(rememberKey, "0");
        }
    };
    const toggle = (e) => {
        e?.preventDefault();
        setState(!state);
        if (rememberKey) {
            localStorage.setItem(rememberKey, !state ? "1" : "0");
        }
    };

    return {
        isOpen,
        isClosed,
        open,
        close,
        toggle,
    };
};

export const getDisclosureDefault = (
    defaultState = false,
    _rememberKey = null
) => {
    return {
        isOpen: !!defaultState,
        isClosed: !defaultState,
        open: () => {},
        close: () => {},
        toggle: () => {},
    };
};

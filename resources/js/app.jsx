import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import "../css/app.css";

createInertiaApp({
    resolve: async (name) => {
        const pages = import.meta.glob("../../pages/**/*.[j|t]sx");

        const typedPage = `../../pages/${name}.tsx`;
        const javascriptPage = `../../pages/${name}.jsx`;
        const page = pages[typedPage] || pages[javascriptPage];
        return page();
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});

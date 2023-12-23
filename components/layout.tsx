import { Head } from "@inertiajs/react";
import Header from "components/header";
import Sidebar from "components/sidebar";
import { ThemeProvider } from "components/theme";

const Layout = ({
    children,
    title,
    containerCX = "container-fluid",
}: LayoutProps) => {
    return (
        <ThemeProvider>
            <Head>
                <title>{title}</title>
            </Head>
            <div className="nk-app-root">
                <div className="nk-main">
                    <Sidebar />
                    <div className="nk-wrap">
                        <Header />
                        <div className="nk-content">
                            <div className={cx(containerCX)}>
                                <div className="nk-content-inner">
                                    <div className="nk-content-body">
                                        {children}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
};

interface LayoutProps {
    children?: React.ReactNode;
    title: string;
    containerCX?: CXPropsType;
}

export default Layout;

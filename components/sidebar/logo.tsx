function SidebarLogo() {
    return (
        <div className="nk-sidebar-brand">
            <a href="/" className="logo-link nk-sidebar-logo">
                <img
                    className="logo-light logo-img"
                    src="/assets/images/logo.png"
                    srcSet="/assets/images/logo2x.png 2x"
                    alt="logo"
                />
                <img
                    className="logo-dark logo-img"
                    src="/assets/images/logo-dark.png"
                    srcSet="/assets/images/logo-dark2x.png 2x"
                    alt="logo-dark"
                />
                <img
                    className="logo-small logo-img logo-img-small"
                    src="/assets/images/logo-small.png"
                    srcSet="/assets/images/logo-small2x.png 2x"
                    alt="logo-small"
                />
            </a>
        </div>
    );
}

export default SidebarLogo;

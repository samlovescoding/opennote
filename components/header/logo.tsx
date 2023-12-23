export default function HeaderLogo() {
    return (
        <div className="nk-header-brand d-xl-none">
            <a href="/" className="logo-link">
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
            </a>
        </div>
    );
}

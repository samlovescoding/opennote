import HeaderToggle from "components/header/toggle";
import HeaderLogo from "components/header/logo";
import HeaderSearch from "components/header/search";
import HeaderNotifications from "components/header/notifications";
import HeaderUser from "components/header/user";

const Header = () => {
    return (
        <div className="nk-header nk-header-fixed is-light">
            <div className="container-fluid">
                <div className="nk-header-wrap">
                    <HeaderToggle />
                    <HeaderLogo />
                    <HeaderSearch />

                    <div className="nk-header-tools">
                        <ul className="nk-quick-nav">
                            <HeaderNotifications />
                            <HeaderUser />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

import { useTheme } from "components/theme";

function HeaderToggle() {
    const sidebar = useTheme("sidebar");
    return (
        <div className="nk-menu-trigger d-xl-none ms-n1">
            <a
                href="#"
                className="nk-nav-toggle nk-quick-nav-icon"
                data-target="sidebarMenu"
                onClick={sidebar.toggle}
            >
                <em className="icon ni ni-menu" />
            </a>
        </div>
    );
}

export default HeaderToggle;

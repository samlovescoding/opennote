import SidebarLogo from "components/sidebar/logo";
import SidebarHeading from "components/sidebar/heading";
import SidebarLink from "components/sidebar/link";
import SidebarDropdown from "components/sidebar/dropdown";
import { useTheme } from "components/theme";
import sidebarData from "components/sidebar/data";

const Sidebar = () => {
    const { isOpen, isClosed, toggle } = useTheme("sidebar");
    return (
        <div
            className={cx("nk-sidebar nk-sidebar-fixed is-light", {
                "is-compact": isClosed,
                "nk-sidebar-active": isOpen,
            })}
            data-content="sidebarMenu"
        >
            <div className="nk-sidebar-element nk-sidebar-head">
                <SidebarLogo />
                <div className="nk-menu-trigger me-n2">
                    <a
                        href="#"
                        className="nk-nav-toggle nk-quick-nav-icon d-xl-none"
                        data-target="sidebarMenu"
                        onClick={toggle}
                    >
                        <em className="icon ni ni-arrow-left" />
                    </a>
                    <a
                        href="#"
                        className="nk-nav-compact nk-quick-nav-icon d-none d-xl-inline-flex"
                        data-target="sidebarMenu"
                        onClick={toggle}
                    >
                        <em className="icon ni ni-menu" />
                    </a>
                </div>
            </div>
            <div className="nk-sidebar-element">
                <div className="nk-sidebar-content">
                    <div className="nk-sidebar-menu nk-sidebar-menu-scrollable">
                        <ul className="nk-menu">
                            <SidebarItems />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SidebarItems = () => {
    return sidebarData.map((sidebarItem) => {
        if (sidebarItem.type === "heading") {
            return (
                <SidebarHeading key={sidebarItem.id}>
                    {sidebarItem.children}
                </SidebarHeading>
            );
        }
        if (sidebarItem.type === "dropdown") {
            return (
                <SidebarDropdown
                    key={sidebarItem.id}
                    id={sidebarItem.id}
                    icon={sidebarItem.icon}
                    title={sidebarItem.title}
                    links={sidebarItem.links}
                />
            );
        }
        return (
            <SidebarLink
                key={sidebarItem.id}
                href={sidebarItem.href}
                badge={sidebarItem.badge}
                icon={sidebarItem.icon}
            >
                {sidebarItem.children}
            </SidebarLink>
        );
    });
};

export default Sidebar;

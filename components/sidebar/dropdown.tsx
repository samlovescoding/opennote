import { useDisclosure } from "helpers/disclosure";
import SidebarLink, { SidebarLinkProps } from "components/sidebar/link";
import { usePage } from "@inertiajs/react";

function SidebarDropdown({ id, title, icon, links = [] }) {
    const { url } = usePage();
    const isActive = links.some((link) => {
        return url?.split("?")[0] === link.href;
    });
    const { isOpen, toggle } = useDisclosure(isActive);

    return (
        <li
            className={cx("nk-menu-item has-sub", {
                active: isActive || isOpen,
            })}
        >
            <a
                href="#"
                className="nk-menu-link nk-menu-toggle"
                onClick={toggle}
            >
                {icon && (
                    <span className="nk-menu-icon">
                        <em className={`icon ni ni-${icon}`} />
                    </span>
                )}
                <span className="nk-menu-text">{title}</span>
            </a>
            <ul className="nk-menu-sub">
                {links.map((link, index) => (
                    <SidebarLink
                        key={`sidebar-dropdown-link-${index}-${
                            link.id || "id"
                        }`}
                        {...link}
                    />
                ))}
            </ul>
        </li>
    );
}

export interface SidebarDropdownProps {
    title: string;
    icon?: string;
    links?: SidebarLinkProps[];
    id?: string;
}

export default SidebarDropdown;

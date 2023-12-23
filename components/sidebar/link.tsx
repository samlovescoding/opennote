import { Link, usePage } from "@inertiajs/react";
import { IconType } from "components/icon";

function SidebarLink({ href, children, icon, badge }: SidebarLinkProps) {
    const { url } = usePage();
    const isActive = url?.split("?")[0] === href;
    return (
        <li className={cx("nk-menu-item", { active: isActive })}>
            <Link href={href} className="nk-menu-link">
                {icon && (
                    <span className="nk-menu-icon">
                        <em className={`icon ni ni-${icon}`} />
                    </span>
                )}
                <span className="nk-menu-text">{children}</span>
                {badge && (
                    <span className="nk-menu-badge">{badge.toUpperCase()}</span>
                )}
            </Link>
        </li>
    );
}

export interface SidebarLinkProps {
    href: string;
    children: React.ReactNode;
    icon?: IconType;
    badge?: string;
}

export default SidebarLink;

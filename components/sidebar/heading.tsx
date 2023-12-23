function SidebarHeading({ children }: SidebarHeadingProps) {
    return (
        <li className="nk-menu-heading">
            <h6 className="overline-title text-primary-alt">{children}</h6>
        </li>
    );
}

interface SidebarHeadingProps {
    children?: React.ReactNode;
}

export default SidebarHeading;

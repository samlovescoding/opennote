import { SidebarDropdownProps } from "components/sidebar/dropdown";
import { SidebarLinkProps } from "components/sidebar/link";

const sidebarData: Sidebar = [
    {
        id: "heading-personal-space",
        type: "heading",
        children: "Personal Space",
    },
    {
        id: "link-home",
        type: "link",
        href: "/notes",
        children: "Notebook",
        icon: "note-add-fill",
    },
    {
        id: "link-calendar",
        type: "link",
        href: "/calendar",
        children: "Calendar",
        icon: "calender-date-fill",
    },
    // {
    //     id: "link-eisenhower-matrix",
    //     type: "link",
    //     href: "/eisenhower-matrix",
    //     children: "Eisenhower Matrix",
    //     icon: "grid-fill-c",
    // },
    {
        id: "link-projects",
        type: "link",
        href: "/projects",
        children: "Projects",
        icon: "layers",
    },
    {
        id: "link-stopwatch",
        type: "link",
        href: "/stopwatch",
        children: "Stopwatch",
        icon: "clock-fill",
    },
    {
        id: "link-habits",
        type: "link",
        href: "/habits",
        children: "Habits",
        icon: "heart",
    },
    {
        id: "link-settings",
        type: "link",
        href: "/settings",
        children: "Settings",
        icon: "setting",
    },
];

type Sidebar = SidebarItem[];
type SidebarItem = SidebarDropdown | SidebarLink | SidebarHeading;
interface SidebarHeading {
    id: string;
    children: string;
    type: "heading";
}
interface SidebarLink extends SidebarLinkProps {
    type: "link";
    id: string;
}
interface SidebarDropdown extends SidebarDropdownProps {
    type: "dropdown";
    id: string;
    links: SidebarLink[];
}

export default sidebarData;

import { useDisclosure } from "helpers/disclosure";
import HeaderNotification from "components/header/notifications/notification";

export default function HeaderNotifications() {
    const { isOpen, toggle } = useDisclosure(false, "header.notifications");
    return (
        <li className={cx("dropdown notification-dropdown", { show: isOpen })}>
            <a
                href="#"
                className="dropdown-toggle nk-quick-nav-icon"
                data-bs-toggle="dropdown"
                onClick={toggle}
            >
                <div className="icon-status icon-status-info">
                    <em className="icon ni ni-bell" />
                </div>
            </a>
            <div
                className={cx(
                    "dropdown-menu dropdown-menu-xl dropdown-menu-end dropdown-header-custom",
                    { show: isOpen }
                )}
            >
                <div className="dropdown-head">
                    <span className="sub-title nk-dropdown-title">
                        Notifications
                    </span>
                    <a href="#">Mark All as Read</a>
                </div>
                <div className="dropdown-body">
                    <div className="nk-notification">
                        <HeaderNotification
                            icon="curve-down-left"
                            color="warning"
                            time="2 hrs ago"
                        >
                            You have requested to <span>Widthdrawl</span>
                        </HeaderNotification>
                        <HeaderNotification
                            icon="curve-down-right"
                            color="success"
                        >
                            Your <span>Deposit Order</span> is placed
                        </HeaderNotification>
                        <HeaderNotification
                            icon="curve-down-left"
                            color="warning"
                        >
                            You have requested to <span>Widthdrawl</span>
                        </HeaderNotification>
                        <HeaderNotification icon="arrow-down" color="danger">
                            System error (500+) spiked
                        </HeaderNotification>
                        <HeaderNotification
                            icon="curve-down-right"
                            color="success"
                        >
                            Your <span>Deposit Order</span> is placed
                        </HeaderNotification>
                        <HeaderNotification>
                            Your <span>Deposit Order</span> is placed
                        </HeaderNotification>
                    </div>
                </div>
                <div className="dropdown-foot center">
                    <a href="#">View All</a>
                </div>
            </div>
        </li>
    );
}

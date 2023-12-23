import { Link, usePage } from "@inertiajs/react";
import { useDisclosure } from "helpers/disclosure";
import { IPageUser } from "helpers/page";

export default function HeaderUser() {
    const { isOpen, toggle } = useDisclosure(false, "header.user");
    const user = usePage().props.user as IPageUser;
    return (
        <li className="dropdown user-dropdown">
            <a
                href="#"
                className="dropdown-toggle me-n1"
                data-bs-toggle="dropdown"
                onClick={toggle}
            >
                <div className="user-toggle">
                    <div className="user-avatar sm">
                        <em className="icon ni ni-user-alt" />
                    </div>
                    <div className="user-info d-none d-xl-block">
                        <div
                            className={cx(
                                "user-status",
                                {
                                    "user-status-unverified":
                                        !user.email_verified_at,
                                },
                                {
                                    "user-status-verified":
                                        !!user.email_verified_at,
                                }
                            )}
                        >
                            {user.email_verified_at ? "Verified" : "Unverified"}
                        </div>
                        <div className="user-name dropdown-indicator">
                            {user.name}
                        </div>
                    </div>
                </div>
            </a>
            <div
                className={cx(
                    "dropdown-menu dropdown-menu-md dropdown-menu-end dropdown-header-custom",
                    { show: isOpen }
                )}
            >
                <div className="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
                    <div className="user-card">
                        <div className="user-avatar">
                            <em className="icon ni ni-user-alt" />
                        </div>
                        <div className="user-info">
                            <span className="lead-text">@{user.username}</span>
                            <span className="sub-text">{user.email}</span>
                        </div>
                    </div>
                </div>
                <div className="dropdown-inner">
                    <ul className="link-list">
                        <li>
                            <a href="/settings/profile">
                                <em className="icon ni ni-user-alt" />
                                <span>View Profile</span>
                            </a>
                        </li>
                        <li>
                            <a href="/settings/profile">
                                <em className="icon ni ni-setting-alt" />
                                <span>Account Setting</span>
                            </a>
                        </li>
                        <li>
                            <a href="/settings/activity">
                                <em className="icon ni ni-activity-alt" />
                                <span>Login Activity</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="dropdown-inner">
                    <ul className="link-list">
                        <li>
                            <a href="/logout">
                                <em className="icon ni ni-signout" />
                                <span>Sign out</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
    );
}

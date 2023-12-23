import Icon, { IconType } from "components/icon";
import { TypeColor } from "components/theme";
import { ReactNode } from "react";

export default function HeaderNotification({
    children,
    color = "primary",
    icon = "bell",
    time,
}: HeaderNotificationProps) {
    return (
        <div className="nk-notification-item dropdown-inner">
            {icon && (
                <div className="nk-notification-icon">
                    <Icon
                        type={icon}
                        className={cx(
                            "icon icon-circle",
                            color && `bg-${color}-dim`
                        )}
                    />
                </div>
            )}
            <div className="nk-notification-content">
                <div className="nk-notification-text">{children}</div>
                {time && <div className="nk-notification-time">{time}</div>}
            </div>
        </div>
    );
}

interface HeaderNotificationProps {
    children?: ReactNode;
    color?: TypeColor;
    icon?: IconType;
    time?: ReactNode;
}

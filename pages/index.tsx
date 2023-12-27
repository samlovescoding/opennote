import Icon, { IconType } from "components/icon";
import Layout from "components/layout";
import { useDisclosure } from "helpers/disclosure";

function HomePage() {
    return (
        <Layout title="Home">
            <div className="nk-block-head nk-block-head-sm">
                <div className="nk-block-between position-relative">
                    <div className="nk-block-head-content">
                        <h3 className="nk-block-title page-title">
                            Your Notes
                        </h3>
                    </div>
                    <div className="nk-block-head-content">
                        <a className="btn btn-primary" href="/write">
                            Create New Note
                        </a>
                    </div>
                </div>
            </div>
            <div className="nk-fmg-listing nk-block">
                <div className="nk-files nk-files-view-list">
                    <div className="nk-files-list">
                        <FileItem icon="folder-list" href="/files/ui-design">
                            UI Design
                        </FileItem>

                        <FileItem icon="folder-list" href="/files/ux-design">
                            UX Design
                        </FileItem>

                        <FileItem href="/files/ux-design">UX Design</FileItem>
                        <FileItem href="/files/ux-design">UX Design</FileItem>
                        <FileItem href="/files/ux-design">UX Design</FileItem>
                        <FileItem href="/files/ux-design">UX Design</FileItem>
                        <FileItem href="/files/ux-design">UX Design</FileItem>
                        <FileItem href="/files/ux-design">UX Design</FileItem>
                        <FileItem href="/files/ux-design">UX Design</FileItem>
                        <FileItem href="/files/ux-design">UX Design</FileItem>
                        <FileItem href="/files/ux-design">UX Design</FileItem>
                        <FileItem href="/files/ux-design">UX Design</FileItem>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

function FileItem({
    icon = "file-text",
    emoji,
    href,
    children,
    hasStar = false,
}: FileItemProps) {
    const { isOpen, toggle } = useDisclosure(false);

    return (
        <div className="nk-file-item nk-file">
            <div className="nk-file-info">
                <div className="nk-file-title">
                    <div className="nk-file-icon">
                        <span className="nk-file-icon-type">
                            {emoji ? emoji : <Icon type={icon} />}
                        </span>
                    </div>
                    <div className="nk-file-name">
                        <div className="nk-file-name-text">
                            <a href={href} className="title">
                                {children}
                            </a>
                            <div className="nk-file-star asterisk">
                                <a className={hasStar ? "active" : ""} href="#">
                                    <em className="asterisk-off icon ni ni-star"></em>
                                    <em className="asterisk-on icon ni ni-star-fill"></em>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nk-file-meta">
                <div className="tb-lead">Today, 08:29 AM</div>
            </div>

            <div className="nk-file-actions">
                <div className="dropdown">
                    <a
                        href="#"
                        className="dropdown-toggle btn btn-sm btn-icon btn-trigger"
                        data-bs-toggle="dropdown"
                        onClick={toggle}
                    >
                        <em className="icon ni ni-more-h"></em>
                    </a>
                    <div
                        className={cx("dropdown-menu dropdown-menu-end", {
                            show: isOpen,
                        })}
                        style={{ right: 0 }}
                    >
                        <ul className="link-list-plain no-bdr">
                            <li>
                                <a href="#open" data-bs-toggle="modal">
                                    <Icon type="clip" />
                                    <span>Open</span>
                                </a>
                            </li>
                            <li>
                                <a href="#file-share" data-bs-toggle="modal">
                                    <Icon type="share" />
                                    <span>Copy File Link</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#file-download"
                                    className="file-dl-toast"
                                >
                                    <Icon type="download" />
                                    <span>Download</span>
                                </a>
                            </li>
                            <li>
                                <a href="#file-delete">
                                    <Icon type="trash" />
                                    <span>Delete</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

interface FileItemProps {
    icon?: IconType;
    emoji?: string;
    href: string;
    hasStar?: boolean;
    children: React.ReactNode;
}

export default HomePage;

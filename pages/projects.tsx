import Layout from "components/layout";
import { useDisclosure } from "helpers/disclosure";

function Projects() {
    return (
        <Layout title="Projects">
            <div className="nk-fmg-body-content">
                <div className="nk-block-head nk-block-head-sm">
                    <div className="nk-block-between position-relative">
                        <div className="nk-block-head-content">
                            <h3 className="nk-block-title page-title">
                                Your Projects
                            </h3>
                        </div>
                        <div className="nk-block-head-content">
                            <a
                                className="btn btn-primary"
                                href="/projects/create"
                            >
                                Create New Projects
                            </a>
                        </div>
                    </div>
                </div>
                <div className="nk-block">
                    <table className="nk-tb-list is-separate nk-tb-ulist">
                        <thead>
                            <tr className="nk-tb-item nk-tb-head">
                                <th className="nk-tb-col">
                                    <span className="sub-text">
                                        Project Name
                                    </span>
                                </th>
                                <th className="nk-tb-col tb-col-xxl">
                                    <span className="sub-text">Client</span>
                                </th>
                                <th className="nk-tb-col tb-col-lg">
                                    <span className="sub-text">
                                        Project Lead
                                    </span>
                                </th>
                                <th className="nk-tb-col tb-col-lg">
                                    <span className="sub-text">Team</span>
                                </th>
                                <th className="nk-tb-col tb-col-xxl">
                                    <span className="sub-text">Status</span>
                                </th>
                                <th className="nk-tb-col tb-col-sm">
                                    <span className="sub-text">
                                        Sprint Deadline
                                    </span>
                                </th>
                                <th className="nk-tb-col nk-tb-col-tools text-end"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <Project />
                            <Project />
                            <Project />
                            <Project />
                            <Project />
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    );
}

function Project() {
    const { isOpen, toggle } = useDisclosure();
    return (
        <tr className="nk-tb-item">
            <td className="nk-tb-col">
                <a href="html/apps-kanban.html" className="project-title">
                    <div className="user-avatar sq bg-purple">
                        <span>ON</span>
                    </div>
                    <div className="project-info">
                        <h6 className="title">Open Note Development</h6>
                    </div>
                </a>
            </td>
            <td className="nk-tb-col tb-col-xxl">
                <span>Softnio</span>
            </td>
            <td className="nk-tb-col tb-col-lg">
                <span>Nicholas Brody</span>
            </td>
            <td className="nk-tb-col tb-col-lg">
                <ul className="project-users g-1">
                    <li>
                        <div className="user-avatar sm bg-primary">
                            <span>A</span>
                        </div>
                    </li>
                    <li>
                        <div className="user-avatar sm bg-blue">
                            <img src="/images/avatar/b-sm.jpg" alt="" />
                        </div>
                    </li>
                    <li>
                        <div className="user-avatar bg-light sm">
                            <span>+12</span>
                        </div>
                    </li>
                </ul>
            </td>
            <td className="nk-tb-col tb-col-xxl">
                <span>Open</span>
            </td>
            <td className="nk-tb-col tb-col-sm">
                <span className="badge badge-dim bg-warning">
                    <em className="icon ni ni-clock"></em>
                    <span>5 Days Left</span>
                </span>
            </td>
            <td className="nk-tb-col nk-tb-col-tools">
                <ul className="nk-tb-actions gx-1">
                    <li>
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
                                className={cx(
                                    "dropdown-menu dropdown-menu-end",
                                    { show: isOpen }
                                )}
                                style={{ right: 20 }}
                            >
                                <ul className="link-list-opt no-bdr">
                                    <li>
                                        <a href="/projects/1">
                                            <em className="icon ni ni-eye"></em>
                                            <span>View Project</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/projects/1/edit">
                                            <em className="icon ni ni-edit"></em>
                                            <span>Edit Project</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <em className="icon ni ni-check-round-cut"></em>
                                            <span>Mark As Done</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </td>
        </tr>
    );
}

export default Projects;

import Layout from "components/layout";
import { useMemo } from "react";
import Scheduler from "components/scheduler";

function CalendarPage() {
    return (
        <Layout title="Home">
            <div className="nk-block-head nk-block-head-sm">
                <div className="nk-block-between position-relative">
                    <div className="nk-block-head-content d-flex gap-2">
                        <h3 className="nk-block-title page-title">
                            December 2023
                        </h3>
                        <div>
                            <a
                                className="btn btn-xs btn-secondary"
                                href="/write"
                            >
                                Previous
                            </a>
                            <a
                                className="btn btn-xs btn-secondary ms-2"
                                href="/write"
                            >
                                Next
                            </a>
                        </div>
                    </div>
                    <div className="nk-block-head-content">
                        <a className="btn btn-primary" href="/write">
                            Start new event
                        </a>
                    </div>
                </div>
            </div>

            <Scheduler />
        </Layout>
    );
}

export default CalendarPage;

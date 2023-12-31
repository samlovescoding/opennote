import Layout from "components/layout";

function HabitsPage() {
    return (
        <Layout title="Home">
            <div className="nk-block-head nk-block-head-sm">
                <div className="nk-block-between position-relative">
                    <div className="nk-block-head-content">
                        <h3 className="nk-block-title page-title">
                            Your Habits
                        </h3>
                    </div>
                    <div className="nk-block-head-content">
                        <a className="btn btn-primary" href="/write">
                            Create new notification
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default HabitsPage;

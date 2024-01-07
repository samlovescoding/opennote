import Input from "components/form/input";
import Layout from "components/layout";
import { Formik } from "formik";
import { as, createValidator } from "components/form/validator";
import Createable from "components/form/createable";

const initialValues = {
    title: "",
    data: "",
};
const validationSchema = createValidator({
    title: as.string().required().label("Title"),
    data: as.string(),
});

const NotesCreatePage = () => {
    return (
        <Layout title="Create a note">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={console.log}
            >
                {({ handleSubmit }) => (
                    <form method="POST" className="row" onSubmit={handleSubmit}>
                        <div className="col-lg-8">
                            <div className="card">
                                <div className="card-inner">Hello</div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-inner">
                                    <Input
                                        vertical
                                        id="title"
                                        label="Title"
                                        placeholder="Daily Note"
                                    />
                                    <Createable
                                        vertical
                                        id="tags"
                                        label="Tags"
                                        options={[]}
                                    />
                                    <button
                                        className="btn btn-primary"
                                        type="submit"
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                )}
            </Formik>
        </Layout>
    );
};

export default NotesCreatePage;

import Form from "components/form";
import Layout from "components/layout";
import Input from "components/form/input";
import Switch from "components/form/switch";
import Checkbox from "components/form/checkbox";
import Buttons from "components/form/buttons";
import Submit from "components/form/submit";
import Reset from "components/form/reset";
import Select from "components/form/select";
import { Formik } from "formik";
import * as yup from "yup";
import { as, createValidator } from "components/form/validator";

const initialValues = {
    "site-name": "",
    "site-email": "",
    "site-copyright": "Copyright 2023. All Rights Reserved. Dashboard",
    "maintenance-mode": false,
    "base-url": "http://dashboard.com",
    "allow-registration": "on-request",
    "not-registration": ["on-request"],
    select: [],
};
const validator = createValidator({
    "site-name": as.string().required(),
    "site-email": as.string().email().required(),
    "site-copyright": as.string(),
    "maintenance-mode": as.bool().oneOf([true], "You must accept this field."),
    "base-url": as.string(),
    "allow-registration": as.string(),
    "not-registration": as.array().of(yup.string()).min(1),
    select: as.array().of(as.string()).min(2),
});

function Settings() {
    const onSubmit = (props) => {
        console.log(props);
    };

    return (
        <Layout title="Settings">
            <div className="nk-block nk-block-lg">
                <div className="nk-block-head">
                    <div className="nk-block-head-content">
                        <h4 className="title nk-block-title">
                            Setting Form Style
                        </h4>
                        <div className="nk-block-des">
                            <p>
                                You can make style out your setting related form
                                as per below example.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-inner">
                        <div className="card-head">
                            <h5 className="card-title">Website Setting</h5>
                        </div>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validator}
                            onSubmit={onSubmit}
                        >
                            {({ handleSubmit }) => (
                                <Form onSubmit={handleSubmit}>
                                    <Input
                                        id="site-name"
                                        label="Site Name"
                                        note="Specify the name of the website"
                                        placeholder="Site Name"
                                    />
                                    <Input
                                        id="site-email"
                                        type="email"
                                        label="Site Email"
                                        note="Specify the email of the website"
                                        placeholder="jim@dundermiflin.com"
                                    />
                                    <Checkbox
                                        id="allow-registration"
                                        label="Allow Registration"
                                        note="Enable or disable registration from site."
                                        type="radio"
                                        options={[
                                            { id: "enable", label: "Enable" },
                                            { id: "disable", label: "Disable" },
                                            {
                                                id: "on-request",
                                                label: "On Request",
                                            },
                                        ]}
                                    />
                                    <Input
                                        id="site-copyright"
                                        label="Site Copyright"
                                        note="Specify the copyright statement"
                                    />
                                    <Switch
                                        id="maintenance-mode"
                                        label="Maintenance Mode"
                                        note="Maintainance mode disables"
                                    />
                                    <Select
                                        id="select"
                                        options={[
                                            { label: "Hello", value: "world" },
                                            { label: "Color", value: "red" },
                                            { label: "Heat", value: "fh812" },
                                        ]}
                                        multiple
                                        label="Pick some values"
                                        note="You can even pick more than one"
                                    />
                                    <Input
                                        id="base-url"
                                        label="Main Website"
                                        note="Specify the URL of the website"
                                    />
                                    <Checkbox
                                        id="not-registration"
                                        label="Allow Registration"
                                        note="Enable or disable registration from site."
                                        type="checkbox"
                                        options={[
                                            { id: "enable", label: "Enable" },
                                            { id: "disable", label: "Disable" },
                                            {
                                                id: "on-request",
                                                label: "On Request",
                                            },
                                        ]}
                                    />
                                    <Buttons>
                                        <Submit>Update</Submit>
                                        <Reset>Reset</Reset>
                                    </Buttons>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Settings;

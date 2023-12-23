import { useField } from "formik";

export function SwitchElement({
    id,
    note,
    label,
    value = false,
    onChange = () => {},
    hasError = false,
    error = null,
    ...switchProps
}: SwitchProps) {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        onChange(event.target.checked);
    };

    return (
        <div className="row g-3 align-center">
            <div className="col-lg-5">
                <div className="form-group">
                    <label
                        className={cx("form-label", {
                            "text-danger": hasError,
                        })}
                        htmlFor={id}
                    >
                        {label}
                    </label>
                    {note && (
                        <span
                            className={cx("form-note", {
                                "text-danger": hasError,
                            })}
                        >
                            {note}
                        </span>
                    )}
                </div>
            </div>
            <div className="col-lg-7">
                <div className="form-group">
                    <div className="custom-control custom-switch">
                        <input
                            type="checkbox"
                            className="custom-control-input"
                            name={id}
                            id={id}
                            checked={value}
                            onChange={handleChange}
                            {...switchProps}
                        />
                        <label className="custom-control-label" htmlFor={id}>
                            Offline
                        </label>
                    </div>
                    {hasError && error && (
                        <div>
                            <small className={cx({ "text-danger": hasError })}>
                                {error}
                            </small>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

interface SwitchProps {
    id: string;
    label: string;
    note?: string;
    value?: boolean;
    onChange?: (isChecked: boolean) => void;
    hasError?: boolean;
    error?: string | null;
}

const Switch = (switchProps: SwitchProps) => {
    const [field, meta, helpers] = useField(switchProps.id);

    const value = field.value;
    const onChange = (updatedValue) => {
        helpers.setValue(updatedValue);
    };

    const hasError = meta.touched && !!meta.error;

    return (
        <SwitchElement
            {...switchProps}
            value={value}
            onChange={onChange}
            hasError={hasError}
            error={meta.error}
        />
    );
};

export default Switch;

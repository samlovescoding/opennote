import { useField } from "formik";

export function InputElement({
    id,
    type = "text",
    label,
    note,
    onChange = () => {},
    hasError = false,
    error = null,
    vertical = false,
    ...inputProps
}: InputProps) {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        onChange(event.target.value);
    };
    return (
        <div className={cx("row align-center", vertical ? "g-0 mb-3" : "g-3")}>
            <div className={vertical ? "col-lg-12" : "col-lg-5"}>
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
            <div className={vertical ? "col-lg-12" : "col-lg-7"}>
                <div className="form-group">
                    <div className="form-control-wrap">
                        <input
                            {...inputProps}
                            className={cx(
                                "form-control",
                                inputProps.className,
                                { error: hasError }
                            )}
                            type={type}
                            id={id}
                            name={id}
                            onChange={handleChange}
                        />
                        {hasError && error && (
                            <small className="form-error text-danger">
                                {error}
                            </small>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export type InputType =
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "hidden"
    | "month"
    | "number"
    | "password"
    | "range"
    | "search"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";

interface InputProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
    id: string;
    label: string;
    note?: string;
    type?: InputType;
    onChange?: (newValue: string) => void;
    hasError?: boolean;
    error?: string | null;
    vertical?: boolean;
}

export const Input = (inputProps: InputProps) => {
    const [field, meta, helpers] = useField(inputProps.id);
    const value = field.value;
    const onChange = (updatedValue) => helpers.setValue(updatedValue);
    return (
        <InputElement
            {...inputProps}
            value={value}
            onChange={onChange}
            error={meta.error}
            hasError={meta.touched && !!meta.error}
        />
    );
};

export default Input;

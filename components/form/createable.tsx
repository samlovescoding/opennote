import { useField } from "formik";
import ReactSelect from "react-select/creatable";

interface Option {
    label: string;
    value: string;
}

interface CreateableProps {
    id: string;
    multiple?: boolean;
    options: Array<Option>;
    label: string;
    note?: string;
    vertical?: boolean;
}

const Createable = ({
    id,
    label,
    note,
    multiple = false,
    vertical = false,
    ...selectProps
}: CreateableProps) => {
    const [field, meta, helpers] = useField(id);

    const value = multiple
        ? selectProps.options.filter((option) =>
              field.value.includes(option.value)
          )
        : selectProps.options.find((option) => option.value === field.value);
    const onChange = (updatedOption) => {
        if (multiple) {
            helpers.setValue(updatedOption.map((option) => option.value));
            return;
        }
        helpers.setValue(updatedOption.value);
    };

    const hasError = meta.touched && meta.error;
    const borderFocusedColor = hasError ? "rgb(232, 83, 71)" : "#854fff";
    const borderNormalColor = hasError ? "rgb(232, 83, 71)" : "#dbdfea";

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
                        <ReactSelect
                            {...selectProps}
                            isMulti={multiple}
                            value={value}
                            onChange={onChange}
                            styles={{
                                control: (baseStyles, state) => ({
                                    ...baseStyles,
                                    borderColor: state.isFocused
                                        ? borderFocusedColor
                                        : borderNormalColor,
                                    boxShadow: state.isFocused
                                        ? "0 0 0 3px rgba(133, 79, 255, 0.1);"
                                        : "none",
                                    ":hover": {
                                        borderColor: state.isFocused
                                            ? borderFocusedColor
                                            : borderNormalColor,
                                        boxShadow: state.isFocused
                                            ? "0 0 0 3px rgba(133, 79, 255, 0.1);"
                                            : "none",
                                    },
                                }),
                                menu: (baseStyles) => ({
                                    ...baseStyles,
                                    zIndex: 100000,
                                }),
                            }}
                        />
                        {hasError && meta.error && (
                            <small className={cx({ "text-danger": hasError })}>
                                {meta.error}
                            </small>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Createable;

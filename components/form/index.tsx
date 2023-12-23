function Form(formProps: FormProps) {
    return (
        <form className={cx("gy-3", formProps.className)} {...formProps}>
            {formProps.children}
        </form>
    );
}

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {}

export default Form;

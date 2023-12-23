function Submit({ children, ...submitProps }: SubmitProps) {
    return (
        <button
            {...submitProps}
            type="submit"
            className={cx("btn btn-lg btn-primary me-2", submitProps.className)}
        >
            {children}
        </button>
    );
}

interface SubmitProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default Submit;

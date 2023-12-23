function Reset({ children, ...resetProps }: ResetProps) {
    return (
        <button
            {...resetProps}
            type="reset"
            className={cx("btn btn-lg btn-primary me-2", resetProps.className)}
        >
            {children}
        </button>
    );
}

interface ResetProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default Reset;

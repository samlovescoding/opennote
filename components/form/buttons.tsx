function Buttons({ children }: ButtonsProps) {
    return (
        <div className="row g-3">
            <div className="col-lg-7 offset-lg-5">
                <div className="form-group mt-2">{children}</div>
            </div>
        </div>
    );
}

interface ButtonsProps {
    children: React.ReactNode;
}

export default Buttons;

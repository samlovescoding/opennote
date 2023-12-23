export default function HeaderSearch() {
    return (
        <div className="nk-header-search ms-3 ms-xl-0">
            <em className="icon ni ni-search" />
            <input
                type="text"
                className="form-control border-transparent form-focus-none"
                placeholder="Search anything"
            />
        </div>
    );
}

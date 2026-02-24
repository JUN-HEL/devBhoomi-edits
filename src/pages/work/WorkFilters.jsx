const WorkFilters = ({ filters, activeFilter, onChange }) => {
    return (
        <div className="work-filters">
            {filters.map((filter) => (
                <button
                    key={filter}
                    className={activeFilter === filter ? "active" : ""}
                    onClick={() => onChange(filter)}
                    type="button"
                >
                    {filter}
                </button>
            ))}
        </div>
    );
};

export default WorkFilters;
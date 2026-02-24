

const ThemeToggle = ({ theme, toggleTheme, variant = "icon" }) => {
    if (variant === "full") {
        return (
            <button
                type="button"
                className="theme-toggle"
                onClick={toggleTheme}
                aria-label="Toggle dark mode"
                title="Toggle theme"
            >
                <span className="theme-icon">{theme === "dark" ? "☀️" : "🌙"}</span>
                <span className="theme-text">
                    {theme === "dark" ? "Light Mode" : "Dark Mode"}
                </span>
            </button>
        );
    }

    return (
        <button
            type="button"
            className="theme-toggle icon-only"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            title="Toggle theme"
        >
            {theme === "dark" ? "☀️" : "🌙"}
        </button>
    );
};

export default ThemeToggle;
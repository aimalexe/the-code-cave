import { useTheme } from './ThemeContext.jsx';
import "./switchTheme.css";

const SwitchTheme = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <label className="switch">
            <input
                type="checkbox"
                checked={theme === "light"}
                onChange={toggleTheme}
            />
            <span className="slider round"></span>
        </label>
    );
}

export default SwitchTheme;
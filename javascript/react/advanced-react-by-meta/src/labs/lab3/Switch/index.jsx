import "./Styles.css";
import { useTheme } from "../ThemeContext.jsx";

const Switch = () => {
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
};

export default Switch;

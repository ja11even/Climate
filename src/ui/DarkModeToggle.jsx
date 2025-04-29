import { useTheme } from "../context/ThemeContext";
import ButtonIcon from "./ButtonIcon";
function DarkModeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <ButtonIcon onClick={toggleTheme}>{isDarkMode ? "☀️" : "🌑"}</ButtonIcon>
  );
}

export default DarkModeToggle;

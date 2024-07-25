import React from "react";

interface ThemeToggleProps {
	theme: string;
	toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
	return (
		<button
			onClick={toggleTheme}
			className={`p-2 rounded ${
				theme === "light" ? "bg-gray-200 text-black" : "bg-gray-800 text-white"
			}`}
		>
			{theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
		</button>
	);
};

export default ThemeToggle;

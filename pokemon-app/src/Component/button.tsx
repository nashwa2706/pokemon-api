import { MdOutlineCatchingPokemon } from "react-icons/md";
import React from "react";

interface ButtonProps {
	className?: string;
	search?: string;
	icon?: boolean;
	onClick?: () => void; // Menambahkan prop onClick
}

const Button: React.FC<ButtonProps> = ({
	className = "",
	search = "Search",
	icon = false,
	onClick,
}) => {
	return (
		<button
			className={`flex items-center justify-center  bg-red-500 text-white rounded-r-md ${className}`}
			onClick={onClick}
		>
			{icon ? (
				<div className="text-2xl">
					<MdOutlineCatchingPokemon />
				</div>
			) : (
				<p>{search}</p>
			)}
		</button>
	);
};

export default Button;

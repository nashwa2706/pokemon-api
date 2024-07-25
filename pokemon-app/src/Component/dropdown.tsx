import React from "react";

interface Option {
	value: string;
	label: string;
}

interface DropdownProps {
	titleValue?: string;
	options: Option[];
	onChange: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
	titleValue,
	options,
	onChange,
}) => {
	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		onChange(event.target.value);
	};

	return (
		<form className="max-w-sm mx-auto">
			<select
				id="countries"
				className="shadow-md h-[50px] rounded-lg w-full mt-1 text-gray-400 border p-2 border-gray-300"
				onChange={handleChange}
			>
				<option value="" disabled selected>
					<p className="text-gray-500">{titleValue}</p>
				</option>
				{options.map((option) => (
					<option
						key={option.value}
						value={option.value}
						className="text-gray-500"
					>
						<p className="text-gray-500">{option.label}</p>
					</option>
				))}
			</select>
		</form>
	);
};

export default Dropdown;

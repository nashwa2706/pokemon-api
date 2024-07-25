import React, { useEffect, useState } from "react";

interface FormProps {
	onSubmit: (inputValue: string) => void;
}

const FormValue: React.FC<FormProps> = ({ onSubmit }) => {
	const [inputValue, setInputValue] = useState<string>(() => {
		const savedValue = localStorage.getItem("inputValue");
		return savedValue !== null ? savedValue : "";
	});

	useEffect(() => {
		localStorage.setItem("inputValue", inputValue);
	}, [inputValue]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onSubmit(inputValue);
		setInputValue("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={inputValue}
				onChange={handleChange}
				placeholder="Enter some text"
			/>
			<button type="submit">Submit</button>
		</form>
	);
};

export default FormValue;

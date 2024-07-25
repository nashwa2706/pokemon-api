import React, { useState } from "react";

import Button from "./button";

interface SearchProps {
	placeholderText?: string;
	onSearch?: (searchTerm: string) => void;
}

const Search: React.FC<SearchProps> = ({
	placeholderText = "Cari Pokemon kamu...",
	onSearch,
}) => {
	const [searchTerm, setSearchTerm] = useState<string>("");

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		if (onSearch) {
			onSearch(searchTerm);
		}
	};

	return (
		<div className="w-3/4 shadow-md h-[60px]">
			<form onSubmit={handleSubmit} className="flex">
				<input
					type="text"
					placeholder={placeholderText}
					value={searchTerm}
					onChange={handleInputChange}
					className="border rounded-l-md px-[24px] py-[24px] w-full h-[60px]"
				/>
				<Button className="px-[24px] font-bold" icon={true} />
			</form>
		</div>
	);
};

export default Search;

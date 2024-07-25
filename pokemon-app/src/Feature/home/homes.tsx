import React, { useEffect, useState } from "react";

import CustomHook from "./customHook";
import Dropdown from "../../Component/dropdown";
import Footer from "../../Component/footer";
import MainCard from "./mainCard";
import Navbar from "../../Component/navbar";
import Search from "../../Component/search";
import ThemeToggle from "../../Component/toggle";
import { useNavigate } from "react-router-dom";
import { useQuery } from "./useQuery";

const Homes: React.FC = () => {
	const [theme, setTheme] = useState<string>("light");
	const [totalPages, setTotalPages] = useState<number>(0);
	const { pokemonData, totalCount } = CustomHook();
	const [searchTerm, setSearchTerm] = useState<string>("");
	const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
	const navigate = useNavigate();
	const [selectedType, setSelectedType] = useState<string>();
	const query = useQuery();
	const pageParam = query.get("page");
	const page = pageParam ? Number(pageParam) : 1;
	const currentPage = isNaN(page) ? 1 : page;

	useEffect(() => {
		if (pokemonData.length > 0) {
			const pages = Math.ceil(totalCount / pokemonData.length);
			setTotalPages(pages);
		}
	}, [pokemonData, totalCount]);

	const handleNextPage = () => {
		if (currentPage < totalPages) {
			navigate(`?page=${currentPage + 1}`);
		}
	};

	const handleBackPage = () => {
		if (currentPage > 1) {
			navigate(`?page=${currentPage - 1}`);
		}
	};

	const filteredPokemonData = pokemonData
		.filter((pokemon) =>
			pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
		)
		.filter((pokemon) =>
			selectedType
				? pokemon.types.some((type) => type.type.name === selectedType)
				: true
		);

	const handleSearchChange = (term: string) => {
		setSearchTerm(term);
	};

	const handleSortOrderChange = (value: string) => {
		const order = value as "asc" | "desc";
		setSortOrder(order);
	};

	const sortedPokemonData = filteredPokemonData.sort((a, b) => {
		if (sortOrder === "asc") {
			return a.name.localeCompare(b.name);
		} else {
			return b.name.localeCompare(a.name);
		}
	});

	const handleTypeChange = (value: string) => {
		setSelectedType(value);
	};

	const sortOptions = [
		{ value: "asc", label: "Ascending" },
		{ value: "desc", label: "Descending" },
	];

	const typeOptions = [
		{ value: "", label: "All Types" },
		{ value: "fire", label: "Fire" },
		{ value: "water", label: "Water" },
		{ value: "grass", label: "Grass" },
	];

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	};

	useEffect(() => {
		document.documentElement.classList.remove("light", "dark");
		document.documentElement.classList.add(theme);
	}, [theme]);

	return (
		<div
			className={`${
				theme === "light" ? "bg-slate-200" : "bg-gray-900 text-white"
			} min-w-screen min-h-screen`}
		>
			<div className="flex flex-col items-center">
				<Navbar />
				<Search onSearch={handleSearchChange} />
				<ThemeToggle theme={theme} toggleTheme={toggleTheme} />
			</div>
			<div className="w-full px-4">
				<div className="flex justify-between my-[10px]">
					<Dropdown
						titleValue="Sort Order"
						options={sortOptions}
						onChange={handleSortOrderChange}
					/>
					<Dropdown
						titleValue="Sort Type Pokemon"
						options={typeOptions}
						onChange={handleTypeChange}
					/>
				</div>
			</div>
			<MainCard
				pokemonData={sortedPokemonData}
				handleBackPage={handleBackPage}
				handleNextPage={handleNextPage}
				totalPage={totalPages}
				currentPage={currentPage}
			/>
			<Footer></Footer>
		</div>
	);
};

export default Homes;

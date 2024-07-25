import React, { useEffect, useState } from "react";

interface CaughtPokemon {
	name: string;
	nickname: string;
	image: string;
}

const Pokemon: React.FC = () => {
	const [caughtPokemons, setCaughtPokemons] = useState<CaughtPokemon[]>([]);

	useEffect(() => {
		try {
			const storedPokemons = JSON.parse(
				localStorage.getItem("caughtPokemons") || "[]"
			);
			console.log("Stored Pokémon data:", storedPokemons);
			setCaughtPokemons(storedPokemons);
		} catch (error) {
			console.error("Failed to parse stored Pokémon data:", error);
		}
	}, []);

	const handleDelete = (pokemonName: string) => {
		try {
			const caughtPokemons = JSON.parse(
				localStorage.getItem("caughtPokemons") || "[]"
			);
			const updatedPokemons = caughtPokemons.filter(
				(p: CaughtPokemon) => p.name !== pokemonName
			);
			localStorage.setItem("caughtPokemons", JSON.stringify(updatedPokemons));
			setCaughtPokemons(updatedPokemons);
		} catch (error) {
			console.error("Failed to update Pokémon data:", error);
		}
	};

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-2xl font-bold mb-4 font-mono">My Caught Pokemons</h1>
			{caughtPokemons.length === 0 ? (
				<p className="font-mono">You haven't caught any Pokémon yet.</p>
			) : (
				<ul className="space-y-4">
					{caughtPokemons.map((pokemon) => (
						<li
							key={pokemon.name}
							className="flex items-center space-x-4 p-4 border rounded shadow-sm hover:shadow-md transition-shadow duration-300"
						>
							<img
								src={pokemon.image}
								alt={pokemon.name}
								className="w-16 h-16 object-cover"
							/>
							<span className="font-mono">
								{pokemon.nickname} ({pokemon.name})
							</span>
							<button
								onClick={() => handleDelete(pokemon.name)}
								className="ml-auto px-4 py-2 bg-red-600 text-white rounded font-mono hover:bg-red-700 transition-colors duration-200"
								aria-label={`Delete ${pokemon.name}`}
							>
								X
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Pokemon;

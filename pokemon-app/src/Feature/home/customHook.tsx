import { useEffect, useState } from "react";

import { getPokemonList } from "../../Service/Index";

const CustomHook = () => {
	const [pokemon, setPokemon] = useState<string[]>([]);
	const [pokemonData, setPokemonData] = useState<pokemonResponse[]>([]);
	const [totalCount, setTotalCount] = useState<number>(0);

	useEffect(() => {
		const fetchPokemons = async () => {
			try {
				const response = await getPokemonList();
				setPokemon(response.results.map((p: any) => p.name));
				setTotalCount(response.count);
				await fetchPokemonDetails(response.results);
			} catch (error) {
				console.log(error);
			}
		};

		fetchPokemons();
	}, []);

	const fetchPokemonDetails = async (results: any) => {
		try {
			const pokemonDetails = await Promise.all(
				results.map(async (pokemon: any) => {
					const res = await fetch(
						`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
					);
					return await res.json();
				})
			);
			setPokemonData(pokemonDetails);
		} catch (error) {
			console.log(error);
		}
	};

	return { pokemon, pokemonData, totalCount };
};

export default CustomHook;

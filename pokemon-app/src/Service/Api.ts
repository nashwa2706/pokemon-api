import { API } from "./Index";

const getPokemonList = async (): Promise<ResponPokemon> => {
	try {
		const response = await API.get("pokemon?limit=100&offset=0");
		console.log(response);
		return response.data as ResponPokemon;
	} catch (error) {
		console.error("Error fetching now playing movies:", error);
		throw error;
	}
};

const getPokemonDetail = async (name: string) => {
	try {
		const response = await API.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
		return response.data;
	} catch (error) {
		console.error(`Failed to fetch Pokémon detail for ${name}:`, error);
		throw error;
	}
};

export { getPokemonList, getPokemonDetail };

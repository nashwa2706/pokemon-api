type ResponPokemon = {
	count: number;
	next?: string | null;
	previous?: string | null;
	results: Result[];
};

type Result = {
	name: string;
	url: string;
};

type PokemonDetail = {
	name: string;
	sprites: {
		front_default: string;
	};
	types: {
		type: {
			name: string;
		};
	}[];
	weight: number;
};

type pokemonResponse = {
	id: number;
	name: string;
	base_experience: number;
	height: number;
	is_default: boolean;
	order: number;
	weight: number;
	abilities: Ability2[];
	forms: Ability[];
	game_indices: GameIndex[];
	held_items: HeldItem[];
	location_area_encounters: string;
	moves: Move[];
	species: Ability;
	sprites: Sprites;
	cries: Cries;
	stats: Stat[];
	types: Type[];
	past_types: PastType[];
};

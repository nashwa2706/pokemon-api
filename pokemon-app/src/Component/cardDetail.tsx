import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getPokemonDetail } from "../Service/Api";
import getTypeColor from "../Helper/helper";

interface PokemonStat {
	base_stat: number;
	stat: {
		name: string;
	};
}

interface PokemonDetail {
	name: string;
	id: number;
	sprites: {
		front_default: string;
	};
	height: number;
	weight: number;
	stats: PokemonStat[];
	types: { type: { name: string } }[];
}

const CardDetail: React.FC = () => {
	const { name } = useParams<{ name: string }>();
	const [pokemon, setPokemon] = useState<PokemonDetail | null>(null);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchPokemonDetail = async () => {
			if (name) {
				const data = await getPokemonDetail(name);
				setPokemon(data);
			}
		};
		fetchPokemonDetail();
	}, [name]);

	if (!pokemon) {
		return (
			<div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900 text-black dark:text-white flex items-center justify-center p-4">
				<span className="text-lg font-semibold">Loading...</span>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900 text-black dark:text-white p-4">
			<div className="max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-300 dark:border-gray-600">
				<div className="flex justify-center">
					<img
						src={pokemon.sprites.front_default}
						alt={pokemon.name}
						className="w-48 h-48 object-cover rounded-full border-4 border-yellow-400 dark:border-yellow-600"
					/>
				</div>
				<h1 className="text-center text-4xl font-extrabold capitalize mt-4 dark:text-yellow-300">
					{pokemon.name}
				</h1>
				<div className="text-center mt-4">
					<span className="text-lg font-semibold text-blue-600 dark:text-blue-300">
						ID:{" "}
					</span>
					<span className="text-lg text-blue-800 dark:text-blue-200">
						{pokemon.id}
					</span>
				</div>
				<div className="text-center mt-4">
					<span className="text-lg font-semibold text-green-600 dark:text-green-300">
						Height:{" "}
					</span>
					<span className="text-lg text-green-800 dark:text-green-200">
						{pokemon.height / 10} m
					</span>{" "}
				</div>
				<div className="text-center mt-4">
					<span className="text-lg font-semibold text-orange-600 dark:text-orange-300">
						Weight:{" "}
					</span>
					<span className="text-lg text-orange-800 dark:text-orange-200">
						{pokemon.weight / 10} kg
					</span>{" "}
				</div>
				<div className="text-center mt-4">
					<span className="text-lg font-semibold text-purple-600 dark:text-purple-300">
						Types:{" "}
					</span>
					{pokemon.types.map((type) => (
						<span
							key={type.type.name}
							className={`text-lg font-medium capitalize mx-1 w-[20px] h-[40px] ${getTypeColor(
								type.type.name
							)}`}
						>
							{type.type.name}
						</span>
					))}
				</div>
				<div className="mt-6">
					<h2 className="text-2xl font-bold text-red-600 dark:text-red-300">
						Stats
					</h2>
					<ul className="mt-4 space-y-2">
						{pokemon.stats.map((stat) => (
							<li
								key={stat.stat.name}
								className="flex justify-between bg-gray-100 dark:bg-gray-700 rounded-md p-2 border border-gray-300 dark:border-gray-600"
							>
								<span className="capitalize">{stat.stat.name}</span>
								<span>{stat.base_stat}</span>
							</li>
						))}
					</ul>
				</div>
				<div className="mt-6 text-center">
					<button
						onClick={() => navigate("/game")}
						className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-800"
					>
						Go to Game
					</button>
				</div>
			</div>
		</div>
	);
};

export default CardDetail;

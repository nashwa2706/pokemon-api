import Card from "../../Component/Card";
import Pagination from "../../Component/pagenation";
import React from "react";
import { useNavigate } from "react-router-dom";

interface MainCardProps {
	pokemonData: PokemonDetail[];
	handleBackPage?: () => void;
	currentPage: number;
	handleNextPage?: () => void;
	totalPage: number;
}

const MainCard: React.FC<MainCardProps> = ({
	pokemonData,
	handleBackPage,
	currentPage,
	handleNextPage,
	totalPage,
}) => {
	const navigate = useNavigate();

	const startIndex = (currentPage - 1) * 10;
	const endIndex = startIndex + 10;
	const paginatedData = pokemonData.slice(startIndex, endIndex);

	return (
		<div className="flex flex-col items-center mt-6 w-full px-4">
			<div className="flex flex-wrap justify-center gap-5 mb-6">
				{paginatedData.length > 0 ? (
					paginatedData.map((pokemon, index) => {
						const { name, sprites, types, weight } = pokemon;
						return (
							<Card key={index} className="flex flex-col">
								<Card.Header
									image={sprites.front_default}
									className="text-center"
									imageClassName="flex flex-justify center"
								/>
								<Card.Body>
									<div className="flex flex-col font-semibold text-gray-400 text-center">
										<p>{name}</p>
										<p className="text-xs">
											Type: {types.map((type) => type.type.name).join(", ")}
										</p>
										<p className="text-xs">Weight: {weight}</p>
									</div>
								</Card.Body>
								<Card.Footer
									onButtonClick={() => navigate(`/details/${name}`)}
									buttonText="detail"
								></Card.Footer>
							</Card>
						);
					})
				) : (
					<p>Loading...</p>
				)}
			</div>
			<div className="flex justify-center w-full mb-[40px]">
				<Pagination
					currentPage={currentPage}
					totalPage={totalPage}
					handleBackPage={handleBackPage}
					handleNextPage={handleNextPage}
				/>
			</div>
		</div>
	);
};

export default MainCard;

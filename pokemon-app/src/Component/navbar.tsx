import { Link, useLocation } from "react-router-dom";

import { MdCatchingPokemon } from "react-icons/md";
import { SiPokemon } from "react-icons/si";
import routes from "../Routing/Routes";

const Navbar = () => {
	const location = useLocation();
	return (
		<nav className="flex flex-row w-3/4 mx-[20px] h-[80px] bg-white shadow-md rounded-lg my-[20px] justify-between p-[24px]">
			<div className="text-8xl flex items-center">
				<SiPokemon />
			</div>
			<ul className="flex space-x-8 h-full">
				{routes.routes.map((route, index) =>
					route.path && route.title ? (
						<li key={index} className="flex items-center">
							<MdCatchingPokemon />
							<Link
								className={`ml-2 flex items-center justify-center text-gray-400 font-bold ${
									location.pathname === route.path
										? "text-red-500 underline"
										: ""
								}`}
								to={route.path}
							>
								{" "}
								{route.title}
							</Link>
						</li>
					) : null
				)}
			</ul>
		</nav>
	);
};

export default Navbar;

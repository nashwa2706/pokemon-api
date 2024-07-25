import CardDetail from "../Component/cardDetail";
import Homes from "../Feature/home/homes";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
	{
		path: "/",
		element: <Homes />,
		title: "Home",
	},
	{
		path: "/details/:name",
		element: <CardDetail />,
	},
]);

export default routes;

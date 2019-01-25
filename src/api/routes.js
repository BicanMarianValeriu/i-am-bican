import Loadable from "react-loadable";

import Home from "../pages/Home";
import Page from "../pages/Page";  
import FourOFour from "../pages/404";
import DownloadLoader from "../components/download-loader"; 

const Portfolio = Loadable({
	loader: () => import(/* webpackChunkName: "portfolio" */ "../pages/Portfolio"),
	loading: DownloadLoader,
	modules: ["../pages/Portfolio"]
});

const Projects = Loadable({
	loader: () => import(/* webpackChunkName: "projects" */ "../pages/Projects"),
	loading: DownloadLoader,
	modules: ["../pages/Projects"]
});

const routes = [
	{
		path: "/",
		exact: true,
		component: Home
	},
	{
		path: "/portfolio",
		exact: true,
		component: Projects 
	},
	{
		path: "/portfolio/:slug",
		exact: true,
		component: Portfolio
	},
	{
		path: "/p/:slug",
		component: Page
	},
	{
		path: "*",
		component: FourOFour
	}
];

export default routes;
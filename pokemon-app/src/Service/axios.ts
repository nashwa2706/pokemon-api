import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
	(axiosConfig) => {
		axiosConfig.baseURL = import.meta.env.VITE_BASE_URL;

		return axiosConfig;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default axiosInstance;

const getTypeColor = (type: string) => {
	const colors: Record<string, string> = {
		grass: "bg-green-500 text-green-50 dark:bg-green-600 dark:text-green-100",
		fire: "bg-red-500 text-red-50 dark:bg-red-600 dark:text-red-100",
		water: "bg-blue-500 text-blue-50 dark:bg-blue-600 dark:text-blue-100",
		electric:
			"bg-yellow-500 text-yellow-50 dark:bg-yellow-600 dark:text-yellow-100",
	};
	return (
		colors[type] ||
		"bg-gray-300 text-gray-800 dark:bg-gray-600 dark:text-gray-100"
	);
};

export default getTypeColor;

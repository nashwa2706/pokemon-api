import React, { useEffect, useState } from "react";

import FormValue from "./home/value";

type SubmittedDataType = string[];

const Games: React.FC = () => {
	const [submittedData, setSubmittedData] = useState<SubmittedDataType>([]);

	useEffect(() => {
		const savedData = JSON.parse(
			localStorage.getItem("submittedData") || "[]"
		) as SubmittedDataType;
		setSubmittedData(savedData);
	}, []);

	const handleFormSubmit = (inputValue: string) => {
		const newData = [...submittedData, inputValue];
		setSubmittedData(newData);
		localStorage.setItem("submittedData", JSON.stringify(newData));
	};

	return (
		<div>
			<FormValue onSubmit={handleFormSubmit} />
			<ul>
				{submittedData.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</div>
	);
};

export default Games;

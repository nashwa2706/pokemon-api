import { ReactNode, createContext, useState } from "react";

export const CountContext = createContext<{
	count: number;
	setCount: (e: number) => void;
	name: string;
	setName: (name: string) => void;
}>({
	count: 0,
	setCount: () => {},
	name: "",
	setName: () => {},
});

const CountProvider = ({ children }: { children: ReactNode }) => {
	const [count, setCount] = useState(0);
	const [name, setName] = useState("eren");

	return (
		<CountContext.Provider value={{ count, setCount, name, setName }}>
			{children}
		</CountContext.Provider>
	);
};

export default CountProvider;

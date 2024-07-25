import { FC, ReactNode } from "react";

interface CardProps {
	children: ReactNode;
	className?: string;
}

interface CardComponent extends FC<CardProps> {
	Header: FC<CardHeaderProps>;
	Body: FC<CardBodyProps>;
	Footer: FC<CardFooterProps>;
}

const Card: CardComponent = ({ children, className }) => {
	return (
		<div className="w-[300px] max-h-[400px] gap-6">
			<div
				className={`bg-neutral-50 dark:bg-neutral-900 flex flex-col overflow-hidden shadow-lg rounded-lg transition-transform duration-300 transform hover:scale-105 ${className}`}
			>
				{children}
			</div>
		</div>
	);
};

interface CardHeaderProps {
	image?: string;
	alt?: string;
	className?: string;
	imageClassName?: string;
}

const CardHeader: FC<CardHeaderProps> = ({
	image,
	alt,
	className,
	imageClassName,
}) => {
	return (
		<div
			className={`flex flex-col items-center  dark:border-neutral-700 ${className} max-h-[80px]`}
		>
			{image && (
				<img
					className={` w-[80px] rounded-full ${imageClassName}`}
					src={image}
					alt={alt}
				/>
			)}
		</div>
	);
};

interface CardBodyProps {
	children: ReactNode;
	className?: string;
	title?: string;
	titleClassname?: string;
}

const CardBody: FC<CardBodyProps> = ({ children, className }) => {
	return <div className={`flex-1 p-4 ${className}`}>{children}</div>;
};

interface CardFooterProps {
	className?: string;
	buttonText?: string;
	onButtonClick?: () => void;
}

const CardFooter: FC<CardFooterProps> = ({
	className,
	buttonText,
	onButtonClick,
}) => {
	return (
		<div
			className={` bg-gray-200 max-h-[100px] flex justify-end p-4 border-t border-neutral-200 dark:border-neutral-700 ${className}`}
		>
			{buttonText && (
				<button
					className="bg-white text-white py-1 px-3 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-150 ease-in-out"
					onClick={onButtonClick}
				>
					<p className="text-black">{buttonText}</p>
				</button>
			)}
		</div>
	);
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;

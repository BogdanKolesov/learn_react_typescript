import React, { FC, useState } from 'react';

export enum CardVariant {
	outlined = 'outlined',
	primary = 'primary',
}

interface CardProps {
	width?: string; //Вопрос - значт, необязательный пропс
	height?: string;
	variant: CardVariant;
	onClick: (num: number) => void; //Что должга возвразать функция
}

const Card: FC<CardProps> = ({ width, height, children, variant, onClick }) => {
	const [state, setState] = useState(0);

	return (
		<div
			onClick={() => onClick(state)}
			style={{
				width,
				height,
				borderRadius: '5px',
				border: variant === CardVariant.outlined ? '2px solid black' : 'none',
				background: variant === CardVariant.primary ? 'green' : 'transparent',
			}}>
			{children}
		</div>
	);
};

export default Card;

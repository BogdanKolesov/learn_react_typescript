import React, { FC } from 'react';

export enum CardVariant {
	outlined = 'outlined',
	primary = 'primary',
}

interface CardProps {
	width?: string; //Вопрос - значт, необязательный пропс
	height?: string;
	variant: CardVariant;
	onClick: () => void; //Что должга возвразать функция
}

const Card: FC<CardProps> = ({ width, height, children, variant, onClick }) => {
	return (
		<div
			onClick={onClick}
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

import React from 'react';

interface CardProps {
	width?: string; //Вопрос - значт, необязательный пропс
	height?: string;
}

const Card: React.FC<CardProps> = ({ width, height }) => {
	return <div style={{ width, height, border: '2px solid black' }}></div>;
};

export default Card;

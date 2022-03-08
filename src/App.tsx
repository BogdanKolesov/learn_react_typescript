import React from 'react';
import Card, { CardVariant } from './components/Card';

function App() {
	return (
		<div>
			<Card
				onClick={num => console.log('clicked!', num)}
				width='200px'
				height='200px'
				variant={CardVariant.primary}>
				<button>Hello!</button>
			</Card>
		</div>
	);
}

export default App;

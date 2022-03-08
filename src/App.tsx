import React from 'react';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';
import { IUser } from './types/types';

function App() {
	const users: IUser[] = [
		{
			id: 1,
			name: 'Bogdan',
			email: 'bogdan_kolesov@bk.ru',
			adress: {
				city: 'Saint-Petersburg',
				street: 'Borovaya',
				zipcode: '12321',
			},
		},
	];
	return (
		<div>
			<Card
				onClick={num => console.log('clicked!', num)}
				width='200px'
				height='200px'
				variant={CardVariant.primary}>
				<button>Hello!</button>
			</Card>
			<UserList users={users} />
		</div>
	);
}

export default App;

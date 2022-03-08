import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';
import { IUser } from './types/types';

function App() {
	const [users, setUsers] = useState<IUser[]>([]);

	useEffect(() => {
		fetchUsers();
	}, []);

	async function fetchUsers() {
		try {
			const response = await axios.get<IUser[]>(
				'https://jsonplaceholder.typicode.com/users'
			);
			setUsers(response.data);
		} catch (e) {
			alert(e);
		}
	}

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

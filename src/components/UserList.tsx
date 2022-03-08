import React, { FC } from 'react';
import { IUser } from '../types/types';

interface UserListProps {
	users: IUser[];
}

const UserList: FC<UserListProps> = ({ users }) => {
	return (
		<>
			{users.map(user => (
				<div
					key={user.id}
					style={{ margin: 5, padding: 15, border: '1px solid black' }}>
					{user.id}. {user.name} проживает в городе {user.adress.city} на улице{' '}
					{user.adress.street}
				</div>
			))}
		</>
	);
};

export default UserList;

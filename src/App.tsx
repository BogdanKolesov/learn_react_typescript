import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserPage from './components/UserPage';
import TodosPage from './components/TodosPage';
import { NavLink } from 'react-router-dom';
import UserItemPage from './components/UserItemPage';

function App() {
	return (
		<BrowserRouter>
			<div>
				<div>
					<NavLink to='/users'>Пользователи</NavLink>
					<NavLink to='/todos'>Список дел</NavLink>
				</div>
				<Routes>
					<Route path='/users' element={<UserPage />} />
					<Route path='/todos' element={<TodosPage />} />
					<Route path='/user/:id' element={<UserItemPage />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;

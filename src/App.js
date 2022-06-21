import React from 'react';
import ProfileApp from './profileApp';
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const Header = () => (
	<div>
		<Link to='/'>home</Link><br />
		<Link to='/profile/'>Profile</Link>
	</div >
)

const HomePage = () => <h1>Home Page</h1>;

export default () => {
	return (
		<BrowserRouter>
			<Header />

			<hr/>

			<Routes>
				<Route path='' element={<HomePage />} />
				<Route path='/profile/*' element={<ProfileApp basename="/profile" />} />
			</Routes>
			{/* Conatiner <br/> */}

			{/* <ProfileApp />  */}

		</BrowserRouter>
	)
}
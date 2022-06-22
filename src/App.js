import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Navbar } from './components/navbar';
import { Container } from './components/ui/layout';
import { AppRoutes } from './routes';
import './assets/styles/globals.css';

export default function App({className}){
	return (
		<div className={className}>
			<BrowserRouter>
				<Navbar />
				<Container style={{paddingTop: 20}}>
					<AppRoutes />
				</Container>
			</BrowserRouter>
		</div>
	)
}
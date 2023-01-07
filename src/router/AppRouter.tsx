import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import GlobalStyle from '../styles/global';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import LandingPage from '../components/LandingPage';

const AppRouter: React.FC = () => {
	return (
		<Router>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<NavBar />
				<Routes>
					<Route path='*' element={<LandingPage />} />
				</Routes>
				<Footer />
			</ThemeProvider>
		</Router>
	);
};
export default AppRouter;

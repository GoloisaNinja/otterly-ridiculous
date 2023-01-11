import React from 'react';
import { PageWrapper } from '../../components/PageWrapper';

const GamesPage: React.FC = () => {
	return (
		<PageWrapper padding={''}>
			<h1 style={{ color: 'white' }}>Games Page</h1>
			<a href='/games/1'>one way or the otter</a>
		</PageWrapper>
	);
};
export default GamesPage;

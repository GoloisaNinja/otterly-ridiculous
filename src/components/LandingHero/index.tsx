import React, { useEffect, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import OtterSrc from '../../assets/waving.webp';
import { Button } from '../Button';
import {
	HeroWrapper,
	HeroText,
	HeroSubText,
	HeroContentWrapper,
	OtterWrapper,
	OuterWrapper,
	InnerWrapper,
	InfoBoxWrapper,
	InfoBox,
	HeroInfo,
	ButtonWrapper,
} from './styles';
import TypeWriter from '../../helpers/TypeWriter';

const OtterImg = styled.img`
	width: 20rem;
	margin-right: 1.2rem;
`;

const LandingHero: React.FC = () => {
	const theme = useContext(ThemeContext);
	const iBox1Txt: string = `> We know several things...
1: Otters are amazeballs
2: History can be kinda dry
3: Old school text adventure games
never get old
4: The way queue is spelled is dumb`;

	const iBox2Txt: string = `> So what is Otterly all about?
Fun text adventure games 
featuring otters
Completely non-informative and absurd
Not at all real...or is it?
Witty and otterly ridiculous`;

	const heroText: string = 'otterly ridiculous';

	useEffect(() => {
		if (document !== undefined) {
			const el = document.getElementById('heroText');
			if (el !== null) {
				TypeWriter(heroText, el);
			}
		}
	}, []);
	return (
		<HeroWrapper>
			<OuterWrapper>
				<HeroText id='heroText'></HeroText>
				<HeroSubText>history</HeroSubText>
			</OuterWrapper>
			<HeroContentWrapper>
				<InnerWrapper>
					<OtterWrapper>
						<OtterImg src={OtterSrc} />
						<p>oh hai...</p>
					</OtterWrapper>
					<InfoBoxWrapper>
						<InfoBox>
							<HeroInfo>{iBox1Txt}</HeroInfo>
						</InfoBox>
						<InfoBox>
							<HeroInfo>{iBox2Txt}</HeroInfo>
						</InfoBox>
					</InfoBoxWrapper>
				</InnerWrapper>
				<ButtonWrapper>
					<Button color={theme.button_purple}>browse games</Button>
					<Button color='#fff'>about us</Button>
				</ButtonWrapper>
			</HeroContentWrapper>
		</HeroWrapper>
	);
};
export default LandingHero;

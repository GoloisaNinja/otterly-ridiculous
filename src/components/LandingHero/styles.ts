import styled, { keyframes } from 'styled-components';
import { BasicDivWrapper } from '../BasicDivWrapper';

const blink = keyframes`
  0% { opacity: 1};
  100% { opacity: 0};
`;
const fadeIn = keyframes`
  0% { opacity: 0};
  100% { opacity: 1};
`;

export const HeroWrapper = styled(BasicDivWrapper)`
	margin-top: 7.5rem;
`;
export const OuterWrapper = styled.div`
	padding: 3rem 0 5rem 0;
	line-height: 1;
	width: 100%;
`;

export const OtterWrapper = styled.div`
	display: flex;
	> p {
		background: #fff;
		border-radius: 3rem;
		align-self: flex-start;
		padding: 2.5rem;
		font-size: 2.2rem;
		font-weight: 600;
		color: #000000;
		margin-left: -4rem;
		min-width: 135px;
		display: none;
		@media (max-width: 50rem) {
			display: block;
		}
		@media (min-width: 1000px) {
			display: block;
		}
	}
	@media (max-width: 50rem) {
		justify-content: center;
	}
`;

export const HeroText = styled.h1`
	font-size: 6rem;
	color: #fff;
	line-height: 1.2;
	&::after {
		content: '_';
		margin-left: 0.5rem;
		font-weight: 300;
		animation-name: ${blink};
		animation-iteration-count: 5;
		animation-duration: 1s;
		animation-timing-function: linear;
	}
	@media (max-width: 592px) {
		height: 14.4rem;
	}
	@media (min-width: 1000px) {
		font-size: 8rem;
	}
`;
export const HeroSubText = styled.h2`
	font-family: 'Caveat', cursive;
	font-size: 5.5rem;
	color: #fff;
	text-shadow: 0 0 5px #fff, 0 0 10px #d84dff, 0 0 15px #d84dff,
		0 0 20px #d84dff, 0 0 25px #d84dff, 0 0 35px #d84dff, 0 0 40px #d84dff;
	animation-name: ${fadeIn};
	animation-delay: 2.5s;
	animation-duration: 1.4s;
	animation-fill-mode: backwards;
	@media (min-width: 1000px) {
		font-size: 7rem;
	}
`;
export const HeroContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;
export const InnerWrapper = styled.div`
	display: flex;
	align-items: stretch;
	width: 100%;
	@media (max-width: 50rem) {
		flex-direction: column;
	}
`;
export const InfoBoxWrapper = styled.div`
	display: grid;
	grid-gap: 3rem;
	grid-template-areas: 'a b';
	@media (max-width: 35rem) {
		grid-template-areas:
			'a'
			'b';
	}
	@media (min-width: 1000px) {
		margin-left: 4rem;
	}
`;
export const InfoBox = styled.div`
	border: 1px solid #fff;
	background-color: black;
	border-radius: 5px;
	padding: 2rem;
`;
export const HeroInfo = styled.p`
	font-size: 1.4rem;
	color: #eee;
	white-space: pre-wrap;
	@media (min-width: 1000px) {
		font-size: 1.7rem;
	}
`;

export const ButtonWrapper = styled.div`
	display: flex;
	justify-content: left;
	width: 100%;
	margin-top: 6rem;
	> button:last-child {
		margin-left: 3rem;
	}
`;

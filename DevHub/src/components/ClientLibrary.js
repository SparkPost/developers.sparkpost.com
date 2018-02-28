import React from 'React'
//import Img from 'gatsby-image'
import Styled from 'styled-components'
import {grayscale} from '../utils/colors'

const Wrapper = Styled.div`
	border: 1px solid ${grayscale('light')};
	height: 75px;
	padding: 8px 12px;
	margin: 6px 0;
	line-height: 56px;
`;

export default (props) => (
	<Wrapper>
		{props.title}
	</Wrapper>
)
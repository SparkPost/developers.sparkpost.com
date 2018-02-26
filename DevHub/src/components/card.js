import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	border-top: 6px solid ${props => props.color};
	height: 120px;
	background-color: white;
	padding: 0 22px;
	margin: 12px 0;
`;

export default (props) => (
	<Wrapper color={props.color}>
		<h2>{props.title}</h2>
		<p>{props.children}</p>
	</Wrapper>
)